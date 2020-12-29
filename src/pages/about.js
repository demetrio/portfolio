import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import {
  Welcome,
  Subtitle,
  Info,
  SkillsTable,
  Title,
  JobTitle,
  SubDate,
  Skills,
} from '../styles/about.styles.js';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      allSkillsJson {
        edges {
          node {
            main
            skills
          }
        }
      }

      allJobsJson {
        edges {
          node {
            company
            dates
            description
          }
        }
      }
    }
  `);

  const skillsData = data.allSkillsJson.edges;
  const jobsData = data.allJobsJson.edges;

  return (
    <Layout>
      <SEO title="About me" />
      <Welcome>About me</Welcome>
      <p>
        I have a powerful passion for UI & UX with a strong attention to detail
        and a focus on accessible, responsive design. I take pride in
        maintaining a consistently high bar of quality.
      </p>
      <p>
        My main goal is to approach every day not only with my experience but
        also with an open mind for the new tools and frameworks that push the
        web forward. Continuous learning allows me to be more creative when
        implementing solutions, and I am motivated to share what I learn with my
        teams.
      </p>
      <p>
        At the moment, I’m focusing on sharpening my knowledge of React,
        GraphQL, and other frontend-related technologies.
      </p>
      <p>
        Adjacent to my work, I have a great enthusiasm for the audiovisual
        world, video games, communication and travel.
      </p>
      <Info>
        <div>
          <Subtitle>Skills</Subtitle>
          <SkillsTable>
            {skillsData.map(({ node: skill }) => {
              const { main, skills } = skill;
              return (
                <div key={`key-${main}`}>
                  <Title>{main}</Title>
                  <Skills key={skill}>{skills.join(', ')}.</Skills>
                </div>
              );
            })}
          </SkillsTable>
        </div>
        <div>
          <Subtitle>Currently working at</Subtitle>
          {jobsData.map(({ node: job }) => {
            const { company, dates, description } = job;
            return (
              <div key={`key-${company}`}>
                <JobTitle>{company}</JobTitle>
                <SubDate>{dates}</SubDate>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </Info>
    </Layout>
  );
};

export default About;
