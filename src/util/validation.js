const validateStrings = (string) => {
    const regex = new RegExp("^[A-Za-z Ññ]+$");
    return regex.test(string);
};

// Función para validar la longitud de una cadena
const validateStgLength = (stg, minLength, maxLength) => {
    if (stg.length < minLength) {
        return `El valor debe tener al menos ${minLength} caracteres.`;
    } else if (stg.length > maxLength) {
        return `El valor debe tener no más de ${maxLength} caracteres.`;
    } else {
        return true;
    }
};

// Función para validar números positivos
const validatePositiveNumber = num => num >= 0;

// Función para validar números enteros
const validateInt = num => Number.isInteger(parseInt(num));

// Función para validar el formulario
function validarFormulario(values) {
    const errores = {};

    // Validar longitud y contenido del campo nombre
    const nombreError = validateStgLength(values.name, 3, 50);
    if (nombreError !== true) {
        errores.name = nombreError;
    } else if (!validateStrings(values.name)) {
        errores.name = 'El nombre solo puede contener letras y espacios';
    }

    // Validar longitud y contenido del campo marca
    const brandError = validateStgLength(values.brand, 3, 50);
    if (brandError !== true) {
        errores.brand = brandError;
    } else if (!validateStrings(values.brand)) {
        errores.brand = 'La marca solo puede contener letras y espacios';
    }

    // Validar longitud y contenido del campo categoría
    const categoryError = validateStgLength(values.category, 3, 50);
    if (categoryError !== true) {
        errores.category = categoryError;
    } else if (!validateStrings(values.category)) {
        errores.category = 'La categoría solo puede contener letras y espacios';
    }

    // Validar longitud del campo descripción corta
    const shortDescError = validateStgLength(values.shortDesc, 5, 100);
    if (shortDescError !== true) {
        errores.shortDesc = shortDescError;
    }

    // Validar si el precio es un número positivo
    if (!validatePositiveNumber(values.price)) {
        errores.price = 'El precio debe ser un número positivo';
    }

    // Validar si el stock es un número positivo
    if (!validatePositiveNumber(values.stock)) {
        errores.stock = 'El stock debe ser un número positivo';
    }

    // Validar si la edad desde es un número entero
    if (!validateInt(values.ageFrom)) {
        errores.ageFrom = 'La edad desde debe ser un número entero';
    }

    // Validar si la edad hasta es un número entero
    if (!validateInt(values.ageTo)) {
        errores.ageTo = 'La edad hasta debe ser un número entero';
    }

    // Resto de validaciones...

    return errores;
}

// Función para mostrar alerta con los errores
function mostrarErrores(errores, inputProps) {
    let mensaje = 'Por favor corrija los siguientes errores:\n\n';
    for (let key in errores) {
        const inputLabel = inputProps[key] ? inputProps[key].inputLabel : key;
        mensaje += `${errores[key]} en ${inputLabel}\n`;
    }
    alert(mensaje);
}

// Función para mostrar alerta de producto cargado
function mostrarProductoCargado() {
    alert('Producto cargado');
}

export { validarFormulario, mostrarErrores, mostrarProductoCargado };