import nextConfig from "../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export const skills = [
  { label: "言語", values: ["JavaScript", "TypeScript", "Ruby", "PHP", "Cue"] },
  {
    label: "ライブラリ・フレームワーク",
    values: ["React", "Next.js", "Nest.js", "Ruby on Rails", "Laravel"],
  },
  {
    label: "スタイリング",
    values: ["Tailwind CSS", "CSS Modules", "Styled Components"],
  },
  { label: "DB", values: ["MySQL", "PostgreSQL"] },
  { label: "クラウド", values: ["AWS", "GCP"] },
  { label: "その他", values: ["Docker", "Figma", "Jira", "Asana", "Retool"] },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/osakana0630", icon: `${BASE_PATH}/github.svg` },
  { label: "Twitter", href: "#", icon: `${BASE_PATH}/x.svg` },
];

export const careers = [
  {
    company: "株式会社Upa",
    period: "2020/04 - 2024/03",
    position: "フロントエンド・バックエンドエンジニア",
    type: "正社員"
  },
  {
    company: "Tailor株式会社",
    period: "2024/07 - 2025/06",
    position: "フロントエンド・バックエンドエンジニア",
    type: "業務委託"
  },
];
