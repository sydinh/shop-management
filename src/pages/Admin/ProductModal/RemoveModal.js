import React from 'react';
import { Button, Dialog, Intent } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { agreeDelete } from 'dispatchers/productDispatcher';

const RemoveModal = props => {
  const { isOpen } = props.product;
  return (
    <Dialog
      iconName='delete'
      isOpen={isOpen}
      onClose={() => props.handleCloseModal()}
      title='Delete product'
    >
      <div className='pt-dialog-body'>
        Do you want to delete this product?
      </div>
      <div className='pt-dialog-footer'>
        <div className='pt-dialog-footer-actions'>
          <Button
            onClick={() => props.handleCloseModal()}
            text='Cancel'
          />
          <Button
            intent={Intent.PRIMARY}
            text='OK'
            onClick={() => props.agreeDelete()}
          />
        </div>
      </div>
    </Dialog>
  );
}

const mapStateToProps = state => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = {
  agreeDelete,
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveModal);
