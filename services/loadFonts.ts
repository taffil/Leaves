import { useFonts } from "expo-font";

export function loadFonts() {
  return useFonts({
    "ProductSans-light": require("../assets/fonts/ProductSans-Light.ttf"),
    "ProductSans-regular": require("../assets/fonts/ProductSans-Regular.ttf"),
    "ProductSans-medium": require("../assets/fonts/ProductSans-Medium.ttf"),
    "ProductSans-bold": require("../assets/fonts/ProductSans-Bold.ttf"),
  });
}
