import instance from './auth';

// Define types for the data structures
export interface MainCatalogResponse {
  id: string;
  name: string;
  owner: string;
  // Add other fields as necessary
}

interface AddMainCatalogData {
  name: string;
  // Add other fields as necessary
}


// export const getMainCatalog = async (): Promise<{ data: MainCatalog[] }> => {
//   const { data } = await instance.get('/main');
//   return { data };
// };

// export const getMainCatalog = async (): Promise<{ data: MainCatalogResponse[] }> => {
//     const { data: result } = await instance.get<{ data: MainCatalogResponse[] }>('/main');
//     return result;
//   };

;

  export const getMainCatalog = async (): Promise<MainCatalogResponse[]> => {
    const response = await instance.get< MainCatalogResponse[] >('/main');
    return response.data; // Повертаємо лише поле data, яке містить масив
  };

export const addMainCatalog = async (data: AddMainCatalogData): Promise<MainCatalogResponse> => {
  const { data: result } = await instance.post('/main', data);
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