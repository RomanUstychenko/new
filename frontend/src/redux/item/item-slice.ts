import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchMainItems, fetchSecondaryItems, addMainItem, addSecondaryItem } from './item-operation';

// Тип для головного каталогу
interface MainItem {
  id: string;
  name: string;
  price: string;
  description: string;
  type: string;
  catalog: string;
  owner: string;
  }

  
  interface SecondaryItem {
    id: string;
  name: string;
  price: string;
  description: string;
  type: string;
  catalog: string;
  owner: string;
  }
  
  // Тип для початкового стану
  export interface ItemState {
    loading: boolean;
    mainItem: MainItem[];
    secondaryItem: SecondaryItem[];
    error: string | null;
  }
  


  const initialState: ItemState = {
    loading: false,
    mainItem: [],
    secondaryItem: [],
    error: null,
  };

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchMainItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMainItems.fulfilled, (state, action: PayloadAction<MainItem[]>) => {
        console.log("action.payload", action.payload)
        state.loading = false;
        state.mainItem = action.payload;
        console.log("state.mainCatalog", state.mainItem)
      })
      .addCase(fetchMainItems.rejected, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchSecondaryItems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSecondaryItems.fulfilled, (state, action: PayloadAction<SecondaryItem[]>) => {
        console.log("action.payload", action.payload)
        state.loading = false;
        state.secondaryItem = action.payload;
        console.log("state.secondaryCatalog", state.secondaryItem)
      })
      .addCase(fetchSecondaryItems.rejected, (state, { payload }: PayloadAction<any>) => {
        state.loading = false;
        state.error = payload;
      })



      .addCase(addMainItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMainItem.fulfilled, (state, action: PayloadAction<MainItem>) => {
        state.loading = false;
        state.error = null;
        state.mainItem.push(action.payload);
        
      })
      .addCase(addMainItem.rejected, (store, { payload }: PayloadAction<any>) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(addSecondaryItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addSecondaryItem.fulfilled, (state, action: PayloadAction<MainItem>) => {
        state.loading = false;
        state.error = null;
        state.secondaryItem.push(action.payload);
        
      })
      .addCase(addSecondaryItem.rejected, (store, { payload }: PayloadAction<any>) => {
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


export const itemReducer = itemSlice.reducer;