addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Замените HOST на ваш домен или IP-адрес V2Ray сервера
  let url = new URL(request.url);
  url.protocol = 'http'; // Изменяем протокол на HTTP
  url.hostname = 'cpeo.methodcontainer.shop'; // Не принимает IP-адреса. Вы можете использовать noip.com, чтобы обойти это ограничение
  url.port = '80'; // Укажите порт, который вы предоставили: 8080

  // Создаем запрос к V2Ray серверу
  let upstream = new Request(url, request);

  // Отправляем запрос к V2Ray серверу
  return fetch(upstream);
}