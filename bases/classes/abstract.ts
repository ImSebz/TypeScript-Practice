(()=> {

    //La clase abstracta no se puede instanciar pero me sirve para heredar de ella y crear nuevas clases con sus propiedades y metodos
    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ){}
    }


    class Xmen extends Mutante {

        salvarMundo() {
            return 'Mundo salvado!';
        }


    }
    class Villian extends Mutante {

        destruirMundo() {
            return 'Mundo destruido!';
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Erik Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.destruirMundo());



    const printName = ( character: Mutante ) => {
        // console.log( character.realName );
    }

    printName( wolverine );
    printName( magneto );


})();