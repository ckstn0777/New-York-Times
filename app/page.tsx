import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

export default function Home() {
  return (
    <main>
      메인
      <Button background="primary">스크랩하러 가기</Button>
      <Icon name="home" fill="primary" stroke="primary" />
      <Icon name="sheet" stroke="primary" />
    </main>
  );
}
