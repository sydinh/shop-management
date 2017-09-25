import React from 'react';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';

const SectionHeading = styled.h2`
  padding-bottom: 0.625rem;
  border-bottom: 1px solid #c2c2c2;
`;

const Text = styled.span`
  padding-left: 0.9375rem;
`;

const Heading = props => (
  <SectionHeading>
    <Icon iconName={props.icon} iconSize='inherit' />
    <Text>{props.text}</Text>
  </SectionHeading>
);

export default Heading;
