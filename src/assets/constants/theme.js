import { fontPixel, heightPixel, widthPixel } from "./dimensions"

const colors = {
    primary: "#136657",
    secondary:"#9C9C9C",
    employeeCardBg:"#E5EFEE",
    red:"#F91100",
    white:"#ffffff"
}
const commonImages = {
  hiddenPassword:require("../Images/hidden.png"),
  viewPassword:require("../Images/view.png")
}
const sizes = {
    height: heightPixel(10),
    width: widthPixel(10),
    font: fontPixel(10)
}
export { colors, commonImages, sizes }