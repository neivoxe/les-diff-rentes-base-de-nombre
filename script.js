script.js

JavaScript décimal

function convertBinaryToHexadecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const hexadecimalOutput = document.getElementById("hexadecimalOutput");

    if (binaryInput === "") {
        alert("Veuillez entrer un nombre binaire.");
        return;
    }

    if (!/^[01]+$/.test(binaryInput)) {
        alert("Veuillez entrer un nombre binaire valide (0 ou 1).");
        return;
    }

    const decimal = parseInt(binaryInput, 2);
    decimalOutput.textContent = decimal;
}

function convertDecimalToHexadecimal() {
    const decimalInput = document.getElementById("decimalInput").value;
    const hexadecimalOutput = document.getElementById("hexadecimalOutput");

    if (hexInput === "") {
        alert("Veuillez entrer un nombre héxadécimal.");
        return;
    }

    if (!/^[0-9A-Fa-f]+$/.test(hexInput)) {
        alert("Veuillez entrer un nombre héxadécimal valide (0-9, A-F).");
        return;
    }

    const decimal = parseInt(hexInput, 16);
    hexDecimalOutput.textContent = decimal;
}

