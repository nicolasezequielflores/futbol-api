gsap.registerPlugin(ScrollTrigger);

const d = document;

function animaciones () {

    //HEADER
    const menu = d.getElementById('menu');
    const x = d.getElementById('x');
    const nav = d.querySelector('nav');
    const ul = d.querySelector('ul');
    const header = d.querySelector('header');

    menu.addEventListener('click', () =>{
        menu.style.display = 'none';
        x.style.display = 'flex';
        nav.classList.toggle('nav__visible');
        ul.classList.toggle('ul__visible');
    })

    x.addEventListener('click', () =>{
        menu.style.display = 'flex';
        x.style.display = 'none';
        nav.classList.toggle('nav__visible').remove;
        ul.classList.toggle('ul__visible').remove;
    })

    //UCL
    const uclButton = d.getElementById('uclButton');
    const uclCont = d.querySelector('.ucl__resultados__cont');
    const arrowDownUcl = d.getElementById('arrow-down-ucl');
    const arrowUpUcl = d.getElementById('arrow-up-ucl');

    //CL
    const clButton = d.getElementById('clButton');
    const clCont = d.querySelector('.cl__resultados__cont');
    const arrowDownCl = d.getElementById('arrow-down-cl');
    const arrowUpCl = d.getElementById('arrow-up-cl');

    //PREMIER LEAGUE
    const pButton = d.getElementById('pButton');
    const pCont = d.querySelector('.premier__resultados__cont');
    const arrowDownP = d.getElementById('arrow-down-premier');
    const arrowUpP = d.getElementById('arrow-up-premier');

    //LA LIGA
    const lLButton = d.getElementById('lLButton');
    const lLCont = d.querySelector('.laliga__resultados__cont');
    const arrowDownIl = d.getElementById('arrow-down-laliga');
    const arrowUpIl = d.getElementById('arrow-up-laliga');

    //BUNDESLIGA
    const bButton = d.getElementById('bButton');
    const bCont = d.querySelector('.bundesliga__resultados__cont');
    const arrowDownB = d.getElementById('arrow-down-bundesliga');
    const arrowUpB = d.getElementById('arrow-up-bundesliga');

    //LIGA ARGENTINA
    const lAButton = d.getElementById('lAButton');
    const lACont = d.querySelector('.argentina__resultados__cont');
    const arrowDownLa = d.getElementById('arrow-down-la');
    const arrowUpLa = d.getElementById('arrow-up-la');

    //EVENTOS
    uclButton.addEventListener('click', () =>{
        uclCont.classList.toggle('premierResultadoToggle');
        arrowDownUcl.classList.toggle('down-none');
        arrowUpUcl.classList.toggle('up-flex');
    });

    
    clButton.addEventListener('click', () =>{
        clCont.classList.toggle('premierResultadoToggle');
        arrowDownCl.classList.toggle('down-none');
        arrowUpCl.classList.toggle('up-flex');
    });


    pButton.addEventListener('click', () =>{
        pCont.classList.toggle('premierResultadoToggle');
        arrowDownP.classList.toggle('down-none');
        arrowUpP.classList.toggle('up-flex');
    });

    lLButton.addEventListener('click', () =>{
        lLCont.classList.toggle('laLigaResultadoToggle');
        arrowDownIl.classList.toggle('down-none');
        arrowUpIl.classList.toggle('up-flex');
    });

    bButton.addEventListener('click', () =>{
        bCont.classList.toggle('bResultadoToggle');
        arrowDownB.classList.toggle('down-none');
        arrowUpB.classList.toggle('up-flex');
    });

    lAButton.addEventListener('click', () =>{
        lACont.classList.toggle('aResultadoToggle');
        arrowDownLa.classList.toggle('down-none');
        arrowUpLa.classList.toggle('up-flex');
    });


    //ANIMACION


    window.addEventListener('scroll', () =>{
        if(window.scrollY > 50){
            header.classList.add('header__scroll');
        }
        else{
            header.classList.remove('header__scroll');
        }
    })

    //HEADER 

    gsap.fromTo(
        '.logo',
        {
            x: -1000,
            opacity: 0,

        },
        {
            x:0,
            ease: 'power2.out',
            opacity: 1,
            duration: 1,
      
        }

    )

    gsap.fromTo(
        'nav',
        {
            x: 1000,
            opacity: 0,

        },
        {
            x:0,
            ease: 'power2.out',
            opacity: 1,
            duration: 1,
      
        }

    )

    //HERO

    gsap.fromTo(
        '.titulos',
        {
            x: -1000,
            opacity: 0,

        },
        {
            x:0,
            ease: 'power2.out',
            opacity: 1,
            duration: 1,
      
        }

    );

    //LIGAS

    gsap.fromTo(
        '.ligas__container__principal',
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.ligas__container__principal',
                start: 'top 100%',
                end: 'top 50%',
                toggleActions: 'restart none none none', // Reinicia cada vez que baja
                scrub: false, // No mantiene el efecto ligado al scroll
                once: false, // Permite que se active cada vez que reaparece
            }
        }
    );

    gsap.fromTo(
        '.resultados__datos',
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.resultados__datos',
                start: 'top 100%',
                end: 'top 50%',
                toggleActions: 'restart none none none', // Reinicia cada vez que baja
                scrub: false, // No mantiene el efecto ligado al scroll
                once: false, // Permite que se active cada vez que reaparece
            }
        }
    );

    
    gsap.fromTo(
        '.logo___footer',
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.logo___footer',
                start: 'top 100%',
                end: 'top 50%',
                toggleActions: 'restart none none none', // Reinicia cada vez que baja
                scrub: false, // No mantiene el efecto ligado al scroll
                once: false, // Permite que se active cada vez que reaparece
            }
        }
    );


    


    
    
} export default animaciones;

