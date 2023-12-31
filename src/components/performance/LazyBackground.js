import { Component } from "react";

class LazyBackground extends Component {
  state = { src: null };

  componentDidMount() {
    const { src } = this.props;

    const imageLoader = new Image();
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src });
    };
  }

  render() {
    return <div {...this.props} style={{ backgroundColor:this.props.color, backgroundImage: `url(${this.state.src || this.props.placeholder})` }} />;
  }
}

export default LazyBackground