let block = document.getElementById('block')
let btn = document.querySelector('.btn')

function initialState(themeName) {
	localStorage.setItem('theme', themeName)
	block.className = themeName
}

initialState('dark-theme')

function toggleTheme() {
	if (localStorage.getItem('theme') == 'dark-theme') {
		initialState('light-theme')
	} else {
		initialState('dark-theme')
	}
}

btn.addEventListener('click', () => {
	toggleTheme()
})