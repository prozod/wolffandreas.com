import Footer from "@/components/footer/footer"
import Navigation from "@/components/navigation/navigation"
import { PageSubtitle, PageTitle, Wrapper100 } from '../constants/basic.styles'

function Work() {

  return (
    <Wrapper100>
      <Navigation />
      <PageTitle>Projects</PageTitle>
      <PageSubtitle>Showcase to some of the things I have worked on and built.<br />
        Currently working on: <span>WebRTC Screen-sharing platform</span></PageSubtitle>
      <Footer />
    </Wrapper100>
  )
};

export default Work

