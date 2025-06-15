import {partidos} from './partidos-mdc.js'

const d = document;
const container__fixture = d.querySelector('.mdc_scroll');


partidos.forEach(partido => {

const card = d.createElement('div');
card.classList.add('card__partidosmdc')
    
    card.innerHTML = `
    
                    <div class="escudos__cont">
                        <div class="local__mdc">
                            <img src="${partido.escudoLocal}" alt="escudo mdc local" class="local__mdc__img">
                            <p class="local__mdc__text">${partido.local}</p>
                        </div>
                        <div class="vs__mdc"><p class="vs__text">VS</p></div>
                        <div class="visitante__mdc">
                            <img src="${partido.escudoVisitante}" alt="escudo mdc visitante" class="visitante__mdc__img">
                            <p class="visitante__mdc__text">${partido.visitante}</p>
                        </div>
                    </div>
                    <div class="fecha__mdc__cont">
                        <p class="fecha__text">${partido.fecha} ${partido.hora} ${partido.ciudad}</p>
                    </div>  
    
    `;

    container__fixture.appendChild(card)

});