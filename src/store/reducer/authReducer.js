const initialState = {
    auth : false,
    sisuc: false,
    msg: '',
    username: '',
    role: ''
}

const authReducer = (state = initialState , action)  => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
          console.log(action.data.role);
            return {
                ...state,
                auth: action.auth,
                data: action.data,
                username: action.username,
                role: action.data.role
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                sisuc: action.sisuc,
                msg: action.msg
            }
        case "logout":
            return {
                ...state,
                auth:false
            }
        case "isLogged":
            const fuser = localStorage.getItem('user');
            const s = JSON.parse(fuser);
            console.log('loc' ,s);
            return {
                ...state,
                auth: true
            }
        default:
            return state;
    }
}

export default authReducer;