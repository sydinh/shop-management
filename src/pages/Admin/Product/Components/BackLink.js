import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';

const Text = styled.span``;

const BackLink = () => (
  <Link to='/admin' className='pt-button' role='button' tabIndex='0'>
    <Icon iconName='step-backward' iconSize='inherit' />
    <Text>Back</Text>
  </Link>
);

export default BackLink;
