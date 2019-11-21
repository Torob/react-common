import React from "react"

import Layout from "../components/layout"
import CodeBlock from "../components/CodeBlock"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="text-right">
        <h3>اضافه کردن به پروژه</h3>
        <p>
          جهت اضافه کردن کامپوننت‌ها کامن به پروژه دیگر لازم است به صورت زیر عمل
          کنید:
        </p>
        <CodeBlock
          codeText={`yarn add https://github.com/Torob/react-common.git#<COMMITSHA>`}
        />
        <h3>لینک گیت هاب</h3>
        <p>
          برای دسترسی به پروژه میتوانید از این{" "}
          <a href="https://github.com/Torob/react-common">لینک</a> استفاده کنید.
        </p>
      </section>
    </Layout>
  )
}
export default IndexPage
