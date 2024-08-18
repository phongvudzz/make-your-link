import { DataProps, SocialLink, SocialLinkList } from "@/types";

export const socialLinksProvider: SocialLink[] = [
  { name: "facebook", icon: "ph:facebook-logo-duotone", id: "facebook" },
  { name: "twitter", icon: "ph:twitter-logo-duotone", id: "twitter" },
  { name: "instagram", icon: "ph:instagram-logo-duotone", id: "instagram" },
  { name: "telegram", icon: "ph:telegram-logo-duotone", id: "telegram" },
  { name: "youtube", icon: "ph:youtube-logo-duotone", id: "youtube" },
  { name: "email", icon: "ph:envelope-duotone", id: "email" },
  { name: "github", icon: "ph:github-logo-duotone", id: "github" },
  { name: "linkedin", icon: "ph:linkedin-logo-duotone", id: "linkedin" },
  { name: "whatsapp", icon: "ph:whatsapp-logo-duotone", id: "whatsapp" },
];

export const iconsLists = [
  { name: "My Portfolio", value: "ph:laptop-duotone" },
  { name: "Chatbot project", value: "ant-design:robot-outlined" },
  { name: "Ai project", value: "fluent:brain-circuit-20-regular" },
  { name: "Web Project", value: "icon-park-outline:blockchain" },
  { name: "My Blogs", value: "ph:pencil-duotone" },
];

export const demoData: DataProps = {
  name: "Nguyen Phong Vu",
  image: "https://utfs.io/f/33746831-7d71-4329-b8a0-89d71f32c0d2-6caoya.jpg",
  description:
    "I'm a self-taught Web developer who is always learning and creating cool Project stuffs. I'm a self-taught Web developer who is always learning and creating cool Project stuffs. I'm a self-taught Web developer who is always learning and creating cool Project stuffs. I'm a self-taught Web developer who is always learning and creating cool Project stuffs.",
  facebook: "https://www.facebook.com/profile.php?id=100089372082015",
  twitter: "https://x.com/NguynNg48445405",
  instagram: "https://www.instagram.com/phongvudz/",
  telegram: "https://web.telegram.org/k/#@phongvu9",
  github: "https://github.com/phongvulearning",
  linkedin:
    "https://www.linkedin.com/in/phong-v%C5%A9-nguy%E1%BB%85n-498aa2253/",
  email: "phongvulearning@gmail.com",
  whatsapp: "",
  youtube: "",
  background: "#E6E6FA",
  extraLinks: [
    {
      id: "1",
      icon: "ph:laptop-duotone",
      label: "My Portfolio Website",
      link: "https://phongvuportfolio.vercel.app",
    },
    {
      id: "2",
      icon: "ant-design:robot-outlined",
      label: "My Taskify App",
      link: "https://taskify-app-phong-vu.vercel.app",
    },
    {
      id: "3",
      icon: "fluent:brain-circuit-20-regular",
      label: "My Fuzzie App",
      link: "https://fuzzie-app-pi.vercel.app/",
    },
    {
      id: "4",
      icon: "icon-park-outline:blockchain",
      label: "My Recursive Component",
      link: "https://recursive-component-two.vercel.app/",
    },
  ],
};

export const iconMap: Record<SocialLinkList, string> = {
  facebook: "ph:facebook-logo-duotone",
  twitter: "ph:twitter-logo-duotone",
  instagram: "ph:instagram-logo-duotone",
  telegram: "ph:telegram-logo-duotone",
  whatsapp: "ph:whatsapp-logo-duotone",
  youtube: "ph:youtube-logo-duotone",
  email: "ph:envelope-duotone",
  github: "ph:github-logo-duotone",
  linkedin: "ph:linkedin-logo-duotone",
};
