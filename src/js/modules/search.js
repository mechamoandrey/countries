const debounce = (func, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const saveInput = () => {
  console.log('Saving data');
}

export const search = () => {
  const searchInput = document.querySelector('._search')

  const processChanges = debounce(() => saveInput());

  searchInput.addEventListener("keyup", processChanges)
}