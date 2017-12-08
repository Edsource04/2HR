export class Message{
    _id?: string;
    sender?: string;
    recipient?: string;
    date?: Date;
    body?: string;
    isRead?: boolean = false;
}