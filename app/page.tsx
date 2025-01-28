import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { FaShieldAlt, FaShippingFast, FaHome } from "react-icons/fa";
import Link from "next/link";
import CardComponent from "@/components/card-component";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen border-b border-border">
        <main className="container mx-auto text-center">
          <div className="relative mx-auto w-full max-w-4xl pt-4">
            <div className="justify-center hidden md:flex">
              <div className="flex flex-row items-center justify-center gap-5 p-1 text-xs bg-card/60 backdrop-blur-lg rounded-md border border-border">
                <Badge className="font-semibold">New</Badge>
                <h5>Get Estimate Immediately</h5>
                <Link href="/" className="flex flex-row items-center">
                  View all features
                  <ArrowRightIcon className="w-6 h-6 ml-2" />
                </Link>
              </div>
            </div>
            <h1 className="text-2xl md:text-7xl my-4 font-extrabold md:leading-tight px-8 md:px-4">
              BlazeGuard: Next-Level Fire Protection
            </h1>
            <p className="text-xs md:text-sm mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide px-8 md:px-4">
              Defend your home with BlazeGuard's fire-resistant tarps, designed to block intense heat and embers, giving you peace of mind when it matters most!
            </p>
            <div className="flex flex-row justify-center items-center space-x-4 my-8">
              <Button>Shop Now</Button>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </main>
      </div>
      
      {/* Product Section */}
      <div id="product-overview" className="relative mx-auto w-full max-w-4xl pt-8 text-center">
        <h2 className="text-xl md:text-5xl my-4 font-bold md:leading-tight px-8 md:px-4">
          Why Choose BlazeGuard?
        </h2>
        <p className="text-xs md:text-sm mx-auto my-4 w-full max-w-xl text-center font-medium leading-relaxed tracking-wide px-8 md:px-4">
          BlazeGuard offers unparalleled fire protection with its advanced fire-resistant tarps. Our products are designed to withstand extreme heat and prevent the spread of embers, ensuring the safety of your home and loved ones.
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
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="relative mx-auto w-full max-w-4xl pt-8 text-center">
        <h2 className="text-xl md:text-5xl my-4 font-bold md:leading-tight px-8 md:px-4">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-4">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mb-4">
              <FaShieldAlt className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Choose Your Protection</h3>
            <p className="text-sm">Select the BlazeGuard product that best suits your needs.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mb-4">
              <FaShippingFast className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
            <p className="text-sm">We ship or schedule installation quickly to ensure your protection.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mb-4">
              <FaHome className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold mb-2">Stay Protected</h3>
            <p className="text-sm">Shield your home from wildfires and extreme heat with BlazeGuard.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
