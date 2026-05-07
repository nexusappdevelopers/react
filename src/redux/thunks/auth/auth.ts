// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { ApiService } from "../../../utilities/api.service";
// import {
//   encryptData,
//   normalFailMsg,
//   successMsg,
// } from "../../../utilities/utils";
// import { LoginFormPayload, RegisterFormPayload } from "../../../TSModels/auth";

// export const handleRegister = createAsyncThunk(
//   "api/handleRegister",
//   async (payload: RegisterFormPayload, thunkAPI) => {
//     try {
//       const response = await ApiService.postData(
//         "auth/register-organization",
//         payload
//       );
//       const data = response.data;
//       if (response.status) {
//         successMsg(data.message);
//       }
//       return data;
//     } catch (error: any) {
//       normalFailMsg(error.response.data.message);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
// export const handleLogin = createAsyncThunk(
//   "api/handleLogin",
//   async (payload: LoginFormPayload, thunkAPI) => {
//     try {
//       const response = await ApiService.postData("auth/login", payload);
//       const data = response.data;

//       if (response.status) {
//         successMsg(data.message);
//         encryptData("trackHireToken", data?.data?.token);
//         encryptData("trackHireUser", data?.data);
//       }
//       return data;
//     } catch (error: any) {
//       const serializedError = {
//         message: error.message,
//         code: error.code,
//         status: error.response?.status,
//         data: error.response?.data,
//       };
//       normalFailMsg(error?.response?.data?.message);
//       return thunkAPI.rejectWithValue(serializedError);
//     }
//   }
// );
// export const handleResetPassword = createAsyncThunk(
//   "api/handleResetPassword",
//   async (payload: any, thunkAPI) => {
//     try {
//       const response = await ApiService.postData(
//         "auth/reset-password",
//         payload
//       );
//       const data = response.data;
//       if (response.status) {
//         successMsg(data.message);
//       }
//       return data;
//     } catch (error: any) {
//       const serializedError = {
//         message: error.message,
//         code: error.code,
//         status: error.response?.status,
//         data: error.response?.data,
//       };
//       normalFailMsg(error?.response?.data?.message);
//       return thunkAPI.rejectWithValue(serializedError);
//     }
//   }
// );
// export const handleForgotPassword = createAsyncThunk(
//   "api/handleForgotPassword",
//   async (payload: any, thunkAPI) => {
//     try {
//       const response = await ApiService.postData(
//         "auth/forgot-password",
//         payload
//       );
//       const data = response.data;
//       if (response.status) {
//         successMsg(data.message);
//       }
//       return data;
//     } catch (error: any) {
//       const serializedError = {
//         message: error.message,
//         code: error.code,
//         status: error.response?.status,
//         data: error.response?.data,
//       };
//       normalFailMsg(error?.response?.data?.message);
//       return thunkAPI.rejectWithValue(serializedError);
//     }
//   }
// );
// export const handleReApply = createAsyncThunk(
//   "api/handleReApply",
//   async (payload: RegisterFormPayload, thunkAPI) => {
//     try {
//       const response = await ApiService.postData("auth/re-apply", payload);
//       const data = response.data;
//       if (response.status) {
//         successMsg(data.message);
//       }
//       return data;
//     } catch (error: any) {
//       normalFailMsg(error.response.data.message);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );
