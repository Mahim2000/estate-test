import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    fetch('/Estates.json')
      .then(response => response.json())
      .then(data => setEstates(data))
      .catch(error => console.error('Error fetching estates:', error));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen mt-80 mb-80">
      <div className="flex flex-wrap justify-between gap-2 max-w-[1100px] mx-10">
        {estates.map(estate => (
          <Link key={estate.id} to={`/estate/${estate.id}`} className="no-underline">
            <div className="card w-[370px] h-[600px] bg-base-100 shadow-xl border-2">
              <figure className="px-7 pt-10 bg-slate-100">
                <img src={estate.image} alt={estate.estate_title} className="rounded-xl pb-6" />
              </figure>
              <div className="card-body">
                <div className="card-actions justify-start gap-4">
                  {estate.facilities.map(facilities => (
                    <div key={facilities} className="badge badge-outline bg-green-100 text-green-500">
                      {facilities}
                    </div>
                  ))}
                </div>
                <h2 className="card-title">{estate.estate_title}</h2>
                <p>{estate.segment_name}</p>
                <br />
                <p>{estate.description}</p>
                <hr />
                <div className="flex-col gap-6 justify-between">
                  <p>{estate.location}</p>
                  <div className="flex justify-between mt-5">
                    <p className="flex justify-start mr-5">{estate.area}</p>
                    <p className="flex justify-start">${estate.price}</p>
                  </div>
                </div>
                <hr />
                <div className='flex justify-center mt-5'>
                    <div>
                <p className="text-2xl font-extrabold">{estate.status}</p>
                </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Estates;