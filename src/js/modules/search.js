export const search = () => {
  const searchInput = document.querySelector('._search')

  function debounce(func, timeout = 500){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

  function saveInput(){
    console.log('Saving data');
  }

  const processChanges = debounce(() => saveInput());

  searchInput.addEventListener("keyup", processChanges)
}