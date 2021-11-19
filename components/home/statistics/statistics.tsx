import { IArticleArr } from "@/interfaces/interfaces";
import FeaturedPostCard from "./FeaturedPostCard";
import SpotifyCard from "./SpotifyCard";
import {
  FeaturedPosts,
  LiveStats,
  StatsTitle,
  StatsWrapper,
  LiveStatsContainer,
} from "./statistics.style";
import StatsCard from "./StatsCard";

const Statistics: React.FC<IArticleArr> = ({ articles }) => {
  return (
    <StatsWrapper>
      <FeaturedPosts>
        <StatsTitle>Featured posts</StatsTitle>
        {articles?.slice(0, 2).map((article) => (
          <FeaturedPostCard article={article} />
        ))}
      </FeaturedPosts>

      <LiveStats>
        <StatsTitle>Live statistcs</StatsTitle>
        <LiveStatsContainer>
          <SpotifyCard />
          <StatsCard
            title="Latest project"
            description="Quicktools | Task Tracker"
          />
          <StatsCard
            title="Currently studying & focusing on"
            description="TypeScript, web performance and web security"
          />
        </LiveStatsContainer>
      </LiveStats>
    </StatsWrapper>
  );
};

export default Statistics;
