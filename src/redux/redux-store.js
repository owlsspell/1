import cardReduser from "./card-reduser";
const { combineReducers, createStore } = require("redux");

const redusers = combineReducers({ cardReduser: cardReduser });

const store = createStore(redusers);

export default store;
