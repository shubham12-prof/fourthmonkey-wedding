const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    const normalizedKey = key.replace("./", "");
    images[normalizedKey] = r(key);
  });
  return images;
};

const images = importAll(
  require.context("../../assets/images", true, /\.(jpg|jpeg|png|gif|JPG)$/)
);

export const projects = [
  {
    id: 1,
    title: "Sanchit",
    description: "Your wedding day should be magical.",
    imageUrl:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_469,h_468/v1738239905/xoexg6w5o9w5m74klbdg.jpg",
    galleryImages: Object.keys(images)
      .filter(
        (key) =>
          key.startsWith("Sanchit/Haldi/") || key.startsWith("Sanchit/Sangeet/")
      )
      .map((key) => ({
        original: images[key],
        thumbnail: images[key],
      })),
  },
  {
    id: 2,
    title: "Bhavneet and Ritvika",
    description: "A day filled with joy and laughter.",
    imageUrl:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_449,h_448/v1738240027/ynuq1uxnd2p6b9q5btka.jpg",
    galleryImages: Object.keys(images)
      .filter(
        (key) =>
          key.startsWith("BhavneetandRitvika/Haldi/") ||
          key.startsWith("BhavneetandRitvika/Sangeet/") ||
          key.startsWith("BhavneetandRitvika/Wedding/")
      )
      .map((key) => ({
        original: images[key],
        thumbnail: images[key],
      })),
  },
  {
    id: 3,
    title: "Bharti and Rishab",
    description: "A day filled with joy and laughter.",
    imageUrl:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_449,h_448/v1738240189/qjwx4wix11ffbzv7ih6d.jpg",
    galleryImages: Object.keys(images)
      .filter(
        (key) =>
          key.startsWith("BhartiandRishab/Haldi/") ||
          key.startsWith("BhartiandRishab/Sangeet/") ||
          key.startsWith("BhartiandRishab/Mehndi/") ||
          key.startsWith("BhartiandRishab/Wedding/")
      )
      .map((key) => ({
        original: images[key],
        thumbnail: images[key],
      })),
  },
  {
    id: 4,
    title: "Dheeraj and Ananya",
    description: "A celebration of love and togetherness.",
    imageUrl:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_449,h_448/v1738240227/eslpwgdjxpf8z19z1yu8.jpg",
    galleryImages: Object.keys(images)
      .filter(
        (key) =>
          key.startsWith("DheerajandAnanya/Sangeet/") ||
          key.startsWith("DheerajandAnanya/Wedding/")
      )
      .map((key) => ({
        original: images[key],
        thumbnail: images[key],
      })),
  },
  {
    id: 5,
    title: "Tanvi and Aman",
    description: "A day filled with joy and laughter.",
    imageUrl:
      "https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_449,h_448/v1738240271/cwbkgb5jglwlbqhsi8fm.jpg",
    galleryImages: Object.keys(images)
      .filter(
        (key) =>
          key.startsWith("TanviandAman/Haldi/") ||
          key.startsWith("TanviandAman/Sangeet/") ||
          key.startsWith("TanviandAman/Mehndi/") ||
          key.startsWith("TanviandAman/Wedding/")
      )
      .map((key) => ({
        original: images[key],
        thumbnail: images[key],
      })),
  },
];
