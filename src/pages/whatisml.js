import React from 'react';
import mlimg from './img/ml.jpg'

export default () => {
  return(
    <div>
    <div style={{textAlign: 'center'}} id={"header"}>
      <h1> What Is Machine Learning? </h1>
      <div>
        <h2>
          Definition
        </h2>
        {/* Beginning of first text and image block - yikes!*/}
        <div>
          <div style={{textAlign: 'center', width: "50%"}}>
            <p style={{marginLeft: "25%", marginTop: "10%"}}>
              To define what Machine Learning is, one must first define what AI, or Artificial Intelligence is. As defined by
              Britannica (as they can define it more concisely and better than I can) "Artificial intelligence (AI), the
              ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings".
              Machine learning (commonly shortened to ML), as defined by Britannica is "Machine learning, in artificial
              intelligence (a subject within computer science), discipline concerned with the implementation of computer
              software that can learn autonomously." So in short, ML is when computers can effectively learn on their own,
              training an AI model with much less human input than traditional AI. This is huge because usually this takes
              a <b> LOT </b> of work.
            </p>
          </div>
          <div style={{maxWidth: "50%", float: "right", marginRight: "25%", marginTop: "-11%"}}>
            <img style={{width: 389, height: 219}} src={mlimg}/>
          </div>
        </div>
        {/* End of first text and image block */}
      </div>
    </div>
      <div style={{textAlign: "center", paddingTop: "3%"}}>
      </div>
    </div>
)
}
