import React from 'react'

export default () => {
  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h1>
          About This Site
        </h1>
      </div>
      <div style={{textAlign: "center", marginLeft: "25%", marginRight: "25%"}}>
        I decided to make this site using <a href={"https://github.com/react-static/react-static"}> React Static </a>.
        This was mainly because I made Team 3161's new scouting app, <a href={"https://github.com/frc3161/muninn"}> Muninn </a>,
        using React Native, so I already had some experience and I thought it would be good to help improve my react skills.
        I think however, react was really not designed for static sites like this, so ultimately it was more work than it
        was worth. It did however, save a lot of time with multiple pages, because all I had to do was write the html for the content
        of the pages, and it would apply the style automatically to all of them. It also has handy things like cooler urls (no .html),
        and dynamic pages which it won't optimize for static content (which I didn't use here). Overall I think the tool was just
        not fit for the task, but I was able to produce a website.
      </div>
    </div>
  )
}