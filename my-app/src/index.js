import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import leffat from './leffat.json';

// Luodaan komponentti, joka esittää JSON-tiedostossa olevat elokuvat taulukossa
const LeffaArray = (props) => {
  const {data} = props;

  return(
   <div>
     <table class="table table-striped">
       <thead>
         <tr>
           <th scope="col"></th>
           <th scope="col">Nimi</th>
           <th scope="col">Ohjaaja</th>
           <th scope="col">Julkaisuvuosi</th>
           <th scope="col">Genre</th>
         </tr>
       </thead>
       <tbody>
         {data.map((item, i) => (
            <tr>
              <th scope="row">{i+1}</th>
              <td>{item.nimi}</td>
              <td>{item.ohjaaja}</td>
              <td>{item.jvuosi}</td>
              <td>{item.genre}</td>
           </tr>
         ))}
       </tbody>
     </table>
   </div>
 )
};

// Komponentti, joka sisältää etusivun sisällön
class Etusivu extends React.Component {
  render() {
    return (
      <div class="tabbable">
        <ul class="nav nav-tabs">
          <li class="active"><a href="#tab1" data-toggle="tab">Etusivu</a></li>
          <li><a href="#tab2" data-toggle="tab">Kaikki elokuvat</a></li>
        </ul>
        <div class="tab-content">
          <div class="tab-pane-active" id="tab1">
            <p>Tämä sivu tulostaa elokuvia ruudulle</p>
          </div>
          <div class="tab-pane" id="tab2">
            <p><LeffaArray data={leffat} /></p> 
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Etusivu />, document.getElementById('etusivu')); // Tuodaan Etusivu-komponentti ruudulle
