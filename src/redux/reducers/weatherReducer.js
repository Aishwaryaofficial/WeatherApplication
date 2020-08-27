import * as AppConstant from '../../util/AppConstant';

const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case AppConstant.RECEIVE_API_DATA:
      return action.payload;
    default:
      return state;
  }
};
 
export default weatherReducer;

