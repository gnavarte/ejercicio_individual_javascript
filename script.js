// Ejercicio 1: Variables con datos personales
const nombre = "Juan";
const apellido = "Pérez";
const fechaNacimiento = "1990-05-15"; // Formato AAAA-MM-DD

document.addEventListener("DOMContentLoaded", () => {
    // Mostrar mensaje de bienvenida con datos personales al cargar la página
    const bienvenida = document.getElementById("bienvenida");
    bienvenida.innerHTML = `<h2>Hola ${nombre} ${apellido}, ¡bienvenido a nuestra página web!</h2>`;

    // Ejercicio 2 y 3: Formulario interactivo
    const form = document.getElementById("userForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombreInput = document.getElementById("nombre").value;
        const apellidoInput = document.getElementById("apellido").value;
        const fechaNacimientoInput = document.getElementById("fechaNacimiento").value;

        // Mostrar mensaje de bienvenida personalizado
        bienvenida.innerHTML = `<h2>Hola ${nombreInput} ${apellidoInput}, ¡bienvenido a nuestra página web!</h2>`;

        // Calcular los días vividos
        const fechaNacimientoDate = new Date(fechaNacimientoInput);
        const hoy = new Date();
        const diferencia = hoy - fechaNacimientoDate;
        const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

        // Mostrar el resultado
        const resultado = document.getElementById("resultado");
        resultado.innerHTML = `<p>Has vivido aproximadamente ${diasVividos} días desde que naciste.</p>`;
    });
});
