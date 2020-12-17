import React,{useState,useEffect} from 'react'
import Login from './Login'
import { db } from './firebase'
import Invoice from './Invoice'
import './User.css'
function User({name,user,date,amount,invoice,setName,setAmount,setInvoice}) {
    let sum=0;
  useEffect(()=>{
    db.collection("invoice").onSnapshot(snapshot=>
        setInvoice(snapshot.docs.map(doc=>({...doc.data(),id:doc.id}))))
},[])
    
  
    function onDelete(id){
      db.collection('invoice').doc(id).delete()
    }
   
    return (
        <div>
         
              <div style={{border:"1px solid black"}} className="table__content">
               <table  className="table table-hover">
                 <thead className="thead-dark">
                   <tr>
                     
                   <th scope="col">User Name</th>
                   <th scope="col">Invoice Name</th>
                   <th scope="col">Invoice Date</th>
                   <th scope="col">Invoice Amount</th>
                   <th scope="col">Action</th>
                   </tr>
                   </thead>
                   <tbody>
                      
                      {
                        
                      invoice.filter((i)=>(user===i.user)).map((i)=>(
                        
                        <tr>
                          <div style={{display:'none'}}>{sum=sum+parseInt(i.amount)}</div>
                        <td>{user}</td>
                        <td>{i.name}</td>
                        <td>{i.date}</td>
                        <td>{i.amount}</td>
                        <td><button className="btn btn-danger" onClick={()=>onDelete(i.id)}>Delete</button></td>
                        </tr>
                        
                      
            ))}  
              
                      <tr>
                        <td style={{borderTop:'1px solid black'}}>Total Amount</td>
                        <td style={{borderTop:'1px solid black',visibility:'hidden'}}>Chinnu</td>
                        <td style={{borderTop:'1px solid black',visibility:'hidden'}}>chinnu</td>
                        <td style={{borderTop:'1px solid black'}}>{sum}</td>
                        <td style={{borderTop:'1px solid black',visibility:'hidden'}}>cs</td>
                      </tr>
                      
                      </tbody>
                 
               </table>
               </div>
            
            
        
        </div>
      
    )
}

export default User
