export class Beehive {
    id: number;
    name: string;
    type: string;
    numberOfTheFrames: number;
    yearOfTheQueenBee: number;
    description: string;
    recomendedTemperature: number;
    recomendedHumidity: number;
    deviceId: string;

    constructor() {
        this.id = 0;
        this.name = '';
        this.type = '';
        this.numberOfTheFrames = 0;
        this.yearOfTheQueenBee = 0;
        this.description = '';
        this.recomendedTemperature = 0;
        this.recomendedHumidity = 0;
        this.deviceId = '';
    }
}