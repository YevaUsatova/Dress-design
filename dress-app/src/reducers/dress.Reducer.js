const dressReducer = (state= {dresses: []}, action) => {
    switch (action.type){
        case "ADDING_DRESSES":
            return {
                ...state,
               dresses: action.dresses
            }
        case "ERRORS":
            return {
                ...state,
                errors: action.errors
            }
        case "CLEAR_ERRORS":
            return {
                ...state,
                errors: []
            }
        
        default:
            return state 
    }
}

export default dressReducer