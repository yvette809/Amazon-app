import React from 'react'
import { MdSend} from 'react-icons/md'

export const ExpenseForm = ({charge,amount,handlecharge,handleAmount,handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className= "form-center">
                <div className= "form-group">
                <label htmlFor="charge" >Charge</label>
                <input 
                type="text"
                className="form-control"
                id ="charge"
                name = "charge"
                value = {charge}
                onChange ={handlecharge}
                placeholder ="e.g. rent"
                />
            </div>
            </div>

            <div className= "form-center">
                <div className= "form-group">
                <label htmlFor="amount" >Amount</label>
                <input 
                type="number"
                className="form-control"
                id ="amount"
                name = "amount"
                value={amount}
                onChange={handleAmount}
                placeholder ="e.g. 100"
                />
            </div>
            </div>
            <button type="submit" className="btn"> 
            Submit
            <MdSend className = "btn-icon"/>
            </button>
        </form>
    )
}

export default ExpenseForm