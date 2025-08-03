let theme = 0;
var root = document.querySelector(':root');
function toggleTheme() {
    const element = document.getElementById("themeButton");
    if (theme === 0) {
        root.style.setProperty('--bg','#FFD2D2');
        root.style.setProperty('--fg','#1E1818');
        element.innerHTML = "<b>☼</b>";
        theme = 1;
    } else {
        root.style.setProperty('--bg','#1E1818');
        root.style.setProperty('--fg','#FFD2D2');
        element.innerHTML = "<b>☾</b>";
        theme = 0;
    }
}
