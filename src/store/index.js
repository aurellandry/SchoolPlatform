import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice';
import registerReducer from './reducers/registerSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});

export default store;