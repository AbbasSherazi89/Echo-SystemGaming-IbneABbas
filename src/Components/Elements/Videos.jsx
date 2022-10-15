import React from 'react'

const Videos = () => {
  return (
    <>
      <div className="container-fluid py-5 bg-black">

      <div className="ratio ratio-16x9">
                <iframe
                 src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
                  title="Game video"
                  allowFullScreen
                />
              </div>
        
      </div>
    </>
  )
}

export default Videos
