import React, {useState,useRef} from 'react';
import './App.css';
import Left_bar from './components/Left_bar';
import Right_bar from './components/Right_bar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import Services from './components/Services'
import Portfolios from './components/Portfolios'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'

function App() {
  const refId = useRef([]);
  refId.Contact=[];
  refId.Home=[];
  refId.About=[];
  refId.Resume=[];
  refId.Services=[];
  refId.Skills=[];
  refId.Portfolios=[];
  refId.Testimonial=[];
  const handleClick = (item) =>{
    for (let key in refId) {
      var refKey = refId[key];
      if (key == item)
      {
      refKey.current?.scrollIntoView({behavior:'smooth'});
    }
    }
  }
  return (
    <div className="App">
      <Right_bar handleClick={handleClick}/>
      <Left_bar/>
      <Home ref={refId.Home}/>
      <About ref={refId.About}/>
      <Resume ref={refId.Resume}/>
      <Services ref={refId.Services}/>
      <Skills ref={refId.Skills}/>
      <Portfolios ref={refId.Portfolios}/>
      <Testimonial ref={refId.Testimonial}/>
      <Contact ref={refId.Contact}/>
    </div>
  );
}

export default App;
