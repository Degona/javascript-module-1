
function bornYear (age){
    let actyear= new Date().getFullYear();
    return actyear-age;
}

function IAM(name, age){
    return `Hola! Mi nombre es ${name}, tengo ${age} años y nací en el año ${bornYear(age)}.`;
}

 let resultado= IAM("Dania", 33);
 console.log(resultado);
