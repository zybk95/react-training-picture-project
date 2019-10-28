import React, { Component } from 'react'
import './searchBar.scss'

class SearchBar extends Component {

  //burası yapıcı metot constructor...state de global değişkenleri tutabiliyoruz...
  constructor(props) {
    super(props);
    this.state = {
      aranan: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.searchImage = this.searchImage.bind(this);
  }

  //inputta herhangi bir değişiklik olduğu zaman çalışacak olab metodumuz 
  inputChange(eventX) {
    // console.log(eventX.target.value);
    this.setState({
      aranan: eventX.target.value
    });
    //this.searchImage(); bu fonksiyonu da burada çağırıp biraz bekletirek çalıştırırsak hemen arama yapabilir...
  }

  //Enter'a basıldığı zaman veya butona tıklandığı zaman çalışacak olan metot...
  searchImage() {
    console.log("search image fonksiyonu: " + this.state.aranan);
    this.props.onSearchImageXX(this.state.aranan);
  }

  //olmazsa olmaz olmazımız render...
  render() {
    return (
      <div className="search-conteiner ui icon input">
        <input
          type="text"
          placeholder="Ara..."
          value={this.state.aranan}
          // inpudun onChange metodunda inputChange metodunu çalıştırıyoruz oda 
          //stade de ki aranan kelimesini güncelliyor...
          onChange={this.inputChange}

          //onChange={this.inputChange.bind(this)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              this.searchImage();
            }
          }}
        />

        {/* butonun onClick metodunda serachImage() metodunu çalıştırıyoruz.. */}
        <button className="ui icon button"
          onClick={this.searchImage}>
          <i className="search icon"></i>
        </button>

      </div>
    );
  }
}

export default SearchBar;
