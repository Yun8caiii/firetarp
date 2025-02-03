import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CardComponentProps {
  title: string;
  description: string[];
  orderNowText: string;
  learnMoreText: string;
  orderNowLink: string;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  description,
  orderNowText,
  learnMoreText,
  orderNowLink,
}) => {
  return (
    <Card className="w-80 h-96 mx-auto my-4 shadow-lg flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          <ul className="list-disc list-inside space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center space-x-2">
        <a href={orderNowLink} target="_blank" rel="noopener noreferrer">
          <Button className="text-xs px-2 py-1">{orderNowText}</Button>
        </a>
        <Button variant="secondary" className="text-xs px-2 py-1">
          {learnMoreText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardComponent;