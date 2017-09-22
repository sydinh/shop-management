import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';
import styled from 'styled-components';
import { FormatDate } from 'helpers/FormatDate';

const Img = styled.img`
  max-width: 100px;
  height: auto;
`;

const TableData = styled.td`
  width: 20rem;
  word-break: break-all;
`;

const ProductItems = props => {
  const { createdAt } = props;

  return(
    <tr>
      <td className="text-center">{ props.productNo + 1 }</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <TableData>{props.description}</TableData>
      <td>
        {
          props.image
            ? <Img src={`${props.image}`} alt={`${props.name}`} />
            : <p>No image</p>
        }
      </td>
      <td>{ FormatDate(createdAt) }</td>
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
