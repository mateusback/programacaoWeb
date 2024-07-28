function switchTheme() {
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        document.documentElement.setAttribute('data-theme', 'light'); 
    }
}

initializeTheme();

document.getElementById('theme-switcher').addEventListener('click', switchTheme);
