import { Cpu, Lock, Sparkles, Zap } from "lucide-react";

const features = [
  {
    name: "Smart Dashboard Access",
    desc: "Parents can easily track schedules, monitor lessons, and stay updated on their child’s learning journey, all in one place.",
    text: "text-rose-500",
  },
  {
    name: "Flexbile scheduling",
    desc: "We adapt to your family’s routine, making it easy to fit quality education into even the busiest schedules.",
    text: "text-sky-500",
  },
  {
    name: "Detailed progress report",
    desc: "Receive clear, easy-to-understand reports that highlight strengths, improvements, and next learning steps, so you’re never left guessing.",
    text: "text-green-500",
  },
  {
    name: "Qualified & Caring Teachers",
    desc: "Our experienced educators are not only experts in their fields but also passionate about guiding children with patience and encouragement.",
    text: "text-purple-500",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-12 px-6">
        <div className="relative z-10 grid items-center gap-4 md:grid-cols-2 md:gap-12">
          <h2 className="text-4xl font-semibold">Why parents trust Darsy</h2>
          <p className="max-w-sm sm:ml-auto">
            Parents worldwide trust Darsy to nurture their children’s love for
            the Quran and guide them to grow in faith with confidence.
          </p>
        </div>
        <div className="relative mx-auto grid grid-cols-1 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-2">
          {features.map((i, idx) => (
            <div key={idx} className="bg-white rounded-xl p-4 space-y-3">
              <div className="flex items-center gap-2">
                <h3 className={`${i.text} text-sm font-bold`}>{i.name}</h3>
              </div>
              <p className="text-muted-foreground text-sm">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
