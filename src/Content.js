import ItemList from "./ItemList";
const Content = ({ items, handleChange, handleDelete}) => {
  return (
    <main>
      {items.length ? (
        <ItemList 
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
        />
      ) : (
        <p className="empty-msg">Your List is  Empty! Add an Item</p>
      )}
    </main>
  )
}

export default Content;