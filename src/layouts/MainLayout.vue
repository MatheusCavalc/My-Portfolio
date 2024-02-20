<script setup>
import { ref } from 'vue';

let menu = ref(false)

const showMenu = () => {
    menu.value = !menu.value
}
</script>

<template>
    <nav :class="{ 'rounded-b-2xl': menu, 'rounded-none': !menu }" class="fixed z-50 w-full bg-black lg:rounded-none">
        <div class="flex flex-wrap items-center justify-end max-w-screen-xl p-3 mx-auto lg:p-5">
            <button @click="showMenu" data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>

                <svg v-if="!menu" class="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>

                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-white">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

            </button>
            <div :class="{ 'md:block': menu, 'hidden md:block': !menu }" class="w-full md:w-auto" id="navbar-default">
                <ul
                    class="flex flex-col p-4 mt-4 font-medium rounded-lg text-white md:p-0 bg-black md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
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

    <div class="overflow-x-hidden">
        <slot />
    </div>

    <footer class="py-6 text-white bg-gradient-to-b from-gray-950 to-black">
        <div class="flex justify-center gap-5 mx-8 font-bold md:text-lg">
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