import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'
import '../index.css'
function Booklist() {
    const { Book, dispatch } = useContext(BookContext)
    return (
        <div className="book">

            {Book.map(Book => {

                return <ul className="booklist" onClick={() => dispatch({ type: 'REMOVE', id: Book.id })}>
                    <li className="list">{Book.title}</li>
                    <li className="list1">{Book.author}</li>

                </ul>



            })}

        </div>
    )
}

export default Booklist
