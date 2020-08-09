import {asyncStorage} from '../../../helpers'
import { loginActionsTypes } from '../../actionsTypes';

export default (state, { type, payload }) => {
  let userToken;
  let user = {};
  let profile = {};
  let orgID = 0;
  switch (type) {
    case loginActionsTypes.LOGIN_START:
      return {
        ...state,
        message: '',
        loading: true,
        errors: {},
      };
      case loginActionsTypes.LOGIN_END:
        return {
          ...state,
          loading: false,
        };
        case loginActionsTypes.LOGIN_SUCCESS:
         asyncStorage.storeData(payload)
      return {
        ...state,
        payload: JSON.stringify(payload),
        loading: false,
      };
    case loginActionsTypes.LOGIN_FAILURE:
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
