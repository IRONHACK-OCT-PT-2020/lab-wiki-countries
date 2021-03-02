import React from 'react';
import { Route, Link } from 'react-router-dom';
import countries from '../countries.json';
// use{...} for

class CountryDetails extends React.Component {
  state = {
    country: {},
  };

  componentWillReceiveProps(props) {
    console.log(props);
    let cca3 = props.match.params.cca3;
    console.log(cca3);
    let country = countries.find((eachCountry) => eachCountry.cca3 === cca3);
    console.log(country);

    this.setState({
      country,
    });
  }

  render() {
    return (
      <div className="col-7">
        <h1>{this.state.country.name?.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{ width: '30% ' }}>Capital</td>
              <td>{this.state.country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {this.state.country.area}km
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
