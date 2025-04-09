const datos = document.getElementById('datos');
const nombreDeLiga = document.querySelector('.nombre__de__liga__cont');
const nombreLiga = document.querySelector('.nombre__liga');
const loader = document.querySelector('.loader');
const loaderdos = document.querySelector('.loaderdos');
const loadertres = document.querySelector('.loadertres');
const loadercuatro = document.querySelector('.loadercuatro');
const sinPartidosCont = document.querySelector('.sin__partidos__cont');
const noPartidosDark = document.querySelector('.no-partidos-dark')
const url = 'https://api-football-proxy.nicolas1999dt.workers.dev';



const futbol = async () => {
    try{
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();
            console.log(data.response)

            setTimeout(() =>{
                loader.style.display = 'none';
            }, 1900);

            let ac = '';

            //SI EL ARRAY ESTA VACIO SE EJECUTA ESTO
            if(data.response.length === 0){
                sinPartidosCont.style.display = 'flex';
                return; //Evita que el forEach se ejecute innecesariamente.
            }

            data.response.forEach(dat => {
                const imagenLocal = dat.teams.home.logo === '' ? '../img/logo__web.svg' : dat.teams.home.logo ;
                const imagenVisita = dat.teams.away.logo === '' ? '../img/logo__web.svg' : dat.teams.away.logo;


                dat.league ?
                    
                        ac += `
                            <div class="resultado__pg">
                        
                                <div class="contenedor__curso">
                                    <p class="curso">EN CURSO</p>
                                    <img src="../img/vivo.svg" alt="circulo vivo" class="vivo">
                                </div>       
                                <div class="equipos__logos">
                                    <img src="${imagenLocal }" alt="logo local" class="logo__local" onerror="this.onerror=null; this.src='../img/logo__web.svg';">
                                    <img src="${imagenVisita}" alt="logo visita" class="logo__visita"  onerror="this.onerror=null; this.src='../img/logo__web.svg';">
                                </div>
                    
                                <div class="local__cont">
                                    <p class="local__nombre">${dat.teams.home.name}</p>
                                    <p class="local__resultado">${dat.goals.home}</p>
                                </div>
                    
                                <div class="visita__cont">
                                    <p class="visita__nombre">${dat.teams.away.name}</p>
                                    <p class="visita__resultado">${dat.goals.away}</p>
                                </div>

                                <div class="contenedor__liga">
                                    <p class="liga">${dat.league.name}</p>
                                </div>

                                
                            </div>  
                        
                        `       
                :
                console.log('No hay equipos disponibles');
   });
       datos.innerHTML = ac; 
    }

    catch (error){
        console.error('error: ', error)
    }
}

futbol();


