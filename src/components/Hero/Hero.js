import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      <p> Hi, I'm Tanya — a Frontend Developer with a passion for building interactive, responsive web apps using React, Firebase, and Tailwind CSS. I love turning complex ideas into smooth, user-friendly digital experiences.
 </p>
      </SectionText>
      <Button onClick={() => window.location = 'https://app.enhancv.com/share/2c61a957/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'}>My CV</Button>
    </LeftSection>
  </Section>
  </>
);

export default Hero;
