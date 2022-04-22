// Import Firestore database
import { db } from "../../firebase";
import { useState } from 'react';
import '../../css/dashboard.css';
import { firestore } from "../../firebase1";


function Reload() {
    window.setTimeout(function () {
        window.location.reload()
    });    
}
const deleteUserByName = async (name) => {
    const snapshot = await firestore
      .collection("circuit")
      .limit(1)
      .where("name", "==", name)
      .get();
  
    const doc = snapshot.docs[0];
    doc.ref.delete();
  
    console.log(doc.id);
    return doc.id;
  };
  
  
const DataCircuit = () => {    

    const [info , setInfo] = useState([]);
  
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection("circuit").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    }
      
    // Display the result on the page
    return (
        
        <div>
            {Reload}
            <div className="home">
            <a href='/'>
                    <button>Go Home</button>
                </a>

            
            </div>
            <center>
            <h2>Appointments</h2>
            </center>
          
        {
            info.map((data) => (
            <Frame name={data.name}
                    email={data.email}
                    date={data.date}
                    time={data.time}
                    message={data.message}
                   />
            ))
        }
        </div>
  
    );
}
  
// Define how each display entry will be structured
const Frame = ({name , email , date, time ,message}) => {
    console.log(name + " " + email + " " +date+ " "+time+" "+ message);
    return (
        <div className="containerdash">
            <div>
            <div className="carddash">
                  
<p>Name : {name}</p>
   
                  
<p>Email : {email}</p>
<p>date: {date}</p>
<p>time : {time}</p>
                  
<p>Symptoms : {message}</p>
<div>
           <button onClick={() => deleteUserByName(name)} className="delete">Delete</button>
           </div>
   
            </div>
        </div>
        </div>
        
    );
}
  
export default DataCircuit;