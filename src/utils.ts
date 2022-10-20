export const composeComponentPropsData = (
  componentPropsNames: string[],
  componentPropsData: string[],
) => {
  const newPropsData: { [key: string]: string } = {};
  componentPropsNames.forEach((name, index) => {
    newPropsData[name] = componentPropsData[index];
  });
  return newPropsData;
};
