// app/data/headerData.ts

export interface SocialItem {
  id: string;
  icon: string;
  link: string;
  target?: string;
}

export interface HeaderData {
  logo: {
    title: string;
    subTitle: string;
    link: string;
  };
  social: SocialItem[];
}

export const headerData: HeaderData = {
  logo: {
    title: "Editorial",
    subTitle: "by HTML5 UP.",
    link: '/'
  },
  social: [
    { id: 'twitter', icon: 'fa-twitter', link: 'https://twitter.com', target: '_blank' },
    { id: 'facebook', icon: 'fa-facebook-f', link: 'https://facebook.com', target: '_blank' },
    { id: 'snapchat', icon: 'fa-snapchat-ghost', link: 'https://snapchat.com', target: '_blank' },
    { id: 'instagram', icon: 'fa-instagram', link: 'https://instagram.com', target: '_blank' },
    { id: 'linkedin', icon: 'fa-linkedin-in', link: 'https://linkedin.com', target: '_blank' },
  ]
};

export default headerData;