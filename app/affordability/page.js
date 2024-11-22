// app/affordability/page.js

import AffordabilityForm from './AffordabilityForm';


export default function AffordabilityPage() {
  return (
    <section id="section_4" className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-serif text-[#001f3f] mb-4">Affordability Tool</h2>
          <p className="text-lg text-gray-700">
            Use the tool below to find out how much you can afford to spend on rent based on your income, expenses, and other factors.
          </p>
        </div>
        <AffordabilityForm />
      </div>
    </section>
  );
}
