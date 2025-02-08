import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes,  BoxText } from './AcomplishmentsStyles';

const data = [
  {  text: 'Curious & Determined'},
  {  text: 'Growth-Oriented', },
  {  text: 'Creative Problem Solver', },
  {  text: 'Empathetic', },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>My traits</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
