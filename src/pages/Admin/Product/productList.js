import 'pages/Admin/Product/productList.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@blueprintjs/core';

const ProductList = props => {
  const { createdAt } = props;
  const createdAtTime = Date(createdAt);
  const date = new Date(createdAtTime);
  const dateTime = `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()} ${date.getHours()} : ${date.getMinutes()} : ${date.getMilliseconds()}`;

  return(
    <tr>
      <td className="text-center">{props.productNo}</td>
      <td>{props.name}</td>
      <td>{props.price}</td>
      <td>{props.description}</td>
      <td><img src={`${props.image}`} alt={`${props.name}`} /></td>
      <td>{ dateTime }</td>
      <td>
        <Link to="/" role="button" className="pt-button pt-intent-primary" tabIndex="0">
          <Icon iconName="edit" iconSize="inherit" />
          Edit
        </Link>
        &nbsp;
        <Link to="/" role="button" className="pt-button pt-intent-danger" tabIndex="0">
          <Icon iconName="delete" iconSize="inherit" />
          Delete
        </Link>
      </td>
    </tr>
  );

};

export default ProductList;
