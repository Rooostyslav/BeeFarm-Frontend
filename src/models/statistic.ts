export class Statistic {
    id: number;
    dateTime: Date;
    temperature: number;
    humidity: number;
    weight: number;
    location: string;

    constructor () {
        this.id = 0;
        this.dateTime = new Date();
        this.temperature = 0;
        this.humidity = 0;
        this.weight = 0;
        this.location = '';
    }
}