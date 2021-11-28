import styled from 'styled-components'

export const MusicWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const StreamingPlatformsWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column
  }
`

export const StreamingPlatform = styled.a`
  text-decoration: none;
  margin: 1em 0;
  margin-right: 1em;
  color: #8273af;
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #8273af;
  cursor: pointer;

  @media (max-width: 768px){
  text-align: center;
  margin-right: 0;
  }

  button {
    cursor: pointer;
    background: none;
    border: none;
    color: #8273af;
    max-width: 100px;
    width: fit-content;
    font-weight: 600;
    min-width: 90px;

  }
`

export const EmbedsWrapper = styled.div`
  width: 100%;
`

export const Embed = styled.div`
  width: 100%;
  flex: 1;
  margin-bottom: 1em;
`
