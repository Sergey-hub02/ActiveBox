import "./styles/App.css";

import { Header } from "../Header/Header";
import { Intro } from "../Intro/Intro";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}
