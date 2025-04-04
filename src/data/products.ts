export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  images: string[];
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: "watch-1",
    name: "Artisan Chronograph Watch",
    description:
      "Hand-crafted in Switzerland, this luxury chronograph watch features a sapphire crystal face, genuine leather strap, and water resistance up to 100 meters. The stainless steel case and precision movement ensure remarkable accuracy and durability.",
    price: 2450,
    category: "watches",
    tags: ["luxury", "chronograph", "swiss"],
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1623998021446-47a6c49af899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    ],
    featured: true,
  },
  {
    id: "watch-2",
    name: "Heritage Automatic Timepiece",
    description:
      "Inspired by classic watchmaking traditions, this automatic timepiece features a transparent caseback showcasing the intricate movement. With a polished stainless steel case and premium alligator leather strap, it's the perfect blend of heritage and modern luxury.",
    price: 3200,
    category: "watches",
    tags: ["automatic", "classic", "luxury"],
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1594576722256-a3f6a7a9a5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "watch-3",
    name: "Diver's Professional Watch",
    description:
      "Built for the depths, this professional diver's watch is water-resistant to 300 meters. The unidirectional rotating bezel and luminous markers ensure readability in all conditions. A robust titanium case and ceramic bezel insert provide exceptional durability.",
    price: 1850,
    category: "watches",
    tags: ["diver", "professional", "titanium"],
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2010&q=80",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614947078659-62643b4ee8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    featured: true,
  },
  {
    id: "accessory-1",
    name: "Italian Leather Wallet",
    description:
      "Crafted from full-grain Italian leather, this elegant wallet features multiple card slots, a bill compartment, and RFID-blocking technology. The hand-stitched details and personalized monogram option make it a perfect gift.",
    price: 195,
    category: "accessories",
    tags: ["leather", "wallet", "italian"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1559478506-bcf68896bf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1603796908893-e3404ef6410d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    ],
  },
  {
    id: "accessory-2",
    name: "Sterling Silver Cufflinks",
    description:
      "These handcrafted sterling silver cufflinks feature a unique contemporary design. The polished finish catches the light beautifully, adding a subtle elegance to any formal outfit. Presented in a premium gift box.",
    price: 150,
    category: "accessories",
    tags: ["silver", "cufflinks", "formal"],
    images: [
      "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1611923134239-b9be5334d55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "electronics-1",
    name: "Premium Noise-Cancelling Headphones",
    description:
      "Experience music like never before with these premium noise-cancelling headphones. Crafted with memory foam ear cushions, luxury leather, and precision-engineered audio technology, they deliver exceptional sound quality and comfort for extended listening sessions.",
    price: 450,
    category: "electronics",
    tags: ["headphones", "audio", "wireless"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    ],
    featured: true,
  },
  {
    id: "electronics-3",
    name: "Professional Camera System",
    description:
      "Designed for professional photographers, this high-end camera system features a full-frame sensor, advanced autofocus capabilities, and exceptional low-light performance. The magnesium alloy body ensures durability while maintaining a comfortable handling experience.",
    price: 3500,
    category: "electronics",
    tags: ["camera", "photography", "professional"],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "watch-11",
    name: "Artisan Chronograph Watch",
    description:
      "Hand-crafted in Switzerland, this luxury chronograph watch features a sapphire crystal face, genuine leather strap, and water resistance up to 100 meters. The stainless steel case and precision movement ensure remarkable accuracy and durability.",
    price: 2450,
    category: "watches",
    tags: ["luxury", "chronograph", "swiss"],
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1623998021446-47a6c49af899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    ],
    featured: true,
  },
  {
    id: "watch-21",
    name: "Heritage Automatic Timepiece",
    description:
      "Inspired by classic watchmaking traditions, this automatic timepiece features a transparent caseback showcasing the intricate movement. With a polished stainless steel case and premium alligator leather strap, it's the perfect blend of heritage and modern luxury.",
    price: 3200,
    category: "watches",
    tags: ["automatic", "classic", "luxury"],
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1594576722256-a3f6a7a9a5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "watch-31",
    name: "Diver's Professional Watch",
    description:
      "Built for the depths, this professional diver's watch is water-resistant to 300 meters. The unidirectional rotating bezel and luminous markers ensure readability in all conditions. A robust titanium case and ceramic bezel insert provide exceptional durability.",
    price: 1850,
    category: "watches",
    tags: ["diver", "professional", "titanium"],
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2010&q=80",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614947078659-62643b4ee8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    featured: true,
  },
  {
    id: "accessory-11",
    name: "Italian Leather Wallet",
    description:
      "Crafted from full-grain Italian leather, this elegant wallet features multiple card slots, a bill compartment, and RFID-blocking technology. The hand-stitched details and personalized monogram option make it a perfect gift.",
    price: 195,
    category: "accessories",
    tags: ["leather", "wallet", "italian"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1559478506-bcf68896bf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1603796908893-e3404ef6410d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    ],
  },
  {
    id: "accessory-21",
    name: "Sterling Silver Cufflinks",
    description:
      "These handcrafted sterling silver cufflinks feature a unique contemporary design. The polished finish catches the light beautifully, adding a subtle elegance to any formal outfit. Presented in a premium gift box.",
    price: 150,
    category: "accessories",
    tags: ["silver", "cufflinks", "formal"],
    images: [
      "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1611923134239-b9be5334d55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "electronics-11",
    name: "Premium Noise-Cancelling Headphones",
    description:
      "Experience music like never before with these premium noise-cancelling headphones. Crafted with memory foam ear cushions, luxury leather, and precision-engineered audio technology, they deliver exceptional sound quality and comfort for extended listening sessions.",
    price: 450,
    category: "electronics",
    tags: ["headphones", "audio", "wireless"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    ],
    featured: true,
  },
  {
    id: "electronics-31",
    name: "Professional Camera System",
    description:
      "Designed for professional photographers, this high-end camera system features a full-frame sensor, advanced autofocus capabilities, and exceptional low-light performance. The magnesium alloy body ensures durability while maintaining a comfortable handling experience.",
    price: 3500,
    category: "electronics",
    tags: ["camera", "photography", "professional"],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "watch-12",
    name: "Artisan Chronograph Watch",
    description:
      "Hand-crafted in Switzerland, this luxury chronograph watch features a sapphire crystal face, genuine leather strap, and water resistance up to 100 meters. The stainless steel case and precision movement ensure remarkable accuracy and durability.",
    price: 2450,
    category: "watches",
    tags: ["luxury", "chronograph", "swiss"],
    images: [
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1623998021446-47a6c49af899?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2028&q=80",
    ],
    featured: true,
  },
  {
    id: "watch-22",
    name: "Heritage Automatic Timepiece",
    description:
      "Inspired by classic watchmaking traditions, this automatic timepiece features a transparent caseback showcasing the intricate movement. With a polished stainless steel case and premium alligator leather strap, it's the perfect blend of heritage and modern luxury.",
    price: 3200,
    category: "watches",
    tags: ["automatic", "classic", "luxury"],
    images: [
      "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1594576722256-a3f6a7a9a5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "watch-32",
    name: "Diver's Professional Watch",
    description:
      "Built for the depths, this professional diver's watch is water-resistant to 300 meters. The unidirectional rotating bezel and luminous markers ensure readability in all conditions. A robust titanium case and ceramic bezel insert provide exceptional durability.",
    price: 1850,
    category: "watches",
    tags: ["diver", "professional", "titanium"],
    images: [
      "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2010&q=80",
      "https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1614947078659-62643b4ee8da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
    featured: true,
  },
  {
    id: "accessory-12",
    name: "Italian Leather Wallet",
    description:
      "Crafted from full-grain Italian leather, this elegant wallet features multiple card slots, a bill compartment, and RFID-blocking technology. The hand-stitched details and personalized monogram option make it a perfect gift.",
    price: 195,
    category: "accessories",
    tags: ["leather", "wallet", "italian"],
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1559478506-bcf68896bf81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1603796908893-e3404ef6410d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    ],
  },
  {
    id: "accessory-22",
    name: "Sterling Silver Cufflinks",
    description:
      "These handcrafted sterling silver cufflinks feature a unique contemporary design. The polished finish catches the light beautifully, adding a subtle elegance to any formal outfit. Presented in a premium gift box.",
    price: 150,
    category: "accessories",
    tags: ["silver", "cufflinks", "formal"],
    images: [
      "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1611923134239-b9be5334d55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      "https://images.unsplash.com/photo-1550246140-5119ae4790b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
  {
    id: "electronics-12",
    name: "Premium Noise-Cancelling Headphones",
    description:
      "Experience music like never before with these premium noise-cancelling headphones. Crafted with memory foam ear cushions, luxury leather, and precision-engineered audio technology, they deliver exceptional sound quality and comfort for extended listening sessions.",
    price: 450,
    category: "electronics",
    tags: ["headphones", "audio", "wireless"],
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    ],
    featured: true,
  },
  {
    id: "electronics-32",
    name: "Professional Camera System",
    description:
      "Designed for professional photographers, this high-end camera system features a full-frame sensor, advanced autofocus capabilities, and exceptional low-light performance. The magnesium alloy body ensures durability while maintaining a comfortable handling experience.",
    price: 3500,
    category: "electronics",
    tags: ["camera", "photography", "professional"],
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured);
};

// Add the new function to get unique product categories
export const getProductCategories = (): string[] => {
  const categoriesSet = new Set<string>();

  products.forEach((product) => {
    categoriesSet.add(product.category);
  });

  return Array.from(categoriesSet);
};
