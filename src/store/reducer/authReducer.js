const initialState = {
    auth : localStorage.getItem('auth') || false,
    sisuc: false,
    msg: '',
    username: localStorage.getItem('username') || '',
    role: localStorage.getItem('role') || '',
    message: '',
    Simessage: ''
}

const authReducer = (state = initialState , action)  => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
          console.log(action.data.role);
            return {
                ...state,
                auth: action.auth,
                data: action.data,
                username: action.data.username,
                role: action.data.role,
                message: action.data.message
            }
        case "LOGIN_ERR":
            return {
                ...state,
                auth: false,
                message: action.err
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                sisuc: action.sisuc,
                Simessage: action.msg.message
            }
        case "logout":
            return {
                ...state,
                auth:false,
                message: ''
            }
        case "isLogged":
            return {
                ...state,
                auth: true
            }
        default:
            return state;
    }
}

export default authReducer;