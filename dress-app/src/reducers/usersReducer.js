const userReducer = (state= {user: {}, loggedIn: false}, action={}) => {
    switch (action.type){
        case "LOGGING_IN":
            return {
                user: action.user,
                loggedIn: true
            }
        case "LOGOUT":
            return {
                user: {},
                loggedIn: false
            }
        default:
            return state 
    }
}

export default userReducer