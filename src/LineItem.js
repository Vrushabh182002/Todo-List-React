import { FaTrash } from "react-icons/fa";
const LineItem = ({ i, handleChange, handleDelete}) => {
  return (
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
        aria-label={`delete ${i.item}`}
        />
    </li>
  )
}

export default LineItem;