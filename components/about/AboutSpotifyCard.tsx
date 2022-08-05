import { SongArtist } from '../home/statistics/StatsCard.styles';
import {
  SongCredentials,
  SongRank,
  SongTitle,
  SpotifyWrapper,
} from './AboutSpotifyCard.styles';

interface ITrack {
  track: {
    '@attr': {
      rank: string;
    };
    artist: {
      name: string;
    };
    name: string;
  };
}

const AboutSpotifyCard: React.FC<ITrack> = ({ track }) => {
  return (
    <SpotifyWrapper>
      <SongRank>{track['@attr'].rank}</SongRank>
      <SongCredentials>
        <SongTitle>{track.name}</SongTitle>
        <SongArtist>{track.artist.name}</SongArtist>
      </SongCredentials>
    </SpotifyWrapper>
  );
};

export default AboutSpotifyCard;
