import React from 'react';
import { Route, Link } from 'react-router-dom';

// use{...} for

class CountryDetails extends React.Component {
  componentWillReceiveProps(props) {
    console.log(props);
    let cca3 = props.match.params.cca3;
    console.log(cca3);
  }
  render() {
    return (
      <div className="col-7">
        <h1>France</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30% ' }}>Capital</td>
              <td>Paris</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                551695 km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  <li>
                    <Link href="/AND">Andorra</Link>
                  </li>
                  <li>
                    <Link href="/BEL">Belgium</Link>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
