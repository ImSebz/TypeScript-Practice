
namespace Validations {

    export const validateText = (text: string): boolean => {

        return (text.length > 0) ? true : false;
    }

    export const validateDate = (myDate: Date): boolean => {

        return (isNaN(myDate.valueOf())) ? false : true;
    }
}

console.log(Validations.validateText("Hello"));
console.log(Validations.validateDate(new Date()));