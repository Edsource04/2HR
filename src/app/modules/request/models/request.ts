import { User } from "../../../models/user";

export class Request {
    _id?: string;
    type?: string;
    description?: string;
    submmitedOn?: Date;
    status?: string;
    submittedBy?: User;
    attachment?: string;
    processed?: boolean;
}
