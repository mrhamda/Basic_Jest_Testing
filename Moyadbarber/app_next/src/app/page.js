import Image from "next/image";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import About from "../../components/About";
import Gallery from "../../components/Galleri";
import Cost from "../../components/Cost";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Gallery />
      <Cost />
      <Footer />
    </>
  );
}
