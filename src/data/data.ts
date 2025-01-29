import { INavItem, IService } from "@/data/data.types";

export const nav: INavItem[] = [
    { text: "О&nbsp;школе", link: "#" },
    { text: "Курсы", link: "#" },
    { text: "Библиотека", link: "#" }
];

export const services: IService[] = [
    {
        id: "0",
        image: "/images/service-0.svg",
        title: "Анализ текущего состояния карьеры",
        text: "Проведем оценку вашего кейса и&nbsp;создадим стратегию для дальнейшего карьерного развития."
    },
    {
        id: "1",
        image: "/images/service-1.svg",
        title: "Поиск работы",
        text: "Поможем сформировать профессиональный портфель, который выделит вас среди других кандидатов."
    },
    {
        id: "2",
        image: "/images/service-2.svg",
        title: "Сопроводительные письма и&nbsp;резюме",
        text: "Определим вашу карьерную цель и&nbsp;разработаем стратегию для трудоустройства."
    },
    {
        id: "3",
        image: "/images/service-3.svg",
        title: "Тренинг по&nbsp;презентации личного бренда",
        text: "Подсветим сильные стороны и&nbsp;грамотно выстроим самопрезентацию."
    },
    {
        id: "4",
        image: "/images/service-4.svg",
        title: "Подготовка к&nbsp;собеседованию",
        text: "Научим говорить о&nbsp;себе кратко, ярко и&nbsp;профессионально."
    },
    {
        id: "5",
        image: "/images/service-5.svg",
        title: "Рекомендация по&nbsp;базе STEMPS Career",
        text: "Поможем встретиться соискателю и&nbsp;работодателю."
    }
];
