import "./globals.css";

export const metadata = {
  title: "绒爪宠物洗护",
  description: "专业宠物洗护、毛发护理、造型修剪与到店预约。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
