const savedData = localStorage.getItem('datoGuardado');

if (savedData) {
    document.getElementById('data').textContent = savedData;
}