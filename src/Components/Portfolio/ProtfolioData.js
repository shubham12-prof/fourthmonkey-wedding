function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    const normalizedKey = key.replace("./", "");
    images[normalizedKey] = r(key);
  });
  console.log(images, "images appear");
  return images;
}

const images = importAll(
  require.context("../../assets/images", true, /\.(jpg|jpeg|png|gif|JPG)$/)
);

export const projects = [
  {
    id: 1,
    title: "Sanchit",
    description: "Your wedding day should be magical.",
    imageUrl: images["Sanchit/Haldi/image1.JPG"],
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
    imageUrl: images["BhavneetandRitvika/Wedding/ADP_4962.JPG"],
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
    imageUrl: images["BhartiandRishab/Haldi/image1.jpg"],
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
    imageUrl: images["DheerajandAnanya/Sangeet/image1.JPG"],
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
    imageUrl: images["TanviandAman/Haldi/IMG_1456.JPG"],
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
