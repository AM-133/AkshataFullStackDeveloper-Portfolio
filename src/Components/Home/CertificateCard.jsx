const CertificateCard = ({ item, onImageClick }) => {
  return (
    <div
      className="
        w-[290px]
        rounded-[28px]
        p-2
        border
        transition-all duration-300

        bg-white
        border-slate-200

        dark:bg-[#111827]
        dark:border-[#1f2937]

        hover:-translate-y-1
        hover:shadow-lg

        dark:hover:border-[#374151]
        dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)]
      "
    >
      <div
        className="overflow-hidden rounded-[20px] cursor-pointer"
        onClick={() => onImageClick(item.image)}
      >
        <img
          src={item.image}
          alt={item.title}
          className="
            w-full
            h-44
            object-cover
            transition-transform
            duration-300
            hover:scale-105
          "
        />
      </div>

      <div className="mt-4 text-center">
        <h3
          className="
            text-lg
            font-medium

            text-slate-900
            dark:text-white
          "
        >
          {item.title}
        </h3>

        {/*
        <p className="mt-1 text-sm text-slate-500 dark:text-gray-400">
          {item.issuer} • {item.year}
        </p>
        */}
      </div>
    </div>
  );
};

export default CertificateCard;