export const medicineData = [
  {
    id: "1",
    product: "Antibiotics",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/S04683/evion-400mg-strip-of-20-capsule-2-1683208555.jpg?dim=1440x0",
    company: "Pfizer",
    model: "Amoxicillin 500mg",
    price: "109",
    category: "Medicine",
    description: "Common antibiotic used to treat bacterial infections.",
  },
  {
    id: "2",
    product: "Pain Relief",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/188996/zincovit-strip-of-15-tablets-green-2-1702990444.jpg?dim=1440x0",
    company: "Johnson & Johnson",
    model: "Tylenol Extra Strength",
    price: "190",
    category: "Medicine",
    description:
      "Effective pain reliever for headaches, muscle aches, and fever.",
  },
  {
    id: "3",
    product: "Allergy Medication",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/192351/i-pill-emergency-contraceptive-pill-2-1672279640.jpg?dim=1440x0",
    company: "Zyrtec",
    model: "Cetirizine 10mg",
    price: "129.9",
    category: "Medicine",
    description: "Non-drowsy allergy relief for seasonal allergies.",
  },
  {
    id: "4",
    product: "Vitamins",
    image:
      "https://cdn01.pharmeasy.in/dam/products_otc/194710/evion-forte-capsule-10s-2-1671740837.jpg?dim=1440x0",
    company: "Nature's Way",
    model: "Multivitamin Tablets",
    price: "149.9",
    category: "Medicine",
    description:
      "Daily multivitamin supplement for overall health and wellness.",
  },
  {
    id: "5",
    product: "Cold & Flu Remedies",
    image:
      "https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-1-1647434835.jpg?dim=320x320&dpr=1&q=100",
    company: "Vicks",
    model: "DayQuil/NyQuil Combo Pack",
    price: "99.9",
    category: "Medicine",
    description: "Daytime and nighttime relief from cold and flu symptoms.",
  },
  {
    id: "6",
    product: "Digestive Health",
    image:
      "https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-2-1647434829.jpg",
    company: "Metamucil",
    model: "Psyllium Fiber Supplement",
    price: "89.9",
    category: "Medicine",
    description: "Supports digestive health with natural fiber.",
  },
  {
    id: "7",
    product: "First Aid Kit",
    image:
      "https://cdn01.pharmeasy.in/dam/products/064425/ecosprin-75mg-strip-of-14-tablets-3-1647434825.jpg",
    company: "Johnson & Johnson",
    model: "Emergency First Aid Kit",
    price: "299.9",
    category: "Medicine",
    description: "Compact first aid kit for home, car, or travel.",
  },
  {
    id: "8",
    product: "Blood Pressure Monitor",
    image:
      "https://cdn01.pharmeasy.in/dam/products/040750/cipcal-500mg-strip-of-15-tablets-2-1658934335.jpg?dim=320x320&dpr=1&q=100",
    company: "Omron",
    model: "Digital Blood Pressure Monitor",
    price: "399.9",
    category: "Medicine",
    description:
      "Accurate digital monitor for tracking blood pressure at home.",
  },
  {
    id: "9",
    product: "Diabetes Supplies",
    image:
      "https://cdn01.pharmeasy.in/dam/products/040750/cipcal-500mg-strip-of-15-tablets-3-1658934388.jpg",
    company: "OneTouch",
    model: "Glucose Meter Kit",
    price: "249.9",
    category: "Medicine",
    description: "Essential diabetes testing supplies for daily use.",
  },
  {
    id: "10",
    product: "Allergy Relief Spray",
    image:
      "https://cdn01.pharmeasy.in/dam/products/296772/calcitas-60000iu-d3-cap-4s-1-1654073101.jpg?dim=320x320&dpr=1&q=100",
    company: "Flonase",
    model: "Nasal Allergy Spray",
    price: "169.9",
    category: "Medicine",
    description: "Fast-acting nasal spray for allergy relief.",
  },
  {
    id: "11",
    product: "Sleep Aid",
    image:
      "https://cdn01.pharmeasy.in/dam/products/296772/calcitas-60000iu-d3-cap-4s-4-1654073045.jpg",
    company: "Unisom",
    model: "SleepTabs",
    price: "95.0",
    category: "Medicine",
    description: "Non-prescription sleep aid for occasional sleeplessness.",
  },
  {
    id: "12",
    product: "Antacid Tablets",
    image:
      "https://cdn01.pharmeasy.in/dam/products/296772/calcitas-60000iu-d3-cap-4s-3-1654073116.jpg",
    company: "Tums",
    model: "Extra Strength Antacid Tablets",
    price: "69.9",
    category: "Medicine",
    description: "Relieves heartburn, acid indigestion, and upset stomach.",
  },
];

medicineData.forEach((item) => {
  const price = parseFloat(item.price);
  const offerValue = 15;

  item.mrpPrice = price;
  item.offerValue = offerValue;
  item.offerPrice = ((price * (100 - offerValue)) / 100).toFixed(2);
});
