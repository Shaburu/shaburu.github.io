import React from "react";
import { Link } from "react-router-dom";
import { Blog,Contact, Projects } from ".";

export const Home = () => {
  return (
  
<div className="blogBody">
<div> <h1>
   Hey! I work with Computer Vision, AI and build
    IoTs & Fullstack WebApps.
   <img src='/melt.png' alt="Melting Face on Apple iOS 16.4" width="32" height="32" />
   </h1>
      
      <div className="message">
        🐷 Check out my <Link className="message" to="/blog"> Blogs </Link>
        for in-depth analysis of the
        <Link to="/projects" className="message"> Project's </Link>
        i build! Currently working with GANs, LLMs, NLPs, OpenCV and Three Js.
      </div>
      <div className="paraThree">
        <div className="item1">
        Altough this might seem random but the UX is designed such that you read this last
        aka <b>Joe Sugarman's Slippery Slope.</b> I delivered Twice as much info as i could have.
        Below are my Projects and lastly my links and stuff. 
        I one day wish to Expand the human society to Type V Kardeshev 
        Civilization. Till then i will work on NeRFs, Agri-Tech, Generative UIs
        and a lot of stupid projects along the way! like my Annoyinator&#8482; (coming soon)
        which let's you sign up any email to 1287 Newsletters 
        <sup>  &#9834;doofenshmirtz evil incorporated&#9835;</sup>
        <hr/>
        </div>

 <div className="item2">
  <p>TECH STACK</p>
  <div>Adobe Suite<br/></div>
  <div>MERN<br/></div>
  <div>OpenCV<br/></div>
  <div>Python<br/></div>
  <div>TensorFlow<br/></div>
  <div>Three.Js<br/></div>
  <div>Unity<br/></div>
 </div>
      </div>
        
      
</div>
<h2>Projects</h2>
<hr/><br/>
<Projects/>
<br/>
<hr/>
<h2>Blogssssssss</h2>
<hr/><br/>
<Blog/>

<hr/>
<h2>Contact</h2>
<hr/><br/>
<Contact/>
<br/>
<div className="message">
        <h1>
          BE YOURSELF AND DO THINGS YOU WANT TO DO.
          <br/><br/>
          DON'T BE A FAKE BITCH. HAVE FUN AND WORRY ABOUT HAPPINESS. ENJOY YOUR LIFE AND DON'T TAKE IT FOR GRANTED, DO AS MUCH AS YOU CAN BEFORE YOU DIE.
<br/><br/>
PUSSY, WHAT ARE YOU WAITING FOR? GET OUT THERE AND FALL DOWN SOME STAIRS!

        </h1>
      </div>

</div>
    );
};