import React, {useContext, useState} from "react"; 
import {AppContext} from "../context/AppContext";

const Budget = () => {
    const {budget, totalExpenses, dispatch, currency} = useContext(AppContext);
    const [budget_new, setBudget_new] = useState(budget);
    const handleEditBudget = (value) => {
        setBudget_new(value);
        if(value < totalExpenses) {
            alert("The value cannot be lower than spent so far "+ currency + totalExpenses);
            setBudget_new(budget);
            return;
        }

        if(value > 20000) {
            alert("The value cannot exceed "+ currency + "20000");
            setBudget_new(budget);
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };
    return(
        <div className="alert alert-secondary">
            <span> Budget: {currency} 
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget_new}
                    style={{ marginLeft: '0rem'}}
                    onChange={(event) => handleEditBudget(event.target.value)}>
                </input>
            </span>
            
        </div>
    );
}; 

export default Budget; 