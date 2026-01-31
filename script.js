const slider = document.querySelector(".slider");

document.querySelector("a[href='#sobre']").addEventListener("click", (e) => {
    e.preventDefault();
    slider.style.transform = "translateX(-100vw)";
});

document.querySelector("a[href='#home']").addEventListener("click", (e) => {
    e.preventDefault();
    slider.style.transform = "translateX(0)";
});

const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* Fecha menu ao clicar em um link (boa prática mobile) */
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

const sobreLinks = document.querySelectorAll(".sobre-menu a");
const conteudos = document.querySelectorAll(".sobre-conteudo");

sobreLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove estado ativo
        sobreLinks.forEach(l => l.classList.remove("active"));
        conteudos.forEach(c => c.classList.remove("active"));

        // Ativa o clicado
        link.classList.add("active");
        document.getElementById(link.dataset.section).classList.add("active");
    });
});
