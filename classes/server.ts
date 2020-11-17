import express from 'express';
import { SERVER_PORT } from '../global/environment';

export default class Server {

    public app: express.Application;
    public port: number; 

    constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

    start(call: Function) {
        this.app.listen( this.port, ()=> {
            console.log(`Example app listening at PORT: ${this.port}`); 
        });
    }

}