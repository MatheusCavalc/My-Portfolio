import image1 from '../assets/images/App-Task-1.png';
import image2 from '../assets/images/App-Task-2.png';
import image3 from '../assets/images/App-Task-3.png';

import image4 from '../assets/images/App-Task-Movel-1.png';
import image5 from '../assets/images/App-Task-Movel-2.png';
import image6 from '../assets/images/App-Task-Movel-3.png';
import image7 from '../assets/images/App-Task-Movel-4.png';
import image8 from '../assets/images/App-Task-Movel-5.png';

import sushiAky from '../assets/images/sushiaky.png'

import SushiAky1 from '../assets/images/SushiAky-1.png';
import SushiAky2 from '../assets/images/SushiAky-2.png';
import SushiAky3 from '../assets/images/SushiAky-3.png';
import SushiAky4 from '../assets/images/SushiAky-4.png';
import SushiAky5 from '../assets/images/SushiAky-5.png';

import SushiAky6 from '../assets/images/SushiAky-Movel-1.png';
import SushiAky7 from '../assets/images/SushiAky-Movel-2.png';
import SushiAky8 from '../assets/images/SushiAky-Movel-3.png';
import SushiAky9 from '../assets/images/SushiAky-Movel-4.png';
import SushiAky10 from '../assets/images/SushiAky-Movel-5.png';

import Invoiceimage1 from '../assets/images/Invoice-App-1.png';
import Invoiceimage2 from '../assets/images/Invoice-App-2.png';
import Invoiceimage3 from '../assets/images/Invoice-App-3.png';
import Invoiceimage4 from '../assets/images/Invoice-App-4.png';
import Invoiceimage5 from '../assets/images/Invoice-App-5.png';

import Invoiceimage6 from '../assets/images/Invoice-App-Movel-1.png'
import Invoiceimage7 from '../assets/images/Invoice-App-Movel-2.png'
import Invoiceimage8 from '../assets/images/Invoice-App-Movel-3.png'

import Sneakersimage1 from '../assets/images/Project-Sneakers-1.png'
import Sneakersimage2 from '../assets/images/Project-Sneakers-2.png'
import Sneakersimage3 from '../assets/images/Project-Sneakers-3.png'
import Sneakersimage4 from '../assets/images/Project-Sneakers-4.png'

import Sneakersimage5 from '../assets/images/Project-Sneakers-Movel-1.png'
import Sneakersimage6 from '../assets/images/Project-Sneakers-Movel-2.png'
import Sneakersimage7 from '../assets/images/Project-Sneakers-Movel-3.png'

import Enewsimage1 from '../assets/images/E-newS-1.png';
import Enewsimage2 from '../assets/images/E-newS-2.png';
import Enewsimage3 from '../assets/images/E-newS-3.png';

import Enewsimage4 from '../assets/images/E-newS-Movel-1.png'
import Enewsimage5 from '../assets/images/E-newS-Movel-2.png'
import Enewsimage6 from '../assets/images/E-newS-Movel-3.png'

import Skinsimage1 from '../assets/images/Skins-Marketplace-1.png';
import Skinsimage2 from '../assets/images/Skins-Marketplace-2.png';
import Skinsimage3 from '../assets/images/Skins-Marketplace-3.png';
import Skinsimage4 from '../assets/images/Skins-Marketplace-4.png';
import Skinsimage5 from '../assets/images/Skins-Marketplace-5.png';

import Skinsimage6 from '../assets/images/Ionic-Skins-Marketplace-1.jpg';
import Skinsimage7 from '../assets/images/Ionic-Skins-Marketplace-2.jpg';
import Skinsimage8 from '../assets/images/Ionic-Skins-Marketplace-3.jpg';

import Skinsimage9 from '../assets/images/Skin-Marketplace-Movel-1.png';
import Skinsimage10 from '../assets/images/Skin-Marketplace-Movel-2.png';
import Skinsimage11 from '../assets/images/Skin-Marketplace-Movel-3.png';
import Skinsimage12 from '../assets/images/Skin-Marketplace-Movel-4.png';
import Skinsimage13 from '../assets/images/Skin-Marketplace-Movel-5.png';

