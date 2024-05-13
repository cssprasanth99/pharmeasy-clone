export const healthcareProductsData = [
  {
    id: "1",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/V64058/pharmeasy-knee-cap-pair-protects-knee-joints-reduces-risk-of-injuries-black-large-2-1671778320.jpg",
    title: "Elderly Care Walker",
    author: "SeniorLife",
    price: "79.99",
    category: "Elderly Care",
    description:
      "Sturdy walker with ergonomic design and adjustable height for elderly individuals.",
  },
  {
    id: "2",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/031531/calcimax-500-health-supplement-tablets-500-mg-of-calcium-box-of-30-2-1702961571.jpg",
    title: "Maternity Pillow",
    author: "MomEase",
    price: "49.50",
    category: "Mom Care",
    description:
      "Comfortable pregnancy pillow supporting the body during pregnancy and aiding sleep.",
  },
  {
    id: "3",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/B19345/pharmeasy-joint-support-maintains-joints-mobility-bone-joint-health-bottle-of-60-2-1698644927.jpg",
    title: "Blood Pressure Monitor",
    author: "HealthTech",
    price: "39.99",
    category: "Healthcare Devices",
    description:
      "Digital blood pressure monitor with cuff and LCD display for accurate readings.",
  },
  {
    id: "4",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1698386136.jpg",
    title: "Digital Thermometer",
    author: "MediTemp",
    price: "19.75",
    category: "Healthcare Devices",
    description: "Fast and accurate digital thermometer suitable for all ages.",
  },
  {
    id: "5",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/I05582/dr-morepen-gluco-one-bg-03-glucometer-test-strips-box-of-50-1-1669655233.jpg",
    title: "Nebulizer",
    author: "BreatheEasy",
    price: "59.99",
    category: "Healthcare Devices",
    description:
      "Compact nebulizer for asthma and respiratory therapy at home.",
  },
  {
    id: "6",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/N37764/onetouch-select-plus-test-strips-pack-of-50-strips-for-use-with-onetouch-select-plus-simple-3-1699443509.jpg",
    title: "Orthopedic Back Support",
    author: "SpineAlign",
    price: "29.99",
    category: "Healthcare Devices",
    description:
      "Back support brace for posture correction and relief from back pain.",
  },
  {
    id: "7",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/131677/onetouch-select-test-strips-pack-of-25-strips-for-use-with-onetouch-select-simple-glucometer-3-1699441225.jpg",
    title: "Medicine Organizer",
    author: "MediMate",
    price: "14.50",
    category: "Healthcare Devices",
    description:
      "Pill organizer with daily compartments for managing medication schedules.",
  },
  {
    id: "8",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg",
    title: "Digital Scale",
    author: "WeighRight",
    price: "34.99",
    category: "Healthcare Devices",
    description:
      "Digital weight scale with precision sensors and easy-to-read LCD display.",
  },
  {
    id: "9",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/L46153/liveasy-devices-digital-thermometer-let-01-2-1709529014.jpg",
    title: "Air Purifier",
    author: "PureAir",
    price: "149.00",
    category: "Healthcare Devices",
    description:
      "HEPA air purifier for removing allergens and improving indoor air quality.",
  },
  {
    id: "10",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/Z36722/beurer-ft-09-1-clinical-thermometer-2-1671741785.jpg",
    title: "Smartwatch with Health Tracker",
    author: "HealthTech",
    price: "129.99",
    category: "Healthcare Devices",
    description:
      "Smartwatch with heart rate monitor, sleep tracking, and fitness features.",
  },
  {
    id: "11",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/G60481/hicks-round-blood-sterile-lancets-2-1666764232.jpg",
    title: "Compression Socks",
    author: "ComfortFit",
    price: "19.99",
    category: "Healthcare Devices",
    description:
      "Graduated compression socks for improving circulation and reducing leg fatigue.",
  },
  {
    id: "12",
    product: "Healthcare Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/A06402/dr-morepen-bg-03-blood-glucose-test-strip-with-25-free-ss-premium-round-lancets-2-1692266329.jpg",
    title: "Infrared Thermometer",
    author: "MediTemp",
    price: "49.99",
    category: "Healthcare Devices",
    description:
      "Non-contact infrared thermometer for fast and hygienic temperature measurements.",
  },
];

// Update each item in medicineData with mrpPrice, offerValue, and offerPrice
healthcareProductsData.forEach((item) => {
  const price = parseFloat(item.price); // Convert price string to float
  const offerValue = 15; // Get random offer value between 10 to 30

  // Calculate mrpPrice, offerValue, and offerPrice
  item.mrpPrice = price;
  item.offerValue = offerValue;
  item.offerPrice = ((price * (100 - offerValue)) / 100).toFixed(2);
});
