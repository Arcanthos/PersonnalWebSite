const colorSwap = () => {
    const background = document.querySelector('.maintenance-title')
    const funButton = document.querySelector('.button-fun');
    const caractere = "ABCDEF0123456789";


    funButton.addEventListener('click',()=>{
        let colorValue = "#";
        for (let i = 0; i < 6; i++) {
            colorValue += caractere.charAt(Math.floor(Math.random() * caractere.length));
        }
        console.log(colorValue);
        background.style.backgroundColor = colorValue;
    })

}

colorSwap();