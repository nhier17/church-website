import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram } from "lucide-react";

const leaders = [
  {
    name: "Jerry Novak",
    position: "Pastor",
    image:
      "https://i.pinimg.com/736x/c6/fa/e1/c6fae11321c48bedd6a173746c66472d.jpg",
    bio: "Jerry is passionate about community and spiritual growth. He has been serving for over 15 years.",
  },
  {
    name: "Pastor Andrew",
    position: "Vice Pastor",
    image:
      "https://i.pinimg.com/736x/5d/62/49/5d624954466036ba3e5e5460611440dc.jpg",
    bio: "Andrew supports outreach programs and youth development across the church.",
  },
];

const Leaders = () => {
  return (
    <section className="section-padding bg-background py-20">
      <div className="mx-auto max-w-4xl text-center mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Meet Our Leaders
        </h2>
        <p className="text-lg text-muted-foreground">
          Passionate, caring, and faithful leaders shepherding our vision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto px-4">
        {leaders.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-60 w-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm uppercase tracking-wide text-primary mt-1 mb-3">
                {member.position}
              </p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>

              {/* Optional social icons */}
              <div className="mt-4 flex justify-center gap-4 text-primary">
                <Facebook className="hover:text-blue-600 cursor-pointer" />
                <Twitter className="hover:text-sky-500 cursor-pointer" />
                <Instagram className="hover:text-pink-500 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Leaders;
