
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const cards = [
  {
    icon: <EmailIcon />,
    title: "Email",
    value: "akumore133@gmail.com",
    link: "mailto:akumore133@gmail.com",
  },
  {
    icon: <PhoneIcon />,
    title: "Phone",
    value: "+91 7972545988",
    link: "tel:+917972545988",
  },
  {
    icon: <LocationOnIcon />,
    title: "Location",
    value: "Wakad, Pune",
    link: "https://www.google.com/maps/search/?api=1&query=Wakad,Pune,Maharashtra",
  },
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
    value: "My LinkedIn Profile",
    link: "https://www.linkedin.com/in/akshata-more-69b9a2219/",
  },
];

export default function ContactCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-1 mt-5">
      {cards.map((card) => (
        <a
          key={card.title}
          href={card.link}
          target={card.title === "Email" || card.title === "Phone" ? "_self" : "_blank"}
          rel="noopener noreferrer"
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
            cursor-pointer
            hover:shadow-md
            transition
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
              shrink-0
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
        </a>
      ))}
    </div>
  );
}

