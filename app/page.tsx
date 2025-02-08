import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import CardComponent from "@/components/card-component";
import { BackgroundMedia } from "@/components/ui/bg-media";
import { FlipWords } from "@/components/ui/flip-words";
import { HyperText } from "@/components/ui/hyper-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const words = ["stronger", "better", "together"];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center">
        <div className="flex flex-row w-full h-full">
          <div className="flex-1 flex items-center justify-center bg-gray border-gray-300 p-4">
            <div className="text-center">
              <div className="justify-center hidden md:flex mb-4">
                <div className="flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border">
                  <Badge className="font-semibold">New</Badge>
                  <h5>Get Estimate Immediately</h5>
                  <Link href="/" className="flex flex-row items-center">
                    View all features
                    <ArrowRightIcon className="w-6 h-6 ml-2" />
                  </Link>
                </div>
              </div>
              <h1 className="md:text-7xl my-0 font-bold md:leading-tight px-8 md:px-4">
                <HyperText className="text-stone-600 text-6xl">
                  FireTarp
                </HyperText>
              </h1>
              <h1 className="text-2xl md:text-7xl -my-4 font-extrabold md:leading-tight px-8 md:px-4">
                <HyperText className="text-stone-700">
                  Next-Level Fire Protection
                </HyperText>
              </h1>
              <p className="text-stone-950 text-base dark:text-stone-500 md:text-lg mx-auto my-4 w-full max-w-xl text-center font-extralight leading-relaxed tracking-wide px-8 md:px-4 ">
                Defend your home with FireTarp&apos;s fire-resistant tarps,
                designed to block intense heat and embers, giving you peace of
                mind when it matters most!
              </p>
              <div className="flex flex-row justify-center items-center space-x-4 my-8">
                <Button>Get Protected Today</Button>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
          <div className="flex-1 relative border-8 rounded-lg border-gray-800 m-4 mb-[80px]">
            <BackgroundMedia type="video" variant="dark" src="burnthomes.mp4" />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative mx-auto w-full max-w-4xl pt-48 text-center flex flex-row">
        <div className="flex-1 mr-72">
          {" "}
          {/* Added margin-right */}
          <Carousel>
            <CarouselContent>
              <CarouselItem>Image1...</CarouselItem>
              <CarouselItem>Image2...</CarouselItem>
              <CarouselItem>Image3...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center space-y-6">
          <h2 className="text-xl md:text-3xl font-base md:leading-tight md:px-3">
            Short Process to Prevent Long Term Disasters.
          </h2>
          <p>
            1. Scientifically Engineered Premium Heat Resistant Tarp Cover with Aerogel
            Technologies to Protect Your Home.
          </p>
          <p>2. Tightly wrapped around your home</p>
          <p>3. Protect all your valubles and goods from being destroyed saving you the cost to rebuilding from scatch</p>
        </div>
      </div>

      {/* Product Section */}
      <div
        id="product-overview"
        className="relative mx-auto w-full max-w-4xl pt-48 text-center"
      >
        <h1 className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Protect
          <FlipWords words={words} /> <br />
          Stronger Protection, Smarter Choice
        </h1>
        <p className="text-xs md:text-lg mx-auto my-4 w-full max-w-xl text-center font-extralight leading-relaxed tracking-wide px-8 md:px-4">
          BlazeGuard offers unparalleled fire protection with its advanced
          fire-resistant tarps. Our products are designed to withstand extreme
          heat and prevent the spread of embers, ensuring the safety of your
          home and loved ones.
        </p>
        <div className="flex flex-row justify-center items-center space-x-4 my-8">
          <Button>Learn More</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <CardComponent
              title="Tarp + Installation Service"
              description={[
                "High-quality materials",
                "Withstands extreme heat",
                "Prevents spread of embers",
                "Professional installation",
                "Warranty included",
              ]}
              orderNowText="ORDER NOW"
              learnMoreText="LEARN MORE"
              orderNowLink="https://buy.stripe.com/aEUcPgcGzaM44q4fYY"
            />
          </div>
          <div className="flex justify-center">
            <CardComponent
              title="Tarp Only"
              description={[
                "High-quality materials",
                "Withstands extreme heat",
                "Prevents spread of embers",
                "Covers up to 2,200 square feet",
              ]}
              orderNowText="ORDER NOW"
              learnMoreText="LEARN MORE"
              orderNowLink="https://buy.stripe.com/dR62aCfSL2fy4q4001"
            />
          </div>
          <div className="flex justify-center">
            <CardComponent
              title="Custom Orders"
              description={[
                "High-quality materials",
                "Withstands extreme heat",
                "Prevents spread of embers",
                "Covers up to 2,200 square feet",
              ]}
              orderNowText="ORDER NOW"
              learnMoreText="LEARN MORE"
              orderNowLink="https://buy.stripe.com/dR62aCfSL2fy4q4001"
            />
          </div>
        </div>
      </div>

      <section id="faqs-title" className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2
              id="faqs-title"
              className="text-3xl font-medium tracking-tight light:text-gray-900"
            >
              Frequently asked questions
            </h2>
            <p className="mt-2 text-lg dark:text-gray-600">
              If you have anything else you want to ask,
              <a
                href="mailto:info@example.com"
                className="light:text-gray-900 underline"
              >
                reach out to us.
              </a>
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
          >
            <li className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-medium dark:text-gray-100">
                What is BlazeGuard?
              </h3>
              <p className="mt-2 text-base dark:text-gray-300">
                BlazeGuard is a fire-resistant tarp designed to protect your
                home from wildfires and extreme heat. Our tarps are made from
                high-quality materials that can withstand intense heat and
                prevent the spread of embers.
              </p>
            </li>
            <li className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-medium dark:text-gray-100">
                How does BlazeGuard work?
              </h3>
              <p className="mt-2 text-base dark:text-gray-300">
                BlazeGuard works by creating a protective barrier around your
                home, shielding it from the intense heat and embers produced by
                wildfires. Our tarps are designed to withstand extreme
                temperatures and prevent the spread of embers, keeping your home
                safe during a fire.
              </p>
            </li>
            <li className="flex flex-col p-6 bg-white rounded-lg shadow-md dark:bg-gray-800">
              <h3 className="text-xl font-medium dark:text-gray-100">
                How do I install BlazeGuard?
              </h3>
              <p className="mt-2 text-base dark:text-gray-300">
                BlazeGuard can be installed by our team of professionals, who
                will ensure that your home is properly protected. Our
                installation process is quick and easy, and we will work with
                you to determine the best placement for your tarps.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
