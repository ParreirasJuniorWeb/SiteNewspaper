const root = document.documentElement;
const btn = document.querySelector("#btnTheme");
const ano = document.querySelector("#ano");

const themeIcon = document.getElementById('theme-icon');

// preenchendo ano atual

ano.textContent = new Date().getFullYear();

// tema light/dark

btn.addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === "dark";

    if(dark) {
        root.removeAttribute("data-theme");
         // Troca ícone para lua
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    } else {
        root.setAttribute("data-theme", "dark");
        // Troca ícone para sol
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});