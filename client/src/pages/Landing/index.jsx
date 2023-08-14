import YouTube from 'react-youtube'

export default function Landing () {
  const handleOnReady = (event) => {
    event.target.playVideo() // Reproduce automáticamente el video
  }

  const opts = {
    height: '780',
    width: '1280'
  }

  return (
    <>
      <h1>Landing Page</h1>
      <YouTube videoId='5UnjrG_N8hU' opts={opts} onReady={handleOnReady} />

    </>
  )
}
