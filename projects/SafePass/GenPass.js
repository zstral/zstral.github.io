function genPass(size) {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    for (let i = 0; i < size; i++) {
        const randIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randIndex);
    }
    return password;
}

document.getElementById("generate").addEventListener("click", () => {

    const size = parseInt(document.getElementById("length").value);

    if (size >= 4 && size <= 32) {
        const safePass = genPass(size);
        document.getElementById("password").value = safePass;
    }
    else {
        alert("Por favor, ingresa una longitud entre 4 y 32 caracteres.");
    }
});