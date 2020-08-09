import { loginActionsTypes } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (formData) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: '/users/login.php',
      data: {
        ...formData,
      },
      onStart: loginActionsTypes.LOGIN_START,
      onEnd: loginActionsTypes.LOGIN_END,
      onSuccess: loginActionsTypes.LOGIN_SUCCESS,
      onFailure: loginActionsTypes.LOGIN_FAILURE,
    }),
    console.log('form here', formData),
  );
