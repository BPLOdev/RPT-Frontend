export const sumFieldInArray = (array, field) => {
  return array.reduce((total, item) => {
    return total + parseFloat(item?.[field] || 0);
  }, 0);
};

export const formatFullname = (obj) => {
  return `${obj?.fname} ${obj?.mname} ${obj?.lname}`;
};