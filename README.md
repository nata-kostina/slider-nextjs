# Слайдер

Данное приложение представляет собой адаптивный анимированный слайдер с пагинацией.

## Демо
[Ссылка на деплой]()

## Ресурсы

- [Задание](https://docs.google.com/document/d/1aMGGRthkRc-Iqi-eWO4CjpWGWmRHziGI/edit)
- [Макет](https://www.figma.com/design/iT7HR5aCVFx53TIsp8yKXY/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-IND?node-id=1-2806&t=nZRaA0FvulmsFP2X-1)

## Использованные технологии

- [Next.js](https://nextjs.org/) 15.1.6
- [TailwindCSS](https://tailwindcss.com/) ^3.4.1
- [Typescript](https://www.typescriptlang.org/) ^5
- [Swiper](https://swiperjs.com/) ^11.2.1
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)

## Структура проекта

```
├── public                      # Публично доступные файлы
│   ├── fonts
│   └── images
│
├── src                        
│   ├── app                     # Роутинг и страницы
│   ├── components              # Переиспользуемые компоненты
│   ├── data                    # Статичные данные
│   ├── layouts                 # Лэйауты для обертки контента (например, хедер, футер)
│   ├── sections                # Секции страниц (например, услуги, описание)
│   ├── tools                   # Утилиты и вспомогательные функции
│   ├── ui                      # Элементы интерфейса (например, кнопки, ссылки)
│   └── vectors                 # SVG-элементы
│
├── <config_files>              # Конфигурационные файлы (например, для ESLint, Prettier, Tailwind, TypeScript)
.
.
.
```
## Тестирование на устройствах

Это приложение было протестировано на следующих устройствах и разрешениях экрана:

### Мобильные устройства:
- iPhone 12 (iOS 15.0) — Safari

### Десктопы:
- Windows 11 Professionnel — Chrome

### Разрешения экрана:
- 320px (мобильные устройства)
- 1024px+ (десктопы)

## Локальный запуск проекта

1. Склонировать репозиторий
```
git clone https://github.com/nata-kostina/slider-nextjs.git
```
2. Запустить проект

```
npm run dev
```
3. Открыть [http://localhost:3000](http://localhost:3000) в браузере, чтобы увидеть результат.

## Сборка проекта

1. Склонировать репозиторий
```
git clone https://github.com/nata-kostina/slider-nextjs.git
```
2. Собрать проект

```
npm run build
```
