import "./imgs/intro.jpg";
import "./styles/Intro.css";

import { Button } from "../Button/Button";
import { Container } from "../Container/Container";


export const Intro: React.FC<{}> = () => {
  return (
    <div className="Intro">
      <Container>
        <div className="Intro__Text">
          <h1 className="Intro__Title">Your favorite one page multi purpose template</h1>
          <p className="Intro__Description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas nisi asperiores, blanditiis at in cum quidem libero!</p>
        </div>

        <Button>Find out more</Button>
      </Container>
    </div>
  );
}
