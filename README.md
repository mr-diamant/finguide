# FinGuide Expert — finguide.kz

Корпоративный сайт финансового эксперта Айнур Рысмаганбетовой. Услуги: бухгалтерский учёт, налоговый консалтинг, финансовый коучинг — для предпринимателей и физических лиц в Актобе, Казахстан.

## Стек

- **React 18** + **TypeScript**
- **Vite** — сборщик
- **Tailwind CSS v4** — стили
- **Framer Motion** (`motion/react`) — анимации
- **Lucide React** — иконки
- **IMask** — маска телефона

## Структура проекта

```
src/
  components/       # UI-компоненты
  context/          # ModalContext (глобальный контакт-модал)
  lib/              # utils (cn)
  App.tsx           # Корневой компонент, тёмная тема, футер
  index.css         # Tailwind + токены цветов, утилиты
  main.tsx          # Точка входа
index.html          # Шаблон с OG-мета тегами
```

## Разработка

```bash
npm install
npm run dev
# http://localhost:5173
```

## Сборка

```bash
npm run build
# Результат в dist/
```

## Деплой

FTP-хостинг 194.39.65.26, пользователь `claude_finguide`.  
**Важно:** папку `page/` не трогать — загружать только `index.html` и `assets/`.

```bash
curl -T dist/index.html "ftp://194.39.65.26/index.html" --user "claude_finguide:PASS"
for f in dist/assets/*; do
  curl -T "$f" "ftp://194.39.65.26/assets/$(basename $f)" --user "claude_finguide:PASS"
done
```

## Цвета бренда

| Переменная         | HEX       |
|--------------------|-----------|
| `brand-green`      | `#43795E` |
| `brand-green-dark` | `#2D5240` |
| `brand-deep-dark`  | `#1A2E24` |
| `brand-gold`       | `#C9A84C` |
| `off-white`        | `#F8F6F1` |
