import { AppRoute } from "../const/const";

const capitalizeFirstLetter = (string: string): string => {
  const firstLetter = string.charAt(0).toUpperCase();
  const remainingString = string.substring(1);

  return firstLetter + remainingString;
}

const getPathWithBasePart = (path: string): string => {
  if (AppRoute.Base) {
    return `${AppRoute.Base}${path}`;
  }

  return path;
}

export { capitalizeFirstLetter, getPathWithBasePart };
