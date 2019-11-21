/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col, Nav } from "react-bootstrap"

import Header from "./header"
import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"

const Layout = ({ children, pathName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const items = data.allMdx.edges.map(p => ({
    title: p.node.frontmatter.title,
    slug: p.node.fields.slug,
  }))

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" style={{ maxWidth: "unset" }}>
        <Row>
          <Col xs={3}>
            <Nav variant="pills" className="flex-column" activeKey={pathName}>
              {items.map(p => (
                <Nav.Item key={p.slug}>
                  <Nav.Link as={Link} href={p.slug} to={p.slug}>
                    {p.title}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
          <Col xs={9}>{children}</Col>
        </Row>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pathName: PropTypes.string.isRequired,
}

Layout.defaultProps = {
  pathName: "",
}

export default Layout
