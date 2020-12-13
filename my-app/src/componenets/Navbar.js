import React, {useContext} from 'react'
import {BookContext} from '../Context/BookContext'
import '../index.css'
const Navbar=() =>{
  const{Book} = useContext(BookContext)
  console.log(Book)
    return (
       
      
        <div className="Navbar">
        <div className="content">
         <h1>MY BOOKLIST</h1>
         <p>Currently I have read {Book.length} books </p>
         </div>
         </div> 
    
    )
}

export default Navbar
