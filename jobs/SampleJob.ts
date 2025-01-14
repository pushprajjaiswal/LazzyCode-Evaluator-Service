import { Job } from 'bullmq';

import { IJob } from '../types/bullMqJobDefinition';

export  default class SampleJob implements IJob {  
    name: string;
    payload: Record<string, unknown>;
    constructor(payload: Record<string, unknown>) {
        this.name = this.constructor.name;
        this.payload = payload;
    }

    handle = () => {
        console.log("Handler of Job is called");
    };

    failed = (job?: Job) => {
        console.log('Job failed');
        if(job) {
            console.log(job.id);
        }
    };
}
