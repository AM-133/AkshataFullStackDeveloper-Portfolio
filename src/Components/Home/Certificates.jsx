import { useState } from "react";
import { certificates } from "./certificatesData";
import CertificateCard from "./CertificateCard";

const tabs = ["all", "technical", "other"];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredCertificates =
    activeTab === "all"
      ? certificates
      : certificates.filter(
          (item) => item.category === activeTab
        );

  return (
    <section
      id="certificates"
      className="py-10 px-6 bg-slate-50 dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}

        <h2
          className="
            font-outfit
            text-5xl md:text-6xl
            font-medium
            tracking-tight
            bg-gradient-to-r
            from-[#4F7CFF]
            via-[#6366F1]
            to-[#8B5CF6]
            bg-clip-text
            text-transparent
          "
        >
          Certificates
        </h2>

        <p className="mt-4 max-w-xl mx-auto text-slate-600 dark:text-gray-400">
          Explore my achievements — both technical & beyond.
        </p>

        {/* Tabs */}

        <div className="flex justify-center gap-8 mt-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative pb-2 capitalize text-lg"
            >
              <span
                className={`transition-colors duration-300 ${
                  activeTab === tab
                    ? "text-indigo-600 dark:text-violet-400"
                    : "text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {tab}
              </span>

              {activeTab === tab && (
                <span
                  className="
                    absolute left-0 bottom-0
                    h-[2px] w-full rounded-full
                    bg-indigo-600 dark:bg-violet-500
                  "
                />
              )}
            </button>
          ))}
        </div>

        {/* Cards */}

        <div className="flex flex-wrap justify-center gap-8 mt-5">
          {filteredCertificates.map((item) => (
            <CertificateCard
              key={item.id}
              item={item}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        {/* Modal */}

        {selectedImage && (
          <div
            className="
              fixed inset-0 z-50
              flex items-center justify-center
              bg-black/80 p-4
            "
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="
                  absolute -top-12 right-0
                  text-white text-4xl
                  cursor-pointer
                "
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Certificate Preview"
                className="
                  w-full max-h-[85vh]
                  object-contain rounded-2xl
                "
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;