export class Temperature {
    constructor(
        public readonly current: number,
        public readonly feelsLike: number,
        public readonly min: number,
        public readonly max: number
    ) {}
}
