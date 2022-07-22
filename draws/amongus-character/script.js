const colorButtonModel = document.querySelector('.color-button-model');
const buttonsArea = document.querySelector('.color-buttons--area');

const mainColor = '--main-color';
const mainShadow = '--main-color-darker';

const colors = [
    {name: 'red', main: '#e11d48', darker: '#9f1239'},
    {name: 'pink', main: '#db2777', darker: '#9d174d'},
    {name: 'purple', main: '#9333ea', darker: '#86198f'},
    {name: 'blue', main: '#2563eb', darker: '#1e3a8a'},
    {name: 'green', main: '#16a34a', darker: '#166534'},
    {name: 'yellow', main: '#ca8a04', darker: '#854d0e'}
];

const changeCharacterColor = (color, shadow) => {
    document.documentElement.style.setProperty(mainColor, color);
    document.documentElement.style.setProperty(mainShadow, shadow);
};

colors.map((item) => {
    const button = document.createElement('button');
    button.classList.add('color-button-model');
    button.style.backgroundColor = item.main;
    button.addEventListener('click', () => changeCharacterColor(item.main, item.darker));

    buttonsArea.appendChild(button);

});

/*
colorButton.addEventListener('click', () => {
    document.documentElement.style.setProperty(mainColor, 'green');
});*/