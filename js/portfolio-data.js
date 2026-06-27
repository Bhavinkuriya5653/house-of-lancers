const PORTFOLIO_DATA = [
  {
    name: "CLEC FASHION",
    url: "https://clec.fashion/",
    type: "Informative",
    category: "Fashion Festival & Event Management",
    features: ["Management"],
    filter: "creative-events"
  },
  {
    name: "OLEAFIT",
    url: "https://oleafit.com/",
    type: "Ecommerce",
    category: "Cosmetics Ecommerce",
    features: ["Custom Forms", "Payment Gateway", "Email Automation", "Security Firewall", "Third Party Addon", "Dynamic News/Blog/Article posting", "Multilingual"],
    filter: "ecommerce"
  },
  {
    name: "OFFITURIA",
    url: "https://offituria.com/",
    type: "Ecommerce",
    category: "Furniture Ecommerce",
    features: ["Custom Forms", "Payment Gateway", "Email Automation", "Security Firewall", "Third Party Addon", "Dynamic News/Blog/Article posting", "Multilingual"],
    filter: "ecommerce"
  },
  {
    name: "CHRONICLE",
    url: "https://www.northeastchronicle.in/",
    type: "Informative",
    category: "News & Media",
    features: ["Custom Forms", "Security Firewall", "Third Party Addon", "Dynamic News/Blog/Article posting"],
    filter: "news-media"
  },
  {
    name: "HONUMUNN",
    url: "https://honumunn.com/",
    type: "Informative",
    category: "Travel Curator",
    features: ["News/Blog/Article posting", "Multilingual", "Appointment Scheduler"],
    filter: "real-estate-travel"
  },
  {
    name: "BORSONS FACILITY",
    url: "https://www.borsonsfacility.com/",
    type: "Informative",
    category: "local service provider",
    features: ["Custom Forms", "Membership Module", "Dynamic Gallery", "Security Firewall", "Email Automation", "Appointment Scheduler"],
    filter: "it-business"
  },
  {
    name: "DAINIK JORHAT",
    url: "https://dainikjorhat.com/",
    type: "Informative",
    category: "News & Media",
    features: ["Custom Forms", "Security Firewall", "Third Party Addon", "Dynamic News/Blog/Article posting"],
    filter: "news-media"
  },
  {
    name: "THE LOOK",
    url: "https://thelook.co.in/",
    type: "Informative",
    category: "News & Media",
    features: ["Custom Forms", "Security Firewall", "Third Party Addon", "Dynamic News/Blog/Article posting"],
    filter: "news-media"
  },
  {
    name: "SALON CREATIVE",
    url: "https://salon-creative.com/",
    type: "Informative",
    category: "Product Landing",
    features: ["Email Automation"],
    filter: "creative-events"
  },
  {
    name: "MEDICAL CENTRE PESCARA",
    url: "https://medicalcenterepescara.it/",
    type: "Informative",
    category: "Private Medical Website",
    features: ["Custom Forms", "Payment Gateway", "Membership Module", "Multilingual", "Third Party Addon", "Security Firewall", "Email Automation", "Private Content"],
    filter: "healthcare-wellness"
  },
  {
    name: "NR CLEANING",
    url: "https://www.nrcleaning.com/",
    type: "Informative",
    category: "Cleaning Service Provider",
    features: ["Custom Forms", "Appointment Scheduler", "Dynamic Gallery"],
    filter: "it-business"
  },
  {
    name: "SOLUTIONS",
    url: "https://codelares.com/",
    type: "Informative",
    category: "IT Service Provider",
    features: ["Custom Forms", "Dynamic Gallery", "Portfolio", "Security Firewall", "Multilingual"],
    filter: "it-business"
  },
  {
    name: "CONSULTANCY",
    url: "https://bujarbaruahconsultancy.com/",
    type: "Informative",
    category: "Consultancy Firm",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "NORTHEAST RENTAL",
    url: "https://northeastrental.in/",
    type: "Informative",
    category: "Self Drive Rental Service",
    features: ["Dynamic News/Blog/Article posting", "Dynamic Gallery", "Email Automation"],
    filter: "real-estate-travel"
  },
  {
    name: "GUWAHATI TAXI",
    url: "http://guwahatitaxi.in/",
    type: "Informative",
    category: "Taxi Service & Tour Operator",
    features: ["Custom Forms", "Third Party Addon", "Security Firewall", "Email Automation", "Dynamic Gallery", "Dynamic News/Blog/Article posting"],
    filter: "real-estate-travel"
  },
  {
    name: "DRIVE N EXPLORE",
    url: "https://drivenexplore.com/",
    type: "Informative",
    category: "Tour Operator & Car Rental",
    features: ["Custom Forms", "Payment Gateway", "Dynamic Gallery", "Email Automation", "Security Firewall", "Third Party Addon", "Dynamic News/Blog/Article posting"],
    filter: "real-estate-travel"
  },
  {
    name: "ATHLOS SPORTS",
    url: "https://www.athlossports.com/",
    type: "Ecommerce",
    category: "Sportswear eCommerce",
    features: ["Custom Forms", "Shipping Module", "Payment Gateway", "Dynamic Gallery", "Email Automation", "Security Firewall", "Third Party Addon"],
    filter: "ecommerce"
  },
  {
    name: "DESTINARO TOURISM",
    url: "https://destinarotourism.com/",
    type: "Informative",
    category: "Tour Operator",
    features: ["Security Firewall", "Dynamic Gallery", "Dynamic News/Blog/Article posting"],
    filter: "real-estate-travel"
  },
  {
    name: "OLIVE THIS OLIVE THAT",
    url: "https://olivethisolivethat.com/",
    type: "Ecommerce",
    category: "eCommerce Store",
    features: ["Addon", "Dynamic News/Blog/Article posting"],
    filter: "ecommerce"
  },
  {
    name: "MOUNTAIN DOG LOUNGE",
    url: "https://mountaindoglounge.com/",
    type: "Informative",
    category: "Pet Clinic Service Provider",
    features: ["Custom Forms", "Third Party Addon", "Email Automation", "Dynamic Gallery"],
    filter: "healthcare-wellness"
  },
  {
    name: "THE PAWMISE LAND",
    url: "https://thepawmiseland.com/",
    type: "Ecommerce",
    category: "Pet Supplies eCommerce",
    features: ["Shipping Module", "Payment Gateway", "Custom Forms", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "ecommerce"
  },
  {
    name: "A COTTAGE COLLECTION",
    url: "https://acottagecollection.com/",
    type: "Ecommerce",
    category: "On Demand Cabins & Cottage Seller",
    features: ["Shipping Module", "Payment Gateway", "Custom Forms", "Email Automation", "Third Party Addon", "Dynamic News/Blog/Article posting", "Dynamic Gallery"],
    filter: "ecommerce"
  },
  {
    name: "DELTA 8 GUMMIES",
    url: "https://delta8gummies.com/",
    type: "Ecommerce",
    category: "Hamp Gummies Store",
    features: ["Shipping Module", "Payment Gateway", "Security Firewall", "Email Automation"],
    filter: "ecommerce"
  },
  {
    name: "STUFFIES PASTRY",
    url: "https://www.stuffiespastries.com/",
    type: "Ecommerce",
    category: "Pastry Shop and eCommerce",
    features: ["Shipping Module", "Payment Gateway", "Security Firewall", "Email Automation"],
    filter: "ecommerce"
  },
  {
    name: "MARINA LOUNGE",
    url: "https://www.marinaloungesuisun.com/",
    type: "Informative",
    category: "Lounge",
    features: ["Event Management", "Security Firewall", "Email Automation", "Dynamic Gallery", "Custom Forms"],
    filter: "creative-events"
  },
  {
    name: "MUSIC",
    url: "https://www.lischoolofmusic.com/",
    type: "Informative",
    category: "Music School",
    features: ["Custom Forms", "Security Firewall", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "SOLANO BLACK CHAMBER",
    url: "https://solanoblackchamber.com/",
    type: "Informative",
    category: "Community",
    features: ["Firewall", "Third Party Addon", "Appointment Scheduler", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "SUPREME TEAM BOXING",
    url: "https://supremeteamboxing.com/",
    type: "Ecommerce",
    category: "Gym",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall", "Third Party Addon"],
    filter: "ecommerce"
  },
  {
    name: "COUNSELLING",
    url: "https://counselling.com.au/",
    type: "Informative",
    category: "Counselling Service",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "healthcare-wellness"
  },
  {
    name: "MARI BICKMORE DESIGN",
    url: "https://maribickmoredesign.com/",
    type: "Informative",
    category: "Architecture Design Blogger",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "WIND WAVE INSIGHTS",
    url: "https://windwaveinsights.com/",
    type: "Informative",
    category: "Energy Blogger",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "news-media"
  },
  {
    name: "SISSETS",
    url: "https://sissets.com/",
    type: "Ecommerce",
    category: "Furniture Store",
    features: ["Third Party Addon", "Appointment Scheduler"],
    filter: "ecommerce"
  },
  {
    name: "KRISTY BEKE BEAUTY",
    url: "https://kristybekebeauty.com/",
    type: "Ecommerce",
    category: "Beauty Provider",
    features: ["Third Party Addon", "Appointment Scheduler"],
    filter: "ecommerce"
  },
  {
    name: "SURFACE INTEGRITY",
    url: "http://surfaceintegrity.ca/",
    type: "Informative",
    category: "Repairing Service Provider",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall", "Multilingual"],
    filter: "it-business"
  },
  {
    name: "FITNESS X365",
    url: "https://fitnessx365.com/",
    type: "Informative",
    category: "Gym",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "XGOLF WAYLAND",
    url: "https://xgolfwayland.com/",
    type: "Informative",
    category: "Golf Club",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "XGOLF ACTON",
    url: "https://xgolfacton.com/",
    type: "Informative",
    category: "Golf Club",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "BIGNONS",
    url: "https://bignons.com/",
    type: "Ecommerce",
    category: "Beauty Salon",
    features: ["Module", "Third Party Addon", "Appointment Scheduler"],
    filter: "ecommerce"
  },
  {
    name: "FLOWER CHILD SAN DIEGO",
    url: "https://flowerchildsandiego.com/",
    type: "Ecommerce",
    category: "Florist",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "ecommerce"
  },
  {
    name: "NOTARY MDD",
    url: "https://notarymdd.com/",
    type: "Informative",
    category: "Notary Service Provider",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "LASH THERAPY",
    url: "https://www.lashtherapyindy.com/",
    type: "Informative",
    category: "Aesthetics Clinic & Spa",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "healthcare-wellness"
  },
  {
    name: "SKINETICS HTX",
    url: "https://www.skineticshtx.com/",
    type: "Informative",
    category: "Aesthetics Clinic & Spa",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "healthcare-wellness"
  },
  {
    name: "ANTERAS SUNROOMS",
    url: "https://anterassunrooms.com/",
    type: "Informative",
    category: "Hardware Supplier",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "TANAGER WRITING",
    url: "https://tanagerwriting.com/",
    type: "Informative",
    category: "Writer",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "RAY ANTHONY WEDDINGS",
    url: "https://rayanthonyweddings.com/",
    type: "Informative",
    category: "Wedding Photography",
    features: ["Portfolio", "Dynamic Gallery", "Email Automation", "Security Firewall", "Custom Forms", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "ARTISTRY",
    url: "https://www.jaidecobridalartistry.com/",
    type: "Informative",
    category: "Wedding Service",
    features: ["Portfolio", "Dynamic Gallery", "Email Automation", "Security Firewall", "Custom Forms", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "COPPER HOP BREWERY",
    url: "http://thecopperhop.com/",
    type: "Informative",
    category: "Brewery",
    features: ["Custom Forms", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "LEGACY CREA",
    url: "https://legacycrea.com/",
    type: "Informative",
    category: "Real Estate Advisor",
    features: ["Custom Forms", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "real-estate-travel"
  },
  {
    name: "FIRM",
    url: "https://apilawoffice.ca/",
    type: "Informative",
    category: "Law Firm",
    features: ["Portfolio", "Dynamic Gallery", "Email Automation", "Security Firewall", "Custom Forms", "Dynamic News/Blog/Article posting"],
    filter: "it-business"
  },
  {
    name: "COPPER STATE TRUSS",
    url: "https://copperstatetruss.com/",
    type: "Informative",
    category: "Truss Manufacturing",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "R S LUXURY",
    url: "https://rsluxuryrentals.com/",
    type: "Informative",
    category: "Luxury Car Rentals",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "real-estate-travel"
  },
  {
    name: "BUONCIBO GRILL",
    url: "https://ilovebuoncibo.com/",
    type: "Informative",
    category: "Restaurant",
    features: ["Dynamic Gallery", "Email Automation", "Security Firewall", "Custom Forms", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "EMY EVENTS",
    url: "http://www.emyevents.ca/",
    type: "Informative",
    category: "Event Management",
    features: ["Custom Forms", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "WINNIPEG HEALING CONNECTION",
    url: "https://www.winnipeghec.com/",
    type: "Informative",
    category: "Community",
    features: ["Private Content", "Event Management", "Membership Module", "Payment Gateway", "Shipping Module", "Custom Forms", "Email Automation", "Security Firewall", "Third Party Addon", "Appointment Scheduler", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "AMERICAN JOURNAL OF SCIENTIFIC RESEARCH",
    url: "https://www.ajpsr.org/",
    type: "Informative",
    category: "Research Journal & Publications",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall", "Third Party Addon", "Membership Module", "Payment Gateway"],
    filter: "creative-events"
  },
  {
    name: "KARLY KRISTINA DESIGN",
    url: "http://karlykristinadesign.com/",
    type: "Informative",
    category: "Interior Designer",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall", "Dynamic Gallery"],
    filter: "creative-events"
  },
  {
    name: "QUIAT COMPANIES",
    url: "https://www.quiatcompanies.com/",
    type: "Informative",
    category: "Investment Company",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "LA NEW YORK RESTORATIONS",
    url: "https://lanyrest.com/",
    type: "Informative",
    category: "Restoration Service Provider",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "FIVE STAR WICHITA",
    url: "https://fivestarwichita.com/",
    type: "Informative",
    category: "Restoration and Remodelling",
    features: ["Custom Forms", "Email Automation", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "creative-events"
  },
  {
    name: "ANGEL PHOTOGRAPHY",
    url: "https://angelproject.com/",
    type: "Informative",
    category: "Photographer",
    features: ["Portfolio", "Dynamic Gallery", "Email Automation", "Security Firewall", "Custom Forms", "Dynamic News/Blog/Article posting"],
    filter: "creative-events"
  },
  {
    name: "CUPCAKES AND A SMILE",
    url: "https://cupcakeandasmile.com/",
    type: "Ecommerce",
    category: "Local Pastry Shop",
    features: ["Custom Forms", "Payment Gateway", "Shipping Module", "Dynamic Gallery", "Dynamic News/Blog/Article posting", "Third Party Addon", "Email Automation", "Security Firewall"],
    filter: "ecommerce"
  },
  {
    name: "WEBZENT TECHNOLOGIES",
    url: "https://webzent.com/",
    type: "Informative",
    category: "IT Service Provider",
    features: ["Custom Forms", "Payment Gateway", "Membership Module", "Portfolio", "Dynamic Gallery", "Security Firewall", "Third Party Addon", "Appointment Scheduler", "Dynamic News/Blog/Article posting"],
    filter: "it-business"
  },
  {
    name: "BEVERLY HILLS INSURANCES",
    url: "https://beverly-hills-insurance.com/",
    type: "Informative",
    category: "Insurance Provider",
    features: ["Custom Forms", "Dynamic News/Blog/Article posting", "Security Firewall"],
    filter: "it-business"
  },
  {
    name: "CARMEN SELLS JACKSONVILLE",
    url: "https://carmensellsjax.com/",
    type: "Informative",
    category: "Real Estate Broker",
    features: ["Third Party Addon", "Email Automation", "Custom Forms"],
    filter: "real-estate-travel"
  },
  {
    name: "DIZZLEBRAND",
    url: "https://dizzlebrand.com/",
    type: "Ecommerce",
    category: "Liquor Company and Store",
    features: ["Custom Forms", "Shipping Module", "Payment Gateway", "Email Automation", "Security Firewall", "Third Party Addon"],
    filter: "ecommerce"
  },
  {
    name: "HYPER X SCOOTERS",
    url: "https://hyperxscooters.com",
    type: "Ecommerce",
    category: "eScooters",
    features: ["Shipping Module", "Payment Gateway", "Custom Forms", "Security Firewall"],
    filter: "ecommerce"
  },
  {
    name: "RADIANT DENTAL OFFICE",
    url: "https://radiantdentaloffice.com/",
    type: "Informative",
    category: "Dental Clinic",
    features: ["Security Firewall", "Private Content", "Custom Forms", "Dynamic News/Blog/Article posting"],
    filter: "healthcare-wellness"
  },
  {
    name: "PHOTO BOOTH COVE",
    url: "https://photoboothcove.com/",
    type: "Informative",
    category: "Photo Booth",
    features: ["Portfolio", "Dynamic Gallery", "Custom Forms"],
    filter: "creative-events"
  },
  {
    name: "MS GLEN",
    url: "https://msglen.com/",
    type: "Informative",
    category: "Aesthetics Clinic & Spa",
    features: ["Custom Forms", "Email Automation"],
    filter: "healthcare-wellness"
  },
  {
    name: "EL JEFE",
    url: "https://eljefechs.com/",
    type: "Informative",
    category: "Restaurant",
    features: ["Custom Forms", "Dynamic Gallery", "Security Firewall", "Email Automation"],
    filter: "creative-events"
  },
  {
    name: "INSTITUTE OF LIVING A LONGER LIFE",
    url: "https://instituteforlivinglonger.com/",
    type: "Ecommerce",
    category: "Health Tutor",
    features: ["Custom Forms", "Dynamic Gallery", "Security Firewall", "Email Automation", "Payment Gateway", "Shipping Module", "Membership Module", "Private Content", "Appointment Scheduler"],
    filter: "ecommerce"
  },
  {
    name: "THE THANC GUIDE",
    url: "https://thancguide.org/",
    type: "Informative",
    category: "Health Community",
    features: ["Custom Forms", "Dynamic Gallery", "Security Firewall", "Email Automation", "Payment Gateway", "Shipping Module", "Membership Module", "Private Content", "Appointment Scheduler"],
    filter: "healthcare-wellness"
  },
  {
    name: "AESTHETIC ARC",
    url: "https://aestheticarc.com/",
    type: "Informative",
    category: "Real Estate",
    features: ["Wordpress"],
    filter: "real-estate-travel"
  },
  {
    name: "360 SOLUTIONS",
    url: "https://360solutions.co.in/",
    type: "Informative",
    category: "Event Management",
    features: ["Wordpress"],
    filter: "creative-events"
  }
];
