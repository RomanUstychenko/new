import React from "react"

import { ItemsWrap, ItemIcon, ItemList, ItemName, ItemPrice } from "./itemsList.styled"
import { Item } from "../../../redux/item/item-slice";

interface ItemsLisProps {
    items: Item[];
  }

const ItemsList: React.FC<ItemsLisProps> = ({items}) => {

return (
    // <ItemsWrap>
    <>
             {items.map(item => (
          <ItemList key={item.id}>
            <ItemIcon />
            <ItemName>{item.name}</ItemName> - <ItemPrice>{item.price}</ItemPrice>
            </ItemList>
             ))}
</>
          // </ItemsWrap>
)
}
export default ItemsList;