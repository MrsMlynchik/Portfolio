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
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1INpfS1gH6axuZo2qEt6Z43MhRf2t-N2QgxqCqILrfFM/edit?usp=sharing'}>My CV</Button>
    </LeftSection>
  </Section>
  </>
);

export default Hero;
