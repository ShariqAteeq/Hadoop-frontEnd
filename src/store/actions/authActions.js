import axios from 'axios';

export const login = (user) => {
    return dispatch => {
        axios.post('http://localhost:4000/users/login-user', user)
        .then(res => {
            localStorage.setItem('user' , res.data);
            dispatch( { type : 'LOGIN_SUCCESS' , auth : res.data.success , data : res.data, username : res.data.username })
          console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}


// export const updateExercise = (id , exc) => {
//     return dispatch => {
//         axios.post('http://localhost:4000/users/login-user', user)
//         .then(res => {
//             dispatch( { type : 'LOGIN_SUCCESS' , auth : res.data.success , data : res.data, username : res.data.username })
//           console.log(res.data);
//         }).catch(err => {
//             console.log(err);
//         })
//     }
// }

export const signUp = (user) => {
    return dispatch => {
        axios.post('http://localhost:4000/users/register-user', user)
        .then(res => {
            console.log(res)
            dispatch( { type : 'SIGNUP_SUCCESS' , sisuc : res.data.success , msg : res.data.message })
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
        const user = localStorage.getItem('user');
        if(user) {
            dispatch({type : 'isLogged'})
        }
    }
}

