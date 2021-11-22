import React from "react";
import'./FaceRecognition.css';


const FaceRecognition=({imageUrl,box})=>{
    return (
      <div className='center ma'>
          <div className='absolute mt2'>
          <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
          { box.map((item, index) => (
                    <div className='bounding-box' style={{top: item.toprow, right: item.rightcol, bottom: item.bottomrow, left: item.leftcol}} key={index}></div>
                ))}
                {console.log(box)}
          </div>
      </div>
    );
}
export default FaceRecognition;



