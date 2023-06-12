import {
  Infinity1,
  Infinity2,
  GiftHamper,
  GifyHamper1,
  Pop1,
  Pop2,
  Pop,
  Jar1,
  Jar2,
  Jar3,
  Mason1,
  Mason2,
  SpotifyImg,
  Hoop1,
  Hoop2,
  NameFrame,
} from "../../public/images";

export const navLinks = [
  {
    id: "Home",
    title: "Home",
  },
  {
    id: "Shop",
    title: "Shop",
  },
  {
    id: "about",
    title: "About",
  },
];

const products = [
  {
    id: 1,
    title: "Embroidery Hoop",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210353/Hoop1_kjgcqg.jpg",
    category: "ha ha",
    discription:
      "Best gift for weddings and anniversaries. Each and every element is hand embroidered. Also it can be used as a decore peice wall hanging and beautify your homes.",
    price: 2000,
    slideData: [
      {
        image: Hoop1,
        alt: "Slide 1",
      },
      {
        image: Hoop2,
        alt: "Slide 3",
      },
    ],
  },
  {
    id: 2,
    title: "Mason Jar",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210351/MasonJar1_smrc0i.jpg",
    category: "",
    discription:
      "Includes a big mason jar with a resin base and resin detailings. It can perfectly go with any interior as a decore or can be used to keep some chocolates and dry fruits on occasions. This can be a very unique gift to someone and can be paired up with candles and fairy lights.",
    price: 1500,
    slideData: [
      {
        image: Mason1,
        alt: "Slide 1",
      },
      {
        image: Mason2,
        alt: "Slide 2",
      },
    ],
  },
  {
    id: 3,
    title: "Infinity Box",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210344/InfinityBox_yvqb2i.jpg",
    category: "sk c",
    discription:
      "As the name suggests, it is a bundle of infinite memories stored in a box. Inside the box there is a photo cube which can be opened infinite times with different pictures in every fold. Contains 48 photos in all.",
    price: 500,
    slideData: [
      {
        image: Infinity1,
        alt: "Slide 1",
      },
      {
        image: Infinity2,
        alt: "Slide 2",
      },
    ],
  },
  {
    id: 4,
    title: "Spotify Frame",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210333/Spotify_tmuyg7.webp",
    category: "",
    discription:
      "Now you can actually dedicate a song to your loved ones with this spotify frame. It includes your picture with a spotify code so that any time they can just scan and listen to the song remembering you.",
    price: 500,
    slideData: [
      {
        image: SpotifyImg,
        alt: "Slide 1",
      },
    ],
  },
  {
    id: 5,
    title: "Enlightenment Jar",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210344/AesthteicJar1_zdfbpe.jpg",
    category: "sk c",
    discription:
      "This small version of jar holds the same values as a big mason jar. The jars are decoratied with boho chic elements like jute and flowers to make it look different. Perfectly fits as a candle holder with a resin lid.",
    price: 300,
    slideData: [
      {
        image: Jar1,
        alt: "Slide 1",
      },
      {
        image: Jar2,
        alt: "Slide 2",
      },
      {
        image: Jar3,
        alt: "Slide 3",
      },
    ],
  },
  {
    id: 6,
    title: "Gift Hamper",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210345/GiftHamper1_odfh8l.jpg",
    discription:
      "Combine your precious gifts with our creativity and give them an enhanced presentation. Our hampers are the best presentation for any gift. It can be customized as per the occasion. Even if it is a wedding or a birthday make your presence a memorable one with these gift hampers",
    category: "Potraits",
    price: 500,
    slideData: [
      // {
      //   image: GiftHamper,
      //   alt: "Slide 1",
      // },
      {
        image: GifyHamper1,
        alt: "Slide 2",
      },
    ],
  },
  {
    id: 7,
    title: "Pop Ups",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210337/PopUps1_k3ofen.jpg",
    category: "sk c",
    discription:
      "This box contains a combination of 10 portrait illustrations with a letter envelope.  Express your love through this cute and creative gesture with a personal touch.",
    price: 500,
    slideData: [
      {
        image: Pop,
        alt: "Slide 1",
      },
      {
        image: Pop1,
        alt: "Slide 2",
      },
      // {
      //   image: Pop2,
      //   alt: "Slide 3",
      // },
    ],
  },
  {
    id: 8,
    title: "Resin Name Plate",
    image:
      "https://res.cloudinary.com/dimitbyij/image/upload/v1686210352/NameFrame_rmjicx.jpg",
    category: "",
    discription:
      "The resin name plate is the for gifting and expressing your love  ",
    price: 2000,
    slideData: [
      {
        image: NameFrame,
        alt: "Slide 0",
      },
    ],
  },
];

export { products };
