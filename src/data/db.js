import garden from "../assets/infrastructure/garden.webp";
import gym from "../assets/infrastructure/gym.webp";
import kids from "../assets/infrastructure/kids.webp";
import pool from "../assets/infrastructure/pool.webp";
import ex1 from "../assets/gallery/ex1.webp";
import ex2 from "../assets/gallery/ex2.webp";
import ex3 from "../assets/gallery/ex3.webp";
import ex4 from "../assets/gallery/ex4.webp";
import ex5 from "../assets/gallery/ex5.jpg";
import in1 from "../assets/gallery/in1.webp";
import in2 from "../assets/gallery/in2.webp";
import in3 from "../assets/gallery/in3.webp";
import in4 from "../assets/gallery/in4.webp";
import in5 from "../assets/gallery/in5.jpg";
import fourBedroom from "../assets/4-Bedroom.jpg";
import fiveBedroom from "../assets/5-Bedroom.jpg";
import sixBedroom from "../assets/6-Bedroom.jpg";
import WaterPark from "../assets/nearby/waterpark.webp";
import sealion from "../assets/nearby/sealion.webp";
import nakheelmall from "../assets/nearby/nakheelmall.webp";
import alIttihadpark from "../assets/nearby/alltihadpark.webp";
import internationalSchool from "../assets/nearby/internationa-school.webp";
import supermarket from "../assets/nearby/supermarket.webp";
import monorail from "../assets/nearby/monorail.webp";

export const INFRASTRUCTURE = {
  Garden: {
    image: garden,
    details:
      "Let your little ones free to meet, play and make childhood memories to last a lifetime.   ",
  },
  Gym: {
    image: gym,
    details:
      "State-of-the-art Gymnasium ready for your Workout.     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident fuga voluptates quo eos, totam distinctio iusto temporibus nesciunt corporis voluptas neque laborum saepe voluptatibus nisi eaque sapiente? Esse tenetur aliquid enim ea quo, nobis ab aut nihil quasi rerum consequatur beatae debitis veritatis explicabo commodi alias aperiam quis in animi. Laboriosam et iusto deserriosam eos iusto quam quod labore voluptate! Aliquid doloribus a quia placeat earum! Quis, atque commodi.",
  },
  Kids: {
    image: kids,
    details:
      "Explore your inner child with kids and let them have fun, enjoying the lifestyle.   Lorem ipsum dolor sit,vel a aliquam quisquam eum laboriosam eos iusto quam quod labore voluptate! Aliquid doloribus a quia placeat earum! Quis, atque commodi.",
  },
  Pool: {
    image: pool,
    details:
      "Laps in the Swimming Pool surrounded by the Sun Longer areas for relaxation.     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident fuga voluptates quo eos, totam distinctio iusto temporibus nesciunt corporis voluptas neque laborum saepe voluptatibus nisi eaque sapiente? Esse tenetur aliquid enim ea quo, no atque commodi.",
  },
};

export const GALLERY = {
  Exterior: [
    {
      image: ex1,
      cols: 3,
      full: "full",
    },
    {
      image: ex2,
      cols: 2,
    },
    {
      image: ex3,
      cols: 2,
    },
    {
      image: ex4,
      cols: 2,
    },
    {
      image: ex5,
      cols: 1,
    },
  ],
  Enterior: [
    {
      image: in1,
      cols: 4,
    },
    {
      image: in2,
      cols: 2,
    },
    {
      image: in3,
      cols: 2,
    },
    {
      image: in4,
      cols: 2,
    },
    {
      image: in5,
      cols: 1,
    },
  ],
};

export const FLOOR = {
  "4 Bedroom": {
    image: fourBedroom,
  },
  "5 Bedroom": {
    image: fiveBedroom,
  },
  "6 Bedroom": {
    image: sixBedroom,
  },
};

export const NEARBY = [
  {
    image: WaterPark,
    name: "Aquaculture Water Park",
  },
  {
    image: sealion,
    name: "Sea Lion Point",
  },
  {
    image: nakheelmall,
    name: "Nakheel Mall",
  },
  {
    image: alIttihadpark,
    name: "Al Ittihad Park",
  },
  {
    image: internationalSchool,
    name: "The International School of Choueifat",
  },
  {
    image: supermarket,
    name: "Aswaaq Supermarket",
  },
  {
    image: monorail,
    name: "Monorail",
  },
];
