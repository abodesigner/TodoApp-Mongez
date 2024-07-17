import { extend } from "@mongez/localization";
import ar from "./ar.json";
import en from "./en.json";

extend("en", en);
extend("ar", ar);

// groupedTranslations({
//   products: {
//     en: "products",
//     ar: "المنتجات",
//   },
//   home: {
//     en: "home",
//     ar: "الرئيسية",
//   },
// });
