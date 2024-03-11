import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
function App() {
  const  [items ,setItems]=useState([
    {
      id: 1,
      checked: false,
      item: "Milk"
    },
    {
      id: 2,
      checked: false,
      item: "Bread"
    },
    {
      id: 3,
      checked: true,
      item: "Juice"
    }
  ]);

  const handleChange =(id) =>{
    const listItems = items.map((i) => i.id === id ? {...i,checked : !i.checked} : i);
    setItems(listItems);
    localStorage.setItem('To-Do List', JSON.stringify(listItems));
  }

  const handleDelete =(id) =>{
    const removeItems = items.filter((i)=> i.id !== id );
    setItems(removeItems);
    localStorage.setItem('To-Do List', JSON.stringify(removeItems));
  }
  return (
    <div className="App">
      <Header />
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