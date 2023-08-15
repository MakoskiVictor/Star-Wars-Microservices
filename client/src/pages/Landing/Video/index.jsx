import YouTube from 'react-youtube'

export function Video () {
  const handleOnReady = (event) => {
    event.target.playVideo() // Reproduce automáticamente el video
  }

  const opts = {
    height: '780',
    width: '1280',
    playerVars: {
      autoplay: 1
    }
  }

  return (
    <section>
      <YouTube videoId='5UnjrG_N8hU' opts={opts} onReady={handleOnReady} />
    </section>
  )
}
