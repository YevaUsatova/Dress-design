const dressReducer = (state= {dresses: []}, action) => {
    switch (action.type){
        case "ADDING_DRESSES":
            return {
                ...state,
               dresses: action.dresses
            }        
        default:
            return state 
    }
}

export default dressReducer