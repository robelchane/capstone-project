import Footer from "./footer/footer.js";
import Home from "./home/home.js";
import Residencies from "./residencies/residencies.js";
import Value from "./value/value.js";
import CustomerReview from "./customerReview/CustomerReview.js";
import Bookings from "./bookings/page.js";
import AllAppointments from "./all-appointmets/page.js"

export default function Page() {
  return (
    <main className="bg-white">
    
      <Home />
      <Residencies />
      <Bookings />
      <AllAppointments />
      <Value />
      <CustomerReview />
      <Footer />     
    </main>
  );
}