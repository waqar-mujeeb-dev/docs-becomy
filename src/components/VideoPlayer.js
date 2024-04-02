import React from 'react'

export const VideoPlayer = ({url}) => {
  return (
    <div style={{ position: 'relative', height: 0, width: '100%', paddingBottom: '43.020833333333336%' }}>
      <iframe 
        src={url} frameBorder="0" 
        style={{position:"absolute",width:"100%", height:"100%",borderRadius:"6px",left:"0",top:"0"}} 
        allowFullScreen="">
      </iframe>
    </div>
  )
}
