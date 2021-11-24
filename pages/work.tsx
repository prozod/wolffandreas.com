import { useState } from 'react'
import { fetchAPI } from '../lib/api'
import Footer from "@/components/footer/footer"
import Navigation from "@/components/navigation/navigation"
import ProjectCard from "@/components/work/projectcard"
import { MobileMTopWrapper, PageContent, PageSubtitle, PageTitle, Wrapper100 } from '../constants/basic.styles'
import MobileNav from '@/components/navigation/mobilenav'
import MobileMenuIcon from '@/components/navigation/mobileMenuIcon'
import { IProjects } from '@/interfaces/interfaces'


const Work: React.FC<IProjects> = ({ projects }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Wrapper100>
      <Navigation />
      <MobileMenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && <MobileNav />}
      <MobileMTopWrapper>
        <PageTitle>Projects</PageTitle>
        <PageSubtitle>
          Showcase to some of the things I have worked on and built.<br />
          Currently working on: <span>WebRTC Screen-sharing platform</span>
        </PageSubtitle>
        <PageContent>
          {projects.map((proj: any) => <ProjectCard project={proj} />)}
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


