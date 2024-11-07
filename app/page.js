//ref: https://www.youtube.com/watch?v=FCCQdM3ZSw4

import Footer from "./footer/footer.js";
import Home from "./home/home.js";
import Residencies from "./residencies/residencies.js";
import Value from "./value/value.js";
import CustomerReview from "./customerReview/CustomerReview.js";
import {ThemeProvider} from "next-themes";

export default function Page() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
    <main className="bg-white">
      <Home />
      <Residencies />
      <Value />
      <CustomerReview />
      <Footer />     
    </main>
    </ThemeProvider>
  );
}