const projects = [
    {
        images_desktop: [
            { image: image1 },
            { image: image2 },
            { image: image3 },
        ],
        images_mobile: [
            { image: image4 },
            { image: image5 },
            { image: image6 },
            { image: image7 },
            { image: image8 }
        ],
        name: 'Tasks App',
        description: 'Tasks App é um aplicativo de gerenciamento de projetos e tarefas que utiliza um sistema de quadros virtuais para ajudar equipes e indivíduos a organizar e acompanhar seu trabalho',
        frameworks: 'PHP 8.1, Laravel 10, Inertia.js 1.0, Vue.js 3, TailwindCSS e MySQL',
        check: 'Github',
        link: 'https://github.com/MatheusCavalc/Task-App'
    },

    {
        images_desktop: [
            { image: SushiAky1 },
            { image: SushiAky2 },
            { image: SushiAky3 },
            { image: SushiAky4 },
            { image: SushiAky5 },
        ],
        images_mobile: [
            { image: SushiAky6 },
            { image: SushiAky7 },
            { image: SushiAky8 },
            { image: SushiAky9 },
            { image: SushiAky10 },
        ],
        image: sushiAky,
        name: 'SushiAky',
        description: 'Cardápio online que proporciona uma experiência intuitiva e agradável aos usuários. Visando simplificar o processo de pedidos, a aplicação permite o envio direto dos pedidos para o WhatsApp do estabelecimento.',
        frameworks: 'Nuxt 3 e TailwindCSS',
        check: 'Website',
        link: 'https://sushiaky.com.br/'
    },

    {
        images_desktop: [
            { image: Invoiceimage1 },
            { image: Invoiceimage2 },
            { image: Invoiceimage3 },
            { image: Invoiceimage4 },
            { image: Invoiceimage5 },
        ],
        images_mobile: [
            { image: Invoiceimage6 },
            { image: Invoiceimage7 },
            { image: Invoiceimage8 },
        ],
        name: 'Nota Fiscal App',
        description: 'Nota Fiscal App é um app para gerenciar faturas ou notas fiscais. Registre e faça o download de notas fiscais de forma automatizada',
        frameworks: 'PHP 8.1, Laravel 10, Filament 3.0 e MySQL',
        check: 'Github',
        link: 'https://github.com/MatheusCavalc/Invoice-App'
    },

    {
        images_desktop: [
            { image: Sneakersimage1 },
            { image: Sneakersimage2 },
            { image: Sneakersimage3 },
            { image: Sneakersimage4 },
        ],
        images_mobile: [
            { image: Sneakersimage5 },
            { image: Sneakersimage6 },
            { image: Sneakersimage7 },
        ],
        name: 'Sneakers App',
        description: 'Sneakers App é um aplicativo de e-commerce com integração de pagamento completa com o Stripe, onde é possível escolher várias opções entre diferentes categorias de sneakers. Conta com um painel de administração completo.',
        frameworks: 'PHP 8.1, Laravel 10, Livewire 3.0, Alpine.js 3.0, TailwindCSS e MySQL',
        check: 'Github',
        link: 'https://github.com/MatheusCavalc/SneakersApp-livewirev3'
    },

    {
        images_desktop: [
            { image: Enewsimage1 },
            { image: Enewsimage2 },
            { image: Enewsimage3 },
        ],
        images_mobile: [
            { image: Enewsimage4 },
            { image: Enewsimage5 },
            { image: Enewsimage6 },
        ],
        name: 'E-newS App',
        description: 'E-newS App é um aplicativo de notícias com editor integrado para criação e atualização de matérias, onde é possível comentar e responder nas reportagens.',
        frameworks: 'PHP 8.1, Laravel 10, Sail (Docker), Inertia.js 1.0, Vue.js 3, TailwindCSS e PostgreSQL',
        check: 'Github',
        link: 'https://github.com/MatheusCavalc/EsportsNews-L10'
    },

    {
        images_desktop: [
            { image: Skinsimage1 },
            { image: Skinsimage2 },
            { image: Skinsimage3 },
            { image: Skinsimage4 },
            { image: Skinsimage5 },
        ],
        images_mobile: [
            { image: Skinsimage9 },
            { image: Skinsimage10 },
            { image: Skinsimage11 },
            { image: Skinsimage12 },
            { image: Skinsimage13 },
        ],
        images_ionic: [
            { image: Skinsimage6 },
            { image: Skinsimage7 },
            { image: Skinsimage8 },
        ],

        name: 'Skins Marketplace',
        description: 'Skins Marketplace é uma aplicação de compra e venda de skins, disponível via interface web, com Vue.js, e via aplicativo móvel, com Ionic.',
        frameworks: 'PHP 8.1, Laravel 10 API, Vue.js 3, TailwindCSS, Ionic 7.0 e MySQL',
        check: 'Github',
        link: 'https://github.com/MatheusCavalc/SkinsMarketplace'
    },
];

export default projects;