import { configureStore } from "@reduxjs/tookit";
import useReducer from '../components/userSlice';
import appReducer from '../components/appSlice';



export default configureStore({
    reducer: {
        user: useReducer,
        app: appReducer,
    },
});