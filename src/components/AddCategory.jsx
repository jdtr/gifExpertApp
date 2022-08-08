import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {
 const [inputValue, setInputValue] = useState('');

 const onInputChange = ({target}) => {
    setInputValue(target.value);
    console.log(target.value)
 }

 const onSubmit = (event) => {
     event.preventDefault();
    if ( inputValue.trim().length < 2 ) return;
 
    onNewValue(inputValue);
    setInputValue('')
 }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder="Search gifs" 
            value={ inputValue }
            onChange={ onInputChange } // Se puede mandar solo la ref de la función
        />
    </form>
  )
}
