import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Section from '../components/section'
import ProjectListing from '../components/project-listing'

import projectData from '../../data/projects'

const Projects = () => (
  <Layout>
    <SEO />

    <Section centered>
      <ProjectListing projectData={projectData} />
    </Section>
  </Layout>
)

export default Projects
