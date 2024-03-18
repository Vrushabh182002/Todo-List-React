import Header from './Header';
import SearchItems from './SearchItems';
import AddItems from './AddItems';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from "react";

function App() {

  const  [items ,setItems]=useState(JSON.parse(localStorage.getItem('To-Do List')) || []);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(()=>{
    localStorage.setItem("To-Do List", JSON.stringify(items));
  },[items]);

  const addItem = (item) =>{
    const id = items.length ? items[items.length-1].id +1 : 1;
    const myNewItem = {id, checked:false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleChange =(id) =>{
    const listItems = items.map((i) => i.id === id ? {...i,checked : !i.checked} : i);
    setItems(listItems);
  }

  const handleDelete =(id) =>{
    const removeItems = items.filter((i)=> i.id !== id );
    setItems(removeItems);
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
      <SearchItems 
        search={search}
        setSearch={setSearch}
      />
      <Content 
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleChange={handleChange}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;