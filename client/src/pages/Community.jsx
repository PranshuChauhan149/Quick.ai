import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { dummyPublishedCreationData } from "../../assets/assets";
import { Heart } from "lucide-react";

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreations = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    if (user) {
      fetchCreations();
    }
  }, [user]);

  return (
    <div className="h-full p-6 bg-gray-50">
      <h1 className="text-2xl font-semibold mb-6 text-slate-800">
        Community Creations
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {creations.map((creation, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden shadow hover:shadow-xl transition bg-white"
          >
            {/* Image */}
            <img
              src={creation.content}
              alt="creation"
              className="w-full h-56 object-cover transform transition duration-300 group-hover:scale-105"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4">
              <p className="text-white text-sm text-center leading-relaxed">
                {creation.prompt}
              </p>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-white/80 backdrop-blur">
              <div className="flex items-center gap-1 text-sm text-gray-700">
                <span>{creation.likes.length}</span>
                <Heart
                  className={`w-5 h-5 ${
                    creation.likes.includes(user.id)
                      ? "fill-red-500 text-red-500"
                      : "text-gray-400"
                  }`}
                />
              </div>

              <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                AI Art
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
