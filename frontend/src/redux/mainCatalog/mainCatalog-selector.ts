import { MainCatalogState } from "./mainCatalog-slice";

export const getMainCatalogs = (state: { mainCatalog: MainCatalogState }) => state.mainCatalog.mainCatalog;
export const getSecondaryCatalogs = (state: { mainCatalog: MainCatalogState }) => state.mainCatalog.secondaryCatalog;

// Селектор для отримання статусу завантаження
export const selectIsLoading = (state: { mainCatalog: MainCatalogState }) => state.mainCatalog.loading;

// Селектор для отримання помилки
export const selectAuthError = (state: { mainCatalog: MainCatalogState }) => state.mainCatalog.error;