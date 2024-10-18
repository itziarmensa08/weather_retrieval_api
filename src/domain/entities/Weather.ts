import { Sun } from "../value_objects/Sun";
import { Temperature } from "../value_objects/Temperature";
import { Wind } from "../value_objects/Wind";

export class Weather {
    constructor(
        public readonly temperature: Temperature,
        public readonly humidity: number,
        public readonly pressure: number,
        public readonly wind: Wind,
        public readonly cloudCoverage: number,
        public readonly description: string,
        public readonly sun: Sun
    ) {}
}