import axios from 'axios';

export const login = (user) => {
    return dispatch => {
        console.log(user)
        axios.post('http://localhost:4000/users/login-user', user)
        
        .then(res => {
            console.log(res);
            // localStorage.setItem('token' , res.data.token);
            localStorage.setItem('auth', true);
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('username', res.data.username);
            dispatch( { type : 'LOGIN_SUCCESS' , auth : res.data.success , data : res.data, username : res.data.username })
            console.log(res.data);
            
        }).catch(err => {
            console.log(err);
            dispatch( { type : 'LOGIN_ERR' , err })
        })
    }
}


export const signUp = (user) => {
    return dispatch => {
        axios.post('http://localhost:4000/users/register-user', user)
        .then(res => {
            console.log(res)
            dispatch( { type : 'SIGNUP_SUCCESS' , sisuc : res.data.success , msg : res.data })
          console.log(res.data);
        }).catch(res => {
            console.log('err',res.data);
        })
    }
}
export const logout = () => {
    return dispatch => {
        localStorage.clear();
        dispatch({type : 'logout'})
    }
}

export const isLogged = () => {
    return dispatch => {
        const username = localStorage.getItem('username');
        console.log(username);
        if(username) {
            dispatch({type : 'isLogged'})
        }
    }
}

