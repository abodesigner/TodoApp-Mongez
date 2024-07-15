import { setLocalizationConfigurations } from "@mongez/localization";
import { jsxConverter } from "@mongez/react-localization";

setLocalizationConfigurations({
  converter: jsxConverter,
});
