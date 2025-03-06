// import { createAsyncThunk } from "@reduxjs/toolkit";
// import * as apis from "../apis";

// export const getCategories = createAsyncThunk(
//   "app/categories",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await apis.apiGetCategories();
       
//       if (!res.success) {
//         return rejectWithValue({
//           message: res.message || "Failed to fetch categories",
//         });
//       }

//       return res.data.productCategories 
//     } catch (error) {
//       return rejectWithValue({
//         message: error.response?.res?.message || "Something went wrong",
//         status: error.response?.status || 500,
//       });
//     }
//   }
// );
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as apis from "../apis";

export const getCategories = createAsyncThunk(
  "app/categories",
  async (data, { rejectWithValue }) => {
    const response = await apis.apiGetCategories();
    if (!response.data.success) return rejectWithValue({
                message: "Something went wrong",
                status: 500,
              });
    return response.data.productCategories;
  }
);

