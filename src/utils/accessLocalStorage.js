//to access/load data from localstorage
const loaddata = (key) => {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (err) {
    return undefined;
  }
};

//to save some data inside localstorage
const savedata = (key, value) => {
  const checkdata = JSON.parse(localStorage.getItem(key)) || [];
  checkdata.push(value);
  localStorage.setItem(key, JSON.stringify(checkdata));
};

const filteredData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
export { loaddata, savedata, filteredData };
