
import '../css/landing.css';
import { Link } from 'react-router-dom';



const Landingpage = () => {
    return (
        <>
        
        <div className='landing_container'>
        <div className='cardlanding'>
        
        <h1>Welcome, to our health care website</h1>
           
                
                
                <Link to="/doctorlist">
                    
                    <button >Are you a doctor</button>
                </Link>
               
               
                
            
            
                
                
                <Link to="/DoctorChoice">
                    <button>Are you a patient</button>
                </Link>      
                <Link to="/CovidData">
                    <button>View Covid cases</button>
                </Link>    
                
    </div>
    
        
        </div>
            
        </>
    )
}
export default Landingpage