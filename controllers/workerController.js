
import {Worker} from 'worker_threads';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data.json'), 'utf-8'));
export const workerThreadTest = (req, res) => {
    const worker = new Worker('C:\\Users\\phawa\\Documents\\express\\controllers\\worker-thread.js')
    let count = 0;
    worker.on('message', (result) => {
        count = result;
        res.send(`Count is ${count}`);
    })
    worker.on('error', (err) => {
        res.status(500).send({message : "Error in worker thread", error : err.message})
    })
}

export const workerDataTest = (req, res) => {
    console.log(data);
    console.log("Worker Data Test");
    res.send("Worker Data Test");
}