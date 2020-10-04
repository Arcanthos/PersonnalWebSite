const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-links li');


    burger.addEventListener('click',()=>{
        //ToggleNav
        nav.classList.toggle('nav-active');
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation ='';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 0.6}s`;
            }
        })
        //Burger Animation
        burger.classList.toggle('toggle');
    });


}



const cardHover = ()=>{
    const cards = document.querySelectorAll('.card');
    const rows = document.querySelectorAll('.skills-row');


            cards.forEach((card, index) =>{


                card.addEventListener('click',()=>{

                    const row = card.parentElement;
                    let content = card.querySelector('.card-content');

                    //toggle old active card
                    cards.forEach((card)=>{
                        if (card.classList.contains('card-active')){
                            card.classList.toggle('card-active');
                            let content = card.querySelector('.card-content');
                            content.style.display ="none";
                        }

                    })

                    card.classList.toggle('card-active');
                    content.style.display ="flex"
                    content.style.position="relative"

                    //resetRows
                    rows.forEach((row) =>{
                        row.style.gridTemplateColumns =`1fr 1fr 1fr`
                    })

                    //update row gridTemplateColumns and grow card
                    if (index === 0 || index === 3){
                        row.style.gridTemplateColumns =`3fr 1fr 1fr`
                    }
                    else if (index === 1 || index === 4){
                        row.style.gridTemplateColumns =`1fr 3fr 1fr`
                    }
                    else {
                        row.style.gridTemplateColumns =`1fr 1fr 3fr`
                    }
                })
            })
}
navSlide();
cardHover();

