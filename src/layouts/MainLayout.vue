<script setup>
import { ref } from 'vue';
import MenuIcon from '../components/icons/MenuIcon.vue';
import AboutMeIcon from '../components/icons/AboutMeIcon.vue';
import MyTechnologiesIcon from '../components/icons/MyTechnologiesIcon.vue';
import MyProjectsIcon from '../components/icons/MyProjectsIcon.vue';
import OtherProjectsIcon from '../components/icons/OtherProjectsIcon.vue';

let menu = ref(false)
</script>

<template>
    <nav :class="{ 'rounded-b-2xl': menu, 'rounded-none': !menu }" class="fixed z-50 w-full bg-black lg:rounded-none">
        <div class="flex flex-wrap items-center justify-end max-w-screen-xl p-3 mx-auto lg:p-5">
            <button @click="menu = !menu" :class="{ 'opened': menu }"
                class="inline-flex items-center justify-center w-10 h-10 p-1 text-sm text-gray-500 rounded-lg md:hidden"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <MenuIcon />
            </button>
            <div :class="{ 'md:block': menu, 'hidden md:block': !menu }" class="w-full md:w-auto" id="navbar-default">
                <ul
                    class="flex flex-col p-3 mt-4 font-medium text-white bg-black rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
                    <li>
                        <a href="#about-me"
                            class="block py-2 pl-3 pr-4 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">
                            <div class="flex gap-2">
                                <AboutMeIcon />

                                <p class="text-sm lg:text-base">Sobre Mim</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#my-technologies"
                            class="block py-2 pl-3 pr-4 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">
                            <div class="flex gap-2">
                                <MyTechnologiesIcon />

                                <p class="text-sm lg:text-base">Minhas Tecnologias</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#my-projects"
                            class="block py-2 pl-3 pr-4 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">
                            <div class="flex gap-2">
                                <MyProjectsIcon />

                                <p class="text-sm lg:text-base">Meus Projetos</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#other-projects"
                            class="block py-2 pl-3 pr-4 rounded hover:text-black hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0">
                            <div class="flex gap-2">
                                <OtherProjectsIcon />

                                <p class="text-sm lg:text-base">Outros Projetos</p>
                            </div>
                        </a>
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