import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import Pills from '../components/pills'
import { formatPostDate, formatReadingTime } from '../utils/dates'

import './blog-listing.css'

const Blogs = ({ data: { allMdx } }) => (
  <Layout>
    <SEO />

    <Section>
      <h1>Articles</h1>
    </Section>

    {allMdx.nodes.map(post => (
      <Section key={post.fields.slug} name={post.fields.slug} centered>
        <Link to={post.fields.slug} className="blog-listing">
          <h2>{post.frontmatter.title}</h2>
          <p>
            {formatPostDate(post.frontmatter.date)}
            {` • ${formatReadingTime(post.timeToRead)}`}
          </p>
          <Pills items={post.frontmatter.categories} />
          <p>{post.frontmatter.description}</p>
        </Link>
        <hr />
      </Section>
    ))}
  </Layout>
)

export default Blogs

export const query = graphql`
  query Blogs {
    allMdx(
      filter: { fields: { published: { eq: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        timeToRead
        frontmatter {
          title
          description
          categories
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
