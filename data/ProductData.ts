import Pictures from "./Pictures/Pictures";

interface Product {
  id: number;
  name: string;
  price: number;
  image: any;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Airpods",
    price: 159.99,
    image: Pictures.Airpods,
  },
  {
    id: 2,
    name: "Dumbbell",
    price: 190.99,
    image: Pictures.dumbel,
  },
  {
    id: 3,
    name: "Gaming Setup",
    price: 5000.99,
    image: Pictures.GaminSetup,
  },
  {
    id: 4,
    name: "Hair Spray",
    price: 415.99,
    image: Pictures.HairSpray,
  },
  {
    id: 5,
    name: "Ipad",
    price: 800.99,
    image: Pictures.Ipad,
  },
  {
    id: 6,
    name: "Ipad Pro",
    price: 700.99,
    image: Pictures.IpadPro,
  },
  {
    id: 7,
    name: "Iphone",
    price: 1999.99,
    image: Pictures.Iphone,
  },
  {
    id: 8,
    name: "Iphone 11",
    price: 7000.99,
    image: Pictures.Iphone11,
  },
  {
    id: 9,
    name: "Logitech Mouse",
    price: 3199.99,
    image: Pictures.LogiMouse,
  },
  {
    id: 10,
    name: "Keyboard & Mouse",
    price: 108.99,

    image: Pictures.LogitechKeyboard,
  },
  // Add more products here...
  {
    id: 11,
    name: "MacBook",
    price: 6000.99,

    image: Pictures.macBook,
  },
  {
    id: 12,
    name: "Phantom Drone",
    price: 250.99,

    image: Pictures.PhantomDrone,
  },
  {
    id: 13,
    name: "Smartwatch",
    price: 160.99,

    image: Pictures.Smartwatch,
  },
  {
    id: 14,
    name: "VR Headset",
    price: 309.99,

    image: Pictures.VRHeadset,
  },
  {
    id: 15,
    name: "MacBook Pro",
    price: 170.99,

    image: require("../assets/macbook.webp"),
  },
  // Add more products here...
  {
    id: 16,
    name: "Yoga Mat",
    price: 80.99,

    image: Pictures.YogaMat,
  },
  {
    id: 17,
    name: "Glasses",
    price: 12.99,

    image: Pictures.Glasses,
  },
  {
    id: 18,
    name: "Body Perfume",
    price: 50.99,

    image: Pictures.Perfume,
  },
  {
    id: 19,
    name: "Writs Watch",
    price: 100.99,

    image: Pictures.WristWatch,
  },
  {
    id: 20,
    name: "Jordan Air Shoes",
    price: 170.99,

    image: Pictures.JordanAir,
  },
];

export default products;
