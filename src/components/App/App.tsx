import "./styles/App.css";

import { Header } from "../Header/Header";
import { Intro } from "../Intro/Intro";
import { Features } from "../Features/Features";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Features />
    </div>
  );
}
