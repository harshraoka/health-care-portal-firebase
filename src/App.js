// Libraries
import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// HOC

import Landingpage from './components/Landingpage'
import Doctors from './components/Doctor'
import CovidData from './components/Covid'

import DoctorChoice from './components/DoctorChoice'

//input forms
import Asthana from './components/InputForms/Asthana'
import Munna from './components/InputForms/Munna'
import Circuit from './components/InputForms/Circuit'
import Suman from './components/InputForms/Suman'

//data render pages
import DataAsthana from './components/readData/DataAsthana'
import DataMunna from './components/readData/DataMunna'
import DataCircuit from './components/readData/DataCircuit'
import DataSuman from './components/readData/DataSuman'


const App = () => {
  
  return (
    <main>

      <section>
      
        
         <Route path="/" exact component={Landingpage}/> 
      
        <Route path="/doctorlist" exact component={Doctors}/>
        <Route path="/DoctorChoice" exact component={DoctorChoice}/>
        <Route path="/Asthana" exact component={Asthana}/>
        <Route path="/Munna" exact component={Munna}/>
        <Route path="/Circuit" exact component={Circuit}/>
        <Route path="/Suman" exact component={Suman}/>
        <Route path="/dataAsthana" exact component={DataAsthana}/>
        <Route path="/dataMunna" exact component={DataMunna}/>
        <Route path="/dataCircuit" exact component={DataCircuit}/>
        <Route path="/dataSuman" exact component={DataSuman}/>
        <Route path="/CovidData" exact component={CovidData}/>

  
      
      </section>

    </main>
  )
}
export default App