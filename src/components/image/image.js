import React, { Component } from 'react'

class Image extends Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    this.state = {
      spanDegeri: 1
    }
  }


  componentDidMount() {
    this.myRef.current.addEventListener('load', () => {
      const spanDegeri = Math.round(this.myRef.current.height / 5) + 3;
      this.setState({
        spanDegeri
      });
    })
  }


  render() {
    const { resim } = this.props;
    const { spanDegeri } = this.state;
    return (
      <a href={resim.links.download} style={{ gridRowEnd: `span ${spanDegeri}` }}>
        <img ref={this.myRef} alt={resim.desciription} src={resim.urls.small} />
      </a>
    );
    // return (
    //   <img src={require('../../../common/assets/network-inactive.png')}
    //     onMouseOver={this.src = require('../../../common/assets/network.png')}
    //     onMouseOut={this.src = require('../../../common/assets/network-inactive.png')}
    //   />
    // );
  }
}

export default Image;