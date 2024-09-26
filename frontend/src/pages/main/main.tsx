import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
// import { logoutUser } from '../../redux/auth/auth-operation';
import { addMainCatalog } from '../../redux/catalog/catalog-operation';
import { selectIsLoading } from '../../redux/catalog/catalog-selector';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../redux/store';
import { MainCatalogs } from '../../components/catalogs/mainCatalogs/mainCatalogs';
import { CatalogsWrap } from './main.styled';
// Типізований хук useSelector
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
    const Main: React.FC = () => {

      const dispatch = useDispatch<AppDispatch>(); // правильно типізуємо dispatch

  
        const loading = useTypedSelector(selectIsLoading);
        const [name, setName] = useState('');
        
      
      // const onLogout = () => {
      //   dispatch(logoutUser());
      //   localStorage.clear();
      // };

      
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // Валідація
        if (!name) {
          alert('Please fill in all fields');
          return;
        }
    
        // Додаємо новий каталог через dispatch
        dispatch(addMainCatalog({ name }));
        
        // Очищаємо форму
        setName('');
      };
    
    return (
      <main>
      <h1>main page</h1>
<CatalogsWrap>
<form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Catalog Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Catalog'}
        </button>
      </form>

<MainCatalogs />
</CatalogsWrap>
       
      
      
      </main>
    );
  };

  export default Main;