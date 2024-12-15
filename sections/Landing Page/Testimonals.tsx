import React, { Fragment } from "react";
import Image from "next/image";
import FiveStars from "@/public/assets/images/5stars.png";
import RedComma from "@/public/assets/images/redinvertedcomma.png";
import WhiteComma from "@/public/assets/images/whiteinvertedcomma.png";

const testimonials = [
  {
    name: "Heidi Naude",
    rating: FiveStars,
    text: "Best meat and fresh veggies in town. Everything you need under one roof. Fantastic service and friendly staff. Whether it's popping in to grab a bread and milk or doing your month-end groceries, you can't go wrong with Quality Meats",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjW14XrzfyQjCG5Ja0re0aM_rpVyjMlFaztQePqXOq5tU6E_PHL4=w68-h68-p-rp-mo-br100",
    bgColor: "bg-white",
    textColor: "text-black",
    invertedComma: RedComma,
  },
  {
    name: "Theresa Terblanche",
    rating: FiveStars,
    text: "Everytime I tavel from CPT to JHB this is a must stop! Love their biltong!",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocLv1iuF1kcLsoqhGaXyBsd31CeeTGxhTdceCK7b_4UgW9OZ_g=w68-h68-p-rp-mo-ba2-br100",
    bgColor: "bg-red-700",
    textColor: "text-white",
    invertedComma: WhiteComma,
  },
 
  {
    name: "Kevin Selvan",
    rating: FiveStars,
    text: "This is by far the best butchery I have ever come across. Prices are excellent, quality and range hard to beat and great staff to assist. They also do sauces, marinades, bakery... A great place to shop and worth traveling to.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjV16Jf5iVpZ5BmDWk7bhbce-haKEU7ghobVFfgOrKHnpdfpv7kY=w68-h68-p-rp-mo-ba4-br100",
    bgColor: "bg-white",
    textColor: "text-black",
    invertedComma: RedComma,
  },
  {
    name: "Renof Nhlongo",
    rating: FiveStars,
    text: "Their service is outstanding. And they are very fast. Also, the meat is fresh and their veggies are fresh from the farm. The best!",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVDCiaohv6kzwNXukmMDHqqVGfbVM_-yYewY_TWyqMeuLyV0siu=w68-h68-p-rp-mo-ba3-br100",
    bgColor: "bg-red-700",
    textColor: "text-white",
    invertedComma: WhiteComma,
  },
  {
    name: "TSimon Phala",
    rating: FiveStars,
    text: "Had a great shopping experience and their name says it all 💯",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUbjhxODsgdwEGEFkk3qX2PFjLDBwplTmydjeA8J_mYE90nvruE=w68-h68-p-rp-mo-ba6-br100",
    bgColor: "bg-white",
    textColor: "text-black",
    invertedComma: RedComma,
  },
  {
    name: "Phumzile Mlombo",
    rating: FiveStars,
    text: "Good service... Fresh meat, fruits and vegetables at an affordable price and they have nice weekly specials.",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWWo9qCeUqOIrj5RvwCBkFBl5eH5DDT1Qxr5wbuEEdKpidBzgag=w68-h68-p-rp-mo-ba2-br100",
    bgColor: "bg-red-700",
    textColor: "text-white",
    invertedComma: WhiteComma,
  },

];

export default function Testimonials() {
  return (
    <section className="pt-32 flex flex-col justify-center items-center">
      <h1 className="pb-20 text-4xl font-light text-center">What Our Clients Say!</h1>
      {/* Testimonial Section */}
      <div className="flex overflow-hidden items-center">
        <div className="flex gap-10 animate-move-left py-10 [animation-duration:90s] hover:[animation-play-state:paused]">
          {Array(2)
            .fill(0)
            .map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${idx}-${index}`}
                    className={`flex shadow-md flex-col py-8 px-16 items-center text-start hover:-rotate-3 transition duration-300 ${testimonial.bgColor} ${testimonial.textColor}`}
                  >
                    <div className="mb-6 flex justify-between w-full items-center">
                      <div className="flex gap-5 items-center">
                        <Image
                          src={testimonial.avatar}
                          alt={`${testimonial.name} Profile Image`}
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div>
                          <span className="font-bold">{testimonial.name}</span>
                          <Image
                            src={testimonial.rating}
                            alt="Rating stars"
                            width={120}
                            height={20}
                          />
                        </div>
                      </div>
                      <Image
                        src={testimonial.invertedComma}
                        alt="Inverted comma image"
                        width={50}
                        height={50}
                      />
                    </div>
                    <p className="w-[450px]">{testimonial.text}</p>
                  </div>
                ))}
              </Fragment>
            ))}
        </div>
      </div>
    </section>
  );
}
