export const generateSubElements = (
  parentName: string,
  parentPath: string,
  count: number = 3
) => {
  return Array.from({ length: count }, (_, index) => {
    const subName = `${parentName}-${index + 1}`;
    return {
      name: subName,
      path: `${parentPath}/${subName.toLowerCase()}`,
    };
  }).map((sub) => ({
    ...sub,
    path: sub.path.replace(/ /g, "-"),
  }));
};
