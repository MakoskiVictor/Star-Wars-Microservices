import style from './ExamplePost.module.css'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '../Icons'
import { EXAMPLE_POST_CHARACTERS } from '../../utils/constants'

export default function ExamplePost () {
  const handleClipboardExample = () => {
    navigator.clipboard.writeText(EXAMPLE_POST_CHARACTERS).catch(() => {})
  }

  return (
    <section>
      <div className={style.container} >
        <div className={style.containerHead} >
        <div className={style.example} >
          Schemas
        </div>
        <div>
          <button
          onClick={handleClipboardExample}>
            <CopyIcon />
          </button>
        </div>
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia} className={style.syntax} >
          {EXAMPLE_POST_CHARACTERS}
        </SyntaxHighlighter>
      </div>
    </section>
  )
}
