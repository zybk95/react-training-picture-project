import React, { Component } from 'react'
import SearchBar from './searchBar/searchBar.js'
import axios from 'axios'
import './app.scss'

class App extends Component {


  onSearchImageYY(aranan) {
    console.log("appden bildiri:" + aranan);

    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: aranan
      },
      headers: {
        Authorization: 'Client-ID a471266a3cb230c6d628773ff8afe95c06022e9b0ad828fbd6b95175ce685008'
      }
    }).then((result) => {
      console.log(result)
    })
  }

  render() {
    return (
      <div className="app-conteiner">
        <SearchBar onSearchImageXX={this.onSearchImageYY} />
      </div>
    );
  }
}
export default App;