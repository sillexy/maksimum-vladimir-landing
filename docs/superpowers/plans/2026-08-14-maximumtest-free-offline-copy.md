# MaximumTest Free Offline Copy Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Создать локально открываемую офлайн-копию страницы `maximumtest.ru/proforientacia/free` со всеми доступными ресурсами и локальными ссылками.

**Architecture:** HTTP-загрузчик получает HTML и рекурсивно сохраняет доступные URL-ресурсы в типизированные каталоги. Локальный переписчик заменяет адреса в HTML, CSS и встроенных стилях, не меняя DOM или логику JavaScript. Проверка сравнивает сетевые ссылки и визуальный результат в браузере.

**Tech Stack:** Чистый HTML/CSS/JavaScript; PowerShell; curl; Python из локального окружения только для механического разбора и переписывания путей.

## Global Constraints

- Не использовать фреймворки, пакетные менеджеры или сборщики.
- Сохранить исходную DOM-структуру и JavaScript без логических изменений.
- Использовать локальные относительные пути к полученным ресурсам.
- Создать `index.html`, `css/`, `js/`, `images/`, `fonts/`, `icons/`.
- Сохранить доступные CSS, JS, изображения, SVG, шрифты и favicon.
- Протестировать страницу локально и визуально сравнить с оригиналом.

---

### Task 1: Получение и инвентаризация страницы

**Files:**
- Create: `site-copy/index.html`
- Create: `site-copy/css/`
- Create: `site-copy/js/`
- Create: `site-copy/images/`
- Create: `site-copy/fonts/`
- Create: `site-copy/icons/`
- Create: `site-copy/asset-manifest.json`

**Interfaces:**
- Consumes: `https://maximumtest.ru/proforientacia/free`
- Produces: исходный HTML и манифест «исходный URL → локальный путь».

- [ ] **Step 1: Загрузить HTML с сохранением байтовой разметки**

Run: `curl.exe -L --fail --compressed -o site-copy/index.html https://maximumtest.ru/proforientacia/free`

- [ ] **Step 2: Проверить, что страница получена**

Run: `Select-String -Path site-copy/index.html -Pattern '<html|<body|<script|<link'`
Expected: найдены HTML-элементы и ссылки на подключаемые ресурсы.

- [ ] **Step 3: Извлечь URL ресурсов из атрибутов и CSS**

Run: `python tools/mirror_page.py --source site-copy/index.html --base https://maximumtest.ru/proforientacia/free --download`
Expected: каталоги ресурсов заполнены, а `asset-manifest.json` содержит соответствия URL.

- [ ] **Step 4: Проверить манифест**

Run: `Get-Content site-copy/asset-manifest.json | ConvertFrom-Json | Measure-Object`
Expected: манифест содержит CSS, JS и медиа-адреса.

### Task 2: Переписывание путей и CSS-зависимостей

**Files:**
- Create: `tools/mirror_page.py`
- Modify: `site-copy/index.html`
- Modify: `site-copy/css/*`

**Interfaces:**
- Consumes: `asset-manifest.json` и загруженные файлы из Task 1.
- Produces: HTML/CSS, ссылающиеся на локальные относительные файлы.

- [ ] **Step 1: Реализовать переписывание URL**

```python
def local_url(original: str, owner: Path, mapping: dict[str, str]) -> str:
    target = mapping.get(original)
    return os.path.relpath(target, owner.parent).replace(os.sep, '/') if target else original
```

- [ ] **Step 2: Переписать внешние `href`, `src`, `srcset`, favicon и URL из style-атрибутов**

Run: `python tools/mirror_page.py --rewrite --root site-copy`
Expected: доступные ресурсы из манифеста заменены относительными путями.

- [ ] **Step 3: Переписать `url(...)` и `@import` в каждом CSS-файле**

Run: `python tools/mirror_page.py --rewrite-css --root site-copy`
Expected: CSS не содержит доступных сетевых URL, у которых есть локальный файл.

- [ ] **Step 4: Проверить структуру и ссылки**

Run: `python tools/mirror_page.py --audit --root site-copy`
Expected: отчёт показывает локальные пути без отсутствующих файлов.

### Task 3: Офлайн-запуск и визуальная проверка

**Files:**
- Modify: `site-copy/index.html`
- Modify: `site-copy/css/*` только при обнаружении отсутствующих локальных ссылок.

**Interfaces:**
- Consumes: офлайн-сборка из Task 2.
- Produces: проверенный `site-copy/index.html`.

- [ ] **Step 1: Запустить временный локальный HTTP-сервер**

Run: `python -m http.server 8080 --directory site-copy`
Expected: `http://localhost:8080/` отдаёт `index.html`.

- [ ] **Step 2: Открыть оригинал и локальную страницу**

Run: открыть `https://maximumtest.ru/proforientacia/free` и `http://localhost:8080/` в браузере.
Expected: одинаковая структура, шрифты, изображения, фоны и визуальные состояния доступны локально.

- [ ] **Step 3: Устранить только ресурсные расхождения**

Run: `python tools/mirror_page.py --audit --root site-copy`
Expected: все загруженные ресурсы подключаются локально.

- [ ] **Step 4: Финальная инвентаризация**

Run: `Get-ChildItem site-copy -Recurse -File | Group-Object DirectoryName | Select-Object Name,Count`
Expected: в результат включены `index.html`, CSS, JS, изображения, шрифты и иконки, если они используются оригиналом.
