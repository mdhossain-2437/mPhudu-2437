import React, { useEffect, useState } from "react";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import Button from "../Botton/Button";
import TextHeader from "../TextHeader/TextHeader";

const DoctorsContainer = ({ doctors }) => {
  const [disPlayDoctor, setDisplayDoctor] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDisplayDoctor(doctors);
    } else {
      setDisplayDoctor(doctors.slice(0, 6));
    }
  }, [doctors, showAll]);

  return (
    <div className="py-10">
      <div className="max-w-xl mb-16 md:mx-auto sm:text-center lg:max-w-2xl">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Our Best Doctors
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>

      {disPlayDoctor.length > 0 ? (
        <>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {disPlayDoctor.map((doctor, index) => (
                <div key={index} className="transform hover:translate-y-[-4px] transition-transform duration-300">
                  <DoctorsCard doctor={doctor} />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button
                onClick={() => setShowAll((prv) => !prv)}
                label={showAll ? "Show Less" : "View All Doctors"}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              />
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <div className="text-4xl mb-4">🩺</div>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">No Doctors Found</h3>
          <p className="text-gray-500">Please try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
};

export default DoctorsContainer;
