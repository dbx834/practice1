// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'
// import PropTypes from 'prop-types'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

import Division from '@bodhi-project/components/lib/Division'
import '@bodhi-project/antrd/lib/just-futura/3.19.3/row/style/css'
import '@bodhi-project/antrd/lib/just-futura/3.19.3/col/style/css'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import Link from '../../Link'

import './style.less'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Images
// ----------------------------------------------------------------------------
export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logos/shift-education-logo-bw.png" }) {
      ...max900
    }
    bbLogo: file(relativePath: { eq: "logos/brilliant-blue-logo-bw.png" }) {
      ...max900
    }
    epPogo: file(relativePath: { eq: "logos/eco-press-logo-bw.png" }) {
      ...max900
    }
    hfrLogo: file(relativePath: { eq: "logos/hill-forest-river-logo-bw.png" }) {
      ...max900
    }
    isLogo: file(relativePath: { eq: "logos/intentional-spaces-logo-bw.png" }) {
      ...max900
    }
    cisfglogo: file(relativePath: { eq: "logos/cisfglogo.png" }) {
      ...max900
    }
    dmilogo: file(relativePath: { eq: "logos/dmilogo.png" }) {
      ...max900
    }
    bodhiprojectlogo: file(relativePath: { eq: "logos/bodhiprojectlogo.png" }) {
      ...max900
    }
    lwlogo: file(relativePath: { eq: "logos/lwlogo.png" }) {
      ...max900
    }
  }
