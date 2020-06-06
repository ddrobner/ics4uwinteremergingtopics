import React from 'react'

export default () => {
  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h1>
          How Machine Learning Works
        </h1>
      </div>
      <div style={{textAlign: "center", marginLeft: "30%", marginRight: "30%"}}>
        <p>
          There are two 'techniques' that machine learning uses: supervised learning, which trains a model on known input
          and output data so that it can predict future outputs, and unsupervised learning, which finds patterns or
          intrinsic structures in input data.
        </p>
      </div>
      <div style={{textAlign: "center", marginRight: "25%", marginLeft: "25%"}}>
        <h2>
          Supervised Learning
        </h2>
        <p>
          Supervised learning builds a model that makes predictions based on previous data when there is uncertainty.
          A supervised learning algorithm takes a known set of input data, and known responses to the data, and then
          is trained to provide responses based on new, unique input. Classification techniques predict discrete responses,
          an example of this would be if an email is spam or not. Regression techniques, however,  predict continuous
          responses such as fluctuation in temperature.
        </p>
      </div>
      <div style={{textAlign: "center", marginLeft: "25%", marginRight: "25%"}}>
        <h2>
          Unsupervised Learning
        </h2>
        <p>
          Unsupervised learning is used to find patterns or structures in data. It's most common use is to draw inferences
          from datasets. Clustering is the most common unsupervised technique. Clustering finds patterns in data, and sorts
          them into 'clusters'. It has applications including gene sequencing, and object recognition.
        </p>
      </div>
      <div style={{textAlign: "center"}}>
        <img src={"https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/Scatter-Plot-of-Synthetic-Clustering-Dataset-With-Points-Colored-By-Known-Cluster.png"} style={{width: 500}}/>
        <p>An example of clustered data</p>
      </div>
    </div>
  )
}