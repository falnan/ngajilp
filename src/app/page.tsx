"use server";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Navbar01 } from "@/components/shadcn-io/navbar-01";

import { BackgroundPattern } from "@/components/ui/background-pattern";
import {
  ArrowUpRightIcon,
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Pricing02 from "@/components/shadcnui/pricing-02";
import Features07Page from "@/components/shadcnui/feature-07";
import FAQsTwo from "@/components/tailark/faqs";
import Footer from "@/components/shadcnui/footer";
import Wave1 from "@/components/ui/wave1";
import Wave2 from "@/components/ui/wave2";
import FeaturesSection from "@/components/tailark/features2";

export default async function Index() {
  return (
    <main className="">
      <Navbar01 />

      {/* ------------------------------ HERO ---------------------------------- */}
      <div className="absolute top-0 h-[1000px] w-full">
        <BackgroundPattern />
      </div>
      <div className=" lg:pt-20  flex items-center justify-center overflow-hidden">
        <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
          <div className="my-auto">
            <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
              Fun and Easy Quran Learning for Kids!
            </h1>
            <p className="mt-6 max-w-[60ch] text-lg">
              Darsy makes Quran learning joyful for your child. With engaging
              lessons, interactive activities, and caring teachers, we nurture a
              love for the Quran from an early age.
            </p>
            <div className=" mt-12 flex items-center gap-4">
              <a
                href="https://wa.me/6282285567722?text=Assalaamu'alaikum%21%20I%27m%20interested%20in%20starting%20Quran%20classes%20for%20my%20child."
                className="z-10"
              >
                {/* Wa’alaikumussalaam! 🌸
Thank you for reaching out to Darsy!
I'm Riani, Darsy's customer services. We’d love to help your child start their Quran journey.
Could you share a little about your child? Like their age or any Quran learning experience.
This will help us prepare suitable class for them.*/}

                <Button
                  size="lg"
                  className=" rounded-full text-base bg-lime-500"
                >
                  Start Free Class <ArrowUpRightIcon className="!h-5 !w-5" />
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none"
              >
                Learn more...
              </Button>
            </div>
          </div>
          <Image
            src="belajaronline.svg"
            alt=""
            height={1000}
            width={1000}
            // className="w-full lg:aspect-auto lg:w-[1000px] lg:h-[calc(100vh-4rem)] bg-slate-100 rounded-xl"
            className="w-full bg-slate-100 rounded-xl"
          />
        </div>
      </div>

      {/* ------------------------------ Enjoy Free QUran Classes ---------------------------------- */}
      <div className="-mb-2">
        <Wave1 />
      </div>

      <div className="bg-lime-300 w-full flex flex-col gap-10 items-center justify-center px-6 py-0">
        <div className="text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight mt-6  sm:text-5xl  !leading-[1.2] ">
            Enjoy free Quran classes
          </h2>
          <p className="mt-6 text-[17px] md:text-lg ">
            As Muslims, we believe everyone deserves access to the Quran. That’s
            why Darsy offers <b>free Quran classes</b>, as part of our mission
            to teach and spread Quranic knowledge. For families seeking a more
            personalized and interactive learning journey, we also offer
            subscription plans with expert teachers, engaging materials, and
            progress tracking — making Quran learning truly fun and impactful.{" "}
          </p>
        </div>
      </div>
      <Wave2 />

      {/* ------------------------------ Features (What your child will learn) ---------------------------------- */}
      <Features07Page />
      {/* ------------------------------ Features2 (Why parents trust Darsy) ---------------------------------- */}
      <div className="-mb-6 lg:-mb-20">
        <Wave1 />
      </div>
      <div className="bg-lime-300">
        <FeaturesSection />
      </div>
      <Wave2 />
      {/* ------------------------------ PRICING ---------------------------------- */}

      {/* <Pricing01 /> */}
      <Pricing02 />

      {/* ------------------------------ FAQ ---------------------------------- */}
      <div className="-mb-6 lg:-mb-20">
        <Wave1 />
      </div>
      <div className="bg-lime-300">
        <FAQsTwo />
      </div>

      {/* ------------------------------ FOOTER ---------------------------------- */}
      <div className="bg-lime-300">
        <Footer />
      </div>
    </main>
  );
}
