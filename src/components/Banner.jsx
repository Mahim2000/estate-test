const Banner = () => {

    return (
      <section className="flex justify-center">
        <div className="lg:w-[1420px] md:w-[90%] sm:w-[90%] lg:h-[620px] w-full rounded-[32px] bg-center bg-cover"
          style={{ backgroundImage: 'url(/Banner.png)' }}>
          <div className="flex items-center justify-center w-full h-full rounded-[32px] bg-gray-900 bg-opacity-75 py-12">
            <div className="text-center">
              <div className="container px-4 mx-auto">
                <div className="max-w-4xl mx-auto text-center">
                  <span className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">Explore our extensive range of premium commercial real estate options!</span>
                  <p className="max-w-3xl mx-auto mt-6 mb-10 text-lg text-gray-300">
                  Find your ideal location while never compromising on quality.
                  </p>
                  <div className="flex gap-5 justify-center">
                      <button className="btn lg:w-[170px] md:w-[150px] sm:w-[130px] lg:h-[65px] px-[30px] py-[16px] rounded-full border-transparent hover:border-transparent focus:border-transparent border-blue-500 bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 text-white">See More</button>
                      <button className="btn lg:w-[170px] md:w-[150px] sm:w-[130px] lg:h-[65px] px-[30px] py-[16px] rounded-full border-white bg-transparent hover:bg-white hover:text-black hover:border-transparent focus:border-transparent focus:bg-white focus:text-black text-white text-[15px]">Advanced Search</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Banner;