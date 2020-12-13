import {createContext ,useReducer,useEffect} from 'react'
import {bookReducer} from '../reducer/bookreducer'
import '../index.css'
// import uuid from 'uuid/v1'
 
   export const BookContext =createContext()
   const BookContextProvider  =(props)=>{
                  const [Book,dispatch]   =     useReducer( bookReducer,[  ],()=>{
                      const data = localStorage.getItem('Book')
                       return data?JSON.parse(data):[]
                  })

  useEffect(()=>{
   localStorage.setItem(Book ,JSON.stringify(Book))
  },[Book])
    
          return (
               <BookContext.Provider value={{Book,dispatch}}>
                   {props.children}
               </BookContext.Provider>

          )
   }

   export default BookContextProvider