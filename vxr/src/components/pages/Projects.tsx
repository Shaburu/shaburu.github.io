import { Link } from "react-router-dom";

export const Projects = () => {
  return (
  <div className="projects">
    <h3 className="cleoTit"><Link to="/mushroom" >Mushroom Chamber &#128279;</Link></h3>
      <div className="cleopatra">
        <p className="cleo"><Link to="/mushroom">
          <img src="/mush.gif" alt="cleopatra an ai virtual assistant with purple hair and celestial body" />
          </Link></p>
        <p className="cleoWord">
          A platform for enthusiasts, hobbyists, and researchers to cultivate mushrooms with precision and efficiency.
          We're designing a state-of-the-art chamber that leverages cutting-edge technology to provide the optimal environment for mushroom growth. 
          And here's the exciting part: it's open-source. This means that every step of our design, every bit of our code, will be freely available to all. 
          Together, we can make mushroom cultivation accessible to anyone with a passion for fungi.
          Democratizing mushroom cultivation. Your contributions will help refine the design, 
          improve the technology, and ensure that this invaluable knowledge reaches everyone who's eager to learn.
          {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScL5KAuP0R7oZApncHH1aanYFCK9dT5PTG2j7pawV1wrGUd6w/viewform?embedded=true" width="300px" height="300" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
       </p>
      </div>
    <br/>
    <h3 className="cleoTit"><a href="https://github.com/Shaburu/r3f-vite-starter#readme">CLEOPATRA &#128279;</a></h3>
      <div className="cleopatra">
        <p className="cleo"><a href="https://github.com/Shaburu/r3f-vite-starter#readme">
          <img src="/cleopatra.png" alt="cleopatra an ai virtual assistant with purple hair and celestial body" />
          </a></p>
        <p className="cleoWord">An AI Virtual Assistant that scrapes 
        the web to help you make better Purchasing decisions 
        <b> Built using Express, LangChain, Node.Js, OpenAI, Puppeteer, React, Tailwind, Three.Js</b>
       </p>
      </div>
  </div>
  );
};