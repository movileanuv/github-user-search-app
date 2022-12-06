const form = document.getElementById('search-form'),
  searchInput = document.getElementById('search'),
  noResultsMessage = document.createElement('span'),
  imageContainer = document.getElementById('user-image-container'),
  userImage = document.createElement("img"),
  fullName = document.getElementById('user-full-name'),
  username = document.getElementById('username'),
  usernameAnchorTag = username.querySelector('a'),
  dateJoined = document.getElementById('date-joined'),
  description = document.getElementById('description'),
  repos = document.getElementById('repos'),
  followers = document.getElementById('followers'),
  following = document.getElementById('following'),
  userLocation = document.getElementById('location'),
  website = document.getElementById('website'),
  websiteAnchorTag = document.createElement('a'),
  twitter = document.getElementById('twitter'),
  company = document.getElementById('company')

userImage.alt = "User image"
noResultsMessage.classList.add("mr-2", "xl:mr-6", "w-auto", "shrink-0", "font-bold", "text-red", "break-keep", "sm:text-[15px]")
noResultsMessage.innerText = 'No results'
userImage.addEventListener('load', evt => imageContainer.appendChild(userImage))
form.addEventListener('submit', handleFormSubmit)

/*
* Toggle Light and Dark mode
*/

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

/*
* query logic
*/

// form submit handler
async function handleFormSubmit(evt) {
  evt.preventDefault();
  form.contains(noResultsMessage) && form.removeChild(noResultsMessage)
  let data
  try {
    data = await fetchUserData(evt.target.search.value)
  } catch (e) {
    searchInput.insertAdjacentElement('afterend', noResultsMessage)
    return
  }
  displayData(data)
}

async function fetchUserData(username) {
  const url = `https://api.github.com/users/${username}`
  const response = await fetch(url)
  if (!response.ok) throw Error(response.statusText)
  return await response.json()
}

// set data on screen
function displayData(data) {
  userImage.src = data.avatar_url
  fullName.innerText = data.name
  usernameAnchorTag.href = data.html_url
  usernameAnchorTag.innerText = `@${data.login}`
  dateJoined.innerText = formatDateJoined(data.created_at)
  description.innerText = data.bio
  repos.innerText = data.public_repos
  followers.innerText = data.followers
  following.innerText = data.following
  setLocation(data.location)
  setWebsite(data.blog)
  setTwitter(data.twitter_username)
  setCompany(data.company)
}

function formatDateJoined(dateString) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date(dateString)
  return `Joined ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function setLocation(data) {
  if (data) {
    userLocation.innerText = data
    userLocation.parentElement.classList.remove('opacity-50')
  } else {
    userLocation.innerText = "Not Available"
    userLocation.parentElement.classList.add('opacity-50')
  }
}

function setWebsite(data) {
  if (data) {
    website.textContent = ''
    website.appendChild(websiteAnchorTag)
    websiteAnchorTag.href = data
    websiteAnchorTag.innerText = data
    website.parentElement.classList.remove('opacity-50')
    website.classList.add('hover:underline')
  } else {
    website.innerText = "Not Available"
    website.parentElement.classList.add('opacity-50')
    website.classList.remove('hover:underline')
  }
}

function setTwitter(data) {
  if (data) {
    twitter.innerText = data
    twitter.parentElement.classList.remove('opacity-50')
  } else {
    twitter.innerText = "Not Available"
    twitter.parentElement.classList.add('opacity-50')
  }
}

function setCompany(data) {
  if (data) {
    company.innerText = data
    company.parentElement.classList.remove('opacity-50')
  } else {
    company.innerText = "Not Available"
    company.parentElement.classList.add('opacity-50')
  }
}

// initial state
