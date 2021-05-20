import "./styles/Header.css";
import logo from "./imgs/logo.png";

import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/Container";
import { FlexContainer } from "../FlexContainer/FlexContainer";


export const Header: React.FC<{}> = () => {
  return (
    <header className="Header">
      <Container>
        <FlexContainer alignCenter>
          <div className="Header__Logo">
            <a href="https://google.com" className="Logo">
              <img src={logo} alt="ActiveBox" />
            </a>
          </div>

          <NavBar />
        </FlexContainer>
      </Container>
    </header>
  );
}
