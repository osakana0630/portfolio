import nextConfig from "../next.config.mjs";
const BASE_PATH = nextConfig.basePath || "";

export const skills = [
  { label: "言語", values: ["JavaScript", "TypeScript", "Ruby", "PHP"] },
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
  { label: "その他", values: ["Docker"] },
];

export const socialLinks = [
  { label: "GitHub", href: "#", icon: `${BASE_PATH}/github.svg` },
  { label: "Twitter", href: "#", icon: `${BASE_PATH}/x.svg` },
];

export const careers = [
  {
    company: "株式会社A",
    period: "2020/04 - 2021/03",
    position: "フロントエンドエンジニア",
  },
  {
    company: "株式会社B",
    period: "2021/04 - 現在",
    position: "バックエンドエンジニア",
  },
];
