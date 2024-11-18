//ref: https://www.youtube.com/watch?v=FCCQdM3ZSw4

import Home from "./home/home.js";
import Residencies from "./residencies/residencies.js";
import Value from "./value/value.js";
import CustomerReview from "./customerReview/CustomerReview.js";

export default function Page() {
  return (
    <main className="bg-white">
      <Home />
      <Residencies />
      <Value />
      <CustomerReview />     
    </main>
  );
}