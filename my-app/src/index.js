import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

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
      </div>
    );
  }
};

ReactDOM.render(<Etusivu />, document.getElementById('etusivu'));

const LeffaArray = (props) => {
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

const HaeKaikki = function() {
    const [leffat, setLeffat] = useState(null)
    useEffect(() => {
      fetch("http://localhost:3001/api/getall")
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data.leffat);
        setLeffat(data.leffat)
      });
    }, [])

    return (
      <>
        {
          leffat ? 
            <LeffaArray leffat={leffat} />
            : <div>Leffoja ei löydy...</div>
        }
      </>
    )
  }


ReactDOM.render(<HaeKaikki />, document.getElementById('kaikki'));

