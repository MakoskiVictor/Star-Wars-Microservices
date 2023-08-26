import SyntaxHighlighter from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '../Icons'
import { EXAMPLE_GET_ALL_CHARACTERS } from '../../utils/constants'
import style from './ExampleRequest.module.css'

export default function ExampleRequest () {
  // Copy the info in the SyntaxHighlighter
  const handleClipboardExample = () => {
    navigator.clipboard.writeText(EXAMPLE_GET_ALL_CHARACTERS).catch(() => {})
  }

  return (
    <section>
      <h2>Example Response</h2>
      <div className={style.container} >
        <div className={style.containerHead} >
        <div className={style.example} >
          Example
        </div>
        <div>
          <button
          onClick={handleClipboardExample}>
            <CopyIcon />
          </button>
        </div>
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia} className={style.syntax} >
          {EXAMPLE_GET_ALL_CHARACTERS}
        </SyntaxHighlighter>
      </div>
    </section>
  )
}
