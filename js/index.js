const start = document.getElementById('startInput');
const cont = document.getElementById('continueInput');
const dog = document.getElementById('dogInput');
const indent1 = document.getElementById('indent1');
const indent2 = document.getElementById('indent2');
const result = document.getElementById('result')

indent1.hidden = true;
indent2.hidden = true;

start.addEventListener('keypress', () => {
    indent1.hidden = false;
    start.disabled = true;
})

cont.addEventListener('keypress', () => {
    indent2.hidden = false;
    cont.disabled = true;
})

dog.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;

    if (dog.value.toLowerCase() === 'yes') {
        result.innerHTML = `
            <p class="result-title">DOG DETECTED</p>
            <p>COMIDA.html granted</p>
            <p>You may proceed to lunch.</p>
        `;
    } else {
        result.innerHTML = `
            <p class="result-title red">ERROR 403 — DOG NOT FOUND</p>
            <p>COMIDA.html denied</p>
            <p>Please acquire dog and try again</p>
        `;
    }

    terminal.appendChild(result);
    dog.disabled = true;
});