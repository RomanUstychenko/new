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
  description: string| null;
  catalog: string | null;
}

export interface AddSecondaryItemData  {
  catalog: string | null;
  fields: { [key: string]: string };
}


  export const getMainItem = async (catalog: string | null): Promise<MainItemResponse[]> => {
    const response = await instance.get< MainItemResponse[] >(`/items/${catalog}`);
    return response.data; // Повертаємо лише поле data, яке містить масив
  };

export const addMainItem = async (data: AddSecondaryItemData): Promise<MainItemResponse> => {
  const {catalog, fields} = data;
  console.log("itemData", fields)
  const { data: result } = await instance.post(`/items/${catalog}`, fields);

  return result;
};

export const getSecondaryItem = async (catalog: string | null): Promise<MainItemResponse[]> => {
  const response = await instance.get< MainItemResponse[] >(`/items/secondary/${catalog}`);
  return response.data; // Повертаємо лише поле data, яке містить масив
};

export const addSecondaryItem = async (data: AddSecondaryItemData): Promise<MainItemResponse> => {
  const {catalog, fields} = data;
  console.log("itemData", fields)
  
  const { data: result } = await instance.post(`/items/secondary/${catalog}`, fields);
  return result;
}

// export const deleteSection = async (_id: string): Promise<MainCatalog> => {
//   const { data } = await instance.delete(`/sections/${_id}`);
//   return data;
// };


// export const updateSection = async (_id: string, section: Partial<MainCatalog>): Promise<MainCatalog> => {
//   const { data } = await instance.patch(`/sections/${_id}`, section);
//   return data;
// };