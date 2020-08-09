import { profile as initialState } from '../../store/initialState';
import profileReducer from './profile';

export default (state = initialState, action) => ({
  ...state,
  ...profileReducer(state, action),
});
