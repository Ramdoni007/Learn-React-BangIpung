import React, { Component } from "react";
import "./css/Produk.css";

class Produk extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stock: this.props.stock,
      sub: "Beli",
      status: "Tersedia",
      disabled: false,
    };
  }

  ButtonBeli = () => {
    this.setState({
      stock: this.state.stock - 1,
    });

    if (this.state.stock === 1) {
      this.setState({
        status: "Habis",
        disabled: true,
      });
    }
  };

  render() {
    return (
      <div className="box-stock">
        <h2>{this.props.nama}</h2>
        <img
          src="https://i.pcmag.com/imagery/reviews/0227QDT3xYwn3xEOpyiJpNU-1..1574212824.jpg"
          width="300"
        />
        <p>{this.props.harga}</p>
        <p>{this.state.stock}</p>
        <button
          className="btn-click"
          onClick={this.ButtonBeli}
          disabled={this.state.disabled}
        >
          Beli Lah Hayu!!!
        </button>
        <p>{this.state.status}</p>
      </div>
    );
  }
}

export default Produk;
