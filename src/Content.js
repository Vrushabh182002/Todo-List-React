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
  return (
    <main>
      {/* <p>Hello, { name }</p>
      <button onClick={ nameChange }>Change Name</button>
      <button onClick={ btnClick }>Click me!</button> */}
      <ul>
        {items.map((i)=>(
          <li className="item" key={i.id}>
            <input 
            type="checkbox"
            checked={i.checked}
            />
            <label>{i.item}</label>
            <FaTrash 
              role="button" 
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content;