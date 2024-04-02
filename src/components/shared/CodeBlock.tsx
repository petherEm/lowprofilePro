'use client'

import { CopyBlock } from 'react-code-blocks'

type MyCodeComponentProps = {
  code: string
  language: string
  showLineNumbers: boolean
  wrapLines?: boolean
}

function MyCodeComponent(props: MyCodeComponentProps) {
  return (
    <CopyBlock
      text={props.code}
      language={props.language}
      showLineNumbers={props.showLineNumbers}
      wrapLines
    />
  )
}

export default MyCodeComponent
