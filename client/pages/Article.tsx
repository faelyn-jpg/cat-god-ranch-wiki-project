import { CKEditor } from '@ckeditor/ckeditor5-react'
import { useEffect, useRef, useState } from 'react'
import editorConfig from '../editor/EditorConfig'
import { InlineEditor } from 'ckeditor5'

function Article() {
  const editorContainerRef = useRef(null)
  const editorRef = useRef(null)
  const [isLayoutReady, setIsLayoutReady] = useState(false)

  useEffect(() => {
    setIsLayoutReady(true)

    return () => setIsLayoutReady(false)
  }, [])

  return (
    <div>
      <div className="main-container">
        <div
          className="editor-container editor-container_inline-editor"
          ref={editorContainerRef}
        >
          <div className="editor-container__editor">
            <div ref={editorRef}>
              {isLayoutReady && (
                <CKEditor
                  editor={InlineEditor}
                  config={editorConfig}
                  disabled={true}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article
