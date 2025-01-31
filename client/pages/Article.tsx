import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useEffect, useRef, useState } from 'react'
import editorConfig from '../editor/EditorConfig'
import { InlineEditor } from 'ckeditor5'
import { useTextContent, useAllTextContent } from '../hooks/useTextContent'

function Article() {
  const { isPending, isError, data: articleText } = useTextContent(9)
  const editorContainerRef = useRef(null)
  const editorRef = useRef(null)
  const [isLayoutReady, setIsLayoutReady] = useState(false)
  const [editorData, setEditorData] = useState('')
  const [isReady, setIsReady] = useState(false)
  const textContent = useAllTextContent()

  useEffect(() => {
    if (!isPending) {
      setIsReady(true)
    }
  }, [isPending])

  useEffect(() => {
    setIsLayoutReady(true)

    return () => setIsLayoutReady(false)
  }, [])

  const handleSave = async (text: string) => {
    await textContent.add.mutate({ text })
  }

  if (isPending) {
    return <p>Loading....</p>
  }
  if (isError) {
    return <p>Couldn&apos;t load article</p>
  }

  return (
    <div>
      <div className="main-container">
        <div
          className="editor-container editor-container_inline-editor"
          ref={editorContainerRef}
        >
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {isLayoutReady && isReady && (
                <CKEditor
                  editor={InlineEditor}
                  config={editorConfig}
                  // disabled={true}
                  data={articleText.text}
                  onChange={(event, editor) => {
                    const data = editor.getData()
                    setEditorData(data)
                  }}
                />
              )}
              <button onClick={() => handleSave(editorData)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
