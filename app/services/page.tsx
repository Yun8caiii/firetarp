import CardComponent from "@/components/card-component";
import { Button } from "@/components/ui/button";
import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

function page() {
  const words = ["stronger", "better", "together"];
  return (
    <>
            {/* Product Section */}
            <div
        id="product-overview"
        className="relative mx-auto w-full max-w-4xl pt-12 text-center"
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
    </>
  );
}

export default page;
