<script setup>
import projects from '../../stores/projects';
import { onMounted, ref } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const view = ref('')
const projectsviews = projects

const changeView = (carousel) => {
    view.value = carousel
}

onMounted(() => {
    changeView('web')
})
</script>

<template>
    <div v-for="project in projects">
        <div id="project-1" class="mt-10 md:flex md:gap-10">
            <div v-if="project.images_mobile.length > 1" class="lg:w-3/5">
                <div class="flex justify-center mb-4">
                    <div class="flex gap-2">
                        <button type="button" @click="changeView('web')"
                            :class="{ 'text-white bg-gradient-to-r from-black to-gray-900': view === 'web', ' text-black bg-white border border-black': view !== 'web' }"
                            class="font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                            Desktop
                        </button>

                        <button type="button" @click="changeView('mobile')"
                            :class="{ 'text-white bg-gradient-to-r from-black to-gray-900': view === 'mobile', 'text-black bg-white border border-black': view !== 'mobile' }"
                            class="font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                            Mobile
                        </button>

                        <button v-if="project.images_ionic" type="button" @click="changeView('app')"
                            :class="{ 'text-white bg-gradient-to-r from-black to-gray-900': view === 'app', 'text-black bg-white border border-black': view !== 'app' }"
                            class="font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
                            App
                        </button>
                    </div>
                </div>

                <div>
                    <div v-if="view == 'web'">
                        <Carousel perPage="1" :pagination="true">
                            <Slide v-for="(item, index) in project.images_desktop" :key="index">
                                <img :src="item.image" class="object-contain w-full h-full border border-black"
                                    alt="Task Project" />
                            </Slide>

                            <template #addons>
                                <Navigation />
                                <Pagination />
                            </template>
                        </Carousel>
                    </div>

                    <div v-if="view == 'mobile'">
                        <Carousel perPage="1" :pagination="true">
                            <Slide v-for="(item, index) in project.images_mobile" :key="index">
                                <img :src="item.image"
                                    class="object-contain bg-black border-2 border-black h-[400px] rounded-xl"
                                    alt="Task Project" />
                            </Slide>

                            <template #addons>
                                <Navigation />
                                <Pagination />
                            </template>
                        </Carousel>
                    </div>

                    <div v-if="view == 'app'">
                    <Carousel perPage="1" :pagination="true">
                        <Slide v-for="(item, index) in project.images_ionic" :key="index">
                            <img :src="item.image"
                                class="object-contain bg-black border-2 border-black h-[400px] rounded-xl"
                                alt="Skins Marketplace" />
                        </Slide>

                        <template #addons>
                            <Navigation />
                            <Pagination />
                        </template>
                    </Carousel>
                </div>
                </div>
            </div>

            <div v-else>
                <a target="_blank" :href="project.link">
                    <img class="object-cover border border-black" :src="project.image" :alt="project.name">
                </a>
            </div>

            <div class="mt-5 lg:mt-20 lg:w-2/5">
                <div class="w-full md:w-96">
                    <div class="mt-4 md:mt-0">
                        <h1 class="text-2xl font-bold text-center md:text-4xl">{{ project.name }}</h1>
                    </div>

                    <div class="mt-6">
                        <p class="">
                            {{ project.description }}
                        </p>
                    </div>
                </div>

                <div class="mt-2">
                    <p>
                        Frameworks utilizados: {{ project.frameworks }}
                    </p>
                </div>

                <div class="mt-4">
                    <a :href="project.link" target="_blank">
                        <button type="button"
                            class="text-white bg-black hover:bg-gray-900 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-full lg:w-fit">Ver
                            no {{ project.check }}</button>
                    </a>
                </div>
            </div>
        </div>

        <div class="flex justify-center my-10">
            <div class="w-full h-1 rounded-full md:w-4/5 bg-gradient-to-r from-black to-gray-950"></div>
        </div>
    </div>
</template>