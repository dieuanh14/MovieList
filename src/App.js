import logo from "./logo.svg";
import 'flowbite';
import styles from './css/App.css';
import { Button } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { Navbar } from "flowbite-react";
import Nav from "./components/Nav";
import MainComponent from "./components/MainComponent"
function App() {
  return (
    <div className="App">
      <MainComponent/>
    </div>
  );
}

export default App;
