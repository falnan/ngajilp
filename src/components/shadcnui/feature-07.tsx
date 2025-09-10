import {
  BookCheck,
  ChartPie,
  ChartPieIcon,
  Circle,
  CircleIcon,
  FolderSync,
  Goal,
  GoalIcon,
  Users,
  UsersIcon,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: <GoalIcon />,
    title: "Reading Quran",
    description:
      "Learn to read fluently with methods like Iqra, Ummi, Noorania, and more.",
    color: "bg-sky-300",
  },
  {
    icon: <GoalIcon />,
    title: "Quran Memorization",
    description:
      "Begin memorizing Surahs step by step to build a strong connection with the Quran.",
    color: "bg-teal-300",
  },
  {
    icon: <BookCheck />,
    title: "Basic Arabic Speaking",
    description:
      "Build everyday Arabic vocabulary to understand what they read.",
    color: "bg-green-300",
  },
  {
    icon: <ChartPieIcon />,
    title: "Islamic Studies",
    description: "Fun lessons on faith, manners, and daily Islamic values.",
    color: "bg-lime-300",
  },
  {
    icon: <UsersIcon />,
    title: "Pray and Whudu",
    description: "Step-by-step prayer and purification training for kids.",
    color: "bg-yellow-300",
  },
  {
    icon: <FolderSync />,
    title: "Sirah of the prophets",
    description:
      "Inspiring stories of the Prophets through engaging storytelling.",
    color: "bg-orange-300",
  },
];

const Features07Page = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-screen-xl w-full py-10 px-6">
        <h2 className=" text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight max-w-xl text-center md:mx-auto">
          What your child will learn?
        </h2>
        <p className=" mt-6 text-[17px] md:text-lg text-center max-w-2xl mx-auto">
          Every child is unique, we’ll craft a learning plan that’s as special
          as they are. You can fully customize your child’s Quran learning
          journey. Choose what to focus on, and we’ll design lessons to fit
          their needs and pace.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {features.map((feature, idx) => (
            <div key={idx}>
              <div
                className={`${feature.color} flex gap-6  rounded-lg p-2 -mx-2 sm:mx-0 max-w-lg`}
              >
                <div className="flex items-center justify-center h-24 aspect-square shrink-0 rounded-lg bg-white">
                  <div
                    className={`${feature.color} h-12 aspect-square  rounded-full `}
                  />
                </div>
                <div>
                  <span className="font-semibold tracking-tight text-lg">
                    {feature.title}
                  </span>
                  <p className="mt-1 text-sm text-slate-800">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features07Page;
