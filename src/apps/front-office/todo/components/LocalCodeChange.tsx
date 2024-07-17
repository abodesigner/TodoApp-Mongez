import { getCurrentLocaleCode } from "@mongez/localization";

export default function LocalCodeChange() {
  const localCode = getCurrentLocaleCode();
  return (
    <>
      <h1 className="text-3xl">Current Local Code is: {localCode}</h1>
    </>
  );
}
