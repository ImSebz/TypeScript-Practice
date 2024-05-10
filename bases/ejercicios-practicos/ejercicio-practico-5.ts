(() => {
    // Crear interfaces

    interface Auto {
        encender: boolean,
        velocidadMaxima: number,
        acelear(): void
    }

    // Cree una interfaz para validar el auto (el valor enviado por parametro)
    const conducirBatimovil = (auto: Auto): void => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelear();
    }

    const batimovil: Auto = {
        encender: false,
        velocidadMaxima: 0,
        acelear() {
            console.log("...... gogogo!!!");
        }
    }

    // Cree una interfaz con que permita utilizar el siguiente objeto
    // utilizando propiedades opcionales

    interface Guason {
        reir?: boolean,
        comer?: boolean,
        llorar?: boolean
    }

    const guason: Guason = {
        reir: true,
        comer: true,
        llorar: false
    }

    const reir = (guason: Guason): void => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    }

    // reir(guason);


    // Cree una interfaz para la siguiente funcion

    interface CiudadGotica {
        (ciudadanos: string[]): number;
    }

    const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
        return ciudadanos.length;
    }

    // console.log(ciudadGotica(["Mujer Maravilla", "Acuaman", "San", "Flash"]));

    // Cree una interfaz que obligue crear una clase
    // con las siguientes propiedades y metodos

    /*
      propiedades:
        - nombre
        - edad
        - sexo
        - estadoCivil
        - imprimirBio(): void // en consola una breve descripcion.
    */

    interface PersonaInterface {
        nombre: string,
        edad: number,
        sexo: string,
        estadoCivil: string,
        imprimirBio(): void
    }


    class Persona implements PersonaInterface {

        public nombre: string;
        public edad: number;
        public sexo: string;
        public estadoCivil: string;

        imprimirBio() {
            console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
        }
    }

    const persona = new Persona();
    persona.nombre = "Bruce Wayne";
    persona.edad = 35;
    persona.sexo = "Masculino";
    persona.estadoCivil = "Soltero";

    // persona.imprimirBio();

})();