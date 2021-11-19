import { FaSpotify } from "react-icons/fa";
import {
  StatsCardWrapper,
  CardContent,
  Content,
  Title,
} from "./StatsCard.styles";

const SpotifyCard = () => {
  return (
    <StatsCardWrapper>
      <CardContent>
        <Content>
          <span>
            <FaSpotify color="#1ed760" size={18} />
          </span>
          Not playing Spotify
        </Content>
      </CardContent>
    </StatsCardWrapper>
  );
};
export default SpotifyCard;
