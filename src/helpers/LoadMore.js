import React from 'react';
import PropTypes from 'prop-types';

class LoadMore extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.props.loadItems);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.loadItems);
  }

  render() {
    return (
      <div onScroll={() => this.props.loadItems}>
        {this.props.children}
      </div>
    )
  }
}

LoadMore.propTypes = {
  loadItems: PropTypes.func
};

export default LoadMore;
