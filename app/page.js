import Contact from "./contact/contact.js";
import Footer from "./footer/footer.js";
import Home from "./home/home.js";
import Residencies from "./residencies/residencies.js";
import Value from "./value/value.js";

export default function Page() {
  return (
    <main>
      <Home />
      <Residencies />
      <Value />
      <Contact />
      <Footer />
    </main>
  );
}