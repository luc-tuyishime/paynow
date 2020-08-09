import { login as initialState } from '../../store/initialState';
import loginReducer from './login';

export default (state = initialState, action) => ({
  ...state,
  ...loginReducer(state, action),
});
