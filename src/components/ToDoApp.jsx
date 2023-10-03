import { useState } from "react";

function ToDoApp(){
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editedValue, setEditedValue] = useState('');

    const addItem = () =>{
        if (newItem.trim() !== '') {
        setItems([...items, newItem]);
        setNewItem('');
        } 
        else {
            alert('Please enter a item.');
        }
    }

    const deleteItem = (index) =>{
        const updatedItems = items.filter((item, i)=> i !== index);
        setItems(updatedItems);
    }

    const editItem = (index) => {
        if (editIndex === index) {
          const updatedItems = [...items];
          updatedItems[index] = editedValue;
          setItems(updatedItems);
          setEditIndex(null);
        } else {
          setEditIndex(index);
          setEditedValue(items[index]);
        }
      };

    return(
        <>
        <h1>To Do App</h1>
        <div className="todoform">
        <input
        type="text"
        placeholder='Add an item...'
        value={newItem}
        onChange ={(e)=>setNewItem(e.target.value)}
         />
        <button onClick={addItem}>Add</button>
        </div>
        <div className="todolist">
        <ul>
        {items.map((item, index) => (
            <li key={index}>
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editedValue}
                    onChange={(e) => setEditedValue(e.target.value)}                    
                  />
                  <button onClick={() => editItem(index)} className="btnedit">Save</button>
                </>
              ) : (
                <>
                  <input type="text" value={item} disabled />
                  <button onClick={() => editItem(index)} className="btnedit">
                    {editIndex === index ? 'Cancel' : 'Edit'}
                  </button>
                </>
              )}
              <button onClick={() => deleteItem(index)} className="btndelete">Delete</button>
            </li>
          ))}
        </ul>
        </div>
        </>
    );
}

export default ToDoApp;