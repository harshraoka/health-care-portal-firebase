import React, { useState, useEffect } from 'react';

import '../css/Doctor.css';


function ScrollToTopOnMount() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return null;
}

const reload = () =>{
    window.setTimeout(function () {
        window.location.reload()
    }, 1000);    
}

const DoctorChoice = () => {
    return (
        
        <div>
            <div className="home">
        <a href='/'>
                <button>Go Home</button>
            </a>

        
        </div>
            <div className="containerdoc">
           
         
           <div className='card'>
                      <span>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCPwBQr4AUdY_AUeW1P1t7GxmTwGXNhggAQ&usqp=CAU' alt={"dr asthana image"} className='person-img' />
                          <h4>Name: Dr.Asthana</h4>
                          <h4>Speciality:panic laugh </h4>
                     
              <a href='/Asthana'>
                  <button onClick={reload}>Book Appointments</button>
              </a>
                          
                      </span>

                  </div>
                  <div className='card'>
                      <span>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hON10pAoKJvJKJOFvVIycsI6v5dIhtfN8A&usqp=CAU' alt={"dr. circuit image"} className='person-img' />
                          <h4>Name: Dr.Circuit</h4>
                          <h4>Speciality:Knife Skills </h4>
                     
              <a href='/Circuit'>
                  <button onClick={reload}>Book Appointments</button>
              </a>
                          
                      </span>

                  </div>
                  <div className='card'>
                      <span>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4osymdip3f32TEEeiWlUtO8KDBTsuKLIcg&usqp=CAU'alt={"dr murli prasad"} className='person-img' />
                          <h4>Name: Dr.Murli Prasad Sharma</h4>
                          <h4>Speciality:Jadu ki Jhappi </h4>
                     
              <a href='/Munna'>
                  <button onClick={reload}>Book Appointments</button>
              </a>
                          
                      </span>

                  </div>
                  <div className='card'>
                      <span>
                          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKRCvvhud95677Owx8mun_n5cmwZ4iqSnXA&usqp=CAU' alt={"dr suman image"} className='person-img' />
                          <h4>Name: Dr.Suman</h4>
                          <h4>Speciality:multiple personality disorder </h4>
                     
              <a href='/Suman'>
                  <button onClick={reload}>Book Appointments</button>
              </a>
                          
                      </span>

                  </div>
      </div>
        </div>
       
        
       
       
    )
}
export default DoctorChoice