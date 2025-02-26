const datos = document.getElementById('datos');
const url = 'https://v3.football.api-sports.io/fixtures?live=all';

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1eeef90f0eadef8d78f27c52eb7e85c8',
		'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
	}
};

const futbol = async () => {
    try{
        
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data.response)

        data.response.forEach(dat => {

            //CARD
            const card = document.createElement('div');
            card.className = 'card'

            //LEAGUE
            const liga = document.createElement('p');
            liga.className = 'liga__name'
            liga.innerHTML = dat.league.name;

            //NAME
            const visita = document.createElement('p');
            visita.className = 'equipoHoy'
            visita.innerHTML = dat.teams.away.name;

            const local = document.createElement('p');
            local.innerHTML = dat.teams.home.name;
            local.className = 'equipoHoy'

            //LOGO
            const logoLo = document.createElement('img');
            logoLo.src = dat.teams.home.logo
            logoLo.className = 'logo'

            const logoVi = document.createElement('img');
            logoVi.src = dat.teams.away.logo
            logoVi.className = 'logo'

            
            //LEAGUE LOGO
            const leagueLogo = document.createElement('img');
            leagueLogo .src = dat.league.logo
            leagueLogo .className = 'league__logo'


            //GOLES
            const golLo = document.createElement('p');
            golLo.className = 'gol'
            golLo.innerHTML = dat.goals.home;

            const golVi = document.createElement('p');
            golVi.className = 'gol'
            golVi.innerHTML = dat.goals.away;

            const leagueCont = document.createElement('div');
            leagueCont.className = 'league__cont';

            const homeCont = document.createElement('div');
            homeCont .className = 'home__cont';

            const awayCont = document.createElement('div');
            awayCont.className = 'away__cont';

            const resultadoCont = document.createElement('div');
            resultadoCont.className = 'resultado__cont';

            const vs= document.createElement('p');
            vs.className = 'vs';
            vs.innerHTML = 'vs'

            leagueCont.appendChild(liga);
            leagueCont.appendChild(leagueLogo);
            card.appendChild(leagueCont);

            homeCont.appendChild(logoLo);
            awayCont.appendChild(logoVi);
            homeCont.appendChild(local);
            awayCont.appendChild(visita);
            card.appendChild(homeCont)
            card.appendChild(awayCont)

            resultadoCont.appendChild(golLo)
            resultadoCont.appendChild(vs)
            resultadoCont.appendChild(golVi)

            card.appendChild(resultadoCont)
            datos.appendChild(card)

        });

    }
    
    catch (error){
        console.error('error: ', error)
    }
}

futbol();





