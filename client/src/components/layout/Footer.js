import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white p-5 text-center mt-5">
        Copyright &copy; {new Date().getFullYear()} Food For Earth
      </footer>
    );
  }
}

export default Footer;
