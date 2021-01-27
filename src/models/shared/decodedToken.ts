export class DecodedToken {
    email: string;
    role: string;
    sub: string;

    constructor() {
        this.email = "";
        this.role = "";
        this.sub = "";
    }
}