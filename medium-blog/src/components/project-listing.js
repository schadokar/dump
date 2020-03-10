import React, { Component } from 'react'
import GitHubButton from 'react-github-btn'
import { Link } from 'gatsby'

import './project-listing.css'
class ProjectListing extends Component {
  render() {
    const { projectData } = this.props

    return (
      <div>
        <div className="project-header">
          <span aria-label="a rocket blasting off" role="img">
            🚀 Projects
          </span>
          <Link to="/">
            <span
              aria-label="backend index pointing left"
              role="img"
              className="project-back-to-home"
            >
              👈 back
            </span>
          </Link>
        </div>
        <hr />
        {projectData.map(project => (
          <div>
            <div className="project-data">
              {project.icon} {project.title}
              <span className="project-github-btn">
                <GitHubButton
                  href={project.source}
                  data-size="large"
                  data-show-count="true"
                >
                  Source
                </GitHubButton>
              </span>
            </div>
            <p>{project.description}</p>
            <hr />
          </div>
        ))}
      </div>
    )
  }
}

export default ProjectListing
