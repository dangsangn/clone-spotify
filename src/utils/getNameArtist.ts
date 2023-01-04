export const getNameArtist = (name: string) => {
  const arrName = name.split("-");
  arrName.map((item: string) => item.toUpperCase());
  return arrName.join(" ");
};
