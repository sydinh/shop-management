import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 100px;
  height: auto;
`;

const ProductItems = props => {
  const { createdAt } = props;
  const createdAtTime = Date(createdAt);
  const date = new Date(createdAtTime);
  const dateTime = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`;

  return(
    <tr>
      <td className="text-center">{ props.productNo + 1 }</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <td>
        {
          props.image
            ? <Img src={`${props.image}`} alt={`${props.name}`} />
            : <p>No image</p>
        }
      </td>
      <td>{ dateTime }</td>
      <td className="text-center">
        <Link
          to="/"
          role="button"
          className="pt-button pt-intent-success"
          tabIndex="0"
        >
          <Icon iconName="edit" iconSize="inherit" />
          Edit
        </Link>
        &nbsp;
        <Link
          to="/"
          role="button"
          className="pt-button pt-intent-danger"
          tabIndex="0"
        >
          <Icon iconName="delete" iconSize="inherit" />
          Delete
        </Link>
      </td>
    </tr>
  );

};

ProductItems.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  price: PropTypes.number,
  description: PropTypes.string,
  createdAt: PropTypes.number,
};

export default ProductItems;
