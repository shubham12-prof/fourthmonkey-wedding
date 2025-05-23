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

const cloudinaryBaseURL =
  "https://res.cloudinary.com/dmj6ur8sm/image/upload/f_auto,q_auto,w_380,h_380/";
export const projects = [
  {
    id: 1,
    title: "Sanchit + aishwarya",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}ooxoxzqifj82ggg9jsh3.jpg`,
    galleryImages: Object.entries(images)
      .filter(
        ([key]) =>
          key.startsWith("Sanchit/Haldi/") || key.startsWith("Sanchit/Sangeet/")
      )
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
  {
    id: 2,
    title: "Bhavneet + Ritvika",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}wnvfdaizzfwh25ewnghx.jpg`,
    galleryImages: Object.entries(images)
      .filter(
        ([key]) =>
          key.startsWith("BhavneetandRitvika/Haldi/") ||
          key.startsWith("BhavneetandRitvika/Sangeet/") ||
          key.startsWith("BhavneetandRitvika/Wedding/")
      )
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
  {
    id: 3,
    title: "Bharti + Rishab",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}konsabcdfemdpz46hmvr.jpg`,
    galleryImages: Object.entries(images)
      .filter(
        ([key]) =>
          key.startsWith("BhartiandRishab/Haldi/") ||
          key.startsWith("BhartiandRishab/Sangeet/") ||
          key.startsWith("BhartiandRishab/Mehndi/") ||
          key.startsWith("BhartiandRishab/Wedding/")
      )
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
  {
    id: 4,
    title: "Dheeraj + Ananya",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}yynr0zqsnkyyy1ldepx0.jpg`,
    galleryImages: Object.entries(images)
      .filter(
        ([key]) =>
          key.startsWith("DheerajandAnanya/Sangeet/") ||
          key.startsWith("DheerajandAnanya/Wedding/")
      )
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
  {
    id: 5,
    title: "Tanvi + Aman",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}uuerolnh36zchm0qihra.jpg`,
    galleryImages: Object.entries(images)
      .filter(
        ([key]) =>
          key.startsWith("TanviandAman/Haldi/") ||
          key.startsWith("TanviandAman/Sangeet/") ||
          key.startsWith("TanviandAman/Mehndi/") ||
          key.startsWith("TanviandAman/Wedding/")
      )
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
  {
    id: 6,
    title: "Abhishek + Rashmi",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}e8ccemdrjzdfukxl9nzq.jpg`,
    galleryImages: Object.entries(images)
      .filter(([key]) => key.startsWith("AbhishekandRashmi/Haldi/"))
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
  {
    id: 7,
    title: "Vidhi + Prateek",
    description: "DEHRADUN || 2023",
    imageUrl: `${cloudinaryBaseURL}dc5wrxkdaoqrfjuqtf5b.jpg`,
    galleryImages: Object.entries(images)
      .filter(([key]) => key.startsWith("VidhiaurPrateek/haldi/"))
      .map(([_, value]) => ({
        original: value,
        thumbnail: value,
      })),
  },
];
