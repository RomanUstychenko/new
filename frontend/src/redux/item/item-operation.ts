import * as api from '../../API/item';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import {MainItemResponse,
  //  AddMainItemData,
    AddSecondaryItemData } from '../../API/item';


// interface AddMainCatalogData {
//   name: string;
  
// }
interface ErrorResponse {
    status: number;
    message: string;
  }



export const fetchMainItems = createAsyncThunk<
MainItemResponse[], 
string | null, 
{ rejectValue: ErrorResponse, state: RootState, dispatch: AppDispatch }
>(
'mainItems/fetch',
async (data, { rejectWithValue }) => {
  try {
  // console.log("data", data)
    const result: MainItemResponse[] = await api.getMainItem(data);
    // console.log("result", result);

    if (!result) {
      // Якщо результат null, повертаємо помилку
      // console.log("null");
      return rejectWithValue({
        status: 401,
        message: 'no catalog',
      });
    }

    return result; // Повертаємо масив MainCatalog[]
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status || 500,
      message: error.message || 'Something went wrong',
    });
  }
}
);

export const fetchSecondaryItems = createAsyncThunk<
MainItemResponse[], 
string | null, 
{ rejectValue: ErrorResponse, state: RootState, dispatch: AppDispatch }
>(
'secondaryItems/fetch',
async (data, { rejectWithValue }) => {
  try {
  // console.log("data", data)
    const result: MainItemResponse[] = await api.getSecondaryItem(data);
    // console.log("result", result);

    if (!result) {
      // Якщо результат null, повертаємо помилку
      // console.log("null");
      return rejectWithValue({
        status: 401,
        message: 'no catalog',
      });
    }

    return result; // Повертаємо масив MainCatalog[]
  } catch (error: any) {
    return rejectWithValue({
      status: error.response?.status || 500,
      message: error.message || 'Something went wrong',
    });
  }
}
);

export const addMainItem = createAsyncThunk<MainItemResponse, AddSecondaryItemData, { rejectValue: string }>(
  'mainItems/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addMainItem(data);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// export const addSecondaryItem = createAsyncThunk<MainItemResponse, AddMainItemData, { rejectValue: string }>(
//   'secondaryItems/add',
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await api.addSecondaryItem(data);
//       return result;
//     } catch (error: any) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const addSecondaryItem = createAsyncThunk<MainItemResponse, AddSecondaryItemData, { rejectValue: string }>(
  'secondaryItems/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addSecondaryItem(data);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
