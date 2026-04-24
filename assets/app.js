// Shared site logic — header/footer injection, catalog rendering, car detail rendering.
const TG_USERNAME = 'abramov_i_s';
const TG_LINK = `https://t.me/${TG_USERNAME}`;

const fmtPrice = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' €';
const fmtKm = (n) => new Intl.NumberFormat('ru-RU').format(n) + ' км';

function tgLinkForCar(car) {
  const msg = encodeURIComponent(`Здравствуйте! Интересует ${car.make} ${car.model} ${car.year} — ${fmtPrice(car.price)}`);
  return `${TG_LINK}?text=${msg}`;
}

function statusTag(status) {
  if (status === 'new') return '<span class="tag tag-new">Новое поступление</span>';
  if (status === 'reserved') return '<span class="tag tag-reserved">Забронировано</span>';
  return '';
}

function renderHeader(active) {
  const navItems = [
    { href: 'index.html', label: 'Главная', key: 'home' },
    { href: 'catalog.html', label: 'Каталог', key: 'catalog' },
    { href: 'about.html', label: 'Как мы работаем', key: 'about' },
    { href: 'contacts.html', label: 'Контакты', key: 'contacts' },
  ];
  return `
    <header class="site-header">
      <div class="container">
        <nav class="nav">
          <a href="index.html" class="brand">
            <span class="brand-mark">A</span>
            <span>ARS Auto</span>
          </a>
          <div class="nav-links">
            ${navItems.map(i => `<a href="${i.href}" class="${active===i.key?'active':''}">${i.label}</a>`).join('')}
          </div>
          <a href="${TG_LINK}" target="_blank" rel="noopener" class="nav-cta">
            <span>Написать в Telegram</span>
          </a>
          <button class="mobile-toggle" aria-label="Меню" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
        </nav>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col">
            <div class="footer-brand">ARS Auto</div>
            <p>Покупаем на аукционах, восстанавливаем в своём цехе и продаём машины до 5 лет с гарантией.<br/>Валенсия, Испания.</p>
          </div>
          <div class="footer-col">
            <h5>Навигация</h5>
            <a href="index.html">Главная</a>
            <a href="catalog.html">Каталог</a>
            <a href="about.html">Как мы работаем</a>
            <a href="contacts.html">Контакты</a>
          </div>
          <div class="footer-col">
            <h5>Машины</h5>
            ${window.CARS.slice(0, 4).map(c => `<a href="car.html?slug=${c.slug}">${c.make} ${c.model}</a>`).join('')}
          </div>
          <div class="footer-col">
            <h5>Связь</h5>
            <a href="${TG_LINK}" target="_blank" rel="noopener">Telegram</a>
            <a href="contacts.html">Все контакты</a>
            <p style="margin-top:14px;">Валенсия, Испания</p>
          </div>
        </div>
        <div class="footer-bottom">
          <div>© 2026 ARS Auto. Все права защищены.</div>
          <div>Работаем на русском, испанском и английском</div>
        </div>
      </div>
    </footer>
  `;
}

function renderFloatingContact() {
  return `
    <div class="floating-contact">
      <a href="${TG_LINK}" target="_blank" rel="noopener" aria-label="Написать в Telegram" title="Telegram">
        ✈
      </a>
    </div>
  `;
}

function renderCarCard(car) {
  return `
    <a href="car.html?slug=${car.slug}" class="car-card">
      <div class="car-card-img">
        ${statusTag(car.status)}
        <img src="${car.photo}" alt="${car.make} ${car.model}" loading="lazy"/>
      </div>
      <div class="car-card-body">
        <div class="car-card-title">${car.make} ${car.model}</div>
        <div class="car-card-trim">${car.trim}</div>
        <div class="car-card-specs">
          <span>${car.year} г.</span>
          <span>${fmtKm(car.km)}</span>
          <span>${car.fuel}</span>
          <span>${car.gearbox}</span>
        </div>
        <div class="car-card-repair">🔧 Что починили: ${car.repairTeaser}</div>
        <div class="car-card-price-row">
          <div>
            <div class="car-card-price">${fmtPrice(car.price)}</div>
            <div class="car-card-finance">от ${car.finance} €/мес</div>
          </div>
          <span class="btn btn-ghost" style="padding:10px 18px; font-size:13px;">Посмотреть →</span>
        </div>
      </div>
    </a>
  `;
}

