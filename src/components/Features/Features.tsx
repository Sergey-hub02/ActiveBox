import "./styles/Features.css";

import icon1 from "./imgs/feature-1.png";
import icon2 from "./imgs/feature-2.png";
import icon3 from "./imgs/feature-3.png";
import icon4 from "./imgs/feature-4.png";
import icon5 from "./imgs/feature-5.png";
import icon6 from "./imgs/feature-6.png";

import { Container } from "../Container/Container";
import { FlexContainer } from "../FlexContainer/FlexContainer";
import { Feature } from "../Feature/Feature";


export const Features: React.FC<{}> = () => {
  return (
    <div className="Features">
      <Container>
        <FlexContainer wrap>
          <Feature icon={icon1} title="Easily Customized" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae quae, vel alias esse harum dignissimos numquam." />
          <Feature icon={icon2} title="Resonsive Ready" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae quae, vel alias esse harum dignissimos numquam." />
          <Feature icon={icon3} title="Modern Design" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae quae, vel alias esse harum dignissimos numquam." />
          <Feature icon={icon4} title="Clean Code" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae quae, vel alias esse harum dignissimos numquam." />
          <Feature icon={icon5} title="Ready To Ship" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae quae, vel alias esse harum dignissimos numquam." />
          <Feature icon={icon6} title="Download For Free" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro vitae quae, vel alias esse harum dignissimos numquam." />
        </FlexContainer>
      </Container>
    </div>
  );
}
