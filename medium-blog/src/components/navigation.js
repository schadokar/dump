import React from 'react'
import { Link } from 'gatsby'
import Section from './section'

import './navigation.css'

const Navigation = () => (
  <Section centered>
    <div className="navigation-body">
      <h1>
        <Link to="/">
          <span
            aria-label="contour integral"
            role="img"
            className="navigation-home"
          >
            &#8750; Shubham Chadokar
          </span>
        </Link>
      </h1>

      <Link to="/blog">
        <span aria-label="writing hand" role="img" className="navigation-link">
          &#128221; Articles
        </span>
      </Link>

      <Link to="/projects">
        <span
          aria-label="a rocket blasting off"
          role="img"
          className="navigation-link"
        >
          🚀 Projects
        </span>
      </Link>
    </div>
  </Section>
)

export default Navigation