`

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/**
 * [Person description]
 * @type {Object}
 */
const Person = ({ photo, name, children, designation }) => (
  <div className="person">
    {/*<div className="photo">
      <Img
        fluid={photo.childImageSharp.fluid}
        title="Shift Education"
        alt="Shift Education"
      />
    </div>*/}
    <div className="text">
      {typeof designation !== 'undefined' ? (
        <Fragment>
          <h3 className="has-designation">
            <span>{name}</span>
          </h3>
          <h4>
            <span>{designation}</span>
          </h4>
        </Fragment>
      ) : (
        <h3>
          <span>{name}</span>
        </h3>
      )}
      {children}
    </div>
  </div>
)

/**
 * [description]
 * @param  {[type]} options.photo    [description]
 * @param  {[type]} options.name     [description]
 * @param  {[type]} options.children [description]
 * @return {[type]}                  [description]
 */
const Project = ({ photo, name, tagline, to }) => (
  <Link className="project" to={to}>
    <div className="photo">
      <Img
        fluid={photo.childImageSharp.fluid}
        title="Shift Education"
        alt="Shift Education"
      />
    </div>
    <div className="text">
      <div>
        <h3>
          <span>{name}</span>
        </h3>
        <h4>
          <span>{tagline}</span>
        </h4>
      </div>
    </div>
  </Link>
)

/** HeroBox */
const HeroBox = props => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <div className="small-default-container">
            <div className="cover">
              <div className="banner">
                <Img
                  fluid={data.logo.childImageSharp.fluid}
                  title="Shift Education"
                  alt="Shift Education"
                />
              </div>
              <div className="abstract">
                <h1>
                  <span>Shift Education</span>
                  <small>towards greater light</small>
                </h1>
                <p>
                  <span className="big">
                    Shift Education was founded in 2018 with the mission to
                    enable greater depth and authenticity in schools.
                  </span>
                </p>
                <h2>
                  <span>About</span>
                </h2>
                <Division>
                  <div>
                    <p>
                      <span>
                        We created Shift Education in 2018 with a clear vision:
                        to reinvent schools. We are working on innovations in
                        the domains of education technology, curriculums,
                        processes and systems, community engagement, and human
                        connection.
                      </span>
                    </p>
                    <p>
                      <span>
                        We have dedicated the last two years and continue in our
                        quest to deeply understand the challenges of a school at
                        the grassroots level. Through small research studies and
                        engaging with different stakeholders, we continue to
                        grow and evolve in our understanding and capacity to
                        respond to contemporary challenges in a school system.
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <span>
                        Presently, we are working with a small group of schools
                        in India towards positive transformation to improve the
                        learning attainments of children.
                      </span>
                    </p>
                    <p>
                      <span>
                        We invite explorations and collaborations from
                        like-minded individuals and groups to build research and
                        create unique solutions to critical challenges such as
                        early learning, technology in education, community
                        engagement, inclusion, classroom instruction methods,
                        school systems, and system governance.
                      </span>
                    </p>
                  </div>
                </Division>
                <h2>
                  <span>Our Projects</span>
                </h2>
                <Division>
                  <div>
                    <Project
                      name="True Paradigm"
                      tagline="Depth and authenticity in edtech"
                      photo={data.bbLogo}
                      to="https://www.trueparadigm.co/"
                    />
                    <Project
                      name="Intentional Spaces"
                      tagline="Spaces made with love and care"
                      photo={data.isLogo}
                      to="https://www.intentionalspaces.co/"
                    />
                  </div>
                  <div>
                    <Project
                      name="Eco Press"
                      tagline="Conscious design and publishing"
                      photo={data.epPogo}
                      to="https://www.ecopress.co/"
                    />
                  </div>
                </Division>
                <h2>
                  <span>Team</span>
                </h2>
                <Person
                  photo={data.logo}
                  name="Priyanka Bhatia"
                  designation="Co-Founder, Research, Development, Implementation"
                >
                  <p>
                    <span>
                      Studied at University of Manchester and Strathclyde
                      University. Focus on digital education practices in the
                      Indian context. Currently edtech counselor at K12 schools.
                    </span>
                  </p>
                </Person>
                <Person
                  photo={data.logo}
                  name="Pranav Kumar"
                  designation="Co-Founder, Research, Design, Development"
                >
                  <p>
                    <span>
                      Studied at Bangalore University and University of
                      Copenhagen. Walked from Kanyakumari to Kashmir with Walk
                      of Hope. Focus on research, design and development.
                    </span>
                  </p>
                </Person>
                <Person
                  photo={data.logo}
                  name="Neha Jhunjhunwala"
                  designation="Co-Founder, Finance, Implementation"
                >
                  <p>
                    <span>
                      Studied at Bangalore University, Guru Nanak Dev University
                      and Victoria University. Background in banking and sports
                      management. Holds a black belt in taekwondo. Played
                      competitive martial arts, and tennis at the national
                      level. Focus on women empowerment and bringing initiatives
                      to rural schools.
                    </span>
                  </p>
                </Person>
                <Person
                  photo={data.logo}
                  name="Mitali Luthra"
                  designation="Apprentice, Design, Media, Outreach"
                >
                  <p>
                    <span>
                   Bio coming soon
                    </span>
                  </p>
                </Person>
                <Person
                  photo={data.logo}
                  name="Nisha"
                  designation="Apprentice, Design, Development, Media, Outreach"
                >
                  <p>
                    <span>Bio coming soon.</span>
                  </p>
                </Person>

                <h2>
                  <span>Mentors and Advisors</span>
                </h2>
                <Person
                  photo={data.logo}
                  name="Deepa Dogra"
                  designation="Mentor, advisor, investor"
                >
                  <p>
                    <span>
                      Studied at Delhi University, CIEFL and University of
                      Cambridge. Research on teaching English language in Indian
                      classrooms. 10 years as principal at Ashoka Hall,
                      Ranikhet. Currently academic director of Cambridge
                      International Schools.
                    </span>
                  </p>
                </Person>
                <Person
                  photo={data.logo}
                  name="Dr. Brijesh Kumar"
                  designation="Advisor"
                >
                  <p>
                    <span>
                      Studied at Kurukshetra University and IIFT. Served the
                      government for 20 years and then turned entrepreneur.
                      Heads Digital Media Initiatives right now. Also advises
                      policy makers on edtech.
                    </span>
                  </p>
                </Person>
                <Person
                  photo={data.logo}
                  name="Ajay Bhatia"
                  designation="Investor"
                >
                  <p>
                    <span>
                      Started his first company at 19. Now the owner of a
                      multi-national company. Created the first girls-only and
                      IB World school in Punjab.
                    </span>
                  </p>
                </Person>
                <Person photo={data.logo} name="Sri M">
                  <p>
                    <span>
                      Sri M is a spiritual guide, social reformer and
                      educationist. He is our guide and mentor and has
                      profoundly influenced our life and work.
                    </span>
                  </p>
                </Person>
                <h2>
                  <span>Contact Us</span>
                </h2>
                <p>Email: hello@shift.education</p>
              </div>
            </div>
          </div>
        )
      }}
    />
  )
}

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Export
// ----------------------------------------------------------------------------
export default HeroBox
