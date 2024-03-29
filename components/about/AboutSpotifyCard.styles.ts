import styled from 'styled-components';

export const SpotifyWrapper = styled.section`
  display: flex;
  margin: 5px;
  background: ${({ theme }) => theme.body};
  border: 1px solid rgba(0, 0, 0, 0.05);
  filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.05));
  border-radius: 5px;
  padding: 10px;
`;
export const SongWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  padding: 1em 2em;
  margin: 5px;
  border-radius: 5px;
`;
export const SongCredentials = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;
export const SongTitle = styled.p`
  font-weight: 600;
`;

export const SongArtist = styled.p`
  color: white;
`;

export const SongImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  position: relative;

  img {
    border-radius: 5px;
  }
`;

export const SongRank = styled.div`
  max-width: 40px;
  max-height: 40px;
  min-width: 40px;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.accent};
`;
