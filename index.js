let input = document.getElementById('input');
let output = document.getElementById('output');
let button = document.getElementById('button');

button.addEventListener('click',()=>{
    alert('버튼클릭');
})

input.addEventListener('input', () => {
    output.textContent = input.value;
})