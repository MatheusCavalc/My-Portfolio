<script setup>
import MyAbilities from './MyAbilities.vue';

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
        <div class="py-10 pb-20 mx-4 md:mx-32">
            <a id="my-technologies"></a>
            <p class="text-3xl font-bold text-center lg:text-4xl">Minhas Tecnologias</p>

            <div class="mt-5 lg:mt-10">
                <div class="md:grid md:grid-cols-2 md:gap-8">

                    <div class="p-5 text-center border-2 border-slate-800 rounded-xl">
                        <p class="text-xl font-bold lg:text-2xl">Frontend</p>

                        <div class="flex justify-center mt-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                <MyAbilities name="HTML5" />
                                <MyAbilities name="CSS3" />
                                <MyAbilities name="JavaScript (ES12)" />
                                <MyAbilities name="Vue.js 3" />
                                <MyAbilities name="Alpine.js 3" />
                                <MyAbilities name="TailwindCSS" />
                                <MyAbilities name="Nuxt 3" />
                            </div>
                        </div>
                    </div>

                    <div class="p-5 mt-4 text-center border-2 border-slate-800 rounded-xl md:mt-0">
                        <p class="text-xl font-bold lg:text-2xl">Backend</p>

                        <div class="flex justify-center mt-8">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                <MyAbilities name="PHP 7.x a 8.x" />
                                <MyAbilities name="Laravel 7.x a 10.x" />
                                <MyAbilities name="Livewire 2 e 3" />
                                <MyAbilities name="FilamentPHP 3" />
                                <MyAbilities name="MariaDB" />
                                <MyAbilities name="PostgreSQL" />
                                <MyAbilities name="Git" />
                                <MyAbilities name="Docker" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>
