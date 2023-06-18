import Cards from "@/components/templates/Cards";
import Category from "@/components/templates/Category";
import Footer from "@/components/templates/Footer";

export default function Home() {
  return (
    <main className="bg-bg-gray">
      <Category />

      <hr className="bg-gray border-0 h-[1px]" />

      <Cards
        cards={[
          {
            id: "1",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
          },
          {
            id: "2",
            headline:
              "‘경찰 폭행 유죄’ 임지봉 교수, 형사·법무정책硏 감사 선임 논란. 실패 만회하려 영상 짜깁기",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
          {
            id: "2",
            headline:
              "국방부 “北, 화성-17 실패 만회하려 영상 짜깁기… 성공 조작”",
            webUrl: "link",
            source: "조선일보",
            pubDate: "2023.3.15. (월)",
            isScraped: true,
          },
        ]}
      />
      <Footer />
    </main>
  );
}
