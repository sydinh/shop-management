import React from 'react';
import styled from 'styled-components';

const Label = styled.label.attrs({
  className: 'pt-label',
  htmlFor: '',
})``;

const FieldLabel = props => (
  <Label>{props.text}</Label>
);

export default FieldLabel;
