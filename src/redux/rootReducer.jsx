import { combineReducers, createStore } from 'redux';
import { GioHangReducer } from './reducers/gioHangReducer';

//store tong cho ung dung
const rootReducer = combineReducers({
    //nơi sẽ chứa các reducer cho nghiệp vụ
    GioHangReducer,

})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());