export const fetchDresses = async (dispatch) => {
    let resp = await fetch('/dresses')
    if (resp.ok) {
        resp.json().then(dresses => {
            dispatch({type: "ADDING_DRESSES", dresses})
        })
    } else {
        resp.json().then(({errors}) => alert(errors))
    }
} 