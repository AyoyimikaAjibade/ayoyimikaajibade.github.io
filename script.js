let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'theme/styles.css'
	}

	if(mode == 'dark'){
		document.getElementById('theme-style').href = 'theme/dark.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'theme/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'theme/purple.css'
	}

	localStorage.setItem('theme', mode)
}