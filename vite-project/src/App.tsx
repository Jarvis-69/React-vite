import { Accordion } from "./components/accordion/Accordion";
import { Navbar } from "./components/navbar/Navbar";
import Calendar from "./components/calendar/Calendar";
import 'tailwindcss/tailwind.css';
import './components/calendar/styles.css';


export default function Main() {
  return (
    <main>
      <Navbar />
      <Accordion />
      <Calendar />
    </main>
  );
}
