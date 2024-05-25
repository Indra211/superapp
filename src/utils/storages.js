export const StoreData = (key, data) => {
  const str_data = JSON.stringify(data);
  localStorage.setItem(key, str_data);
  return "success";
};

export const RetriveData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : data;
};
