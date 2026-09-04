import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const cards = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "akumore133@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    value: "+91 7972545988",
  },
  {
    icon: <LocationOnIcon />,
    title: "Location",
    value: "Pune, Maharashtra",
  },
  {
    icon: <AccessTimeIcon />,
    title: "Linkdin",
    value: "https://www.linkedin.com/in/akshata-more-69b9a2219/",
  },
];

export default function ContactCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-1 mt-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="
  rounded-2xl
  border
  border-slate-200
  dark:border-white/10

  bg-white
  dark:bg-white/5

  p-1
  flex
  items-center
  gap-4

  backdrop-blur-xl
"
        >
          <div
            className="
              w-8
              h-8
              rounded-full
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-500
              flex
              items-center
              justify-center
              text-white
              
            "
          >
            {card.icon}
          </div>

          <div>
            <h4 className="font-semibold dark:text-white text-sm">
              {card.title}
            </h4>

            <p className="text-sm text-gray-500">
              {card.value}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}