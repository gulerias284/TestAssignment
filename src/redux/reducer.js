
import { ADD_USER, ON_LOGIN_USER, ON_LOGOUT_USER,} from "./constants";
const initialState = {
    users:[],
    loginUser:null
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_USER: {
            alert("User Added Successfully.")
            return {
                ...state, users: action?.payload
            }
            
        }; 
        case ON_LOGIN_USER:{  
            return {
                ...state,
                loginUser:action?.payload
            }
           
        };
        case ON_LOGOUT_USER:{
            
                alert("Log Out Successful.")
            
            return {
                ...state,
                loginUser:action?.payload
            }
           
        }
        default:
            return state;

    }

}