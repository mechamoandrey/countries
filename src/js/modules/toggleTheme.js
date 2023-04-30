const setTheme = (theme) => {

  document.body.dataset.theme = theme
  window.localStorage.setItem('theme', theme)
}

export const toggleTheme = () => {
  const toggleTheme = document.querySelector('._toggleTheme')
  const theme = window.localStorage.getItem('theme') || 'light'

  document.body.dataset.theme = theme

  toggleTheme.addEventListener('click', () => {
    const bodyDataTheme = document.body.dataset.theme
    
    if(bodyDataTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  })
}