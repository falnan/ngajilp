import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0/hour",
    isRecommended: true,
    description:
      "Learning Quran is our obligation, lack of money is not a reason to not learning Quran. Our pleasure to help you.",
    features: ["private class", "30 minutes/class", "1x class per week"],
    buttonText: "Register",
    isPopular: true,
    color: "bg-gradient-to-tr from-blue-300 to-cyan-300",
  },
  {
    name: "Exclusive",
    price: "6/hour",
    isRecommended: true,
    description:
      "Get exclusive class to get private teacher dan track your learning process.",
    features: [
      "Private class",
      "Create your own schedule",
      "Split the time lesson (you can split 1 hour into 2x30 minutes",
      "Track your progress on our dashboard",
      "Professional teacher",
    ],
    buttonText: "Register",
    isPopular: true,
    color: "bg-gradient-to-tr from-green-300 to-lime-300",
  },
  {
    name: "Extra",
    price: "8/hour",
    isRecommended: true,
    description:
      "Get exclusive class to get private teacher dan track your learning process.",
    features: [
      "Private class",
      "Create your own schedule",
      "Split the time lesson (you can split 1 hour into 2x30 minutes",
      "Track your progress on our dashboard",
      "Professional teacher",
    ],
    buttonText: "Register",
    isPopular: true,
    color: "bg-gradient-to-tr from-orange-300 to-yellow-300",
  },
];

const Pricing01 = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl font-bold text-center tracking-tight">Pricing</h1>
      <div className="mt-12 max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.color} border rounded-lg p-6`}
          >
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">${plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />{" "}
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className="w-full mt-6"
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing01;
