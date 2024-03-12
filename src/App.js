import Header from './Header';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
function App() {
  const  [items ,setItems]=useState(JSON.parse(localStorage.getItem('To-Do List')));

  const [newItem, setNewItem] = useState('');

  const savingItems = (newItems) =>{
    setItems(newItems);
    localStorage.setItem('To-Do List', JSON.stringify(newItems));
  }
  const addItem = (item) =>{
    const id = items.length ? items[items.length-1].id +1 : 1;
    const myNewItem = {id, checked:false, item };
    const listItems = [...items, myNewItem];
    savingItems(listItems);
  }

  const handleChange =(id) =>{
    const listItems = items.map((i) => i.id === id ? {...i,checked : !i.checked} : i);
    savingItems(listItems);
  }

  const handleDelete =(id) =>{
    const removeItems = items.filter((i)=> i.id !== id );
    savingItems(removeItems);
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }
  return (
    <div className="App">
      <Header />
      <AddItems 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        />
      <Content 
        items={items}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;