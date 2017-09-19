import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Table = styled.table.attrs({
  className: 'pt-table pt-interactive',
})`
  width: 100%;
`;

const ProductList = () => (

  <Grid>
    <Row>
      <Col md={12}>
        <Table>
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
            </tr>
            <tr>
              <td>2</td>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  </Grid>

);

export default ProductList;
