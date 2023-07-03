import React, { useContext } from 'react';
import '../style.css';
import { TiDelete } from 'react-icons/ti';
import { IoIosAddCircle, IoMdRemoveCircleOutline} from "react-icons/io";
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td> 
                <button className='button_add' onClick={event=> increaseAllocation(props.name)}> <IoIosAddCircle size= '2em' /> </button>
            </td>
            <td> 
                <button className='button_minus' onClick={event=> decreaseAllocation(props.name)}> <IoMdRemoveCircleOutline size= '2em' /> </button>
            </td>
            <td>
                <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
            </td>
        </tr>
    );
};
export default ExpenseItem;
