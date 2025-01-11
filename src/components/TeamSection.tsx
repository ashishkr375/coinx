'use client';

import { Card } from "@/components/ui/card";
import Image from "next/image";

interface TeamMember {
  name: string;
  designation: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "John Smith",
    designation: "Designation here",
    image: "https://i.pravatar.cc/300?img=1",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "Elina Williams",
    designation: "Designation here",
    image: "https://i.pravatar.cc/300?img=5",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
  {
    name: "John Smith",
    designation: "Designation here",
    image: "https://i.pravatar.cc/300?img=3",
    description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
  },
];

export function TeamSection() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Team</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
        </p>

        <div className="space-y-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-6"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col items-center text-center md:w-48 shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-lg mb-2"
                  />
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.designation}</p>
                </div>
                <p className="text-gray-600 flex-1">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
} 