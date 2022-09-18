export const filterByCategory = (id, categories) => {
  const category = categories.filter((category) => category.id === id);
  return category.length > 0 ? category[0].name : 'Generic';
};
