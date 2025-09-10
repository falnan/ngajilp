"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function FAQsTwo() {
  const faqItems = [
    {
      question: "What is Darsy?",
      answer:
        "Darsy is a global online Quran learning platform for kids, helping them love and understand the Quran with engaging lessons and expert teachers.",
    },
    {
      question: "Where is Darsy based?",
      answer:
        "We are proudly based in Indonesia, the world’s largest Muslim country, bringing a rich tradition of Quran education to families worldwide.",
    },
    {
      question: "Is Darsy only for kids?",
      answer:
        "While we focus on children, parents or beginners are also welcome to join our programs.",
    },
    {
      question: "Who are the teachers at Darsy?",
      answer:
        "Our teachers are certified, experienced Quran instructors trained in engaging and child-friendly teaching methods.",
    },
    {
      question: "What are Personalized Learning Plans?",
      answer:
        "These are structured, goal-focused Quran lessons tailored to your child’s pace, learning style, and needs.",
    },
    {
      question: "Do you offer free Quran classes?",
      answer:
        "Yes! We provide free group sessions as part of our da’wah mission, so every child has access to the Quran.",
    },
    {
      question: "How do online classes work?",
      answer:
        "Classes are conducted via Zoom or a similar platform, making them interactive and accessible anywhere.",
    },
    {
      question: "Is Darsy available worldwide?",
      answer:
        "Yes! We welcome students from any country and accommodate different time zones.",
    },
  ];

  return (
    <section className=" ">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-[17px] md:text-lg max-w-2xl text-center">
            Discover quick and comprehensive answers to common questions about
            our platform, services, and features.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          <Accordion
            type="single"
            collapsible
            className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0"
          >
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={item.question}
                className="border-dashed"
              >
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="text-slate-700 mt-6 px-8">
            Can't find what you're looking for? Contact our{" "}
            <a
              href="https://wa.me/6282285567722?text=Assalaamu'alaikum%21%20I%27m%20interested%20in%20starting%20Quran%20classes%20for%20my%20child.z"
              className="text-primary font-medium hover:underline"
            >
              customer support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
