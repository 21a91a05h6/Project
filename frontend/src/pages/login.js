import {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Auth=()=>{
    const[formdata,setFormdata]=useState({
        'uname':'',
        'pass':'',
    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/auth',{formdata}).then((result)=>{console.log(result.body)
        if(result.status==200){
            //alert(result.data.msg)
            window.location.href = '/home';
        }
        else{
            alert(result.data.msg)
        }
    })
    }
    return(
        <>
            <br/>
            <center>
            <h2>Good to see you again</h2><br/>
            <form onSubmit={handlesubmit}>
            <table>
            <tr>
                <td><label>Username:</label></td>
                <input type="text" name="uname" placeholder="Username" onChange={(e)=>setFormdata({...formdata,uname:e.target.value})}/></tr><br/><br/>
                <tr>
                <td><label>Password:</label></td>
                <td><input type="text" name="pass" placeholder="Password" onChange={(e)=>setFormdata({...formdata,pass:e.target.value})}/></td></tr><br/><br/>
                <tr>
                <td></td>
                <td><input type="submit" value="Sign In"/></td>
                </tr>
                <tr>
                <td></td>
                <td><Link to="/register">Don't have an account ?</Link></td>
                </tr>
                </table>
            </form>
            </center>
        </>
    )
}
export default Auth;