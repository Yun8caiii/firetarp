import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
}

interface CoreValue {
  title: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Brian F.",
    title: "Chief Executive Officer",
    image: "https://via.placeholder.com/300x300?text=John+Doe",
    description:
      "John leads our company with vision, strategy, and an unwavering commitment to excellence.",
  },
  {
    name: "Kyle T.",
    title: "Chief Executive Officer",
    image: "https://via.placeholder.com/300x300?text=Jane+Smith",
    description:
      "Jane drives our technological innovations and ensures that our systems run smoothly.",
  },
  {
    name: "Yun C.",
    title: "Chief Executive Officer",
    image: "https://via.placeholder.com/300x300?text=Emily+Johnson",
    description:
      "Emily coordinates our operations, making sure every detail aligns with our mission.",
  },
];

const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our actions.",
  },
  {
    title: "Innovation",
    description:
      "We continually embrace new ideas and technologies to deliver exceptional results.",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and open communication to drive success.",
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold light:text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-600">
            We are passionate about creating impactful solutions with a team
            dedicated to excellence and a set of core values that guide
            everything we do.
          </p>
        </header>

        {/* Our Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold light:text-gray-800 text-center mb-8">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover"
                  width={300}
                  height={300}
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{member.title}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section>
          <h2 className="text-3xl font-semibold light:text-gray-800 text-center mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
