import React from 'react';
import styled from 'styled-components';

const FetchingBox = styled.div`
  margin-top: 50px;
`;

class FetchingFailed extends React.Component {
  render() {
    return (
      <FetchingBox>
        <div className="pt-callout pt-intent-danger">
          <h5>Error</h5>
          Request failed with status code 404
        </div>
      </FetchingBox>
    )

  }
}

export default FetchingFailed;
