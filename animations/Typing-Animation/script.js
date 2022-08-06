const textArea = document.querySelector('.text-area');

const typeText = (name) => {
    let step = 0
    let atualName = name.split('');

    const timer = setInterval(() => {
        textArea.innerHTML += atualName[step];
        step++

        if(step >= name.length) clearInterval(timer);
    }, 250);
};
typeText('Thiago Silva')