function myFunction() {
    var x = document.getElementById("myForm").elements.namedItem("fname").value; // Usamos 'var' aquí
    let saludo = "Hola, " + x + "!"; // Usamos 'let' aquí
    const demoElement = document.getElementById("demo"); // Usamos 'const' aquí
    demoElement.innerHTML = saludo;
}
