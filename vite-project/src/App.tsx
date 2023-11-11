// import { Accordion } from "./components/accordion/Accordion";
// import { Navbar } from "./components/navbar/Navbar";
import { Calendar } from "./components/calendar/Calendar";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function Main() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Card />
        {/* <Accordion /> */}
        <Calendar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
