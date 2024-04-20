import React from 'react';

const Attract = () => {
    return (
        <section className="flex justify-center mb-11">
          <div className="lg:w-[1450px] lg:h-[330px] w-full rounded-[32px] bg-center bg-cover" style={{backgroundImage: "url(/Midbanner.jpg)"}}>
            <div className="flex items-center justify-center w-full h-full rounded-[32px] bg-gray-900 bg-opacity-75 py-12">
              <div className="w-full text-center">
                <div className="container px-4 flex items-center justify-around">
                  <div className="max-w-[450px] text-left">
                    <h2 className="mt-8 mb-2 text-xl lg:text-2xl font-bold text-white">Discover Prime Commercial Real Estate for the Best Price</h2>
                    <p className="max-w-3xl mt-5 mb-10 text-lg text-gray-300">
                    Explore the Best and the Most Reliable Estate Listings for Your Business Needs
                    </p>
                  </div>
                  <div className="text-xl font-medium lg:w-[350px] lg:h-[220px] flex justify-around items-center w-full rounded-[32px] bg-center bg-cover">
                    <img src="/midbanner-logo.png" className="w-[75%]" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
};


export default Attract;