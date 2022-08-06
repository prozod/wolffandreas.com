import Head from 'next/head';
import { fetchAPI } from '../lib/api';
import ProjectCard from '@/components/work/projectcard';
import {
  MobileMTopWrapper,
  PageContent,
  PageSubtitle,
  PageTitle,
} from '../constants/basic.styles';
import { IProjects } from '@/interfaces/interfaces';

const Work: React.FC<IProjects> = ({ projects }) => {
  const sortedProjects = projects.sort((a, b) => {
    return new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf();
  });

  return (
    <>
      <Head>
        <title>My work | Andreas Wolff</title>
        <meta
          name='description'
          content='Personal portfolio, Frontend Development, Blogging, Tech & Life'
        />
      </Head>
      <MobileMTopWrapper>
        <PageTitle>Projects</PageTitle>
        <PageSubtitle>
          Showcase to some of the things I have worked on and built.
          <br />
          Currently working on: <span>Linkeep | A bookmark storage app</span>
        </PageSubtitle>
        <PageContent>
          {sortedProjects.map((proj: any, idx: number) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </PageContent>
      </MobileMTopWrapper>
    </>
  );
};

export default Work;

export async function getStaticProps() {
  const projects = await fetchAPI('/projects');

  return {
    props: { projects },
    revalidate: 1,
  };
}
