import { getProfile } from '../../actionsTypes';

export default (state, { type, payload }) => {
    console.log('payload reducer', payload);
 
  switch (type) {
    case getProfile.GET_PROFILE_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
      case getProfile.GET_PROFILE_END:
        return {
          ...state,
          loading: false,
        };
        case getProfile.GET_PROFILE_SUCCESS:
      return {
        ...state,
        payload,
        loading: false,
      };
    case getProfile.GET_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        message: payload,
        errors: {
          ...payload.errors,
        },
      };
    default:
      return state;
  }
};
