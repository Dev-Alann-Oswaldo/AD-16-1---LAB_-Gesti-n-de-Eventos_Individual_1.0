function infoEnlaces() {
    // Seleccionamos todos los enlaces (etiquetas <a>) de la página
    const enlaces = document.getElementsByTagName("a");
    // O también: const enlaces = document.querySelectorAll("a");

    const totalEnlaces = enlaces.length;

    if (totalEnlaces > 0) {
        const primerEnlace = enlaces[0].href;
        const ultimoEnlace = enlaces[totalEnlaces - 1].href;

        alert(
            `Total de enlaces: ${totalEnlaces}\n` +
            `Primer enlace: ${primerEnlace}\n` +
            `Último enlace: ${ultimoEnlace}`
        );
    } else {
        alert("No se encontraron enlaces en esta página.");
    }
}