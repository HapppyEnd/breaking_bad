import { configureStore } from '@reduxjs/toolkit';
import backetSlice from './features/backetSlice';

const store = configureStore({
    reducer: {
        backet: backetSlice
    }
});

export default store;