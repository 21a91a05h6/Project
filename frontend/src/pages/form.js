import {useState} from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Form=()=>{
    const[formdata,setFormdata]=useState({
        'imgUrl':'',
        'carName':'',
        'price':'',
        'model':'',
        'automatic':'',
        'speed':'',
        'brand':'',
        'rating':'',
        'gps':'',
        'seatType':'',
        'description':'',

    })
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log(formdata)
        axios.post('http://localhost:5000/addcardata',{formdata}).then((result)=>{console.log(result.body)
        if(result.status===200){
            alert(result.data.msg)
          }
        })
    }
    return(
        <>
        <Header/>
        <form onSubmit={handlesubmit}>
            <h1 style={{textAlign:"center"}}>Fill car details</h1>
            <center>
            <table>
            <tr>
            <td><label>Image Url:</label></td>
            <td><input type="text" name="imgUrl" onChange={(e)=>setFormdata({...formdata,imgUrl:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Car Name:</label></td>
            <td><input type="text" name="carName" onChange={(e)=>setFormdata({...formdata,carName:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Price:</label></td>
            <td><input type="text" name="price" onChange={(e)=>setFormdata({...formdata,price:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Model:</label></td>
            <td><input type="text" name="model" onChange={(e)=>setFormdata({...formdata,model:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Automatic:</label></td>
            <td><input type="text" name="automatic" onChange={(e)=>setFormdata({...formdata,automatic:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Speed:</label></td>
            <td><input type="text" name="speed" onChange={(e)=>setFormdata({...formdata,speed:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Brand:</label></td>
            <td><input type="text" name="brand" onChange={(e)=>setFormdata({...formdata,brand:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Rating:</label></td>
            <td><input type="text" name="rating" onChange={(e)=>setFormdata({...formdata,rating:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>GPS:</label></td>
            <td><input type="text" name="gps" onChange={(e)=>setFormdata({...formdata,gps:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Seat Type:</label></td>
            <td><input type="text" name="seatType" onChange={(e)=>setFormdata({...formdata,seatType:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td><label>Description:</label></td>
            <td><input type="text" name="description" onChange={(e)=>setFormdata({...formdata,description:e.target.value})}/></td>
            </tr><br/>
            <tr>
            <td></td>
            <td><input type="submit" value="submit"/></td>
            </tr>
            </table>
            </center>
        </form>
        <Footer/>
        </>
    )
}
export default Form;