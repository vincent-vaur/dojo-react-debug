import React, { Component } from 'react';

class Beers extends Component {
  constructor() {
    super();

    this.state = {
      beers: {}
    }
  }

  componentDidMount = () => {
    fetch('https://api.punkapi.com/v2/beers').then(r => r.json())
    .then(result => {
      this.setState({beer: result.data});
    })
  }

  render = () => {
    return this.state.beers.map(beer => {
      return (
        <tr key={beer.name}>
          <th scope="row">{beer.index}</th>
          <td>{beer.name}</td>
          <td>{beer.description}</td>
          <td><img src={beer.image_url} height="200px" alt={beer.index}/></td>
        </tr>
      )
    });
  }
}

export default Beers;