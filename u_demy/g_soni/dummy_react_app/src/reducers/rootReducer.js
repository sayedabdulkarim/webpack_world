const initialState = {
    name: "11111111111111111111",
    counter: 0
}

export const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                counter: state.counter += 1
            }            
        case "DECREMENT":
            return {
                counter: state.counter -= 1
            }            
    
        default:
            return state
    }
}
