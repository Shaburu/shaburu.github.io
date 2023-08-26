

import {Link} from 'react-router-dom';
export const Blog = () => {
  return (

<div className="blogBodyTSX">
<h1>BLOGS</h1>
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
</div>
  );
};