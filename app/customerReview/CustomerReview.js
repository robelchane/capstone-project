export default function CustomerReview() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <span className="text-4xl tracking-widest uppercase font-bold mt-5">
          Expertised | Trustworthy | Dedicated
        </span>
      </div>
      
      <div className="font-serif flex justify-center items-center mt-8 mb-20">
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-10">Verified Customer Reviews</h2>
          <div className="flex flex-wrap justify-center mt-4 space-x-4">
            {[
              {
                name: "Alice Johnson",
                review: "Their expert team assisted me in selling my home, and the entire process went smoothly. Thanks to them, I was able to sell my house for the price I wanted.",
              },
              {
                name: "David Brown",
                review: "Their professional consultation eased all my worries about purchasing my first home. They found me an amazing house that exceeded my expectations.",
              },
              {
                name: "Sophia Kim",
                review: "I had such a great experience with Property Pros! They understood my needs well and provided tailored solutions.",
              },
              {
                name: "James Lee",
                review: "Thanks to Property Pros, I quickly found an excellent investment property. They guided me through every step, making everything feel easy.",
              },
            ].map(({ name, review }, i) => (
              <div
                key={i}
                className="border p-4 w-80 bg-gradient-to-r from-[#001f3f] to-purple-400 rounded-lg shadow-lg backdrop-filter backdrop-blur-md mb-4"
              >
                <p className="font-semibold mb-2 text-white text-shadow">{name}</p>
                <p className="text-white mt-5 mb-5">{review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
