import { Dimensions, PixelRatio } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 414;
const heightBaseScale = SCREEN_HEIGHT / 896;

const normalize=(size, based = "width")=>{
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const widthPixel = (size) => {
  return normalize(size, "width");
};

const heightPixel = (size) => {
  return normalize(size, "height");
};

const fontPixel = (size) => {
  return widthBaseScale<heightBaseScale? normalize(size, "width"):normalize(size, "height");
};

export {
  widthPixel,
  heightPixel,
  fontPixel,
};
