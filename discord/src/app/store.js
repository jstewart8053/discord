import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../components/userSlice';
import appReducer from '../components/appSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        app: appReducer,
    },
});