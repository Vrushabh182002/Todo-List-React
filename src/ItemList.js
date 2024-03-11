import LineItem from "./LineItem";
const ItemList = ({ items, handleChange, handleDelete }) => {
  return (
    <ul>
        {items.map((i)=>(
        <LineItem
         key={i.id}
         item={i}
         handleChange={handleChange}
         handleDelete={handleDelete} 
        />
        ))}
    </ul>
  )
}

export default ItemList;