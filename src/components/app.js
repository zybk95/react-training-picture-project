import React, { Component } from 'react'
import SearchBar from './searchBar/searchBar.js'
import axios from 'axios'
import './app.scss'
import ImageList from './image/imageList.js'

class App extends Component {

  state = {
    resimler: []
  }
  onSearchImageYY = async (aranan) => {
    const gelenDeger = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: aranan
      },
      headers: {
        Authorization: 'Client-ID a471266a3cb230c6d628773ff8afe95c06022e9b0ad828fbd6b95175ce685008'
      }
    })

    this.setState({
      resimler: gelenDeger.data.results
    });

    // console.log(gelenDeger.data.results);

  }

  render() {
    return (
      <div className="app-conteiner">
        <SearchBar onSearchImageXX={this.onSearchImageYY} />
        <ImageList images={this.state.resimler} />
      </div>
    );
  }
}
export default App;