function renderCatalog(filter) {
  const cars = filter ? window.CARS.filter(c => c.fuel.toLowerCase().includes(filter.toLowerCase())) : window.CARS;
  return `<div class="car-grid">${cars.map(renderCarCard).join('')}</div>`;
}

function renderFeaturedRepairs() {
  const pairs = window.CARS.slice(0, 4).map(car => {
    const first = car.repair.items[0];
    return `
      <a href="car.html?slug=${car.slug}" class="repair-pair">
        <div class="repair-pair-imgs">
          <div class="repair-pair-img"><span class="label">До</span><img src="${first.before}" alt="До" loading="lazy"/></div>
          <div class="repair-pair-img"><span class="label">После</span><img src="${first.after}" alt="После" loading="lazy"/></div>
        </div>
        <div class="repair-pair-body">
          <h4>${car.make} ${car.model}</h4>
          <p>${first.title}</p>
        </div>
      </a>
    `;
  }).join('');
  return `<div class="repair-scroll">${pairs}</div>`;
}

function renderCarDetail(car) {
  if (!car) {
    return `<div class="container section"><h1>Машина не найдена</h1><p><a href="catalog.html">← К каталогу</a></p></div>`;
  }
  const fmt = (n) => new Intl.NumberFormat('ru-RU').format(n);
  return `
    <section class="container">
      <div class="car-detail-header">
        <div class="breadcrumb">
          <a href="index.html">Главная</a> / <a href="catalog.html">Каталог</a> / ${car.make} ${car.model}
        </div>
        <h1 class="car-detail-title serif">${car.make} ${car.model}</h1>
        <div class="car-detail-sub">${car.trim} · ${car.year} · ${fmtKm(car.km)}</div>
      </div>

      <div class="car-detail-grid">
        <div>
          <div class="gallery">
            ${car.gallery.map((url, i) => `
              <div class="gallery-item"><img src="${url}" alt="Фото ${i+1}" loading="lazy"/></div>
            `).join('')}
          </div>
        </div>
        <aside class="price-panel">
          <div class="price-big">${fmtPrice(car.price)}</div>
          <div class="price-finance">от ${car.finance} €/мес · кредит на 5 лет, первый взнос 20%</div>
          <div class="price-ctas">
            <a href="${tgLinkForCar(car)}" target="_blank" rel="noopener" class="btn btn-tg btn-lg">✈ Написать в Telegram</a>
            <button class="btn btn-ghost btn-lg" onclick="alert('Бронирование: форма оплаты 200€ (в разработке)')">Забронировать за 200 €</button>
          </div>
          <div class="price-info">
            <div class="row"><span>Год</span><b>${car.year}</b></div>
            <div class="row"><span>Пробег</span><b>${fmt(car.km)} км</b></div>
            <div class="row"><span>Двигатель</span><b>${car.fuel}, ${car.power}</b></div>
            <div class="row"><span>Привод</span><b>${car.drive}</b></div>
            <div class="row"><span>Коробка</span><b>${car.gearbox}</b></div>
            <div class="row"><span>Цвет</span><b>${car.color}</b></div>
          </div>
        </aside>
      </div>

      <div class="spec-grid">
        <div class="item"><div class="lbl">Год выпуска</div><div class="val">${car.year}</div></div>
        <div class="item"><div class="lbl">Пробег</div><div class="val">${fmt(car.km)} км</div></div>
        <div class="item"><div class="lbl">Мощность</div><div class="val">${car.power}</div></div>
        <div class="item"><div class="lbl">Привод</div><div class="val">${car.drive}</div></div>
      </div>

      <div class="repair-block">
        <div class="repair-block-head">
          <div>
            <span class="eyebrow">Фирменный блок</span>
            <h2 class="serif" style="margin-top:12px;">Что мы сделали в цехе</h2>
          </div>
          <div class="master">
            <div class="master-avatar">${car.repair.master.initial}</div>
            <div>
              <div class="master-name">${car.repair.master.name}</div>
              <div class="master-role">${car.repair.master.role}</div>
            </div>
          </div>
        </div>
        <div class="repair-stats" style="margin-top:20px;">
          <div><b>${car.repair.hours} ч</b>работ</div>
          <div><b>${fmtPrice(car.repair.partsTotal)}</b>запчасти</div>
          <div><b>${car.repair.completed}</b>завершено</div>
        </div>
        <div class="timeline">
          ${car.repair.items.map((it, i) => `
            <div class="timeline-item">
              <div class="timeline-dot">${i+1}</div>
              <div class="timeline-content">
                <h4>${it.title}</h4>
                <div class="date">${it.date}</div>
                <p style="margin:0; color:var(--ink-2); font-size:14px;">${it.description}</p>
                <div class="timeline-imgs">
                  <div class="img"><span class="label">До</span><img src="${it.before}" alt="До" loading="lazy"/></div>
                  <div class="img"><span class="label">После</span><img src="${it.after}" alt="После" loading="lazy"/></div>
                </div>
                <div class="timeline-parts"><b>Запчасти:</b> ${it.parts}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <section class="section-tight">
        <span class="eyebrow">Комплектация</span>
        <h2 class="serif" style="margin:12px 0 28px;">Что входит в машину</h2>
        <ul class="equipment-list">
          ${car.equipment.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </section>

      <section class="section-tight">
        <span class="eyebrow">Гарантия</span>
        <h2 class="serif" style="margin:12px 0 28px;">Что получает покупатель</h2>
        <div class="warranty-grid">
          <div class="warranty-card">
            <div class="ico">🛡️</div>
            <h4>Гарантия 12 месяцев</h4>
            <p>На все работы, выполненные в нашем цехе, и на установленные запчасти.</p>
          </div>
          <div class="warranty-card">
            <div class="ico">📄</div>
            <h4>Полный отчёт</h4>
            <p>История машины, VIN-проверка, детальный отчёт по работам — всё в одном PDF.</p>
          </div>
          <div class="warranty-card">
            <div class="ico">↩️</div>
            <h4>Возврат 15 дней</h4>
            <p>Если что-то не так — возвращаем деньги без вопросов в течение 15 дней.</p>
          </div>
        </div>
      </section>
    </section>
  `;
}

function mountLayout(activeKey, contentSelector) {
  document.body.insertAdjacentHTML('afterbegin', renderHeader(activeKey));
  document.body.insertAdjacentHTML('beforeend', renderFooter());
  document.body.insertAdjacentHTML('beforeend', renderFloatingContact());
}

function setupAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page || 'home';
  mountLayout(page);

  if (page === 'catalog') {
    document.getElementById('catalog-mount').innerHTML = renderCatalog();
  }
  if (page === 'home') {
    document.getElementById('featured-cars').innerHTML = window.CARS.slice(0, 4).map(renderCarCard).join('');
    document.getElementById('featured-repairs').innerHTML = renderFeaturedRepairs();
  }
  if (page === 'car') {
    const slug = new URLSearchParams(window.location.search).get('slug');
    const car = window.CARS.find(c => c.slug === slug);
    document.getElementById('car-mount').innerHTML = renderCarDetail(car);
    if (car) document.title = `${car.make} ${car.model} ${car.year} — ARS Auto`;
  }

  setupAnimations();
});
