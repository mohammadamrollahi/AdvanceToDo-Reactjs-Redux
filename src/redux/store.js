import {applyMiddleware,createStore} from 'redux'
import logger from 'redux-logger';
import rootreduser from "./rootreduser"
const middleware=[logger]
export default createStore(rootreduser,
    applyMiddleware(...middleware))