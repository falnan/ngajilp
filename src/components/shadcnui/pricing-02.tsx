import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Let's get started with 1 free class/week.",
    features: ["30 minutes live private sessions", "1x per week"],
    color: "bg-gradient-to-tr from-blue-300 to-sky-300",
    buttonText: "Start Classes",
  },
  {
    name: "Basic",
    price: 28,
    description: "Stay consitenst with 2 classes/week.",
    features: [
      "30-minute live 1-on-1 sessions",
      "2x a week (8 classes/month)",
      "Parent dashboard access",
      "Flexible scheduling",
      "Detailed progress reports",
      "Extra session anytime ($2.5 each)",
    ],
    color: "bg-gradient-to-tr from-teal-300 to-emerald-300",
    buttonText: "Start Classes",
  },
  {
    name: "Plus",
    price: 36,
    description: "Boost learning with 3 classes/week.",
    features: [
      "30-minute live 1-on-1 sessions",
      "3x a week (12 classes/month)",
      "Parent dashboard access",
      "Flexible scheduling",
      "Detailed progress reports",
      "Extra session anytime ($2.5 each)",
    ],
    color: "bg-gradient-to-tr from-green-300 to-lime-300",
    buttonText: "Start Classes",
  },
  {
    name: "Premium",
    price: 49,
    isRecommended: true,
    description: "Maximize progress with 5 classes/week.",
    features: [
      "30-minute live 1-on-1 sessions",
      "5x a week (20 classes/month)",
      "Parent dashboard access",
      "Flexible scheduling",
      "Detailed progress reports",
      "Extra session anytime ($2.5 each)",
    ],
    color: "bg-gradient-to-tr from-yellow-300 to-amber-300",
    buttonText: "Start Classes",
    isPopular: true,
  },
];

const Pricing02 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6 ">
      <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight mt-6  sm:text-5xl  !leading-[1.2] ">
        {/* <h2 className="text-5xl font-bold text-center tracking-tight"> */}
        Choose your plan
      </h2>
      <p className="mt-6 text-[17px] md:text-lg max-w-2xl text-center">
        Pick a plan that fits your family’s schedule and goals — from free
        classes to subscription plans to help your child grow in faith and
        confidence.
      </p>
      <div className="max-w-screen-xl mt-12  mx-auto grid grid-cols-1 lg:grid-cols-4  lg:gap-2 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              "flex flex-col relative border rounded-lg p-6 " + plan.color,
              {
                "border-[3px] border-red-300": plan.isPopular,
              }
            )}
          >
            {plan.isPopular && (
              <Badge className="bg-yellow-500 absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              ${plan.price}
              <span className="text-lg text-gray-600">/month</span>
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-8 lg:mt-auto"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing02;
