import { Position, Toaster, Intent } from '@blueprintjs/core';
import { TOAST_SUCCESSFUL, TOAST_FAILED } from 'constants/toasters';

const OurToaster = Toaster.create({
  className: 'my-toaster',
  position: Position.TOP_CENTER,
});

export const showNotificationFromToaster = (messageToaster, statusToaster) => {
  const initialToast = {
    message: messageToaster,
  };
  switch (statusToaster) {
    case TOAST_SUCCESSFUL:
      const toastSuccessful = Object.assign({}, initialToast, {
        intent: Intent.SUCCESS
      });
      return OurToaster.show(toastSuccessful);
    case TOAST_FAILED:
      const toastFailed = Object.assign({}, initialToast, {
        intent: Intent.DANGER
      });
      return OurToaster.show(toastFailed);
    default:
      return null;
  }
};
