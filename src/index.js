if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  setDarkTheme()
} else {
  setLightTheme()
}

function setLightTheme() {
  document.documentElement.classList.remove('dark')
  localStorage.theme = 'light'
  document.getElementById('toggle-dark-mode').querySelector('.light').classList.remove('hidden')
  document.getElementById('toggle-dark-mode').querySelector('.dark').classList.add('hidden')
}

function setDarkTheme() {
  document.documentElement.classList.add('dark')
  localStorage.theme = 'dark'
  document.getElementById('toggle-dark-mode').querySelector('.light').classList.add('hidden')
  document.getElementById('toggle-dark-mode').querySelector('.dark').classList.remove('hidden')
}

function toggleDarkTheme() {
  if (document.documentElement.classList.contains('dark')) {
    setLightTheme()
  } else {
    setDarkTheme()
  }
}

document.getElementById('toggle-dark-mode').addEventListener('click', toggleDarkTheme)
