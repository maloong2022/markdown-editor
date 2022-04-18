import React, { useCallback, useState } from 'react'
import Editor from './editor'
import Preview from './preview'
import './app.css'

const App: React.FC = () => {
  const [doc, setDoc] = useState<string>('# Welcome to MLME!\n## MLME is an open-source Markdown Editor!\n')

  const handleDocChange = useCallback(newDoc => {
    setDoc(newDoc)
  }, [])


  return (
    <div className='app'>
      <Editor onChange={handleDocChange} initialDoc={doc} />
      <Preview doc={doc}/>
    </div>
  )
}

export default App
