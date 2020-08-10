import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { DemoController } from './controllers/demo-controller';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';

export class DemoServer extends Server {

    private readonly SERVER_START_MSG = 'Demo server started on port: ';
    private readonly DEV_MSG = 'Express Server is running in development mode. ' +
        'No front-end content is being served.';

    constructor() {
        super(true);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
        super.addControllers(new DemoController());
        // Point to front-end code
        if (process.env.NODE_ENV !== 'production') {
            // cinfo('Starting server in development mode');
            const msg = this.DEV_MSG + process.env.EXPRESS_PORT;
            this.app.get('*', (req, res) => res.send(msg));
        }
    }

    /*
    private setupControllers(): void {
        const ctlrInstances = [];
        for (const name in controllers) {
            if (controllers.hasOwnProperty(name)) {
                let Controller = (controllers as any)[name];
                ctlrInstances.push(new Controller());
            }
        }
        super.addControllers(ctlrInstances);
    }
    */

    public start(port: number): void {
        this.app.listen(port, () => {
            Logger.Imp(this.SERVER_START_MSG + port);
        });
    }
}

export default DemoServer;