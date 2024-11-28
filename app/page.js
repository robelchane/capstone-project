import Footer from "./footer/footer.js";
import Home from "./home/home.js";
import Residencies from "./residencies/residencies.js";
import Value from "./value/value.js";
import CustomerReview from "./customerReview/CustomerReview.js";
import Schedule from "./schedule/page.js";
import AllAppointments from "./all-appointment/page.js";

export default function Page() {
  return (
    <main className="bg-white">
      <Home />
      <Schedule />
      <Residencies />
      <Value />
      <CustomerReview />
      <Footer />    
      <AllAppointments /> 
    </main>
  );
}