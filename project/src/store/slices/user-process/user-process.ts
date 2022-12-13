import { createSlice } from '@reduxjs/toolkit';
import { AuthorizationStatus, NameSpace } from '../../../const';
import { UserProcess } from '../../../types/store';
import { checkAuthAction, loginAction, logoutAction } from '../../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
  isUserProcessing: false,
};

const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isUserProcessing = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isUserProcessing = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.userData = null;
        state.isUserProcessing = false;
        state.authorizationStatus = AuthorizationStatus.NonAuth;
      })
      // ------------------------------------------------------------------------
      .addCase(loginAction.pending, (state) => {
        state.isUserProcessing = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.userData = action.payload;
        state.isUserProcessing = false;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.userData = null;
        state.isUserProcessing = false;
        state.authorizationStatus = AuthorizationStatus.NonAuth;
      })
      // ------------------------------------------------------------------------
      .addCase(logoutAction.pending, (state) => {
        state.isUserProcessing = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.userData = null;
        state.isUserProcessing = false;
        state.authorizationStatus = AuthorizationStatus.NonAuth;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isUserProcessing = false;
      });
  }
});

export { userProcess };
