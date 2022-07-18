import React from "react";
import { useNavigate , Link} from "react-router-dom";
import Add from "./Add";
const Appointments =()=>{
const navigate  = useNavigate();
    // const add=()=>{
    //    navigate(<Add/>);
    // name
    // age
    // appointment details
    // time
    // date
    // gender
    // }
    const [data ,setData] =React.useState([])
const [formData , setFormData] =React.useState({
  name:"",
  age:"",
  appoint:"",
time:"",
  date:"",
  gender: ""

})


const getData= () =>{

  fetch(` http://localhost:3003/data ` )
      .then((res) => res.json())
      .then((res) => {
          setData(res);
      })
      .catch((err) => {
          
          setData([]);
      })
    }
    React.useEffect(() =>{

      getData();
      } ,[])
      
const handleChange =(e) =>{
  const {name ,value} =e.target;
  setFormData({...formData, [name]:value});
};

const handleSubmit =(e)=>{
  e.preventDefault();
  const payload ={
    title:name,
    age:age,
    add:appoint,
    time:time,
   date:date,
   gender:gender
  }
    fetch(`http://localhost:3003/data`,{
      method:"POST",
      body: JSON.stringify(payload),
            headers: {
                "content-type": "application/json"
            }
    })
    .then((res) => res.json())
    .then((res) => {
      getData();
    //   formData()
  });
  // setFormData("")
}
// console.log(data)
const {name ,age, appoint ,time,date ,gender } = formData;

    return(
        <>
        <h1>Add more  Appointments

        </h1>
        <form onSubmit={handleSubmit}>

<input type='text' placeholder='Enter Name'name='name' onChange={handleChange} value={name} />
<br/>
<br/>
<input type='number' placeholder='Enter Age'name='age' onChange={handleChange} value={age} />
<br/>
<br/>
<input type='text' placeholder='Enter appointment details' name='appoint' onChange={handleChange} value={appoint} />
<br/>
<br/>
<input type='time' placeholder='Enter time' name='time' onChange={handleChange} value={time} />
<br />
<br />
<input type='date' placeholder='Enter date' name='date' onChange={handleChange} value={date} />

<br/>
<input type='text' placeholder='Enter gender' name='gender' onChange={handleChange} value={gender} />
<br/>
<br/>

   

<br/>
   <input type='submit' placeholder='submit' />

</form>
        

        <div>

            {
                
                data.map((e)=>(
                    <table style={{border:'1px solid gray'}}>
            
                    <tr style={{border:'1px solid gray'}}>
                    <th style={{border:'1px solid gray'}}>Name</th>
                    <th style={{border:'1px solid gray'}}>Age</th>
                    <th style={{border:'1px solid gray'}}>Appointments Deatails</th>
                    <th style={{border:'1px solid gray'}}>TIme</th>
                    <th style={{border:'1px solid gray'}}>Date</th>
                    <th style={{border:'1px solid gray'}}>Gender</th>
                  </tr>
                  <tr >
                    <td key={e.id} style={{border:'1px solid gray'}}> {e.title}</td>
                    <td key={e.id} style={{border:'1px solid gray'}}> {e.age}</td>
                    <td key={e.id} style={{border:'1px solid gray'}}> {e.add}</td>
                    <td key={e.id} style={{border:'1px solid gray'}}> {e.time}</td>
                    <td key={e.id} style={{border:'1px solid gray'}}> {e.date}</td>
                    <td key={e.id} style={{border:'1px solid gray'}}> {e.gender}</td>
                   
                  </tr>
                 
                </table>
                ))
            }
        </div>
        </>
    )
}
export default Appointments;