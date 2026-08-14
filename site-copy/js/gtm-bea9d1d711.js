/**
 * GTM.js подключается в body после отработки абсолютно всех скриптов
 * Новая реализация
 */
!(function (e, t, a) {
  ;(e[a] = e[a] || []),
    e[a].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' }),
    (a = t.getElementsByTagName('body')[0]),
    (t = t.createElement('script')).setAttribute('defer', 'defer'),
    t.setAttribute('src', 'https://www.googletagmanager.com/gtm.js?id=GTM-NSZ8G6C'),
    a.appendChild(t)
})(window, document, 'dataLayer')
