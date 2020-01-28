import React, {Component} from 'react';
import './css/App.css';
import { SemipolarLoading } from 'react-loadingg';
import Header from './Header';
import Navigation from './Navigation';
import About from './About';
import Technologies from './Technologies';
import Applications from './Applications';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        loading: true,
        active: false,
      }
  }

  componentDidMount() {
    this.handleLoading = setTimeout(() => this.setState({loading: false}), 1500);
    window.addEventListener("scroll", this.changeOpacity);
  }

  componentWillUnmount() {
    if(this.handleLoading) {
      clearInterval(this.handleLoading);
    }
    window.removeEventListener("scroll", this.changeOpacity);
  }

  changeOpacity = (props) => {
    const header = document.querySelector("header");
    let scrollPosition = window.scrollY;
    const height = header.offsetHeight;
    let calc = 1 - scrollPosition / height;

    header.style.opacity = calc;

    if (calc > 1) {
      header.style.opacity = 1;
    } else if (calc < 0) {
      header.style.opacity = 0;
    }
  }
  
  toggleHamburger = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      <>
      {this.state.loading ? <SemipolarLoading color="rgba(0,0,0,0.8)" size="large"/> : <div className="app">
          {<Navigation click={this.toggleHamburger} active={this.state.active}/>}
          {<Header opacity={this.changeOpacity}/>}
        <main className="desktop-wrapper">
          <About/>
          <Technologies/>
          <Applications/>
          <Contact/>
          <Footer/>
        </main>
      </div>}
      </>
    )
  }
}

export default App;
