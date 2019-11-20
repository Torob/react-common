import { MDXProvider } from "@mdx-js/react"
import { Divider } from "react-common"
import CodeBlock from "../components/CodeBlock"
import React from "react"

const getMode = (className = "") => {
  const [, mode] = className.match(/language-(\w+)/) || []
  return mode
}

const shortcodes = {
  Divider,
  pre: props =>
    React.isValidElement(props.children) ? (
      <CodeBlock
        codeText={props.children.props.children}
        mode={getMode(props.children.props.className)}
      />
    ) : (
      <pre {...props} />
    ),
}

export const wrapRootElement = ({ element }) => {
  console.log(element)
  return <MDXProvider components={shortcodes}>{element}</MDXProvider>
}
