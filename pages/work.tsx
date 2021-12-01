import { useState } from 'react'
import Head from "next/head"
import { fetchAPI } from '../lib/api'
import Footer from "@/components/footer/footer"
import Navigation from "@/components/navigation/navigation"
import ProjectCard from "@/components/work/projectcard"
import { MobileMTopWrapper, PageContent, PageSubtitle, PageTitle, Wrapper100 } from '../constants/basic.styles'
import MobileNav from '@/components/navigation/mobilenav'
import MobileMenuIcon from '@/components/navigation/mobileMenuIcon'
import { IProjects } from '@/interfaces/interfaces'
import ScrollToTop from '@/components/scroll/scrollToTop'


const Work: React.FC<IProjects> = ({ projects }) => {
  const [showMenu, setShowMenu] = useState(false);
  const sortedProjects = projects.sort((a, b) => {
    return new Date(a.created_at).valueOf() - new Date(b.created_at).valueOf()
  });

  return (
    <Wrapper100 className="AppWrapper">
      <Head>
        <title>My work | TOUX.io</title>
        <meta name="description" content="Personal portfolio, Frontend Development, Blogging, Tech & Life" />
      </Head>
      <Navigation />
      <ScrollToTop />
      <MobileMenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileNav />}
      <MobileMTopWrapper>
        <PageTitle>Projects</PageTitle>
        <PageSubtitle>
          Showcase to some of the things I have worked on and built.<br />
          Currently working on: <span>WebRTC Screen-sharing platform</span>
        </PageSubtitle>
        <PageContent>
          {sortedProjects.map((proj: any, idx: number) => <ProjectCard key={idx} project={proj} />)}
        </PageContent>
      </MobileMTopWrapper>
      <Footer />
    </Wrapper100>
  )
};

export default Work

export async function getStaticProps() {
  const projects = await fetchAPI("/projects")

  return {
    props: { projects },
    revalidate: 1
  }
}


