import instance from './auth';

// Define types for the data structures
export interface MainCatalogResponse {
  id: string;
  name: string;
  type: string;
  owner: string;
  // Add other fields as necessary
}
export interface SecondaryCatalogResponse {
  id: string;
  name: string;
  type: string;
  owner: string;
  mainCatalog: string;
}
interface AddMainCatalogData {
  name: string;
  // Add other fields as necessary
}
interface AddSecondaryCatalogData {
  name: string;
  openFolderId: string | null;
}


  export const getMainCatalog = async (): Promise<MainCatalogResponse[]> => {
    const response = await instance.get< MainCatalogResponse[] >('/main');
    return response.data; // Повертаємо лише поле data, яке містить масив
  };

export const addMainCatalog = async (data: AddMainCatalogData): Promise<MainCatalogResponse> => {
  const { data: result } = await instance.post('/main', data);
  return result;
};

export const getSecondaryCatalog = async (mainCatalog: string | null): Promise<SecondaryCatalogResponse[]> => {
  const response = await instance.get< SecondaryCatalogResponse[] >(`/main/${mainCatalog}`);
  console.log("response", response)
  return response.data; // Повертаємо лише поле data, яке містить масив
};
export const addSecondaryCatalog = async (data: AddSecondaryCatalogData): Promise<SecondaryCatalogResponse> => {
console.log("data", data)
const {openFolderId, name} = data
  const { data: result } = await instance.post(`/main/${openFolderId}`, {name});
  return result;
};

// export const deleteSection = async (_id: string): Promise<MainCatalog> => {
//   const { data } = await instance.delete(`/sections/${_id}`);
//   return data;
// };


// export const updateSection = async (_id: string, section: Partial<MainCatalog>): Promise<MainCatalog> => {
//   const { data } = await instance.patch(`/sections/${_id}`, section);
//   return data;
// };