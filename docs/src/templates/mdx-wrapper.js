import { MDXProvider } from "@mdx-js/react"
import {
  Divider,
  StaticCategorySelector,
  StaticShopSelector,
} from "react-common"
import CodeBlock from "../components/CodeBlock"
import React from "react"

const getMode = (className = "") => {
  const [, mode] = className.match(/language-(\w+)/) || []
  return mode
}

const shortcodes = {
  Divider,
  StaticCategorySelector,
  StaticShopSelector,
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
  return <MDXProvider components={shortcodes}>{element}</MDXProvider>
}
