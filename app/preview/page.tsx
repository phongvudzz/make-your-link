import { decodeData } from "@/lib/utils";
import { BACKGROUND_OPTIONS } from "@/components/background/background-snippet";
import { DisplayScreen } from "@/components/mobile/display-screen";
import Loading from "./loading";

export default function PreviewPage({
  searchParams,
}: {
  searchParams: { data: string };
}) {
  if (!searchParams.data) throw new Error("No data found in the URL");

  const data = decodeData(searchParams.data);

  const selectedBgOption = data
    ? BACKGROUND_OPTIONS.find((option) => option.code === data.background)
        ?.component
    : null;

  return (
    <div className="h-screen w-full">
      <div className="fixed left-0 top-0 -z-10 h-full w-full">
        {selectedBgOption}
      </div>
      <div className="p-2 pt-10 hide_scrollbar">
        {data ? <DisplayScreen myLink={data} /> : <Loading />}
      </div>
    </div>
  );
}
