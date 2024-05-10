import powers from '../data/powers';

export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number,
    ) { }

    get power(): string{
        return powers.find(power => power.id === this.powerId)?.desc || 'No powers';
    }

}

export const PI = 3.1416;
export const myName = 'Sebastián Camargo';