import CardComponent from "@/components/card-component";
import { Button } from "@/components/ui/button";
import React from "react";

function page() {
  return (
    <>
      <div
        id="product-overview"
        className="relative mx-auto w-full max-w-4xl pt-8 text-center"
      >
        <h2 className="text-xl md:text-5xl my-4 font-bold md:leading-tight px-8 md:px-4">
          Why Choose BlazeGuard?
        </h2>
        <p className="text-xs md:text-sm mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide px-8 md:px-4">
          BlazeGuard offers unparalleled fire protection with its advanced
          fire-resistant tarps. Our products are designed to withstand extreme
          heat and prevent the spread of embers, ensuring the safety of your
          home and loved ones.
        </p>
        <div className="flex flex-row justify-center items-center space-x-4 my-8">
          <Button>Learn More</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            orderNowLink="https://buy.stripe.com/dR62aCfSL2fy4q4001"
          />
          <CardComponent
            title="Tarp Only"
            description={[
              "High-quality materials",
              "Withstands extreme heat",
              "Prevents spread of embers",
            ]}
            orderNowText="ORDER NOW"
            learnMoreText="LEARN MORE"
            orderNowLink="https://buy.stripe.com/aEUcPgcGzaM44q4fYY"
          />
        </div>
      </div>
    </>
  );
}

export default page;
