import SyntaxHighlighter from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '../Icons'
import { EXAMPLE_GET_ALL_CHARACTERS } from '../../utils/constants'

export default function ExampleRequest () {
  /* const exampleRequest = JSON.stringify(EXAMPLE_GET_ALL_CHARACTERS) */

  const handleClipboardExample = () => {
    navigator.clipboard.writeText(EXAMPLE_GET_ALL_CHARACTERS).catch(() => {})
  }

  return (
    <section>
      <h2>Example Response</h2>
      <div>
        <div>
        <div>
          Example
        </div>
        <div>
          <button
          onClick={handleClipboardExample}>
            <CopyIcon />
          </button>
        </div>
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {EXAMPLE_GET_ALL_CHARACTERS}
        </SyntaxHighlighter>
      </div>
    </section>
  )
}
