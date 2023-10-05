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
    <div class="bg-white text-black">
        <div class="px-14 py-10 md:mx-32 pb-20">
            <a id="my-technologies"></a>
            <p class="text-4xl font-bold">Minhas Tecnologias</p>

            <div class="mt-5">
                <div class="md:grid md:grid-cols-2 md:gap-8">

                    <div class="border-2 border-slate-800 rounded-xl p-5 text-center" data-animation="left">
                        <p class="text-2xl font-bold">Frontend</p>

                        <div class="mt-8 flex justify-center">
                            <div class="grid grid-cols-2 gap-x-8 gap-y-4">
                                <MyAbilities name="HTML5" />
                                <MyAbilities name="CSS3" />
                                <MyAbilities name="JavaScript (ES12)" />
                                <MyAbilities name="Vue.js 3" />
                                <MyAbilities name="Alpine.js 3" />
                                <MyAbilities name="TailwindCSS 2.x" />
                            </div>
                        </div>
                    </div>

                    <div class="border-2 border-slate-800 rounded-xl p-5 text-center mt-4 md:mt-0" data-animation="right">
                        <p class="text-2xl font-bold">Backend</p>

                        <div class="mt-8 flex justify-center">
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