import SyntaxHighlighter from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '../Icons'
import { getLinkById } from '../../utils/constants'
import style from './MethodCard.module.css'

export default function MethodCard ({ id }) {
  const getLink = getLinkById(id)

  // Copy the info in the SyntaxHighlighter
  const handleClipboardLink = () => {
    navigator.clipboard.writeText(getLink).catch(() => {})
  }

  return (
    <div id={id} >
    <h3> {id} </h3>
    <div className={style.container} >
      <div className={style.containerHead} >
      <div className={style.uri} >
        URI
      </div>
      <div>
        <button
        onClick={handleClipboardLink}>
          <CopyIcon />
        </button>
      </div>
      </div>
      <SyntaxHighlighter language="jsx" style={okaidia} className={style.syntax} >
        {getLink}
      </SyntaxHighlighter>
    </div>

  </div>

  )
}
