import { Accordion } from "./components/accordion/Accordion";
import { Navbar } from "./components/navbar/Navbar";
import { App } from "./components/calendar/Calendar";

export default function Main() {
  return (
    <main>
      <Navbar />
      <Accordion />
      <App />
    </main>
  );
}
