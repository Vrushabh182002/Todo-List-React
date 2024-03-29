import { useRef } from 'react';
import { FaPlus } from  'react-icons/fa';
const AddItems = ({ newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addForm">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            required
            type="text" 
            id="addItem"
            placeholder="Add Item"
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
        />
        <button
          type="submit"
          aria-label="Add Item"
          onClick={()=> inputRef.current.focus()}
        >
          <FaPlus />
        </button>
    </form>
  )
}

export default AddItems