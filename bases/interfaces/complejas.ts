(() => {


    interface Client {
        name: string,
        age?: number,
        adress: Adress
        getFullAdress(id: string): string;
    }

    interface Adress {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: 'Sebastian',
        age: 25,
        adress: {
            id: 125,
            zip: '10001',
            city: 'New York'
        },
        getFullAdress(id: string) {
            return `${this.adress.zip}, ${this.adress.city}`;
        }
    }

    const client2: Client = {
        name: 'Melissa',
        age: 30,
        adress: {
            id: 126,
            zip: '10002',
            city: 'New York'
        },
        getFullAdress(id: string) {
            return `${this.adress.zip}, ${this.adress.city}`;
        }
    }

})()