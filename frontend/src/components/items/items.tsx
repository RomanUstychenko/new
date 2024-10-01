import React from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../redux/store";
import { getMainItems } from "../../redux/item/item-selector";


const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const Items: React.FC = () => {

    const mainItems = useTypedSelector(getMainItems);
    return (

        <div>

<button>add item</button>
<ul>
             {mainItems.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
             ))}

          </ul>
        </div>
    )
}
