import React, { useState, useEffect } from 'react';
import doctors from "./data/Data_doctor";
import '../css/Doctor.css';
import { Link } from 'react-router-dom';

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

const Doctors = () => {
    return (
       
        <div className="containerdoc">
             <div className='card'>
                        <span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJCPwBQr4AUdY_AUeW1P1t7GxmTwGXNhggAQ&usqp=CAU' alt={"dr asthana image"} className='person-img' />
                            <h4>Name: Dr.Asthana</h4>
                            <h4>Speciality:panic laugh </h4>
                       
                <a href='/dataAsthana'>
                    <button onClick={reload}>View Appointments</button>
                </a>
                            
                        </span>

                    </div>
                    <div className='card'>
                        <span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hON10pAoKJvJKJOFvVIycsI6v5dIhtfN8A&usqp=CAU' alt={"dr. circuit image"} className='person-img' />
                            <h4>Name: Dr.Circuit</h4>
                            <h4>Speciality:Knife Skills </h4>
                       
                <a href='/dataCircuit'>
                    <button onClick={reload}>View Appointments</button>
                </a>
                            
                        </span>

                    </div>
                    <div className='card'>
                        <span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG4osymdip3f32TEEeiWlUtO8KDBTsuKLIcg&usqp=CAU'alt={"dr murli prasad"} className='person-img' />
                            <h4>Name: Dr.Murli Prasad Sharma</h4>
                            <h4>Speciality:Jadu ki Jhappi </h4>
                       
                <a href='/dataMunna'>
                    <button onClick={reload}>View Appointments</button>
                </a>
                            
                        </span>

                    </div>
                    <div className='card'>
                        <span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREKRCvvhud95677Owx8mun_n5cmwZ4iqSnXA&usqp=CAU' alt={"dr suman image"} className='person-img' />
                            <h4>Name: Dr.Suman</h4>
                            <h4>Speciality:multiple personality disorder </h4>
                       
                <a href='/dataSuman'>
                    <button onClick={reload}>View Appointments</button>
                </a>
                            
                        </span>

                    </div>
        </div>
       
       
    )
}
export default Doctors