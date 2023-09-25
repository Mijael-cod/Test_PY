const multiplyButton = document.getElementById('multiply-button');
const resultRow1 = document.getElementById('result-row1');
const resultRow1_2 = document.getElementById('result-row1_2');
const resultRow2 = document.getElementById('result-row2');
const resultRow2_2 = document.getElementById('result-row2_2');

multiplyButton.addEventListener('click', () => {

    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);

    const b11 = parseFloat(document.getElementById('b11').value);
    const b12 = parseFloat(document.getElementById('b12').value);
    const b21 = parseFloat(document.getElementById('b21').value);
    const b22 = parseFloat(document.getElementById('b22').value);

    if (isNaN(a11) || isNaN(a12) || isNaN(a21) || isNaN(a22) || isNaN(b11) || isNaN(b12) || isNaN(b21) || isNaN(b22)) {
        alert('Por favor, ingrese valores en todas las celdas antes de realizar la multiplicación.');
        return;
    }

    const resultA = a11 * b11 + a12 * b21;
    const resultB = a11 * b12 + a12 * b22;
    const resultC = a21 * b11 + a22 * b21;
    const resultD = a21 * b12 + a22 * b22;

    resultRow1.textContent = `${resultA}`;
    resultRow1_2.textContent = `${resultB}`;
    resultRow2.textContent = `${resultC}`;
    resultRow2_2.textContent = `${resultD}`;
});