import { useState } from "react";
import { FaTrash } from "react-icons/fa";
const Content = () => {
  //Random Name
  // const [name, setName] = useState('User');
  // const nameChange =()=>{
  //   const names = ['VS','DS','RS','HS','PS','JS'];
  //   const res = Math.floor(Math.random() * names.length);
  //   setName(names[res]);
  // }
  
  // const btnClick=()=>{
  //   console.log("Button clicked!");
  // }
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
    localStorage.setItems('To-Do List', JSON.stringify(listItems));
  }

  const handleDelete =(id) =>{
    const removeItems = items.filter((i)=> i.id !== id );
    setItems(removeItems);
    localStorage.setItems('To-Do List', JSON.stringify(removeItems));
  }
  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((i)=>(
            <li className="item" key={i.id}>
              <input 
              type="checkbox"
              checked={i.checked}
              onChange={()=> handleChange(i.id)}
              />
              <label
                onClick={ ()=>handleChange(i.id)}
                style={(i.checked)?{textDecoration:"line-through"} : null }
              >{i.item}</label>
              <FaTrash 
                role="button" 
                onClick={()=>handleDelete(i.id)}
                tabIndex="0"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-msg">Your List is  Empty! Add an Item</p>
      )}
    </main>
  )
}

export default Content;