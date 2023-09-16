import { React } from "styled-reset";
import "./App.css"
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Form from "./components/Form/Form";
import Result from "./components/Result/Result";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Intro></Intro>
      <Form></Form>
      <Result></Result>
      <Footer></Footer>
      <Modal></Modal>
    </div>
  );
}

export default App;
