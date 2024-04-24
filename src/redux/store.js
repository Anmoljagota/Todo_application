import { legacy_createStore } from "redux";
import reducer from "./reducer";
const store = legacy_createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENTSION__ && window.__REDUX_DEVTOOLS_EXTENTSION__()
);

export default store;
