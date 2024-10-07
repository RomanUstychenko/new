import React from "react";
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../../../redux/store";
import { getMainItems } from "../../../redux/item/item-selector";
import { MainItemsWrap } from "./mainItems.styled";
import ItemsList from "../../common/itemsList/itemsList";
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const MainItems: React.FC = () => {

    const mainItems = useTypedSelector(getMainItems);
    return (

<MainItemsWrap>

    <ItemsList 
    items={mainItems}
    />
          </MainItemsWrap>
    )
}
