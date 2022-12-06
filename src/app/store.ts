import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import homeReducer from 'features/home/homeSlice';
import inmailReducer from 'features/inmail/inmailSlice';
import landingReducer from 'features/landing/landingSlice';
import staticReducer from 'features/static/staticSlice';

export const store = configureStore({
  reducer: {
    landing: landingReducer,
    auth: authReducer,
    home: homeReducer,
    inmail: inmailReducer,
    static: staticReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
