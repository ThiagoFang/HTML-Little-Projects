const firstColor = '--first-color';
const secondColor = '--second-color';
const thirdColor = '--third-color';

let colorNumber = 0;

const colors = [
    {firstColor: '#e45dff', secondColor: '#e33cdb', thirdColor: '#c20051'},
    {firstColor: '#ff5d5d', secondColor: '#e33c3c', thirdColor: '#c20000'},
    {firstColor: '#ffd95d', secondColor: '#e3b63c', thirdColor: '#c28e00'},
    {firstColor: '#5ddcff', secondColor: '#3c67e3', thirdColor: '#4e00c2'},
];

const changeColor = (first, second, third) => {
    document.documentElement.style.setProperty(firstColor, first);
    document.documentElement.style.setProperty(secondColor, second);
    document.documentElement.style.setProperty(thirdColor, third);
};

setInterval(() => {
    if(colorNumber < colors.length) {
        colorNumber++;
    };
    if(colorNumber === colors.length) {
        colorNumber = 0;
    }

    const first = colors[colorNumber].firstColor;
    const second = colors[colorNumber].secondColor;
    const third = colors[colorNumber].thirdColor;

    changeColor(first, second, third);
}, 5000);