import YouTube from 'react-youtube'

export function Video () {
  const handleOnReady = (event) => {
    event.target.playVideo() // Reproduce automáticamente el video
  }

  const opts = {
    height: '780',
    width: '1280',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }

  return (
    <section>
      <YouTube videoId='5UnjrG_N8hU' opts={opts} onReady={handleOnReady} />
    </section>
  )
}
