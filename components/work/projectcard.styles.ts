import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  color: #fff;
  background-color: #201b2f;
  width: 100%;
  position: relative;
  margin: 0.75em 0;
  border-radius: 0 10px 10px 0;
  max-height: 180px;

  @media (max-width: 1400px) {
    max-height: 200px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 200px;
  border-radius: 0 0 10px 10px;
  }

  &:before {
    content: '';
    width: 3px;
    height: 100%;
    position: absolute;
    left: 0;
    background-color: #8360BC;
    z-index: 1;
    
  @media (max-width: 768px) {
    width: 100%;
    height: 3px;
  }
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75em 1em;
`

export const ProjectImage = styled.div`
  max-width: 220px;
  max-height: 180px; 
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ProjectTitle = styled.h1`
  font-weight: 600;
  font-size: 1.25rem;
`

export const ProjectContentWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  margin: 1em 0;

  @media (max-width: 1400px) {
    margin: 0.5em 0;
  }
`

export const ProjectTech = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
`

export const ProjectDescription = styled.p`
  color: #a3a3a3;
`

export const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
`

export const ProjectLink = styled.div`
  display: flex;
  font-weight: 600;
  font-size: 0.75rem;
  align-items: center;
  margin-right: 15px;

  a {
  text-decoration: none;
  color: #fff;
  }

  span {
    margin-right: 5px;
  }
`
