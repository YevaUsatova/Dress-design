export const signup = async (dispatch, userInfo) => {
    let params = {
        user: {
            ...userInfo
        }
    }
    let resp = await fetch('/users', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })

    if (resp.ok) {
        resp.json().then(user => dispatch ({type: "LOGGING_IN", user}))
        return Promise.resolve("resolved")
    } else{
        resp.json().then(({errors})=> alert(errors))  
    }

}

export const login = async (dispatch, userInfo) => {
    let params = {
        ...userInfo
    }
    let resp = await fetch('/sessions', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(params)
    })

    if (resp.ok) {
        resp.json().then(user => dispatch ({type: "LOGGING_IN", user}))
        return Promise.resolve("resolved")
    } else{
        resp.json().then(({errors})=> alert(errors))  
    }

}

export const logout = async(dispatch) => {
    
    let resp = await fetch('/sessions', {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
       
    })

    if (resp.ok) {
        resp.json().then(() => dispatch ({type: "LOGOUT"}))
        return Promise.resolve("resolved")
    } else{
        resp.json().then(({errors})=> alert(errors))  
    }
}