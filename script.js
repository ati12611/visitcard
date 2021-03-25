let headerBurger = document.querySelector('.header_burger');
        let headerMenu = document.querySelector('.header_menu');
let body = document.querySelector('body');
        

        headerBurger.addEventListener('click', function(){
            headerMenu.classList.toggle('active');
            headerBurger.classList.toggle('active');
            body.classList.toggle('lock');
            
        }
        );

