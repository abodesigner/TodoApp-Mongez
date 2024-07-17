// src/config/localization.ts

import { setLocalizationConfigurations } from "@mongez/localization";
import { jsxConverter } from "@mongez/react-localization";

setLocalizationConfigurations({
  converter: jsxConverter,
  defaultLocaleCode: "ar",
});
