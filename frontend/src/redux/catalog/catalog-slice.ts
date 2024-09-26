import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchMainCatalog, addMainCatalog } from './catalog-operation';

// // Тип для початкового стану
// interface MainCatalogState {
//   loading: boolean;
//   mainCatalog: {
//     name: string | null;
//     id: string | null;
//     owner: string | null;
//   }
//   error: string | null;
  
// }

// const initialState: MainCatalogState = {
//   loading: false,
//   mainCatalog: {
//     name: null,
//     id: null,
//     owner: null,
//         },
//   error: null,

// };
// Тип для головного каталогу
interface MainCatalog {
    name: string;
    id: string;
    owner: string;
  }
  
  // Тип для початкового стану
  export interface MainCatalogState {
    loading: boolean;
    mainCatalog: MainCatalog[];
    error: string | null;
  }
  
  const initialState: MainCatalogState = {
    loading: false,
    mainCatalog: [],
    error: null,
  };


const mainCatalogSlice = createSlice({
  name: 'mainCatalog',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchMainCatalog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Очікується, що fulfilled повертає об'єкт типу MainCatalog
      .addCase(fetchMainCatalog.fulfilled, (state, action: PayloadAction<MainCatalog[]>) => {
        console.log("action.payload", action.payload)
        state.loading = false;
        state.mainCatalog = action.payload;
        console.log("state.mainCatalog", state.mainCatalog)
      })
      .addCase(fetchMainCatalog.rejected, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(addMainCatalog.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMainCatalog.fulfilled, (state, action: PayloadAction<MainCatalog>) => {
        state.loading = false;
        state.error = null;
        state.mainCatalog.push(action.payload);
        
      })
      .addCase(addMainCatalog.rejected, (store, { payload }: PayloadAction<any>) => {
        store.loading = false;
        store.error = payload;
      })
    //   .addCase(deleteSection.pending, pendingHandler)
    //   .addCase(deleteSection.fulfilled, (store, { payload }: PayloadAction<string>) => {
    //     store.loading = false;
    //     store.sections = store.sections.filter(
    //       section => section._id !== payload
    //     );
    //     store.allSections = store.allSections.filter(
    //       section => section._id !== payload
    //     );
    //   })
    //   .addCase(deleteSection.rejected, (store, { payload }: PayloadAction<string | null>) => {
    //     store.loading = false;
    //     store.error = payload;
    //   })
    //   .addCase(updateSection.pending, pendingHandler)
    //   .addCase(updateSection.fulfilled, (store, { payload }: PayloadAction<Section>) => {
    //     store.loading = false;
    //     store.sections = store.sections.map(section =>
    //       section._id === payload._id ? payload : section
    //     );
    //   })
    //   .addCase(updateSection.rejected, (store, { payload }: PayloadAction<string | null>) => {
    //     store.loading = false;
    //     store.error = payload;
    //   })
     
  },
});


export const mainCatalogReducer = mainCatalogSlice.reducer;