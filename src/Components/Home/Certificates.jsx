import { useState } from "react";
import { certificates } from "./CertificatesData";
import CertificateCard from "./CertificateCard";

const tabs = ["all", "technical", "other"];

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter certificates based on selected tab
  const filteredCertificates =
    activeTab === "all"
      ? certificates
      : certificates.filter(
          (item) => item.category === activeTab
        );

  return (
    <section
      id="certificates"
      className="
        py-20
        px-4
        bg-white
        dark:bg-[#0b1120]
        transition-colors
        duration-300
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[4px] text-slate-500 dark:text-slate-400">
            My Achievements
          </p>

          <h2 className="
            mt-2
            text-4xl
            md:text-5xl
            font-semibold
            text-slate-900
            dark:text-white
          ">
            Certificates
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`
                px-5
                py-2
                rounded-full
                text-sm
                font-medium
                capitalize
                transition-all
                duration-300
                ${
                  activeTab === tab
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-[#111827] dark:text-slate-300 dark:hover:bg-[#1f2937]"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Certificate Cards */}
        <div className="flex flex-wrap justify-center gap-8 mt-5">
          {filteredCertificates.map((item) => (
            <CertificateCard
              key={item.id}
              item={item}
              onImageClick={setSelectedImage}
            />
          ))}
        </div>

        {/* No certificates message */}
        {filteredCertificates.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500 dark:text-slate-400">
              No certificates found.
            </p>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/80
              p-4
            "
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="
                  absolute
                  -top-4
                  -right-4
                  w-10
                  h-10
                  rounded-full
                  bg-white
                  text-black
                  text-xl
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  hover:bg-slate-200
                  transition
                "
              >
                ×
              </button>

              {/* Selected Image */}
              <img
                src={selectedImage}
                alt="Certificate"
                className="
                  max-w-full
                  max-h-[85vh]
                  object-contain
                  rounded-xl
                  shadow-2xl
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