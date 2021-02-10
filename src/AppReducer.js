

const AppReducer = (state,action) =>{
switch(action.type){

    case 'DELETE-TRANSACTION' :
        return{
            ...state,
            transactions : state.transactions.filter(transactions => transactions.id !== action.payload)


        }
            


        
    
    default :
    return(state)
     


} 



}
export default AppReducer;