
///https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes
//https://www.youtube.com/watch?v=ec3OEG8DXJM&t=574s

import Header from '../../header/page.js';
import data from '../../../public/residenciesData.json';
import Map from '../../map/page.js';

export default function PropertyPage({ params }) {
  // Finds the property with the id that matches the id in the params
  const property = data.find((item) => item.id.toString() === params.id);

  return (
    <main className="font-serif overflow-y-auto text-black">
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold">{property.name}</h1>
        <img src={property.image} alt={property.name} className="w-full my-4" />
        <p className="text-lg font-semibold">
          Price: <span className="text-orange-500">${property.price}</span>
        </p>
        <p>{property.detail}</p>

        <div className="my-8">
          <h2 className="text-2xl font-semibold">Property Summary</h2>
          <p>{property.summary}</p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl font-semibold">Location</h2>
          <div className="h-64">
            <Map/>
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600">
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
