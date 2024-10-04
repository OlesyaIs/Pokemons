const capitalizeFirstLetter = (string: string): string => {
  const firstLetter = string.charAt(0).toUpperCase();
  const remainingString = string.substring(1);

  return firstLetter + remainingString;
}

export { capitalizeFirstLetter };
