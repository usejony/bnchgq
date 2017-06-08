import { combineReducers } from 'redux';

const loginInfo = {
  logined: false,
  data: {
    tel: 15971057587
  },
}
const logined = (state = loginInfo,action) => {
  switch(action.type) {
    case 'LOGOUT': 
      return state;
    case 'LOGIN':
      return Object.assign({},state,{
        logined: true,
        data: action.data
      });
    default:
      return state;
  }
}

// const records = (state,action) => {
//   switch(action.type) {
//     case ''
//   }
// }

export default combineReducers({
  logined
});