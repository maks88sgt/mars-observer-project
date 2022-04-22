export const apiToDate = (api) => {
  if (api) {
    const date = api.split("/");
    return new Date(`${date[1]}/${date[2]}/${date[0]}`);
  } else return null;
};
