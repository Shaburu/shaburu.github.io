import { useState } from "react";

export const Mushroom = () => {
  const [isAgarShown, setIsAgarShown] = useState(false);
  const [isSpawnShown, setIsSpawnShown] = useState(false);
  const [isBulkShown, setIsBulkShown] = useState(false);

  const handleAgarClick = () => {
    setIsAgarShown(true);
    setIsSpawnShown(false);
    setIsBulkShown(false);
  };

  const handleSpawnClick = () => {
    setIsAgarShown(false);
    setIsSpawnShown(true);
    setIsBulkShown(false);
  };

  const handleBulkClick = () => {
    setIsAgarShown(false);
    setIsSpawnShown(false);
    setIsBulkShown(true);
  };

  return (
    <div className="mushroomBody">    
    <h2>Read Before Submission</h2>
    <b>Image Clarity:</b> Ensure that the images you submit are of high clarity and resolution. Clear and well-lit images will help improve the accuracy of the machine learning model.
    <br/> <br/>
    <b>Artifacts-Free:</b> Please make sure that the images are free from any artifacts, distortions, or visible flaws. Artifacts can affect the quality of the dataset and the model's performance.
    <br/> <br/>
    <b>Multiple Growth Stages:</b> We encourage you to submit images of your subject at multiple growth stages. Capturing images throughout the growth cycle will provide a comprehensive dataset for better analysis.
    <br/> <br/>
    <b>Consistency:</b> For accurate results, try to maintain consistency in the angle, lighting, and background of your images. This consistency will contribute to a more reliable machine learning dataset.
    <br/> <br/>
    <b>Varied Perspectives:</b> While maintaining consistency, also consider capturing images from various angles and perspectives. This diversity will enhance the model's ability to generalize.
    <br/> <br/>
    <b>Labeling (If Applicable):</b> If there are specific growth stages or features you want to highlight, you can provide brief labels or descriptions for each image. This will help in accurate data annotation.
    <br/> <br/>
    <b>File Naming:</b> If possible, name your image files descriptively. This can include information like growth stage, date, or any relevant details. This naming convention can simplify data management.
    <br/> <br/>
    <b>Submission Frequency: </b>Feel free to submit images at different intervals during the growth cycle. This will help in capturing changes and patterns over time.
    <br/> <br/>
    <b>Data Privacy:</b> Rest assured that your submitted images will be used solely for the purpose of training the machine learning model. Your privacy and data security are of utmost importance to us.
    <br/> <br/>
    <b>Contributor Recognition:</b> If you wish, you can include your name or a pseudonym when submitting images. This way, if your images contribute significantly to the dataset, you can be recognized for your valuable contribution.
    <br/> <br/>
    <b>Submission Guidelines:</b> Follow the submission guidelines provided in the form for uploading images. This will ensure smooth processing and incorporation into the dataset.
    <br/><br/>
Thank you for your valuable contributions to our machine learning project. Your dedication in providing high-quality images will help us develop an accurate and reliable model. If you have any questions or need further assistance, please don't hesitate to contact us.
      <div className="mushroomButton">
        
        <button onClick={handleAgarClick} >Agar Plates</button>
        <button onClick={handleSpawnClick}>Spawn Substrate</button>
        <button onClick={handleBulkClick}>Bulk Substrate</button>
      </div>
      <div className={isAgarShown ? "display-block" : "display-none"}>
        <h2>Agar Submission</h2>
        <b>Please make sure to read instructions before submission</b>
       <br/>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScL5KAuP0R7oZApncHH1aanYFCK9dT5PTG2j7pawV1wrGUd6w/viewform?embedded=true" width="100%" height="780"  >Loading…</iframe>
      </div>
      <div className={isSpawnShown ? "display-block" : "display-none"}>
        <h2>Spawn Substrate Submission</h2>
        <b>Please make sure to read instructions before submission</b>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebmIlITL1XUVNtJ1jTky3mpR0UOrqkgVabgbsTqdWAzFhRnA/viewform?embedded=true" width="100%" height="780" >Loading…</iframe>
      </div>
      <div className={isBulkShown ? "display-block" : "display-none"}>
        <h2>Bulk Substrate Submission</h2>
        <b>Please make sure to read instructions before submission</b>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfer5AYJYjZBY8929VgwPg7aeVOARLVOGei1bgkvjLQ7LoZLA/viewform?embedded=true" width="100%" height="780" >Loading…</iframe>
      </div>
    </div>
  );
};
