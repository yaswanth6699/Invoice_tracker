import React,{useState,useEffect} from 'react'
import TextField from '@material-ui/core/TextField';
import './Invoice.css'
import {db} from './firebase'
import firebase from './firebase'
import { Button } from '@material-ui/core';
import Admin from './Admin'

import User from './User'
function Invoice({user}) {
    const [name,setName]=useState('')
    const [date,setDate]=useState()
    const [amount,setAmount]=useState()
    const [image,setImage]=useState('')
    const [invoice,setInvoice]=useState([])
    useEffect(()=>{
        db.collection("invoice").onSnapshot(snapshot=>
            setInvoice(snapshot.docs.map(doc=>({...doc.data(),id:doc.id}))))
    },[])
    const handleSubmit=(e)=>{
        if(name!=='' && date!==NaN && amount!==NaN && image!==''){
        e.preventDefault();
        db.collection('invoice').add({
            name:name,
            date:date,
            amount:amount,
            image:image,
            user:user 
        }).then(()=>{
           
            alert("Details added Successfully")
            setName('')
            setDate(NaN)
            setAmount(NaN)
            setImage('')
        }
            
        ).catch((error)=>{
            alert(error.message)
        })
    }
    }
    
    let details;

    if(user==='yaswanth'){
        details=<Admin name={name} amount={amount} date={date} invoice={invoice} user={user}  setInvoice={setInvoice} setName={setName} setAmount={setAmount} setInvoice={setInvoice}/>
    }
    else{
        details=<User name={name} amount={amount} date={date} invoice={invoice} user={user} setInvoice={setInvoice} setName={setName} setAmount={setAmount} setInvoice={setInvoice}/>
    }



    if(user==='yaswanth'){
        return(
            <>
            
            <div className="col-xs-8 m-auto">
                {details}
     
                </div>
                </>
        )
      
       
    }
    else{
        return(
            <>
            
    
            <div className="invoice__details">
                <div className="container">
                    <div className="row">
    
                  <div className="col-xs-4 mr-auto"> 
                <form className="form" >
                <div className="form__input">
                <label>Name</label><TextField className="input" id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form__input">
                <label>Date</label><TextField  style={{width:'225px'}} type="date" className="input" id="outlined-basic"  variant="outlined" value={date} onChange={(e)=>setDate(e.target.value)}/>
                </div>
                
                <div className="form__input">
                <label>Amount</label><TextField type="number" className="input" id="outlined-basic" label="Amount" variant="outlined" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                
                <div className="form__input"> 
                <label>Image Url</label><TextField id="outlined-basic" className="input" label="Image Url" variant="outlined" value={image} onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <br/>
                <Button onClick={handleSubmit} className="form__button">Submit</Button>
                </form>
                </div> 
                <div className="col-xs-8 ml-auto">
                   {details}
                    
                </div>
    
                </div>
                </div>
            </div>
        </>
     
        )
        }

    
   
}

export default Invoice
