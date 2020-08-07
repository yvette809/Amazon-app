import React, {useState}from 'react';

import './App.css';
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'
import Alert from './components/Alert'
import { v4 as uuidv4 } from 'uuid'


const initialExpenses =  [
  {id:uuidv4(), charge:"rent",amount:1600},
  {id:uuidv4(), charge:"car payment",amount:1600},
  {id:uuidv4(), charge:"credit card bill",amount:1600}
]
console.log(initialExpenses)

function App() {
  // state values
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses)

  //single expense
  const [charge, setCharge] = useState('')

  // single amount
  const [amount, setAmount] = useState('')

  // alert
  const {alert,setAlert} = useState({show:false})

  const handlecharge = e =>{
    setCharge(e.target.value)
  }

  const handleAmount = e =>{
    setAmount(e.target.value)
  }

  // handle Alert
  const handleAlert = ({type,text})=>{
    setAlert({show:true, type:type,text:text})

    setTimeout(() =>{
      setAlert({show:false})
    },3000)
  }


  const handleSubmit = e =>{
    e.preventDefault()
    if(charge !== "" && amount>0){
      const singleExpense = {id:uuidv4(), charge:charge, amount:amount};
      setExpenses([...expenses,singleExpense])
      handleAlert({type:'success', text:'item added'})
      setCharge("")
      setAmount("")
    }else{
      // handle alert call
      handleAlert({
        type:'danger', 
        text: `charge can't be empty value and amount value has to be bigger thn zero`})
    }
  }

  // clear all items

  const clearItems = ()=>{
    setExpenses([])
    
  }
// handle Delete

const handleDelete = (id)=>{
  console.log(` deleted: ${id}`)
  
}

// handle Edit

const handleEdit = (id)=>{
  console.log(` deleted: ${id}`)
  
}
  // functionality
  

  return (
    <>
    {/* {alert.show && <Alert type={alert.type} text ={alert.text}/>} */}
     <Alert/>
     <h1>Budget Calculator</h1>
     <main>
     <ExpenseForm charge={charge} 
     amount={amount}
     handleAmount={handleAmount}
      handlecharge={handlecharge}
     handleSubmit ={handleSubmit}
     />
     <ExpenseList
      expenses ={expenses}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
      clearItems={clearItems}
      />
     </main>
    <h1>
      total spending: <span className = "total">
        ${expenses.reduce((acc,curr)=>{
          return (acc += parseInt(curr.amount))
        },0)}
      </span>
    </h1>
    </>
  );
}

export default App;
