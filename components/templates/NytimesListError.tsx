import Button from "../ui/Button";
import Icon from "../ui/Icon";

type GetNytimesPrams = {
  errorMessage: string;
};

export default function NytimesListError({ errorMessage }: GetNytimesPrams) {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center mx-10">
      <div className="flex flex-col items-center mb-5 gap-2">
        <Icon name="union" />
        <p className="text-black-80 text-lg">에러 - {errorMessage}</p>
        <Button className="bg-primary" onClick={() => window.location.reload()}>
          새로고침
        </Button>
      </div>
    </div>
  );
}
