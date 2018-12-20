import React, { Component } from 'react';
import './Sensibilisation.scss';
import Card_sensibilisation from './Card_sensibilisation';



class Sensibilistation extends Component {

  render() {
    return (
      <div>
        <div className="Sensibilisation">
          <img src="/medias/theshiftproject.png" alt="theshiftproject" className="margin" />
          <p class="line-1 anim-typewriter">"C’est à condition d’accepter les limites de </p>
          <p class="line-1 anim2-typewriter2">ce monde qu’une politique salubre sera possible."</p>
          <p class="line-1 anim3-typewriter3">Matthieu Auzanneau (Directeur / The Shift Project)</p>
        </div>
        <Card_sensibilisation />
      </div>
    );
  }
}

export default Sensibilistation;