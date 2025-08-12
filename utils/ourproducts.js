import { BriefcaseBusiness, CodeIcon, ShoppingBasket } from "lucide-react";
const ourProducts = [
  {
    name: "Business Solution",
    icon: <BriefcaseBusiness size="18" />,
    des: "Track inventory and manage stock efficiently.",
    contents: [
      {
        id: 1,
        contentName: "Billing System",
        src: "/products/billing.webp",
      },
      {
        id: 2,
        contentName: "Scedule Time System",
        src: "/products/billing.webp",
      },
      {
        id: 3,
        contentName: "Scedule Time System",
        src: "/products/billing.webp",
      },
    ],
  },
  {
    name: "Ecommerce",
    icon: <ShoppingBasket size="18" />,
    des: "Track inventory and manage stock efficiently.",
    contents: [
      {
        id: 4,
        contentName: "Inventory",
        src: "/products/form-builder.webp",
      },
    ],
  },

  {
    name: "Education",
    icon: <CodeIcon size="18" />,
    des: "Track inventory and manage stock efficiently.",
    contents: [
      {
        id: 5,
        contentName: "Pos System",
        src: "/products/job-manager.webp",
      },
    ],
  },
];

export default ourProducts;
