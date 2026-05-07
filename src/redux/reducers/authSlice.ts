// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { AuthInitialState } from "../../TSModels/auth";
// import {
//   handleForgotPassword,
//   handleLogin,
//   handleReApply,
//   handleRegister,
//   handleResetPassword,
// } from "../thunks/auth/auth";
// import { RootState } from "../store";

// const initialState: AuthInitialState = {
//   isLoading: false,
//   isSuccess: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     resetAuthState: (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(handleRegister.pending, (state) => {
//       state.isLoading = true;
//       state.isSuccess = false;
//     });
//     builder.addCase(
//       handleRegister.fulfilled,
//       (state, _action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       }
//     );
//     builder.addCase(handleRegister.rejected, (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//     });
//     builder.addCase(handleLogin.pending, (state) => {
//       state.isLoading = true;
//       state.isSuccess = false;
//     });
//     builder.addCase(
//       handleLogin.fulfilled,
//       (state, _action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       }
//     );
//     builder.addCase(handleLogin.rejected, (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//     });
//     builder.addCase(handleResetPassword.pending, (state) => {
//       state.isLoading = true;
//       state.isSuccess = false;
//     });
//     builder.addCase(
//       handleResetPassword.fulfilled,
//       (state, _action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       }
//     );
//     builder.addCase(handleResetPassword.rejected, (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//     });
//     builder.addCase(handleForgotPassword.pending, (state) => {
//       state.isLoading = true;
//       state.isSuccess = false;
//     });
//     builder.addCase(
//       handleForgotPassword.fulfilled,
//       (state, _action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       }
//     );
//     builder.addCase(handleForgotPassword.rejected, (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//     });
//     builder.addCase(handleReApply.pending, (state) => {
//       state.isLoading = true;
//       state.isSuccess = false;
//     });
//     builder.addCase(
//       handleReApply.fulfilled,
//       (state, _action: PayloadAction<any>) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//       }
//     );
//     builder.addCase(handleReApply.rejected, (state) => {
//       state.isLoading = false;
//       state.isSuccess = false;
//     });
//   },
// });

// // Actions
// export const authActions = authSlice.actions;

// // Selectors
// export const SelectIsSuccess = (state: RootState) => {
//   return state.auth.isSuccess;
// };
// // Reducer
// const authReducer = authSlice.reducer;
// export default authReducer;
