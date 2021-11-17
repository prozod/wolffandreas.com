import Footer from "@/components/footer/footer";
import Hero from "@/components/home/hero/hero";
import Navigation from "@/components/navigation/navigation";
import { Wrapper100 } from "@/constants/basic.styles";

const Home = () => {
  return (
    <Wrapper100>
      <Navigation />
      <Hero />
      <Footer />
    </Wrapper100>
  );
};

export default Home;
