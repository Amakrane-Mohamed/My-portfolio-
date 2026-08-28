export const PROFILE = {
  name: 'Mohamed Amakrane',
  handle: '@med',
  email: 'mohamed.amakrane.dev@gmail.com',
  phone: '+212709319893',
  phoneLabel: '+212 7 09 31 98 93',
  location: 'Morocco 🇲🇦',
  resume: '/resume.pdf',
  bio: "I'm Mohamed Amakrane, a Moroccan 🇲🇦 creative mobile apps developer. I love forests 🌲, calm 🦋, and iOS. The USA 🇺🇸 is my inspiration, the feeling I build toward.",
  links: [
    { id: 'resume', label: 'Résumé', href: '/resume.pdf', icon: 'resume', download: 'Mohamed_Amakrane_Resume.pdf' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/mohamed-amakrane-1ba590317/', icon: 'linkedin' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/Amakrane-Mohamed', icon: 'github' },
    { id: 'x', label: 'X', href: 'https://x.com/MohamedAmak7', icon: 'x' },
    { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/mohamedamakr/', icon: 'instagram' },
  ],
}

export const QUOTE = {
  text: 'The details are not the details. They make the design.',
  by: 'Charles Eames',
  handle: '@MohamedAmak7',
  href: 'https://x.com/MohamedAmak7',
  time: '2:14 PM · Aug 28, 2026',
}

export const EXPERIENCE = [
  {
    id: 'abdc',
    role: 'Mobile Apps Developer',
    company: 'ABDC',
    type: 'Full-time',
    dates: 'May 2025 to now',
    place: 'Remote, Dubai',
    logo: '/experience/abdc.jpg',
    logoBg: '#111',
    text: 'I build and ship mobile apps at ABDC. Chart AI Assistant and Skinea by Claire went to the App Store from this role.',
    stack: ['Flutter', 'Node.js'],
  },
  {
    id: 'medyouin',
    role: 'Mobile Apps Developer Intern',
    company: 'Med You in',
    type: 'Internship',
    dates: 'Mar 2025 to Apr 2025',
    place: 'On-site, Meknes',
    logo: '/experience/medyouin.jpg',
    logoBg: '#fff',
    text: 'I built and shipped cross-platform mobile apps with Flutter and Firebase.',
    stack: ['Flutter', 'Firebase'],
  },
]

export const APPS = [
  {
    id: 'chart-ai',
    name: 'Chart AI Assistant',
    category: 'Finance',
    tagline: 'Personalized tech analysis.',
    summary:
      'Live on the App Store. Snap a chart, get the analysis. Built for ABD Corp.',
    tint: 'linear-gradient(160deg, #f5f5f5 0%, #2a2a2a 48%, #0a0a0a 100%)',
    rating: '5.0',
    year: '2025',
    platform: 'iOS',
    client: 'ABD Corp',
    stack: ['Flutter', 'Node.js'],
    store: 'https://apps.apple.com/us/app/chart-ai-assistant/id6745137844',
    icon: '/apps/chart-ai-icon.webp',
    about:
      'This was my first professional app to go to market, and I’ll never forget it. 🖤 Chart AI Assistant reads a candlestick chart in seconds: trend, structure, liquidity, and a sample setup. Upload a screenshot or take a photo, then save the analysis. I built it for ABD Corp. First one live. Still proud. 📈 ✨',
  },
  {
    id: 'skinea',
    name: 'Skinea by Claire',
    category: 'Health & Fitness',
    tagline: 'Scan. Check. Choose clean.',
    summary:
      'Scan a cosmetic, see what’s in it, and get a cleaner pick. Flutter, Firebase, Node.js, and OpenAI. Built for ABD Corp.',
    tint: 'linear-gradient(160deg, #7ec8ff 0%, #1a6dff 48%, #0b2a62 100%)',
    rating: '5.0',
    year: '2026',
    platform: 'iOS',
    client: 'ABD Corp',
    stack: ['Flutter', 'Firebase', 'Node.js', 'OpenAI'],
    store: 'https://apps.apple.com/us/app/skinea-by-claire/id6754887024',
    icon: '/apps/skinea-icon.webp',
    about:
      'Skinea by Claire helps you understand what’s inside your cosmetics. Scan a product, see if the formula is clean, and get safer alternatives when it isn’t. I built the full product: Flutter on the client, Firebase and Node.js on the backend, and OpenAI for the AI analysis. Live on the App Store with ABD Corp.',
  },
  {
    id: 'yeva',
    name: 'Yeva : AI Outfit Stylist',
    category: 'Lifestyle',
    tagline: 'Identify outfits, best prices.',
    summary:
      'Identify outfits and find the best prices. Native SwiftUI, Node.js, Nano Banana, and OpenAI.',
    tint: 'linear-gradient(160deg, #7eb6ff 0%, #1d5cff 48%, #0a1f5c 100%)',
    year: '2026',
    platform: 'iOS',
    stack: ['SwiftUI', 'Swift', 'Node.js', 'Nano Banana', 'OpenAI'],
    store: 'https://apps.apple.com/us/app/yeva-ai-outfit-stylist/id6762069053',
    icon: '/apps/yeva-icon.jpg',
    about:
      'Yeva is an AI outfit stylist. Identify looks, get styling help, and find better prices. I built it native in Swift and SwiftUI, with Node.js on the backend, plus Nano Banana and OpenAI for the AI.',
  },
  {
    id: 'bunly',
    name: 'Bunly: Panic Companion',
    category: 'Health & Fitness',
    tagline: 'A friend for the wave.',
    summary:
      'A calm companion for panic. SOS when it hits, breathe together, catch the wave early, and see your pattern.',
    tint: 'linear-gradient(160deg, #e8d4ff 0%, #9b6dff 48%, #4c1d95 100%)',
    year: '2026',
    platform: 'iOS',
    store: 'https://apps.apple.com/us/app/bunly-panic-companion/id6803989173',
    icon: '/apps/bunly-icon.jpg',
    about:
      'Bunly is a panic companion, a purple cat who stays close through the wave. Hit SOS when it hits, ask for help, or catch it early together. Insights show how the week felt, whether you stayed with a wave, and a month heatmap of check-ins. Breathe with a press-and-hold circle: in on hold, a long out on release. Walk a daily path on Journey, keep Bunly on the Home Screen with widgets, and collect a face for today. 🩵',
  },
]
