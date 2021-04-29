import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

/*
function HaeJSON() {
  const [leffat, setLeffat] = useState([]);
  const HaeLeffat = () => {
    fetch('./leffat.json')
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(leffaJSON) {
      console.log(leffaJSON);
      setLeffat(leffaJSON)
    });
  }
  useEffect(() => {
    HaeLeffat();
  }, []);

  return (
    <div className="leffat">
      {leffat && leffat.length > 0 && leffat.map((item, i) => <p key={i}>{item.about}</p>)}
    </div>
  )
}

export default HaeJSON;

ReactDOM.render(<HaeJSON />, document.getElementById('kaikki'));
*/

/*
import data from './leffat.json';

const leffaJSON = data.map((data) => {
  return (
    <ul>
      <li key={data.id}>{data.nimi}</li>
      <li>{data.ohjaaja}</li>
    </ul>
  )
})

class HaeKaikki extends React.Component {
  render() {
    return 
  }
}

ReactDOM.render(<HaeKaikki />, document.getElementById('kaikki'));
*/


import leffat from './leffat.json';


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


/*
function leffaArray(props) {
  const {data} = props;

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>
            {item.nimi} ({item.ohjaaja})
          </li>
        ))}
      </ul>
    </div>
  )
};
*/

/*
class Etusivu extends React.Component {
  render() {
    return (
      <div>
        <h1>Tervetuloa!</h1>
        <form>
          <div className="form-group">
            <label>Hae tiettyä elokuvaa:</label>
            <input
              type="search"
              className="form-control"
              placeholder="Syötä nimi (esim. Avatar)"
            />
            <div className="form-group">
              <button type="submit" className="btn">Hae</button>
              <button type="button" className="btn">Hae kaikki elokuvat</button>
            </div>
          </div>
        </form>
        <div id='elokuvat'>
          <LeffaArray data={leffat} />
        </div>
      </div>
    );
  }
};
//<LeffaArray data={leffat} />
*/

class EtusivuKo extends React.Component {
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

ReactDOM.render(<EtusivuKo />, document.getElementById('etusivu'));

/*
function HaeKaikki() {
  const [leffat, setLeffat] = useState([])
  fetch("http://localhost:3001/api/getall")
    .then((leffat) => {
      return leffat.json();
    })
    .then((data) => {
      console.log(data);
      const items = data;

      setLeffat(items);
    });
};

const LeffaArray = (props) => {
  const {data} = props;

  return (
    <div>
      <table>
        <thead>
          <tr key={props.id}>
            <th scope="col">Nimi</th>
            <th scope="col">Ohjaaja</th>
            <th scope="col">Julkaisuvuosi</th>
            <th scope="col">Genre</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr>
              <td key={i}>{item.nimi}</td>
              <td>{item.ohjaaja}</td>
              <td>{item.jvuosi}</td>
              <td>{item.genre}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const handleClick = (event) => {
  event.preventDefault();
  
  HaeKaikki();
}
*/