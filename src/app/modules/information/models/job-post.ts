import { JobDescription } from './job-description';
export class JobPost {
    _id?: string;
    title?: string;
    imgSrc?: string;
    jobDescription?: JobDescription;
    entryDate?: Date;
    expireDate?: Date;
    posteredBy?: string;
    status?: boolean;
}
