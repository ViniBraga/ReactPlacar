import React from 'react';

import PlacarContainer from './PlacarContainer.js';

let dados = {
    partida: {
        estadio: "Arena do Grêmio",
        data: "01/06/2016",
        horario: "19h",
    },
    casa: {
        nome: "Grêmio",
    },
    visitante: {
        nome: "Internacional",
    }
};

export default class App extends React.Component {
    render() {
        //return  <PlacarContainer partida={dados.partida} 
        //            casa = {dados.casa}
        //            visitante = {dados.visitante} />;
        return <PlacarContainer {...dados} tempo={92}/>;
    }
}

// React.PropTypes.any,
// React.PropTypes.array,
// React.PropTypes.bool,
// React.PropTypes.func,
// React.PropTypes.number,
// React.PropTypes.object,
// React.PropTypes.string,
// React.PropTypes.instanceOf(Partida),
// React.PropTypes.oneOf(['Grêmio','Internacional'])
// React.PropTypes.oneOfType(['Time','Partida'])
// React.PropTypes.arrayOf(React.PropTypes.string)
// React.PropTypes.shape({
//    nome: React.PropTypes.string,
// })