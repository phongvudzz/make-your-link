export type SocialLinkList =
  | "facebook"
  | "twitter"
  | "instagram"
  | "github"
  | "telegram"
  | "linkedin"
  | "email"
  | "whatsapp"
  | "youtube";

export type SocialLink = {
  name: string;
  icon: string;
  id: SocialLinkList;
};

export type ExtraLink = {
  id: string;
  icon: string;
  label: string;
  link: string;
};

export type DataProps = {
  name?: string;
  description?: string;
  image?: string;
  background?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  github?: string;
  telegram?: string;
  linkedin?: string;
  email?: string;
  whatsapp?: string;
  youtube?: string;
  extraLinks?: ExtraLink[];
};
