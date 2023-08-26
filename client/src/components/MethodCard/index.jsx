import SyntaxHighlighter from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyIcon } from '../Icons'
import { getLinkById, EXAMPLE_GET_ALL_CHARACTERS } from '../../utils/constants'

export default function MethodCard ({ id }) {
  const getLink = getLinkById(id)

  const exampleRequest = JSON.stringify(EXAMPLE_GET_ALL_CHARACTERS)

  const handleClipboardLink = () => {
    navigator.clipboard.writeText(getLink).catch(() => {})
  }

  /* const handleClipboardExample = () => {
    navigator.clipboard.writeText(getLink).catch(() => {})
  } */

  return (
    <div>
    <h3> {id} </h3>
    <div>
      <div>
      <div>
        URL
      </div>
      <div>
        <button
        onClick={handleClipboardLink}>
          <CopyIcon />
        </button>
      </div>
      </div>
      <SyntaxHighlighter language="jsx" style={okaidia}>
        {getLink}
      </SyntaxHighlighter>
    </div>

    <div>
      <div>
      <div>
        Example Response
      </div>
      <div>
        {/* <button
        onClick={handleClipboardExample}>
          <CopyIcon />
        </button> */}
      </div>
      </div>
      <SyntaxHighlighter language="javascript" style={okaidia}>
        {exampleRequest}
      </SyntaxHighlighter>
    </div>
  </div>

  )
}
