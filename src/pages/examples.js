import React from 'react';

export default() => {
  return(
    <div>
      <div style={{textAlign: "center"}}>
        <h1>
          Examples of Machine Learning in the Real World
        </h1>
        {/* Google begin */}
        <div>
          <h2>
            Google
          </h2>
          <div>
            <div style={{textAlign: "left", marginLeft: "18%", marginRight: "50%"}}>
            <p>
              Pretty much all of Google's services use machine learning. Notice how Google Translate has vastly improved
              over the past while? This is because Google Translate uses something called SMT (Statistical Machine Translation),
              which means that it looks at documents that are already translated between two given languages, and analyzes
              the vocabulary, structure, grammar and many more things. This also allows it to convert between writing systems
              Another example of where google uses this is Google Assistant. Google Assistant uses ML for Natural Language
              Processing, Image Recognition, and many more things. It also takes advantage of Google's ML prowess in
              other areas too, for example bringing up the correct search results when you ask for something like
              restaurants near you, or who the prime minister of a certain country is.
            </p>
            </div>
            <div style={{float: "right", marginRight: "18%", marginTop: "-12%"}}>
              <img src={"https://9to5google.com/wp-content/uploads/sites/4/2016/09/screenshot_20160927-141653-e1475011476237.png"} style={{width: 330}}/>
            </div>
          </div>
        </div>
        {/* Google End */}
        {/* Alibaba Begin */}
        <div style={{textAlign: "center", paddingTop: "1%"}}>
          <div>
            <h2>
              Alibaba
            </h2>
            <h3>
              Source: <a href={"https://bernardmarr.com/default.asp?contentID=1536"}> Bernard Marr & Co. </a>
            </h3>
          </div>
          <div>
            One way that Alibaba uses AI and machine learning is on single's day, which is a chinese shopping holiday
            (on Nov. 11, or 11/11). They do this in a few ways. One way is with TMall smart selection, which uses AI
            to help recommend products to users, and then communicates to retailers to increase stock. Another way is with
            something called "Dian Xiaomi". "Dian Xiaomi" is an AI powered chatbot which can understand more than 90
            percent of customer’s queries according to Alibaba. It can even understand a customer's emotion! Alibaba also
            used robots to pack and ship packages, sometimes allowing for same day shipping.
          </div>
        </div>
        {/* Alibaba End */}
        {/*  */}
      </div>
    </div>
  )
}