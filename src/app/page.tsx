import { BannerHome } from "./components/home/banner";
import { BannerQuote } from "./components/home/bannerQuote";
import { OurTeam } from "./components/home/ourTeam";
import { Services } from "./components/home/services";
import { Specialties } from "./components/home/specialties";
import { WhyChooseUs } from "./components/home/whyChooseUs";

export default function Home() {
  return (
    <>
      <BannerHome />

      <Services />

      <WhyChooseUs />

      <BannerQuote />

      <Specialties />

      <OurTeam />
    </>
  );
}
