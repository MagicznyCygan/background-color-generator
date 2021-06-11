const section = document.getElementById('section');
const colorSpan = document.getElementById('color-code');

const letters = ['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F'];

let random = '';

const generateColor = () =>{
    let color = '';
    for(let i = 0; i < 6; i++){
        random = letters[Math.floor(Math.random() * letters.length)];
        color += random;
    }
    section.style.backgroundColor = '#' + color;
    colorSpan.textContent = '#' + color;
}

section.addEventListener('click', generateColor);
generateColor();



