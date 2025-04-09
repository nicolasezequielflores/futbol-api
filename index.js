import animaciones from "./modules/animaciones.js";

document.body.classList.add('no__scroll');
window.scrollTo(0, 0);
window.addEventListener('load', () =>{
    setTimeout(() =>{
        document.body.classList.remove('no__scroll')
    }, 1000);
    setTimeout(() =>{
        animaciones();
    }, 100);

})



const d = document;
const url = 'https://api-football-proxy.nicolas1999dt.workers.dev';
const sinPartidos = d.querySelector('.sinpp');
const cardUcl = d.getElementById('uclResultado');
const cardCl = d.getElementById('clResultado');
const cardPremier = d.getElementById('premierResultado');
const cardLaLiga = d.getElementById('laLigaResultado');
const cardBundesliga = d.getElementById('bundesligaResultado');
const cardLigaArgentina = d.getElementById('ligaArgentinaResultado');


const partidos = async () => {

    try{
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json()
        console.log(data.response);
        
        let ucl= '';
        let cl = '';
        let premier = '';
        let laliga = '';
        let bundesliga = '';
        let ligargentina = '';

        const mensajeSinPartidos = `<p class="sinpp">No hay partidos en estos momentos</p>`;

        // Verifica si la respuesta está vacía
        if (data.response.length === 0) {
          cardPremier.innerHTML = mensajeSinPartidos;
          cardLaLiga.innerHTML = mensajeSinPartidos;
          cardBundesliga.innerHTML = mensajeSinPartidos;
          cardLigaArgentina.innerHTML = mensajeSinPartidos;
        }

        else{

        sinPartidos.style.display = 'none'; 

        data.response.forEach(dat => {
            //UCL
            if(dat.league.id === 2){
                ucl +=  `
                <div class="resultado__ucl">
        
                    <div class="contenedor__curso">
                        <p class="curso">EN CURSO</p>
                        <img src="./img/vivo.svg" alt="circulo vivo" class="vivo">
                    </div>       
                    <div class="equipos__logos">
                        <img src="${dat.teams.home.logo}" alt="logo local" class="logo__local">
                        <img src="${dat.teams.away.logo}" alt="logo visita" class="logo__visita">
                    </div>
        
                    <div class="local__cont">
                        <p class="local__nombre">${dat.teams.home.name}</p>
                        <p class="local__resultado">${dat.goals.home}</p>
                    </div>
        
                    <div class="visita__cont">
                        <p class="visita__nombre">${dat.teams.away.name}</p>
                        <p class="visita__resultado">${dat.goals.away}</p>
                    </div>
                    
                </div>  
                `;
            }

            //LIBERTADORES
            if(dat.league.id === 13){
                cl +=  `
                <div class="resultado__cl">
        
                    <div class="contenedor__curso">
                        <p class="curso">EN CURSO</p>
                        <img src="./img/vivo.svg" alt="circulo vivo" class="vivo">
                    </div>       
                    <div class="equipos__logos">
                        <img src="${dat.teams.home.logo}" alt="logo local" class="logo__local">
                        <img src="${dat.teams.away.logo}" alt="logo visita" class="logo__visita">
                    </div>
        
                    <div class="local__cont">
                        <p class="local__nombre">${dat.teams.home.name}</p>
                        <p class="local__resultado">${dat.goals.home}</p>
                    </div>
        
                    <div class="visita__cont">
                        <p class="visita__nombre">${dat.teams.away.name}</p>
                        <p class="visita__resultado">${dat.goals.away}</p>
                    </div>
                    
                </div>  
                
                `;
            }

            //PREMIER
            if(dat.league.id === 39){
                premier +=  `
                <div class="resultado__premier">
        
                    <div class="contenedor__curso">
                        <p class="curso">EN CURSO</p>
                        <img src="./img/vivo.svg" alt="circulo vivo" class="vivo">
                    </div>       
                    <div class="equipos__logos">
                        <img src="${dat.teams.home.logo}" alt="logo local" class="logo__local">
                        <img src="${dat.teams.away.logo}" alt="logo visita" class="logo__visita">
                    </div>
        
                    <div class="local__cont">
                        <p class="local__nombre">${dat.teams.home.name}</p>
                        <p class="local__resultado">${dat.goals.home}</p>
                    </div>
        
                    <div class="visita__cont">
                        <p class="visita__nombre">${dat.teams.away.name}</p>
                        <p class="visita__resultado">${dat.goals.away}</p>
                    </div>
                    
                </div>  
                
                `;
            }

            //LA LIGA
            if(dat.league.id === 140){
                laliga +=  `
                <div class="resultado__laliga">
        
                    <div class="contenedor__curso">
                        <p class="curso">EN CURSO</p>
                        <img src="./img/vivo.svg" alt="circulo vivo" class="vivo">
                    </div>       
                    <div class="equipos__logos">
                        <img src="${dat.teams.home.logo}" alt="logo local" class="logo__local">
                        <img src="${dat.teams.away.logo}" alt="logo visita" class="logo__visita">
                    </div>
        
                    <div class="local__cont">
                        <p class="local__nombre">${dat.teams.home.name}</p>
                        <p class="local__resultado">${dat.goals.home}</p>
                    </div>
        
                    <div class="visita__cont">
                        <p class="visita__nombre">${dat.teams.away.name}</p>
                        <p class="visita__resultado">${dat.goals.away}</p>
                    </div>          
                </div>  
                
                `;
            }

            //BUNDESLIGA
            if(dat.league.id === 78){
                bundesliga +=  `
                <div class="resultado__bundesliga">
        
                    <div class="contenedor__curso">
                        <p class="curso">EN CURSO</p>
                        <img src="./img/vivo.svg" alt="circulo vivo" class="vivo">
                    </div>       
                    <div class="equipos__logos">
                        <img src="${dat.teams.home.logo}" alt="logo local" class="logo__local">
                        <img src="${dat.teams.away.logo}" alt="logo visita" class="logo__visita">
                    </div>
        
                    <div class="local__cont">
                        <p class="local__nombre">${dat.teams.home.name}</p>
                        <p class="local__resultado">${dat.goals.home}</p>
                    </div>
        
                    <div class="visita__cont">
                        <p class="visita__nombre">${dat.teams.away.name}</p>
                        <p class="visita__resultado">${dat.goals.away}</p>
                    </div>
                    
                </div>  
                
                `;
            }

            //LIGA ARGENTINA
            if(dat.league.id === 128){
                ligargentina +=  `
                <div class="resultado__ligargentina">
        
                    <div class="contenedor__curso">
                        <p class="curso">EN CURSO</p>
                        <img src="./img/vivo.svg" alt="circulo vivo" class="vivo">
                    </div>       
                    <div class="equipos__logos">
                        <img src="${dat.teams.home.logo}" alt="logo local" class="logo__local">
                        <img src="${dat.teams.away.logo}" alt="logo visita" class="logo__visita">
                    </div>
        
                    <div class="local__cont">
                        <p class="local__nombre">${dat.teams.home.name}</p>
                        <p class="local__resultado">${dat.goals.home}</p>
                    </div>
        
                    <div class="visita__cont">
                        <p class="visita__nombre">${dat.teams.away.name}</p>
                        <p class="visita__resultado">${dat.goals.away}</p>
                    </div>
                    
                </div>  
                
                `;

            }                     

        });
        cardUcl.innerHTML = ucl;
        cardCl.innerHTML = cl;
        cardPremier.innerHTML = premier;
        cardLaLiga.innerHTML = laliga;
        cardBundesliga.innerHTML = bundesliga;
        cardLigaArgentina.innerHTML = ligargentina;
        
    }
    }

    catch(e){
        sinPartidos.style.display = 'flex';
        console.error(e);
    }



}

partidos();




