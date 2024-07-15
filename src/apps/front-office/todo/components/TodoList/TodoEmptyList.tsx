import { trans } from "@mongez/localization";

export default function TodoEmptyList() {
  return (
    <>
      <h1 className="bg-red-300 w-[600px] text-lg text-red-800 text-center my-8 py-2 px-4">
        {trans("emptyMsg")}
      </h1>
    </>
  );
}
