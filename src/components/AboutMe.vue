<script setup>
const debounce = (func, wait, immediate) => {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const scrollAnimation = () => {
    const target = document.querySelectorAll('[data-animation]')

    const windowTop = window.pageYOffset + ((window.innerHeight * 4) / 5);
    target.forEach(function (el) {
        let rect = el.getBoundingClientRect()
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let top = rect.top + scrollTop

        if (windowTop > top) {
            el.classList.add("animate")
        } else {
            el.classList.remove("animate")
        }
    })
}

window.addEventListener('scroll', debounce(function () {
    scrollAnimation();
}, 100))
</script>

<template>
    <div class="text-black bg-white">
        <div class="py-10 pb-20 px-14 md:mx-32">
            <a id="about-me"></a>
            <p class="text-4xl font-bold">Sobre mim</p>
            <div class="mt-3" data-animation="left">
                <p>Profissional ágil, com aprendizado contínuo, comunicativo, habituado com a rotina de uma empresa e
                    sempre
                    procurando resolver problemas com soluções rápidas e práticas. Procuro sempre me manter atualizado sobre
                    as
                    tecnologias que uso e, assim, me tornar um dev o mais completo possível. </p>
            </div>
            <div class="mt-3" data-animation="left">
                <p>
                    Sou um desenvolvedor web apaixonado com uma sólida experiência nas mais recentes tecnologias. Minhas
                    habilidades abrangem desde a criação de interfaces atraentes com <span
                        class="font-bold underline">HTML5</span>, <span class="font-bold underline">CSS3</span> e <span
                        class="font-bold underline">JavaScript
                        (ES12)</span>, até o
                    desenvolvimento de aplicativos robustos com <span class="font-bold underline">PHP (7.x a 8.x)</span> e a
                    utilização de poderosos frameworks como
                    <span class="font-bold underline">Laravel (7.x a 10.x)</span>. Com uma abordagem centrada no usuário,
                    utilizo tanto a stack <span class="font-bold underline">Vue.js 3</span>, <span
                        class="font-bold underline">InertiaJs</span> e
                    <span class="font-bold underline">TailwindCSS</span> quanto o <span class="font-bold underline">Livewire
                        (2 e 3)</span>, <span class="font-bold underline">Alpine.js 3</span> e <span
                        class="font-bold underline">TailwindCSS</span> (Tall Stack) para criar experiências
                    interativas e dinâmicas, sentindo-me completamente à vontade com ambas. Além disso, falando da Tall
                    Stack, tenho conhecimento em desenvolvimento de painéis de administração com <span
                        class="font-bold underline">FilamentPHP 3</span>.
                </p>

                <p class="mt-3">
                    Adicionalmente, possuo projetos com <span class="font-bold underline">Ionic 7.0</span>, criando aplicações híbridas e móveis, proporcionando uma experiência otimizada em diversas plataformas. Também tenho
                    experiência em bancos de dados <span class="font-bold underline">MySQL</span> e <span
                        class="font-bold underline">PostgreSQL</span>. Além disso, possuo proficiência em ferramentas
                    essenciais como <span class="font-bold underline">Git</span> e <span
                        class="font-bold underline">Docker</span> para gerenciar projetos de forma eficiente. Estou sempre
                    em busca de novos
                    desafios e ansioso para transformar ideias em realidade.
                </p>
            </div>
        </div>
    </div>
</template>