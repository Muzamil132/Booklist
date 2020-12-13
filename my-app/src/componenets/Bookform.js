import React,{useState,useContext} from 'react'
import { BookContext } from '../Context/BookContext'
import '../index.css'

function Bookform() {
      const{dispatch}  = useContext(BookContext)
      const [title,settitle] = useState('')
      const [author,setauthor] = useState('')

const submit=(e)=>{
    e.preventDefault()
   dispatch({  type:'ADD_BOOK', Book:{title,author}})
   settitle('')
   setauthor('')
}

    return (
        <div className="form1">
            <form className="form" >
           <input className="input" placeholder="title..." type= 'text'
               onChange={(e)=>settitle(e.target.value)}
               value={title}
           /> 
           <input className="input" placeholder=" author name...." type= 'text'
               onChange={(e)=>setauthor(e.target.value)}
               value={author}
           />
           <button className="btn" onClick={submit}  type="submit">addBook</button>
            </form>
        </div>
    )
}

export default Bookform
