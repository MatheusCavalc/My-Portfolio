<script setup>
import EnewsProject from './projects/EnewsProject.vue';
import TasksApp from './projects/TasksApp.vue';
import SneakersApp from './projects/SneakersApp.vue';
import StudioLar from './projects/StudioLar.vue';
import WriterProject from './projects/WriterProject.vue';

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

            <TasksApp />

            <SneakersApp />

            <EnewsProject />

            <StudioLar />

            <WriterProject />
        </div>
    </div>
</template>