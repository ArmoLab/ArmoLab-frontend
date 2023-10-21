import { icons } from "@iconify-json/bxl/index.mjs";
export default async (name) => {
    const svgString = `<svg viewBox="0 0 24 24">${icons.icons[name].body}</svg>`;
    return svgString;
};