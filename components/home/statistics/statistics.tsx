import Link from 'next/link';
import { IArticleArr } from '@/interfaces/interfaces';
import FeaturedPostCard from './FeaturedPostCard';
import SpotifyCard from './SpotifyCard';
import {
  FeaturedPosts,
  LiveStats,
  StatsTitle,
  StatsWrapper,
  LiveStatsContainer,
  CTALink,
} from './statistics.style';
import StatsCard from './StatsCard';
import { CTALastProject } from './StatsCard.styles';

const Statistics: React.FC<IArticleArr> = ({ scrobble, articles }) => {
  return (
    <StatsWrapper>
      <FeaturedPosts>
        <StatsTitle>Featured posts</StatsTitle>{' '}
        {articles?.slice(0, 2).map((article) => (
          <FeaturedPostCard key={article.slug} article={article} />
        ))}
        <Link href='/blog' passHref>
          <CTALink>Read my posts...</CTALink>
        </Link>
      </FeaturedPosts>

      <LiveStats>
        <StatsTitle>Live statistcs</StatsTitle>
        <LiveStatsContainer>
          <SpotifyCard scrobble={scrobble} />
          <CTALastProject href='https://tasks.quicktools.co/' target='_blank'>
            <StatsCard
              title='Latest project'
              description='Quicktools | Task Tracker'
            />
          </CTALastProject>
          <StatsCard
            title='Currently studying & focusing on'
            description='Design Systems, micro-interactions and TypeScript'
          />
        </LiveStatsContainer>
        <Link href='/about' passHref>
          <CTALink>More about me</CTALink>
        </Link>
      </LiveStats>
    </StatsWrapper>
  );
};

export default Statistics;
