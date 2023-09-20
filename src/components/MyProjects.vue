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
        <div class="py-10 px-14 md:mx-32">
            <a id="my-projects"></a>
            <p class="text-4xl font-bold">Meus Projetos</p>

            <div id="project-0" class="mt-10 md:flex md:gap-3">
                <div data-animation="left">
                    <img class="object-cover border border-black" src="../assets/App-Task.png" alt="Task App">
                </div>

                <div class="" data-animation="right">
                    <div class="w-full md:w-96">
                        <div class="mt-4 md:mt-0">
                            <h1 class="text-2xl font-bold text-center md:text-4xl">Tasks App</h1>
                        </div>

                        <div class="mt-6 md:ml-3">
                            <p class="">
                                Tasks App é um aplicativo de gerenciamento de projetos e tarefas que utiliza um sistema
                                de quadros virtuais para ajudar equipes e indivíduos a organizar e acompanhar seu trabalho
                            </p>
                        </div>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p>
                            Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                                10</span>, <span class="font-bold">Inertia.js 1.0</span>, <span class="font-bold">Vue.js
                                3</span> e <span class="font-bold">TailwindCSS</span>
                        </p>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p class="flex">
                            Repositório:
                            <a href="https://github.com/MatheusCavalc/Task-App" target="_blank"
                                class="ml-1 font-bold text-slate-800 hover:underline">Github</a>
                            <span><img class="w-5 h-5 md:h-6 md:w-6" src="../assets/icons/redirect.svg" alt=""></span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center my-10">
                <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
            </div>

            <div id="project-1" class="mt-10 md:flex md:gap-3">
                <div data-animation="left">
                    <img class="object-cover border border-black" src="../assets/Project-Sneakers.png"
                        alt="Project Sneakers">
                </div>

                <div class="" data-animation="right">
                    <div class="w-full md:w-96">
                        <div class="mt-4 md:mt-0">
                            <h1 class="text-2xl font-bold text-center md:text-4xl">Sneakers App</h1>
                        </div>

                        <div class="mt-6 md:ml-3">
                            <p class="">
                                Sneakers App é um aplicativo de e-commerce com integração de pagamento completa com o
                                Stripe,
                                onde é possível escolher várias opções entre diferentes categorias de sneakers. Conta com um
                                painel de
                                administração completo.
                            </p>
                        </div>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p>
                            Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                                10</span>, <span class="font-bold">Livewire 3.0 (beta)</span>, <span
                                class="font-bold">Alpine.js 3.0</span> e <span class="font-bold">TailwindCSS</span>
                        </p>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p class="flex">
                            Repositório:
                            <a href="https://github.com/MatheusCavalc/SneakersApp-livewirev3" target="_blank"
                                class="ml-1 font-bold text-slate-800 hover:underline">Github</a>
                            <span><img class="w-5 h-5 md:h-6 md:w-6" src="../assets/icons/redirect.svg" alt=""></span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center my-10">
                <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
            </div>

            <div id="project-2" class="mt-10 md:flex md:gap-3">
                <div data-animation="left">
                    <img class="object-cover border border-black" src="../assets/E-newS-1.png" alt="Project E-newS">
                </div>

                <div class="" data-animation="right">
                    <div class="w-full md:w-96">
                        <div class="mt-4 md:mt-0">
                            <h1 class="text-2xl font-bold text-center md:text-4xl">E-newS App</h1>
                        </div>

                        <div class="mt-6 md:ml-3">
                            <p class="">
                                E-newS App é um aplicativo de notícias com editor integrado para criação e atualização de
                                matérias, onde é possível comentar e responder nas reportagens.
                            </p>
                        </div>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p>
                            Frameworks utilizados: <span class="font-bold">PHP 8.1</span>, <span class="font-bold">Laravel
                                10</span>, <span class="font-bold">Inertia.js 1.0</span>, <span class="font-bold">Vue.js
                                3</span> e <span class="font-bold">TailwindCSS</span>
                        </p>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p class="flex">
                            Repositório: <a href="https://github.com/MatheusCavalc/EsportsNews-L10" target="_blank"
                                class="ml-1 font-bold text-slate-800 hover:underline">Github</a> <span><img
                                    class="w-5 h-5 md:h-6 md:w-6" src="../assets/icons/redirect.svg" alt=""></span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center my-10">
                <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
            </div>

            <div id="project-3" class="mt-10 md:flex md:gap-3">
                <div data-animation="left">
                    <a target="_blank" href="https://studio-lar-interiores.vercel.app/">
                        <img class="object-cover border border-black" src="../assets/Studio-Lar.png" alt="Project Studio Lar">
                    </a>
                </div>

                <div class="" data-animation="right">
                    <div class="w-full md:w-96">
                        <div class="mt-4 md:mt-0">
                            <h1 class="text-2xl font-bold text-center md:text-4xl">Studio Lar Interiores</h1>
                        </div>

                        <div class="mt-6 md:ml-3">
                            <p class="">
                                Página responsiva para empresa de arquitetura de interiores, com projetos finalizados (antes
                                e depois) e contato direto para orçamentos.</p>
                        </div>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p>
                            Frameworks utilizados: <span class="font-bold">Vue.js 3</span> e <span
                                class="font-bold">TailwindCSS</span>
                        </p>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p class="flex">
                            Repositório: <a class="ml-1 font-bold text-slate-800 hover:underline" target="_blank"
                                href="https://github.com/MatheusCavalc/studio-lar-interiores">Github</a> <span><img
                                    class="w-5 h-5 md:h-6 md:w-6" src="../assets/icons/redirect.svg" alt=""></span>
                        </p>
                    </div>

                    <div class="mt-2 md:ml-3">
                        <p class="flex">
                            Website: <a class="ml-1 font-bold text-slate-800 hover:underline" target="_blank"
                                href="https://studio-lar-interiores.vercel.app/">Link</a> <span><img
                                    class="w-5 h-5 md:h-6 md:w-6" src="../assets/icons/redirect.svg" alt=""></span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex justify-center my-10">
                <div class="w-full h-1 rounded-full md:w-4/5 bg-slate-800"></div>
            </div>
        </div>
    </div>
</template>