import React, { useContext } from 'react';
import "../style.css";
import { AppContext } from '../context/AppContext';
const Currency = () => {
  const {dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    
  return (
    <div className=' alert alert-info currency_box'> {
      <select 
            name="Currency" 
            id="Currency" 
            onChange={event=>changeCurrency(event.target.value)}>
        <option defaultValue value="£"> Currency (£ Pound)</option>
        <option value="$"> $ Dollar</option>
        <option value="£"> £ Pound</option>
        <option value="€"> € Euro</option>
        <option value="₹"> ₹ Ruppee</option>
      </select>	
      }	
    </div>
    );
};
export default Currency;