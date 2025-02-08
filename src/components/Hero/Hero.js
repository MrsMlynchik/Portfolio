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
      <p>Hi! I'm Tanya, a Full-Stack Developer passionate about transforming ideas into dynamic and user-friendly digital experiences that make a real impact. </p>
      </SectionText>
      <Button onClick={() => window.location = 'https://docs.google.com/document/d/1INpfS1gH6axuZo2qEt6Z43MhRf2t-N2QgxqCqILrfFM/edit?usp=sharing'}>Learn More</Button>
    </LeftSection>
  </Section>
  </>
);

export default Hero;