import React from 'react'; 

const WebsiteComponent = () => {
  return (
    <div className="bg-gradient-to-r from-[#7B5A2E] to-white">
      <section id="logo" className="pt-[170px] pb-0">
        <div className="max-w-[1310px] mx-auto">
          <div className="flex justify-end">
            <div className="max-w-[500px] mx-auto border-b border-[#99ccff] flex items-center justify-center">
              <div className="inline-block mx-auto text-center">
                <h1 className="text-3xl uppercase text-[#99ccff] font-bold">
                  content...
                </h1>
                <p className="text-lg text-[#99ccff]">
                  content... 
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-[80px] tm-p-1-section-1" id="intro">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <div className="tm-section-text-container">
                <p>
                  Lorem ipsum
                  Nullam eget dignissim orci. Donec tincidunt blandit libero iaculis
                  fermentum. Aliquam erat volutpat. Interger suscipit aliquam augue ac
                  rutrum. Phasellus sit amet erat id sapien efficitur euismod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[70px] bg-white" id="our_place">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2">
              <img src="/cal1.jpg" alt="Image" className="w-full" />
            </div>
            <div className="lg:w-1/2 bg-white/90 p-8">
              <h2 className="text-[#7B5A2E] mb-6" id="our-place">Places to explore</h2>
              {/* Add any additional content for "Our Place" section here */}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[70px]" id="section_4">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse lg:flex-row">
            <div className="lg:w-1/2 bg-white/90 p-8 h-full">
              <h2 className="text-[#8B5A2E] mb-6" id="fusce-a-porttitor-augue">
                Fusce a porttitor augue
              </h2>
              <p>
                Quisque rutrum dapibus odio vitae tincidunt. Etiam sollicitudin augue
                non porta interdum. Pellentesque placerat orci at libero ornare, nec
                viverra justo lobortis. Phasellus venenatis eros non.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img src="/cal2.jpg" alt="Image" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[115px] pb-[110px]" id="gallery">
        <div className="container mx-auto">
          <div className="mb-[30px] text-right">
            <h2 className="text-2xl" id="beautiful-rollovers">Rollovers</h2>
            <hr className="border-black w-[50%] ml-auto" />
          </div>
          <div className="grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-3">
            {/* Example for a gallery figure */}
            {[11, 12, 13, 14].map((num) => (
              <figure key={num} className="effect-duke mb-3">
                <img src={`/CalgaryStampede.jpg`} alt="Image" className="w-full" />
                <figcaption>
                  <h2 id={`messy-duke-${num - 10}`}>Messy <span>Lorem</span></h2>
                  <p>Lorem</p>
                  <a href="#">View more</a>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-[40px] lg:w-[50%] ml-auto">
            <p className="text-gray-600">
               Quisque pharetra mauris in libero vaius tristique.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[110px] pb-[90px]" id="contact">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-white/50 p-8">
            <div className="mb-5">
              <a href="#" className="flex items-center">
                <div className="bg-white text-[#7B5A2E] rounded-full w-[70px] h-[70px] flex items-center justify-center mr-[30px]">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>010-020-0340</div>
              </a>
            </div>
            <div className="mb-5">
              <a href="mailto:" className="flex items-center">
                <div className="bg-white text-[#7B5A2E] rounded-full w-[70px] h-[70px] flex items-center justify-center mr-[30px]">
                  <i className="far fa-envelope"></i>
                </div>
                <div>info@company.com</div>
              </a>
            </div>
            <div>
              <a href="#" className="flex items-center">
                <div className="bg-white text-[#7B5A2E] rounded-full w-[70px] h-[70px] flex items-center justify-center mr-[30px]">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  6120 Suspendisse ultricies<br />
                  Scelerisque tellus, ID 10260<br />
                  Magna aliquet porttitor
                </div>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-[55px_67px] mt-8 md:mt-0">
              <form className="tm-contact-form">
                <div className="mb-6">
                  <input type="text" name="name" className="form-control rounded-none border-[#9a9a9a] w-full p-2" placeholder="Name" required />
                </div>
                <div className="mb-6">
                  <input type="email" name="email" className="form-control rounded-none border-[#9a9a9a] w-full p-2" placeholder="Email" required />
                </div>
                <div className="mb-6">
                  <textarea rows="5" name="message" className="form-control rounded-none border-[#9a9a9a] w-full p-2" placeholder="Message" required></textarea>
                </div>
                <div className="text-right">
                  <button type="submit" className="border border-[#9a9a9a] text-[#313638] hover:text-[#7B5A2E] hover:border-[#7B5A2E] px-4 py-2 rounded">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[90px]" id="outro">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 text-white">
              <p>
                Fusce a porttitor augue. Phasellus nec faucibus erat, vitae sagittis
                arcu. Quisque viverra dui purus, at rutrum nibh suscipit ut.
              </p>
              <blockquote>
                <p>"NO"</p>
              </blockquote>
            </div>
            <div className="md:w-1/2">
              <div className="flex flex-wrap">
                {['facebook-f', 'twitter', 'instagram', 'linkedin-in'].map((icon) => (
                  <div key={icon} className="bg-[#7B5A2E] rounded-full w-[62px] h-[62px] flex items-center justify-center mr-[20px] mb-[20px] cursor-pointer hover:bg-[#5C3A22]">
                    <i className={`fab fa-${icon} text-white`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default WebsiteComponent;
