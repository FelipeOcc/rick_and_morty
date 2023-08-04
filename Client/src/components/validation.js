const validation = (userData) => {
    const errors = {};
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)){
        errors.email = 'El usuario debe ser un email'
    }
    if(!userData.email){
        errors.email = 'El nombre de usuario no puede estar vacio'
    }
    if(userData.email.length > 35){
        errors.email = 'El nombre de usuario no puede tener mas de 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = 'El password debe tener al menos un numero'
    }
    if(userData.password.length < 6 && userData.password.length > 10){
        errors.password = 'El password debe tener una longitud de entre 6 y 10 caracteres'
    }
    return errors;

}

export default validation;
// const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
// const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

// export function validate(userData) {
//     let errors = {}
//     if(!regexEmail.test(userData.username))
//     errors.username = "El usuario debe ser un e-mail"
//     else if(!userData.username)
//     errors.username = "El nombre de usuario no puede estar vacio"
//     else if(userData.username.length > 35)
//     errors.username = "El nombre de usuario no puede tener mas de 35 caracteres"
//     else if(!regexPassword.test(userData.password))
//     errors.password = "Debe tener al menos un numero"
//     else if(userData.password.lenght < 6 && userData.password.length > 10)
//     errors.password = "La contraseña debe tener una longitud de entre 6 y 10 caracteres"

//     return errors;

// }