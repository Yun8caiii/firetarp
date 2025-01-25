import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="border-b border-border">
      <main className="container mx-auto">
        <div className="relative md:mt-24 mx-auto w-full max-w-4xl pt-4 text-center">
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
            Defend your home with BlazeGuard&apos;s fire-resistant tarps, designed to block intense heat and embers, giving you peace of mind when it matters most!
          </p>
          <div className="flex flex-row justify-center items-center space-x-4 my-8">
            <Button>Shop Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
