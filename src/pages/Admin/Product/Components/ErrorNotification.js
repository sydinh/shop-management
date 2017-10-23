import React from 'react';
import styled from 'styled-components';

const InputError = styled.p`
  color: #ff0000;
`;

const ErrorNotification = props => (
  <InputError><small>{props.text}</small></InputError>
);

export default ErrorNotification;
