import { FaTrash } from "react-icons/fa";
const LineItem = ({ item, handleChange, handleDelete}) => {
  return (
    <li className="item">
        <input 
        type="checkbox"
        checked={item.checked}
        onChange={()=> handleChange(item.id)}
        />
        <label
        onClick={ ()=>handleChange(item.id)}
        style={(item.checked)?{textDecoration:"line-through"} : null }
        >{item.item}</label>
        <FaTrash 
        role="button" 
        onClick={()=>handleDelete(item.id)}
        tabIndex="0"
        aria-label={`delete ${item.item}`}
        />
    </li>
  )
}

export default LineItem;