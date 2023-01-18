import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";

function Hero() {
  return (
    <HeroSection>
      <HeroVideo src="./assets/Banner.mp4" autoPlay muted loop />
      <Container>
        <MainHeading>
          Delivering flexible warehousing solutions with one click!
        </MainHeading>

        <HeroText>
          A commitment to providing flexible warehousing solutions worldwide!
        </HeroText>
        <ButtonWrapper>
          <a href="https://forms.zohopublic.com/dusshyant/form/Propertywarehouselist/formperma/0qXLZodWOGZMTgJLNipdtqWbyRo25sCME3zPwrzA5LI">
            <Button>Get Started</Button>
          </a>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
}

export default Hero;
