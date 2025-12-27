import Image from "next/image";
import Navbar from "../../Components/Navbar";
import Head from "../../Components/Head";
import Prayer from "../../Components/Prayer";
import About from "../../Components/About";
import Aktiviteter from "../../Components/Aktiviteter";
import Galleri from "../../Components/Galleri";
import Contact from "../../Components/Contact";
import Spoonsers from "../../Components/Spoonsers";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head />
      <Prayer />
      <About />
      <Aktiviteter />
      <Galleri />
      <Contact />
      <Spoonsers />
      <Footer />
    </div>
  );
}
