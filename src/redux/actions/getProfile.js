import { getProfile } from '../actionsTypes';
import { apiAction } from '../../helpers';

export default (id) => (dispatch) =>
  dispatch(
    apiAction({
      method: 'post',
      url: `/users/getUser.php?id=${id}`,
      onStart: getProfile.GET_PROFILE_START,
      onEnd: getProfile.GET_PROFILE_END,
      onSuccess: getProfile.GET_PROFILE_SUCCESS,
      onFailure: getProfile.GET_PROFILE_FAILURE,
    }),
    console.log('form here', id),
  );
