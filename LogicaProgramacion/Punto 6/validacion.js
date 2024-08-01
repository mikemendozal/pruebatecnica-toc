const readline = require('readline');

function validatePassword(password, confirmPassword, name, lastName) {
    if (password.length < 12) {
        return 'La contraseña debe tener al menos 12 caracteres.';
    } else if (!/[A-Z]/.test(password) || !/\d/.test(password) || !/[@$!%*?&]/.test(password)) {
        return 'La contraseña debe cumplir con los siguientes requisitos: debe tener al menos 1 letra mayúscula, 1 número y 1 caracter especial.';
    } else if (new RegExp(`^${name}$|^${lastName}$`, 'i').test(password)) {
        return 'La contraseña no puede ser igual a su nombre o apellidos.';
    } else if (password !== confirmPassword) {
        return 'La confirmación de contraseña no coincide con la contraseña diligenciada.';
    }

    return true;
}

function validateEmail(email) {
    //Posicion de .
    let pos= email.indexOf('.');

    if (email.includes('@') && email.includes('.') ) {
        
        if(email.indexOf('co') > pos || email.indexOf('com') > pos || email.indexOf('es') > pos){ {
                return true;
        }
        
        }else{
            return "La ubicación del dominio debe ir despues del .";
        }

    }else{
        return "No tiene @ ni .";
    }
}
        
  


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingresa tu nombre: ', (name) => {
    rl.question('Ingresa tus apellidos: ', (lastName) => {
        rl.question('Ingresa tu correo: ', (email) => {
            rl.question('Ingresa tu contraseña: ', (password) => {
                rl.question('Confirma tu contraseña: ', (confirmPassword) => {
                    const resultPass = validatePassword(password, confirmPassword, name, lastName);
                    const resultEmail = validateEmail(email);

                    if(resultEmail === true){
                        console.log('Email es valido.');
                    }else{
                        console.log("Email es invalido "+resultEmail);
                    }

                    if(resultPass === true){
                        console.log('La contraseña es válida.');
                    }else{
                        console.log("contraseña es invalida "+resultPass);
                    }
                    rl.close();
                });
            });
        });
    });
});