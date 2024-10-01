import * as api from '../../API/mainCatalog';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { MainCatalogResponse, SecondaryCatalogResponse } from '../../API/mainCatalog';
// Define the types for the data and return values

interface AddMainCatalogData {
  name: string;
}
interface AddSecondaryCatalogData {
  name: string;
  openFolderId: string | null;
}

interface ErrorResponse {
    status: number;
    message: string;
  }


  export const fetchMainCatalog = createAsyncThunk<
  MainCatalogResponse[], 
  void, 
  { rejectValue: ErrorResponse, state: RootState, dispatch: AppDispatch }
>(
  'mainCatalog/fetch',
  async (_, { rejectWithValue }) => {
    try {
    
      const result: MainCatalogResponse[] = await api.getMainCatalog();
      console.log("result", result);

      if (!result) {
        // Якщо результат null, повертаємо помилку
        console.log("null");
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

export const fetchSecondaryCatalog = createAsyncThunk<
SecondaryCatalogResponse[], 
string | null, 
{ rejectValue: ErrorResponse, state: RootState, dispatch: AppDispatch }
>(
'secondaryCatalog/fetch',
async (data, { rejectWithValue }) => {
  try {
  console.log("data", data)
    const result: SecondaryCatalogResponse[] = await api.getSecondaryCatalog(data);
    console.log("result", result);

    if (!result) {
      // Якщо результат null, повертаємо помилку
      console.log("null");
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

export const addMainCatalog = createAsyncThunk<MainCatalogResponse, AddMainCatalogData, { rejectValue: string }>(
  'mainCatalog/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addMainCatalog(data);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSecondaryCatalog = createAsyncThunk<SecondaryCatalogResponse, AddSecondaryCatalogData, { rejectValue: string }>(
  'secondaryCatalog/add',
  async (data, { rejectWithValue }) => {
    try {
      console.log("data", data)
      const result = await api.addSecondaryCatalog(data);
      return result;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

