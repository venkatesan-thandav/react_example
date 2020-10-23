import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "react-bootstrap/Button";
import ChildCompoent from "./childComponent";
import { render } from "@testing-library/react";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {date: new Date()};
  // }
  // Welcome(props){
  //   return props.id;
  // }
  // render() {
  //   return (
  //     <div className="App">
  //       <Welcome id="Sara" />
  //       <Welcome id="Cahal" />
  //       <Welcome id="Edite" />
  // Inside do something
  //     </div>
  //   );

  // }
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div >
        <Header />
        <section className="mxy-20">
          <div className="row">
            <div className="col-md-4">
              <p class="h1"> paragraph</p>
            </div>
            <div className="col-md-4">

              <Button variant="primary" className="btn btn-primary">Primary</Button>
            </div>
          </div>
          <h1>Hello, world!</h1>

          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </section>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      {" "}
      <header>
        <div className="navbar header-bg-color">
          <div className="nav-bar-container">
            <div className="row reset-row">
              <div className="col-md-4">
                Header 
                </div>
            </div>
            <section className="bg-iimg">
         <div className="grid">
         <div className="grid_item"> </div>
         </div>
            </section>
          </div>
        </div>
      </header>{" "}
    </div>
  );
};
export default App;
