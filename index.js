let input = document.getElementById('input');
let output = document.getElementById('output')
input.addEventListener('input', () => {
    output.textContent = input.value;
})