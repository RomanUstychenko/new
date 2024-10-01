import instance from './auth';

export interface MainItemResponse {
  id: string;
  name: string;
  price: string;
  description: string;
  type: string;
  catalog: string;
  owner: string;
}

export interface AddMainItemData {
  name: string;
  price: string;
  description: string;
  catalog: string | null;
}


  export const getMainItem = async (catalog: string | null): Promise<MainItemResponse[]> => {
    const response = await instance.get< MainItemResponse[] >(`/items/${catalog}`);
    return response.data; // Повертаємо лише поле data, яке містить масив
  };

export const addMainItem = async (data: AddMainItemData): Promise<MainItemResponse> => {
  const {catalog, ...itemData} = data;
  console.log("itemData", itemData)
  const { data: result } = await instance.post(`/items/${catalog}`, itemData);

  return result;
};

// export const getSecondaryCatalog = async (mainCatalog: string | null): Promise<SecondaryCatalogResponse[]> => {
//   const response = await instance.get< SecondaryCatalogResponse[] >(`/main/${mainCatalog}`);
//   console.log("response", response)
//   return response.data; // Повертаємо лише поле data, яке містить масив
// };

// export const deleteSection = async (_id: string): Promise<MainCatalog> => {
//   const { data } = await instance.delete(`/sections/${_id}`);
//   return data;
// };


// export const updateSection = async (_id: string, section: Partial<MainCatalog>): Promise<MainCatalog> => {
//   const { data } = await instance.patch(`/sections/${_id}`, section);
//   return data;
// };