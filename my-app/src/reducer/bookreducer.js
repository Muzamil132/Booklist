

export const bookReducer =(state,action)=>{
   switch(action.type){
       case 'ADD_BOOK':
           return [...state,{
               title:action.Book.title,
               author:action.Book.author,
               id:Math.random()
           }]

        case'REMOVE':
               return state.filter(book=> book.id!==action.id)
        

        default:
            return state

   }
}