import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset, incrementByAmount } from '../redux/counterSlice'

function Counter() {
    const [amount,setAmount] = useState(0)
    const {count} = useSelector(state=>state.counterReducer)
    const dispatch = useDispatch()

    const handleIncrement= ()=>{
        if(amount != "" && amount>0){
            // dispatch action
            dispatch(incrementByAmount(+amount))
        }else{
            alert("plese input valid amount")
        }
        

    }
  return (
    <div className='container'>
        <h1 className='my-4 '>Counter App</h1>
        <div className='row'>
            <div className="col-md-4"></div>
            <div className="col-md-4 border rounded">
                <h1 style={{fontSize:"150px"}} className='text-danger'>{count}</h1>
                <button onClick={()=>dispatch(increment())} className='btn btn-success me-5'>Increment</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger me-5'>Reset</button>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning'>Decrement</button>
                <div className="d-flex justify-content-center align-items-center my-5">
                    <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control me-3' placeholder='Amount' />
                    <button onClick={handleIncrement} className='btn btn-primary'>Increment by Amount</button>
                </div>
            </div>
            <div className="col-md-4"></div>
            
        </div>
    </div>
  )
}

export default Counter