export class User {
    id: number;
    firstName: string;
    secondName: string;
    birthday: Date;
    email: string;
    password: string;
    role: string;

    constructor () {
        this.id = 0;
        this.firstName = '';
        this.secondName = '';
        this.birthday = new Date();
        this.email = '';
        this.password = '';
        this.role = '';
    }
}