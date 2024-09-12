document.getElementById('buttonText').addEventListener('click', function() {
    const inputValue = document.getElementById('inputText').value;

    if (inputValue.trim() !== '') {
        localStorage.setItem('datoGuardado', inputValue);
        alert('Dato guardado correctamente en localStorage');
    } else {
        alert('Por favor, ingresa un dato válido.');
    }
});