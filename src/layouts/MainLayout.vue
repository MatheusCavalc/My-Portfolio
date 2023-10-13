<script setup>
import { ref } from 'vue';

let menu = ref(false)

const showMenu = () => {
    menu.value = !menu.value
}
</script>

<template>
    <nav class="bg-slate-800 border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
            <button @click="showMenu" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div :class="{ 'md:block': menu, 'hidden md:block': !menu }" class="w-full md:w-auto" id="navbar-default">
                <ul
                    class="font-medium md:text-white flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-slate-800">
                    <li>
                        <a href="#about-me"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">Sobre
                            Mim</a>
                    </li>
                    <li>
                        <a href="#my-technologies"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">Minhas
                            Tecnologias</a>
                    </li>
                    <li>
                        <a href="#my-projects"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">Meus
                            Projetos</a>
                    </li>
                    <li>
                        <a href="#other-projects"
                            class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">Outros
                            Projetos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="">
        <slot />
    </div>

    <footer class="py-10 bg-slate-800 text-white">
        <div class="flex justify-center gap-5 font-bold md:text-lg mx-8">
            <div>
                <a href="#about-me">Sobre Mim</a>
            </div>
            <div>
                <a href="#my-technologies">Minhas Tecnologias</a>
            </div>
            <div>
                <a href="#my-projects">Meus Projetos</a>
            </div>
            <div>
                <a href="#other-projects">Outros Projetos</a>
            </div>
        </div>
    </footer>
</template>