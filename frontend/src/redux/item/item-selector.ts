
import { ItemState } from "./item-slice";

export const getMainItems = (state: { item: ItemState }) => state.item.mainItem;
export const getSecondaryItems = (state: { item: ItemState }) => state.item.secondaryItem;

// // Селектор для отримання статусу завантаження
// export const selectIsLoading = (state: { mainCatalog: MainCatalogState }) => state.mainCatalog.loading;

// // Селектор для отримання помилки
// export const selectAuthError = (state: { mainCatalog: MainCatalogState }) => state.mainCatalog.error;