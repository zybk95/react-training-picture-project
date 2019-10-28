import React, { Component } from 'react'
import './searchBar.scss'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      aranan: ''
    }
    this.inputChange = this.inputChange.bind(this);
  }


  inputChange(eventX) {
    // console.log(eventX.target.value);
    this.setState({
      aranan: eventX.target.value
    });
    //this.searchImage(); bu fonksiyonu da burada çağırıp biraz bekletirek çalıştırırsak hemen arama yapabilir...
  }

  searchImage() {
    console.log("search image fonksiyonu");
  }

  render() {
    return (
      <div className="search-conteiner ui icon input">
        <input
          type="text"
          placeholder="Ara..."
          value={this.state.aranan}
          onChange={this.inputChange}
          //onChange={this.inputChange.bind(this)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.searchImage();
            }
          }}
        />

        <button className="ui icon button"
          onClick={this.searchImage}>
          <i className="search icon"></i>
        </button>

      </div>
    );
  }
}

export default SearchBar;
