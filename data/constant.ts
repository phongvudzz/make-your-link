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

export const iconsList = [
  { name: "My Portfolio", value: "ph:laptop-duotone" },
  { name: "Chatbot project", value: "ant-design:robot-outlined" },
  { name: "Ai project", value: "fluent:brain-circuit-20-regular" },
  { name: "Web Project", value: "icon-park-outline:blockchain" },
  { name: "My Blogs", value: "ph:pencil-duotone" },
];

export const demoData: DataProps = {
  name: "Vu Phong Nguyen",
  image:
    "https://ie784x5mqk.ufs.sh/f/3231023f-2c62-45de-9dcd-53e599441971-1d.jpg",
  description:
    "Expert front-end developer skilled in React.js, TypeScript, Tanstack, and Tailwind CSS, building high-performance web apps and scalable SaaS platforms with intuitive, user-focused interfaces. I excel in UX, performance optimization, and PWAs. ",
  facebook: "www.facebook.com/phongvudzz/",
  twitter: "x.com/phongvudzz",
  instagram: "",
  telegram: "web.telegram.org/k/#@phongvu9",
  github: "github.com/phongvulearning",
  linkedin: "linkedin.com/in/phongvudz",
  email: "mailto:phongvulearning@gmail.com",
  whatsapp: "",
  youtube: "",
  background: "#808080",
  extraLinks: [
    {
      id: "1",
      icon: "ph:laptop-duotone",
      label: "Urslots - Booking Application",
      link: "https://dev.urslots.com",
    },
    {
      id: "2",
      icon: "ant-design:robot-outlined",
      label: "Taskify - Task Management App",
      link: "https://phong-vu-jira.vercel.app",
    },
    {
      id: "3",
      icon: "fluent:brain-circuit-20-regular",
      label: "Flowlytixs - AI Workflow Automation",
      link: "https://flowlytixs.vercel.app",
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
