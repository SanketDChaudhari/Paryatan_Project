import './App.css';
import { useState , useEffect } from "react";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from './MyComponents/About';
import MonumentInfo from './MyComponents/MonumentInfo';
import AllMonuments from './MyComponents/AllMonuments';
import Home from './MyComponents/Home';
import {api} from './index';
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import ScrollToTop from './MyComponents/ScrollToTop';
import ThreeDView from './MyComponents/ThreeDView';
import ThreeDViewer from './MyComponents/ThreeDViewer';

function App() {
  const [Data,setData]=useState([]);
  useEffect(()=>{
    const fetchFromApi = async() => {
      const {data} = await axios.get(`${api}/monument`);
      setData(data);
      // console.log(data);
    }
    fetchFromApi();
  },[])


  return (
    <div>
      
      <Router>
        <ScrollToTop/>
        <Header/>

        <Routes>
          <Route exact path="/" element={<Home Data={Data}/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/:monumentName" element={<MonumentInfo/>}></Route>
          <Route path="/AllMonuments" element={<><AllMonuments Data={Data}/></>}></Route>
          <Route path='/model' element={<ThreeDViewer/>}></Route>
        </Routes>
        
        <Footer/>

      </Router>
      
    </div>
  );
}

export default App;
