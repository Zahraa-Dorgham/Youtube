import React from 'react'

function Suggestions() {
  let videoSrc = [
    {
      src: "https://www.youtube.com/embed/8nG3suuaYh0?si=pGxckOrabKZUplcq", 
      title: "WordPress Masterclass Intro", 
      subscribers:"90.8k subscribers"
    },
    { src: "https://www.youtube.com/embed/8nG3suuaYh0?si=pGxckOrabKZUplcq",
      title: "What Can You Do With WordPress? (Technically AND Legally) ", 
       subscribers: "90.8k subscribers" },
    { src: "https://www.youtube.com/embed/8nG3suuaYh0?si=pGxckOrabKZUplcq", 
      title: "How Much Does It Cost To Build A Website With WordPress?", 
      subscribers: "90.8k subscribers" },
    {
      src: "https://www.youtube.com/embed/8nG3suuaYh0?si=pGxckOrabKZUplcq",
      title: "How Much Does It Cost To Build A Website With WordPress?",
      subscribers: "90.8k subscribers"
    }
  ];
  return (
    <div className='sugg'>
      {videoSrc.map((video, index) => (
        <div key={index}>
          <iframe width="250" height="150" 
            src={video.src} 
            title={video.title} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
          <h5>{video.title}</h5>
          <p>{video.subscribers}</p>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
