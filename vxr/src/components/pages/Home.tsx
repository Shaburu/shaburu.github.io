import { Link } from "react-router-dom";

export const Home = () => {
  
  return (
  
<div className="blogBody">
<div > <h1>
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
        Altough this might seem random but the UX is designed such that
        you read heading first then the pig then the tech stack and finally this.
        aka <b>Joe Sugarman's Slippery Slope.</b> 
        Below are my Projects and lastly my links and stuff. 
        I one day wish to Expand the human society to Type V Civilization
        on the Kardashev Scale. Till then i will work on NeRFs, Agri-Tech, ML and OpenCV
        also a lot of stupid projects along the way! like my Annoyinator&#8482; (coming soon)
        which let's you sign up any email to 1287 Newsletters 
        <sup>  &#9834;doofenshmirtz evil incorporated&#9835;</sup>
        </div>

 <div className="item2">
  <p>TECH STACK</p>
  <div>Adobe Suite<br/></div>
  <div>MERN &#x269B;<br/></div>
  <div>OpenCV<br/></div>
  <div>Python<br/></div>
  <div>PyTorch&#10024;</div>
  <div>Three.Js<br/></div>
  <div>Unity<br/></div>
  
 </div>
      </div>
        
      
</div>

<div className="restBody">


<h2><Link to="/blog">Blogs</Link></h2>

<div className="content">
    
        <Link to="/blog">
        <div>
          <img src="\mushHabitat.jpg" />
          <p>
          <h3>
          Computer Vision and Machine Learning to build an Advanced Mushroom Habitat  
          </h3>
          The primary objective of this research is to uncover the optimal growth conditions for various mushroom species. Through a meticulous process of cultivating mushrooms on agar plates, we aim to identify the specific temperature, humidity, light, and nutrient levels that promote their robust development. By meticulously documenting each growth stage and comparing the effects of varying factors, we hope to refine cultivation techniques for both culinary and medicinal mushroom varieties.
          </p>
        </div>
        </Link>

        <Link to="/blog">
        <div>
          <img src="\face.gif" />
          <p>
          <h3> Augmented Reality Development using SparkAR and JavaScript!</h3>  
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Link>
        
        <Link to="/blog">
        <div>
          <img src="\face.gif" />
          <p>
          <h3> Project</h3>  
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Link>

        
        <Link to="/blog">
        <div>
          <img src="\face.gif" />
          <p>
          <h3> Project</h3>  
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Link>
        
        
       
        
  </div>

      <h3 className="cleoTit"><Link to="/mushroom" >Mushroom Chamber &#128279;</Link></h3>
      <div className="cleopatra">
        <p className="cleo"><Link to="/mushroom">
          <img src="/mush.gif" alt="cleopatra an ai virtual assistant with purple hair and celestial body" />
          </Link></p>
        <p className="cleoWord">
          <h3>OPEN-SOURCED, PLEASE CONTRIBUTE</h3>
          A platform for enthusiasts, hobbyists, and researchers to cultivate mushrooms with precision and efficiency.
          We're designing a state-of-the-art chamber that leverages cutting-edge technology to provide the optimal environment for mushroom growth. 
          And here's the exciting part: it's open-source. This means that every step of our design, every bit of our code, will be freely available to all. 
          Together, we can make mushroom cultivation accessible to anyone with a passion for fungi.
          Democratizing mushroom cultivation. Your contributions will help refine the design, 
          improve the technology, and ensure that this invaluable knowledge reaches everyone who's eager to learn.
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScL5KAuP0R7oZApncHH1aanYFCK9dT5PTG2j7pawV1wrGUd6w/viewform?embedded=true" width="300px" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
       </p>
      </div>
{/* <h2><Link to="/blog" className="restBody">Blogssss</Link></h2>
<br/>
<h2><Link to="/contact" className="restBody">Contactss</Link></h2> */}

<div className="contactLinksHome">
    <a href="https://www.instagram.com/shaburux/">INSTAGRAM</a> 
    <a href="https://twitter.com/ShaburuX">TWITTER</a> 
    <a href="https://www.youtube.com/@Shaburu69/featured">YOUTUBE</a> 
    <a href="https://www.github.com/shaburu/">GITHUB</a>
    
</div>
</div>


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