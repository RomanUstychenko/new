import { MainCatalogState } from "./catalog-slice";

export const getMainCatalogs = (state: { catalog: MainCatalogState }) => state.catalog.mainCatalog;

console.log("getMainCatalogs", getMainCatalogs)
// Селектор для отримання статусу завантаження
export const selectIsLoading = (state: { catalog: MainCatalogState }) => state.catalog.loading;

// Селектор для отримання помилки
export const selectAuthError = (state: { catalog: MainCatalogState }) => state.catalog.error;