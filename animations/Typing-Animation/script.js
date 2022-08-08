const textArea = document.querySelector('.text-area');

const typeText = (name) => {
    let step = 0
    let atualName = name.split('');

    const timer = setInterval(() => {
        textArea.innerHTML += atualName[step];
        step++
        console.log(step, name.length)
        if(step >= name.length) clearInterval(timer);
    }, 250);
};

setInterval(() => {
    textArea.innerHTML = ''
    typeText('Thiago Silva');
}, 5000);