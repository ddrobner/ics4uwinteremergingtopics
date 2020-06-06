import React from 'react'

export default () => {
  return(
    <div>
      <div style={{textAlign: "center"}}>
        <h1>
          A Brief History of AI and Machine Learning
        </h1>
        <h2>Source: <a href={"https://www.livescience.com/49007-history-of-artificial-intelligence.html"}>https://www.livescience.com/49007-history-of-artificial-intelligence.html</a></h2>
        <h2>Source: <a href={"https://en.wikipedia.org/wiki/Alan_Turing"}>https://en.wikipedia.org/wiki/Alan_Turing</a></h2>
      </div>
      <div style={{textAlign: "center", paddingLeft: "10%", paddingRight: "10%"}}>
        <p>
          The beginning of modern artificial intelligence can be traced back to philosopher's attempts to describe human
          thinking as a system. The field of "Artificial Intelligence" wasn't founded until 1956, however, at a conference
          at Dartmouth College in New Hampshire. Now however, let's discuss some influential figures in the history
          of Artificial Intelligence.
        </p>
      </div>
      <div style={{textAlign: "center", paddingTop: "5%"}}>
        <h2>
          Alan Turing
        </h2>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/a/a1/Alan_Turing_Aged_16.jpg"} style={{width: 150}} alt={"Alan Turing"}/>
        <p>
          One of the things that Alan Turing would become known best for in the field of ML and AI is the turing test.
          This is a test used to determine if a computer can act and think like a human. If something can pass this test,
          then it opens pandora's box in terms of ethical issues, but would be a tremendous milestone.
        </p>
      </div>
      <div style={{textAlign: "center", paddingTop: "5%"}}>
      <h2>
        Marvin Minsky
      </h2>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Marvin_Minsky_at_OLPCb.jpg/599px-Marvin_Minsky_at_OLPCb.jpg"} style={{width: 200}}/>
        <p>
          In the 1970's, Minsky helped develop what would become known as the "Society of Mind theory". The theory explains
          how what we call intelligence could be a product of the interaction of non-intelligent parts. This can be considered
          important because it helps differentiate between a truly "Artificial Intelligence" and something that is merely
          acting intelligent.
        </p>
      </div>
    </div>
  )
}