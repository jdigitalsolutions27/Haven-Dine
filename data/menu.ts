export type MenuItem = {
  name: string;
  description: string;
  price: number;
};

export type MenuCategory = {
  title: string;
  blurb: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    title: "Starters",
    blurb: "Elegant introductions designed to awaken the palate.",
    items: [
      {
        name: "Oscietra Caviar Tartlet",
        description:
          "Crisp butter tartlet layered with cultured cream, chive oil, and premium oscietra caviar.",
        price: 980
      },
      {
        name: "Hokkaido Scallop Crudo",
        description:
          "Thinly sliced scallops with pomelo, cucumber ribbons, citrus pearls, and champagne vinaigrette.",
        price: 840
      },
      {
        name: "Foie Gras Brioche",
        description:
          "Seared foie gras over toasted brioche with mango lacquer, pickled shallots, and cacao nibs.",
        price: 920
      },
      {
        name: "Truffle Mushroom Veloute",
        description:
          "Silken forest mushroom soup finished with black truffle cream and sourdough shards.",
        price: 620
      }
    ]
  },
  {
    title: "Main Course",
    blurb: "Signature mains rooted in precision, fire, and restraint.",
    items: [
      {
        name: "Wagyu Striploin",
        description:
          "Charcoal-grilled Australian wagyu with smoked parsnip puree, confit shallots, and peppercorn jus.",
        price: 2680
      },
      {
        name: "Miso Black Cod",
        description:
          "Miso-glazed black cod served with baby bok choy, lotus chips, and dashi beurre blanc.",
        price: 1840
      },
      {
        name: "Duck Breast a l'Orange",
        description:
          "Dry-aged duck breast with orange gastrique, glazed heirloom carrots, and roasted endive.",
        price: 1760
      },
      {
        name: "Lobster Saffron Risotto",
        description:
          "Butter-poached lobster over saffron risotto with fennel pollen and preserved lemon.",
        price: 1980
      }
    ]
  },
  {
    title: "Chef Specials",
    blurb: "Seasonal creations reserved for guests seeking the exceptional.",
    items: [
      {
        name: "Short Rib Bourguignon",
        description:
          "Slow braised beef short ribs served with roasted vegetables and signature red wine reduction.",
        price: 1720
      },
      {
        name: "Sea Urchin Tagliolini",
        description:
          "House tagliolini folded with sea urchin butter, lemon zest, and crispy garlic crumbs.",
        price: 1580
      },
      {
        name: "Heritage Chicken Supreme",
        description:
          "Pan-roasted chicken with truffled potato fondant, charred leek, and chicken jus gras.",
        price: 1480
      },
      {
        name: "Tasting of Lamb",
        description:
          "A composed plate of roasted loin, braised shoulder, aubergine silk, and rosemary jus.",
        price: 2140
      }
    ]
  },
  {
    title: "Desserts",
    blurb: "Finishes with balance, detail, and quiet indulgence.",
    items: [
      {
        name: "Vanilla Bean Mille-Feuille",
        description:
          "Caramelized puff pastry with Tahitian vanilla cream, poached pear, and almond praline.",
        price: 540
      },
      {
        name: "Dark Chocolate Souffle",
        description:
          "Warm chocolate souffle with sea salt caramel center and Madagascan vanilla anglaise.",
        price: 560
      },
      {
        name: "Yuzu Panna Cotta",
        description:
          "Silken panna cotta paired with yuzu gel, white peach, and sesame brittle.",
        price: 490
      },
      {
        name: "Table-side Affogato",
        description:
          "Single-origin espresso poured over mascarpone gelato with hazelnut biscotti.",
        price: 460
      }
    ]
  },
  {
    title: "Drinks",
    blurb: "Curated pours to complete the evening with polish.",
    items: [
      {
        name: "Champagne by the Glass",
        description:
          "Rotating grower champagne selection chosen to complement the tasting menu.",
        price: 940
      },
      {
        name: "Smoked Old Fashioned",
        description:
          "Bourbon, muscovado syrup, aromatic bitters, and orange oils finished under oak smoke.",
        price: 580
      },
      {
        name: "Lychee Rose Martini",
        description:
          "Vodka, lychee distillate, dry vermouth, and a delicate rosewater finish.",
        price: 520
      },
      {
        name: "Sommelier Pairing",
        description:
          "Three expertly selected pours matched to the chef's seasonal progression.",
        price: 1680
      }
    ]
  }
];
