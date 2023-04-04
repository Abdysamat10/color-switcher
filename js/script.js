const COLORS = [
    {
        hex: '#FFBA08',
        rgb: 'rgb(255, 186, 8)',
        text: '#5a21cd',
    },
    {
        hex: '#DC2F02',
        rgb: 'rgb(220, 47, 2)',
        text: '#fff',
    },
    {
        hex: '#1D3557',
        rgb: 'rgb(29, 53, 87)',
        text: '#fff',
    },
    {
        hex: '#00B4D8',
        rgb: 'rgb(0, 180, 216)',
        text: '#e63946',
    },
    {
        hex: '#ffffff',
        rgb: 'rgb(255, 255, 255)',
        text: '#000000',
    },
    {
        hex: '#9D4EDD',
        rgb: 'rgb(157, 78, 221)',
        text: '#95d5b2',
    },
    {
        hex: '#38B000',
        rgb: 'rgb(56, 176, 0)',
        text: '#450920',
    },
    {
        hex: '#9C6644',
        rgb: 'rgb(156, 102, 68)',
        text: '#023e7d',
    },
    {
        hex: '#7371FC',
        rgb: 'rgb(115, 113, 252)',
        text: '#80FFDB',
    },
    {
        hex: '#4CC9F0',
        rgb: 'rgb(76, 201, 240)',
        text: '#480ca8',
    },
    {
        hex: '#000000',
        rgb: 'rgb(0, 0, 0)',
        text: '#ffffff',
    },
];

const span = document.querySelectorAll('.span');
const container = document.querySelector('#container');
const colorName = document.querySelector('.name');
const buttonHEX = document.querySelector('[data-type="hex"]');
const buttonRGB = document.querySelector('[data-type="rgb"]');
const buttonColor = document.querySelector('[data-type="color"]');

let currentColorFormat = 'hex';

buttonColor.addEventListener('click', () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    colorName.innerHTML = randomColor[currentColorFormat];
    colorName.style.color = randomColor.text;
    buttonHEX.style.color = randomColor.text;
    buttonRGB.style.color = randomColor.text;
    buttonColor.style.color = randomColor.text;
    container.style.backgroundColor = randomColor[currentColorFormat];
    span.forEach((e) => (e.style.backgroundColor = randomColor.text));
    colorName.addEventListener('click', () =>
        navigator.clipboard.writeText(randomColor[currentColorFormat])
    );
    buttonHEX.addEventListener('click', () => {
        currentColorFormat = 'hex';
        colorName.innerHTML = randomColor.hex;
    });
    buttonRGB.addEventListener('click', () => {
        currentColorFormat = 'rgb';
        colorName.innerHTML = randomColor.rgb;
    });
});
