export const valueStoreData = [
  {
    id: "1",
    product: "Diabetic Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/L79986/everherb-karela-jamun-juice-helps-maintains-healthy-sugar-levels-helps-in-weight-management-1l-2-1698385993.jpg",
    brand: "Accu-Chek",
    model: "Glucose Monitor",
    price: "49.99",
    category: "Diabetic Care",
    description:
      "Accurate blood glucose monitoring system with test strips and lancets.",
  },
  {
    id: "2",
    product: "Diabetic Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/V68813/everherb-diabetic-care-juice-13-potent-herbs-healthy-blood-sugar-management-1-litre-bottle-2-1698385586.jpg",
    brand: "OneTouch",
    model: "Insulin Pen",
    price: "29.50",
    category: "Diabetic Care",
    description:
      "Convenient insulin pen for precise dosage and easy administration.",
  },
  {
    id: "3",
    product: "Vitamins Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/K78780/pharmeasy-pill-box-organizer-2-1690272738.jpg",
    brand: "NatureMade",
    model: "Multivitamins",
    price: "19.99",
    category: "Vitamins & Supplements",
    description:
      "Daily multivitamin supplement with essential nutrients for overall health.",
  },
  {
    id: "4",
    product: "Vitamins Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/E54755/everherb-by-pharmeasy-aloe-vera-juice-with-pulp-rejuvenates-skin-hair-1-litre-bottle-2-1680172150.jpg",
    brand: "Centrum",
    model: "Vitamin D3",
    price: "12.75",
    category: "Vitamins & Supplements",
    description:
      "Vitamin D3 supplement supporting bone health and immune system.",
  },
  {
    id: "5",
    product: "Diabetic Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/T22634/liveasy-wellness-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-tabs-2-1661760061.jpg",
    brand: "FreeStyle",
    model: "Glucose Test Strips",
    price: "39.99",
    category: "Diabetic Care",
    description:
      "High-quality glucose test strips compatible with various glucose meters.",
  },
  {
    id: "6",
    product: "Vitamins Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/D92359/everherb-by-pharmeasy-amla-juice-rich-in-vitamin-c-natural-immunity-booster-1-litre-bottle-2-1680238204.jpg",
    brand: "SmartyPants",
    model: "Omega-3 Gummies",
    price: "24.99",
    category: "Vitamins & Supplements",
    description: "Omega-3 fatty acid gummies for heart and brain health.",
  },
  {
    id: "7",
    product: "Diabetic Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/G67452/pharmeasy-calcium-magnesium-vitamin-d3-zinc-bones-dental-health-bottle-60-6.1-1708149179.jpg",
    brand: "Bayer",
    model: "Contour Next Meter",
    price: "59.99",
    category: "Diabetic Care",
    description:
      "Advanced blood glucose meter with intuitive features and Bluetooth connectivity.",
  },
  {
    id: "8",
    product: "Vitamins Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/T60720/pharmeasy-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-2-1698386136.jpg",
    brand: "Nature's Bounty",
    model: "Hair, Skin & Nails Gummies",
    price: "18.50",
    category: "Vitamins & Supplements",
    description:
      "Gummies with biotin and antioxidants for healthy hair, skin, and nails.",
  },
  {
    id: "9",
    product: "Vitamins Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/D52223/liveasy-foods-healthy-roasted-seed-mix-blend-of-6-fibre-rich-healthy-roasted-seeds-200-gms-2-1656420865.jpg",
    brand: "Rainbow Light",
    model: "Prenatal Vitamins",
    price: "29.99",
    category: "Vitamins & Supplements",
    description:
      "Prenatal multivitamins with essential nutrients for expecting mothers.",
  },
  {
    id: "10",
    product: "Diabetic Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/K40120/everherb-by-pharmeasy-pain-relief-oil-blend-of-8-powerful-herbal-ingredients-100-ml-2-1698645591.jpg",
    brand: "Medtronic",
    model: "Insulin Pump",
    price: "899.00",
    category: "Diabetic Care",
    description: "Continuous insulin delivery system for diabetes management.",
  },
  {
    id: "11",
    product: "Diabetic Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/E79162/liveasy-wellness-multivitamin-multimineral-immunity-booster-complete-nutrition-bottle-of-60-6.1-1707825723.jpg",
    brand: "Glucometer",
    model: "Lifescan",
    price: "34.99",
    category: "Diabetic Care",
    description:
      "Compact glucometer for quick and accurate blood glucose readings.",
  },
  {
    id: "12",
    product: "Vitamins Product",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/D64484/everherb-by-pharmeasy-flaxseed-omega-3-essential-fatty-acids-healthy-heart-bottle-of-60-2-1698385854.jpg",
    brand: "Garden of Life",
    model: "Probiotics",
    price: "27.99",
    category: "Vitamins & Supplements",
    description:
      "Probiotic supplement for digestive and immune health support.",
  },
];

// Update each item in medicineData with mrpPrice, offerValue, and offerPrice
valueStoreData.forEach((item) => {
  const price = parseFloat(item.price); // Convert price string to float
  const offerValue = 15; // Get random offer value between 10 to 30

  // Calculate mrpPrice, offerValue, and offerPrice
  item.mrpPrice = price;
  item.offerValue = offerValue;
  item.offerPrice = ((price * (100 - offerValue)) / 100).toFixed(2);
});
