// ========== ДАННЫЕ ТОВАРОВ ==========
const products = [
    // Смартфоны
    { id: 1, name: 'Apple iPhone 15 Pro 256GB', price: 129990, oldPrice: 145990, rating: 4.8, img: '📱', badge: 'ХИТ', cat: 'smartphones', stock: 'В наличии', brand: 'Apple', color: 'Natural Titanium', memory: '256 ГБ', screen: '6.1" OLED 120 Гц', cpu: 'A17 Pro', camera: '48 МП + 12 МП + 12 МП', battery: '4400 мА·ч', weight: '187 г', desc: 'iPhone 15 Pro — самый мощный iPhone в истории. Титановый корпус, процессор A17 Pro, новая камера 48 МП с улучшенным зумом и порт USB-C. Всё, что вы хотели от смартфона — и даже больше. Новая кнопка Action Button позволяет настроить быстрый доступ к любимым функциям. Динамический остров стал ещё умнее. А время автономной работы достигает 29 часов воспроизведения видео.' },
    { id: 2, name: 'Samsung Galaxy S24 Ultra', price: 119990, oldPrice: null, rating: 4.7, img: '📲', badge: null, cat: 'smartphones', stock: 'В наличии', brand: 'Samsung', color: 'Titanium Gray', memory: '512 ГБ', screen: '6.8" Dynamic AMOLED 120 Гц', cpu: 'Snapdragon 8 Gen 3', camera: '200 МП + 50 МП + 12 МП + 10 МП', battery: '5000 мА·ч', weight: '232 г', desc: 'Samsung Galaxy S24 Ultra — флагман с титановым корпусом и встроенным стилусом S Pen. Камера 200 МП с 5-кратным оптическим зумом, процессор Snapdragon 8 Gen 3, защита IP68 и 7 лет обновлений Android. Идеальный выбор для профессионалов и творческих людей.' },
    { id: 3, name: 'Xiaomi 14 Pro 512GB', price: 69990, oldPrice: 79990, rating: 4.5, img: '📱', badge: '-12%', cat: 'smartphones', stock: 'Мало', brand: 'Xiaomi', color: 'Чёрный', memory: '512 ГБ', screen: '6.73" AMOLED 120 Гц', cpu: 'Snapdragon 8 Gen 3', camera: '50 МП + 50 МП + 50 МП', battery: '4880 мА·ч', weight: '223 г', desc: 'Xiaomi 14 Pro — камерофон с оптикой Leica. Три камеры по 50 МП обеспечивают потрясающее качество снимков в любых условиях. Быстрая зарядка 120 Вт, яркий AMOLED-дисплей и мощный процессор Snapdragon 8 Gen 3 делают его отличным выбором.' },
    { id: 15, name: 'Google Pixel 8 Pro 128GB', price: 89990, oldPrice: 99990, rating: 4.6, img: '📱', badge: '-10%', cat: 'smartphones', stock: 'В наличии', brand: 'Google', color: 'Obsidian', memory: '128 ГБ', screen: '6.7" LTPO OLED 120 Гц', cpu: 'Tensor G3', camera: '50 МП + 48 МП + 48 МП', battery: '5050 мА·ч', weight: '213 г', desc: 'Google Pixel 8 Pro — чистый Android с эксклюзивными функциями AI. Процессор Tensor G3 обрабатывает фото как профессиональный фотограф. 7 лет обновлений, великолепный OLED-дисплей и лучшая интеграция с сервисами Google.' },
    { id: 16, name: 'Nothing Phone (2) 256GB', price: 49990, oldPrice: null, rating: 4.3, img: '📱', badge: 'НОВИНКА', cat: 'smartphones', stock: 'В наличии', brand: 'Nothing', color: 'Белый', memory: '256 ГБ', screen: '6.7" OLED 120 Гц', cpu: 'Snapdragon 8+ Gen 1', camera: '50 МП + 50 МП', battery: '4700 мА·ч', weight: '201 г', desc: 'Nothing Phone (2) — уникальный дизайн с прозрачной задней панелью и светодиодной подсветкой Glyph. Чистый Android, быстрая зарядка 45 Вт и беспроводная зарядка 15 Вт. Для тех, кто хочет выделиться из толпы.' },

    // Ноутбуки
    { id: 4, name: 'MacBook Air M3 15"', price: 159990, oldPrice: null, rating: 4.9, img: '💻', badge: 'НОВИНКА', cat: 'laptops', stock: 'В наличии', brand: 'Apple', color: 'Midnight', memory: '16 ГБ / 512 ГБ SSD', screen: '15.3" Liquid Retina', cpu: 'Apple M3', camera: '1080p FaceTime HD', battery: 'до 18 ч', weight: '1.51 кг', desc: 'MacBook Air M3 — невероятно тонкий и лёгкий ноутбук с чипом M3. 15-дюймовый дисплей Liquid Retina, 18 часов автономной работы, бесшумная конструкция без вентилятора. Идеален для работы, учёбы и творчества.' },
    { id: 5, name: 'ASUS ROG Zephyrus G16', price: 139990, oldPrice: 169990, rating: 4.6, img: '💻', badge: '-18%', cat: 'laptops', stock: 'В наличии', brand: 'ASUS', color: 'Eclipse Gray', memory: '32 ГБ / 1 ТБ SSD', screen: '16" QHD+ 240 Гц', cpu: 'Intel Core Ultra 9', camera: '1080p', battery: 'до 10 ч', weight: '1.85 кг', desc: 'ASUS ROG Zephyrus G16 — мощный игровой ноутбук в тонком корпусе. Процессор Intel Core Ultra 9, видеокарта RTX 4070, дисплей QHD+ 240 Гц. Система охлаждения с жидким металлом. Играй где угодно.' },
    { id: 9, name: 'Lenovo ThinkPad X1 Carbon Gen 12', price: 179990, oldPrice: 199990, rating: 4.7, img: '💻', badge: '-10%', cat: 'laptops', stock: 'В наличии', brand: 'Lenovo', color: 'Чёрный', memory: '32 ГБ / 1 ТБ SSD', screen: '14" 2.8K OLED', cpu: 'Intel Core Ultra 7', camera: '1080p + IR', battery: 'до 15 ч', weight: '1.09 кг', desc: 'Lenovo ThinkPad X1 Carbon Gen 12 — легендарный бизнес-ноутбук. Невероятно лёгкий (1.09 кг), прочный корпус из магниевого сплава, OLED-дисплей 2.8K, 15 часов автономной работы. Стандарт для корпоративного сегмента.' },
    { id: 10, name: 'HP Spectre x360 16"', price: 129990, oldPrice: null, rating: 4.5, img: '💻', badge: null, cat: 'laptops', stock: 'Под заказ', brand: 'HP', color: 'Nightfall Black', memory: '16 ГБ / 1 ТБ SSD', screen: '16" 3K OLED сенсорный', cpu: 'Intel Core Ultra 7', camera: '5 МП', battery: 'до 12 ч', weight: '1.95 кг', desc: 'HP Spectre x360 — трансформер премиум-класса с сенсорным OLED-дисплеем 3K. Стилус в комплекте, 5 МП камера с автофреймингом, аудиосистема Bang & Olufsen. Идеален для творческих профессионалов.' },

    // Бытовая техника
    { id: 6, name: 'Dyson V15 Detect Absolute', price: 59990, oldPrice: null, rating: 4.7, img: '🧹', badge: null, cat: 'home', stock: 'В наличии', brand: 'Dyson', color: 'Gold', feature: 'Лазерный датчик пыли', power: '240 Вт', container: '0.76 л', runtime: 'до 60 мин', weight: '2.6 кг', desc: 'Dyson V15 Detect — самый умный беспроводной пылесос. Лазерный датчик обнаруживает микроскопическую пыль, акустический сенсор считает частицы. Технология циклонов Dyson обеспечивает постоянную мощность всасывания.' },
    { id: 11, name: 'Samsung Bespoke Jet Pro', price: 49990, oldPrice: 59990, rating: 4.4, img: '🧹', badge: '-17%', cat: 'home', stock: 'В наличии', brand: 'Samsung', color: 'Misty White', feature: 'Станция самоочистки', power: '210 Вт', container: '0.8 л', runtime: 'до 60 мин', weight: '2.3 кг', desc: 'Samsung Bespoke Jet Pro — беспроводной пылесос со станцией автоматической очистки контейнера. Мощный цифровой инверторный мотор, фильтрация HEPA, сменные аккумуляторы. Чистота без контакта с пылью.' },
    { id: 12, name: 'Xiaomi Robot Vacuum X20+', price: 39990, oldPrice: null, rating: 4.3, img: '🤖', badge: null, cat: 'home', stock: 'В наличии', brand: 'Xiaomi', color: 'Белый', feature: 'Влажная уборка, LiDAR', power: '5000 Па', container: '0.4 л', runtime: 'до 180 мин', weight: '3.8 кг', desc: 'Xiaomi Robot Vacuum X20+ — робот-пылесос с навигацией LiDAR и влажной уборкой. Мощность всасывания 5000 Па, интеллектуальное построение карты помещения, управление через Mi Home. Убирает до 180 минут без подзарядки.' },
    { id: 17, name: 'Dreame L20 Ultra', price: 69990, oldPrice: 79990, rating: 4.7, img: '🤖', badge: '-12%', cat: 'home', stock: 'Мало', brand: 'Dreame', color: 'Чёрный', feature: 'Полная самоочистка', power: '7000 Па', container: '0.35 л', runtime: 'до 200 мин', weight: '4.2 кг', desc: 'Dreame L20 Ultra — флагманский робот-пылесос с полным самообслуживанием. Станция моет и сушит швабры, опорожняет контейнер и заправляет воду. 7000 Па всасывания, LiDAR-навигация, AI-распознавание препятствий.' },
    { id: 18, name: 'LG OLED C4 65"', price: 149990, oldPrice: 179990, rating: 4.8, img: '📺', badge: '-17%', cat: 'home', stock: 'В наличии', brand: 'LG', color: 'Чёрный', screen: '65" OLED 120 Гц', resolution: '4K UHD', smart: 'webOS 24', hdmi: '4x HDMI 2.1', weight: '23 кг', desc: 'LG OLED C4 — телевизор с идеальным чёрным цветом и бесконечной контрастностью. Процессор α9 AI 4K Gen7 улучшает любое изображение. 4 порта HDMI 2.1 для гейминга 4K 120 Гц. webOS 24 с голосовым управлением.' },
    { id: 25, name: 'Samsung QLED Q80D 75"', price: 179990, oldPrice: 209990, rating: 4.6, img: '📺', badge: '-14%', cat: 'home', stock: 'В наличии', brand: 'Samsung', color: 'Чёрный', screen: '75" QLED 120 Гц', resolution: '4K UHD', smart: 'Tizen', hdmi: '4x HDMI 2.1', weight: '34 кг', desc: 'Samsung QLED Q80D — огромный 75-дюймовый QLED-телевизор с технологией Quantum Dot. Яркие, насыщенные цвета, процессор NQ4 AI Gen2, звук Dolby Atmos. Идеален для домашнего кинотеатра и игр.' },

    // Аксессуары
    { id: 7, name: 'Sony WH-1000XM5', price: 29990, oldPrice: 34990, rating: 4.8, img: '🎧', badge: '-14%', cat: 'accessories', stock: 'В наличии', brand: 'Sony', color: 'Чёрный', type: 'Bluetooth 5.3', feature: 'Активное шумоподавление', battery: 'до 30 ч', weight: '250 г', desc: 'Sony WH-1000XM5 — лучшие в мире наушники с активным шумоподавлением. 8 микрофонов, процессор V1, адаптивное управление звуком. 30 часов работы, быстрая зарядка 3 мин = 3 часа. Комфорт на весь день.' },
    { id: 8, name: 'Apple Watch Series 9', price: 44990, oldPrice: null, rating: 4.6, img: '⌚', badge: null, cat: 'accessories', stock: 'В наличии', brand: 'Apple', color: 'Midnight', size: '45 мм', screen: 'Always-On Retina', feature: 'SpO2, ЭКГ, температура', battery: 'до 18 ч', weight: '39 г', desc: 'Apple Watch Series 9 — самые продвинутые часы Apple. Чип S9, жест Double Tap, датчики кислорода в крови и ЭКГ. Always-On Retina дисплей в 2 раза ярче. Ваш идеальный партнёр для здоровья и фитнеса.' },
    { id: 13, name: 'AirPods Pro 2 (USB-C)', price: 24990, oldPrice: null, rating: 4.7, img: '🎧', badge: null, cat: 'accessories', stock: 'В наличии', brand: 'Apple', color: 'Белый', type: 'Bluetooth 5.3', feature: 'Адаптивное шумоподавление', battery: 'до 6 ч (+30 ч)', weight: '5.3 г (наушник)', desc: 'AirPods Pro 2 — наушники с адаптивным шумоподавлением и режимом прозрачности. Чип H2, персонализированное пространственное аудио, сенсорное управление. Чехол с динамиком и USB-C.' },
    { id: 14, name: 'Samsung Galaxy Buds3 Pro', price: 18990, oldPrice: 22990, rating: 4.5, img: '🎧', badge: '-17%', cat: 'accessories', stock: 'В наличии', brand: 'Samsung', color: 'Silver', type: 'Bluetooth 5.4', feature: 'Интеллектуальное ANC', battery: 'до 7 ч (+30 ч)', weight: '5.9 г (наушник)', desc: 'Samsung Galaxy Buds3 Pro — флагманские TWS-наушники с интеллектуальным шумоподавлением. Адаптивный звук, 360 Spatial Audio, защита IP57. Водонепроницаемые, идеальны для спорта.' },
    { id: 19, name: 'Apple MagSafe Charger', price: 3990, oldPrice: null, rating: 4.4, img: '🔌', badge: null, cat: 'accessories', stock: 'В наличии', brand: 'Apple', color: 'Белый', type: 'Беспроводная', power: '15 Вт', compatibility: 'iPhone 12 и новее', weight: '45 г', desc: 'Apple MagSafe Charger — удобная беспроводная зарядка с магнитным креплением. Мощность 15 Вт для iPhone, автоматическое выравнивание. Совместим с любыми Qi-устройствами.' },
    { id: 20, name: 'Samsung 65W GaN Charger', price: 2990, oldPrice: 3990, rating: 4.2, img: '🔌', badge: '-25%', cat: 'accessories', stock: 'В наличии', brand: 'Samsung', color: 'Чёрный', type: 'Проводная GaN', power: '65 Вт', compatibility: 'USB-C PD 3.0', weight: '120 г', desc: 'Samsung 65W GaN Charger — компактное зарядное устройство на основе нитрида галлия. Заряжает ноутбуки, планшеты и смартфоны. Поддержка USB-C Power Delivery 3.0 и PPS. В 2 раза меньше обычного.' },

    // Гейминг
    { id: 21, name: 'PlayStation 5 Slim', price: 54990, oldPrice: null, rating: 4.8, img: '🎮', badge: 'ХИТ', cat: 'gaming', stock: 'В наличии', brand: 'Sony', color: 'Белый', storage: '1 ТБ SSD', resolution: '4K 120 Гц', feature: 'DualSense, 3D Audio', weight: '3.2 кг', desc: 'PlayStation 5 Slim — обновлённая версия культовой консоли. Компактнее на 30%, SSD 1 ТБ, контроллер DualSense с тактильной отдачей. Эксклюзивы Sony, 4K 120 Гц, трассировка лучей.' },
    { id: 22, name: 'Xbox Series X', price: 49990, oldPrice: 54990, rating: 4.7, img: '🎮', badge: '-9%', cat: 'gaming', stock: 'В наличии', brand: 'Microsoft', color: 'Чёрный', storage: '1 ТБ SSD', resolution: '4K 120 Гц', feature: 'Game Pass Ultimate', weight: '4.4 кг', desc: 'Xbox Series X — самая мощная консоль с подпиской Game Pass Ultimate. Сотни игр на старте, обратная совместимость, Quick Resume. 4K 120 Гц, DirectX Ray Tracing, SSD Velocity.' },
    { id: 23, name: 'Nintendo Switch OLED', price: 29990, oldPrice: null, rating: 4.6, img: '🎮', badge: null, cat: 'gaming', stock: 'В наличии', brand: 'Nintendo', color: 'Белый', storage: '64 ГБ', screen: '7" OLED', battery: 'до 9 ч', weight: '420 г', desc: 'Nintendo Switch OLED — гибридная консоль с ярким 7-дюймовым OLED-экраном. Играйте дома на ТВ и в портативном режиме. Широкий угол наклона подставки, улучшенный звук, 64 ГБ памяти.' },
    { id: 24, name: 'Steam Deck OLED 1TB', price: 69990, oldPrice: null, rating: 4.9, img: '🎮', badge: 'НОВИНКА', cat: 'gaming', stock: 'Под заказ', brand: 'Valve', color: 'Чёрный', storage: '1 ТБ NVMe SSD', screen: '7.4" HDR OLED 90 Гц', battery: 'до 12 ч', weight: '640 г', desc: 'Steam Deck OLED — портативный ПК от Valve. Играйте в игры из библиотеки Steam где угодно. HDR OLED-дисплей 90 Гц, кастомный AMD APU, SteamOS. Поддержка док-станции для подключения к ТВ.' },
];

// ========== ЛИЧНЫЙ КАБИНЕТ ==========
let currentUser = null;
let users = [];

function loadUsers() {
    const saved = localStorage.getItem('boarUsers');
    if (saved) users = JSON.parse(saved);
}

function saveUsers() {
    localStorage.setItem('boarUsers', JSON.stringify(users));
}

function loadCurrentUser() {
    const saved = localStorage.getItem('boarCurrentUser');
    if (saved) currentUser = JSON.parse(saved);
}

function saveCurrentUser() {
    if (currentUser) {
        localStorage.setItem('boarCurrentUser', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('boarCurrentUser');
    }
}

function registerUser(name, email, phone, password) {
    if (users.find(u => u.email === email)) {
        showNotification('⚠️ Пользователь с таким email уже существует');
        return false;
    }
    const newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        password,
        orders: [],
        bonuses: 500,
        registeredAt: new Date().toISOString(),
    };
    users.push(newUser);
    saveUsers();
    currentUser = newUser;
    saveCurrentUser();
    updateProfileUI();
    showNotification('✅ Регистрация успешна! Начислено 500 бонусных баллов');
    return true;
}

function loginUser(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        currentUser = user;
        saveCurrentUser();
        updateProfileUI();
        showNotification('👋 С возвращением, ' + user.name + '!');
        closeModal('profileModal');
        return true;
    }
    showNotification('❌ Неверный email или пароль');
    return false;
}

function logoutUser() {
    currentUser = null;
    saveCurrentUser();
    updateProfileUI();
    showNotification('👋 Вы вышли из аккаунта');
    closeModal('profileModal');
}

function updateProfileUI() {
    const profileIcons = document.querySelectorAll('.icon-link[title="Войти"]');

    profileIcons.forEach(icon => {
        if (currentUser) {
            icon.innerHTML = '👤✅';
            icon.title = currentUser.name;
            icon.style.position = 'relative';
            // Убираем старый значок входа
        } else {
            icon.innerHTML = '👤';
            icon.title = 'Войти';
        }
    });

    updateProfileModal();
}

function updateProfileModal() {
    const profileContent = document.getElementById('profileContent');
    if (!profileContent) return;

    if (currentUser) {
        profileContent.innerHTML = `
            <div class="profile-info">
                <div class="profile-avatar">👤</div>
                <h4>${currentUser.name}</h4>
                <p>📧 ${currentUser.email}</p>
                <p>📞 ${currentUser.phone}</p>
                <p>🎁 Бонусных баллов: <strong>${currentUser.bonuses}</strong></p>
            </div>
            <div class="profile-orders">
                <h4>📦 История заказов</h4>
                ${currentUser.orders && currentUser.orders.length > 0
                    ? currentUser.orders.map((order, i) => `
                        <div class="order-card">
                            <strong>Заказ #${i + 1}</strong>
                            <span>${order.date}</span>
                            <span>Сумма: ${order.total.toLocaleString()} ₽</span>
                            <span>Статус: ${order.status}</span>
                        </div>
                    `).join('')
                    : '<p style="color:var(--gray-500);">Пока нет заказов</p>'
                }
            </div>
            <div class="profile-favorites">
                <h4>❤️ Избранное (${favorites.length})</h4>
                ${favorites.length > 0
                    ? favorites.map(id => {
                        const p = products.find(prod => prod.id === id);
                        return p ? `<p style="cursor:pointer;font-size:14px;" onclick="goToProduct(${p.id}); closeModal('profileModal');">${p.img} ${p.name} — ${p.price.toLocaleString()} ₽</p>` : '';
                    }).join('')
                    : '<p style="color:var(--gray-500);">Пусто</p>'
                }
            </div>
            <button class="btn btn--outline btn--full" onclick="logoutUser()" style="margin-top:16px;">🚪 Выйти</button>
        `;
    } else {
        profileContent.innerHTML = `
            <div class="auth-tabs">
                <button class="auth-tab active" data-auth="login">Вход</button>
                <button class="auth-tab" data-auth="register">Регистрация</button>
            </div>
            <form id="loginForm" class="auth-form">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Пароль" required>
                <button type="submit" class="btn btn--primary btn--full">Войти</button>
            </form>
            <form id="registerForm" class="auth-form" style="display:none;">
                <input type="text" placeholder="Имя" required>
                <input type="email" placeholder="Email" required>
                <input type="tel" placeholder="Телефон" required>
                <input type="password" placeholder="Пароль" required>
                <button type="submit" class="btn btn--primary btn--full">Зарегистрироваться</button>
            </form>
        `;

        // Переключение вкладок
        profileContent.querySelectorAll('.auth-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                profileContent.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                const authType = tab.dataset.auth;
                document.getElementById('loginForm').style.display = authType === 'login' ? 'flex' : 'none';
                document.getElementById('registerForm').style.display = authType === 'register' ? 'flex' : 'none';
            });
        });

        // Форма входа
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const [email, password] = e.target.querySelectorAll('input');
            loginUser(email.value, password.value);
        });

        // Форма регистрации
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const [name, email, phone, password] = e.target.querySelectorAll('input');
            if (registerUser(name.value, email.value, phone.value, password.value)) {
                updateProfileModal();
            }
        });
    }
}

// ========== ЧАТ С КОНСУЛЬТАНТОМ ==========
const sanyaResponses = [
    'Привет! Я Саня, чем могу помочь? 😊',
    'Отличный выбор! Этот товар очень популярен.',
    'Доставка займёт 2-3 дня по России.',
    'Гарантия 1 год от производителя.',
    'Если есть сомнения — могу подобрать аналог подешевле.',
    'Да, конечно! На все товары действует рассрочка 0%.',
    'Самовывоз доступен уже сегодня до 21:00.',
    'Оплатить можно картой, наличными или через СБП.',
    'Если товар не подойдёт — вернём деньги в течение 14 дней.',
    'Напиши мне в WhatsApp или Telegram, я всегда на связи! 📱',
    'По характеристикам — всё честно, без маркетинга. Я сам проверяю.',
    'Осталось 3 штуки на складе, лучше не тянуть.',
    'Для корпоративных клиентов у нас особые условия. Скидки до 15%.',
];

function initChat() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatBody = document.getElementById('chatBody');

    if (!chatToggle || !chatWindow) return;

    // Открыть/закрыть чат
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.toggle('chat--open');
        if (chatWindow.classList.contains('chat--open') && chatBody.children.length <= 1) {
            addMessage('bot', '👋 Привет! Я Саня — твой персональный консультант. Спрашивай что угодно о технике, доставке или акциях!');
        }
    });

    chatClose?.addEventListener('click', () => {
        chatWindow.classList.remove('chat--open');
    });

    // Отправить сообщение
    function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        addMessage('user', text);
        chatInput.value = '';

        // Имитация ответа Сани
        setTimeout(() => {
            const randomResponse = sanyaResponses[Math.floor(Math.random() * sanyaResponses.length)];
            addMessage('bot', randomResponse);
        }, 800 + Math.random() * 1200);
    }

    chatSend?.addEventListener('click', sendMessage);
    chatInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
}

function addMessage(type, text) {
    const chatBody = document.getElementById('chatBody');
    if (!chatBody) return;

    const msg = document.createElement('div');
    msg.className = 'chat-message chat-message--' + type;
    msg.innerHTML = `<div class="chat-message__bubble">${text}</div>`;
    chatBody.appendChild(msg);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// ========== ИЗБРАННОЕ ==========
let favorites = [];

function loadFavorites() {
    const saved = localStorage.getItem('boarFavorites');
    if (saved) favorites = JSON.parse(saved);
}

function saveFavorites() {
    localStorage.setItem('boarFavorites', JSON.stringify(favorites));
}

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    if (index > -1) {
        favorites.splice(index, 1);
        showNotification('💔 Удалено из избранного');
    } else {
        favorites.push(productId);
        showNotification('❤️ Добавлено в избранное');
    }
    saveFavorites();
    updateFavoritesUI();
}

function updateFavoritesUI() {
    const favBadges = document.querySelectorAll('.icon-link[title="Избранное"] .badge');
    favBadges.forEach(badge => {
        badge.textContent = favorites.length;
        badge.style.display = favorites.length === 0 ? 'none' : 'flex';
    });

    document.querySelectorAll('.fav-btn').forEach(btn => {
        const id = parseInt(btn.dataset.favId);
        if (favorites.includes(id)) {
            btn.classList.add('fav-btn--active');
            btn.textContent = '❤️';
        } else {
            btn.classList.remove('fav-btn--active');
            btn.textContent = '🤍';
        }
    });
}

// ========== СРАВНЕНИЕ ==========
let compare = [];

function loadCompare() {
    const saved = localStorage.getItem('boarCompare');
    if (saved) compare = JSON.parse(saved);
}

function saveCompare() {
    localStorage.setItem('boarCompare', JSON.stringify(compare));
}

function toggleCompare(productId) {
    const index = compare.indexOf(productId);
    if (index > -1) {
        compare.splice(index, 1);
        showNotification('⚖️ Удалено из сравнения');
    } else {
        if (compare.length >= 4) {
            showNotification('⚠️ Можно сравнить не более 4 товаров');
            return;
        }
        compare.push(productId);
        showNotification('⚖️ Добавлено в сравнение');
    }
    saveCompare();
    updateCompareUI();
}

function updateCompareUI() {
    const compareBadges = document.querySelectorAll('.icon-link[title="Сравнение"] .badge');
    compareBadges.forEach(badge => {
        badge.textContent = compare.length;
        badge.style.display = compare.length === 0 ? 'none' : 'flex';
    });
}

// ========== УВЕДОМЛЕНИЯ ==========
function showNotification(message) {
    const existing = document.querySelector('.cart-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
}

// ========== КОРЗИНА ==========
let cart = [];

function loadCart() {
    const saved = localStorage.getItem('boarCart');
    if (saved) cart = JSON.parse(saved);
}

function saveCart() {
    localStorage.setItem('boarCart', JSON.stringify(cart));
}

function updateCartUI() {
    const cartCountBadges = document.querySelectorAll('#cartCount');
    cartCountBadges.forEach(badge => {
        badge.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    });
    const cartTotal = document.getElementById('cartTotal');
    const cartItems = document.getElementById('cartItems');

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        cartTotal.textContent = total.toLocaleString() + ' ₽';
    }
    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:20px;">🛒 Корзина пуста</p>';
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item__img">${item.img}</div>
                    <div class="cart-item__info">
                        <strong>${item.name}</strong>
                        <span>${item.price.toLocaleString()} ₽</span>
                    </div>
                    <div class="cart-item__qty">
                        <button onclick="changeQty(${item.id}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button onclick="changeQty(${item.id}, 1)">+</button>
                    </div>
                    <div class="cart-item__price">${(item.price * item.qty).toLocaleString()} ₽</div>
                </div>
            `).join('');
        }
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    updateCartUI();
    showNotification('✅ Товар добавлен в корзину!');
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    saveCart();
    updateCartUI();
}

// ========== ПЕРЕХОД НА КАРТОЧКУ ТОВАРА ==========
function goToProduct(productId) {
    window.location.href = 'product.html?id=' + productId;
}

// ========== МОДАЛЬНЫЕ ОКНА ==========
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
}

function initCartModal() {
    const cartIcon = document.getElementById('cartIcon');
    const modal = document.getElementById('cartModal');
    const closeBtn = modal?.querySelector('.modal__close');
    const overlay = modal?.querySelector('.modal__overlay');

    if (!cartIcon || !modal) return;

    cartIcon.addEventListener('click', (e) => {
        e.preventDefault();
        updateCartUI();
        openModal('cartModal');
    });

    closeBtn?.addEventListener('click', () => closeModal('cartModal'));
    overlay?.addEventListener('click', () => closeModal('cartModal'));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal('cartModal'); });
}

function initCompareModal() {
    const compareIcons = document.querySelectorAll('.icon-link[title="Сравнение"]');
    const modal = document.getElementById('compareModal');
    if (!modal) return;

    compareIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            updateCompareModal();
            openModal('compareModal');
        });
    });

    modal.querySelector('.modal__close')?.addEventListener('click', () => closeModal('compareModal'));
    modal.querySelector('.modal__overlay')?.addEventListener('click', () => closeModal('compareModal'));
}

function updateCompareModal() {
    const container = document.getElementById('compareItems');
    if (!container) return;

    if (compare.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:20px;">⚖️ Нет товаров для сравнения</p>';
        return;
    }

    const prods = compare.map(id => products.find(p => p.id === id)).filter(Boolean);
    container.innerHTML = `
        <div class="compare-table">
            <div class="compare-row compare-row--header">
                <div class="compare-cell">Характеристика</div>
                ${prods.map(p => `<div class="compare-cell">${p.img} ${p.name}</div>`).join('')}
            </div>
            <div class="compare-row"><div class="compare-cell">Цена</div>${prods.map(p => `<div class="compare-cell">${p.price.toLocaleString()} ₽</div>`).join('')}</div>
            <div class="compare-row"><div class="compare-cell">Бренд</div>${prods.map(p => `<div class="compare-cell">${p.brand}</div>`).join('')}</div>
            <div class="compare-row"><div class="compare-cell">Рейтинг</div>${prods.map(p => `<div class="compare-cell">⭐ ${p.rating}</div>`).join('')}</div>
        </div>
    `;
}

function initFavoritesModal() {
    const favIcons = document.querySelectorAll('.icon-link[title="Избранное"]');
    const modal = document.getElementById('favoritesModal');
    if (!modal) return;

    favIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            updateFavoritesModal();
            openModal('favoritesModal');
        });
    });

    modal.querySelector('.modal__close')?.addEventListener('click', () => closeModal('favoritesModal'));
    modal.querySelector('.modal__overlay')?.addEventListener('click', () => closeModal('favoritesModal'));
}

function updateFavoritesModal() {
    const container = document.getElementById('favoritesItems');
    if (!container) return;

    if (favorites.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--gray-500);padding:20px;">❤️ В избранном пока пусто</p>';
        return;
    }

    const favProducts = favorites.map(id => products.find(p => p.id === id)).filter(Boolean);
    container.innerHTML = favProducts.map(p => `
        <div class="cart-item">
            <div class="cart-item__img" style="cursor:pointer;" onclick="goToProduct(${p.id})">${p.img}</div>
            <div class="cart-item__info" style="cursor:pointer;" onclick="goToProduct(${p.id})">
                <strong>${p.name}</strong>
                <span>${p.price.toLocaleString()} ₽</span>
            </div>
            <button class="btn btn--primary btn-sm" onclick="addToCart(${p.id})">🛒</button>
            <button class="btn btn--icon-only" onclick="toggleFavorite(${p.id}); updateFavoritesModal();">❌</button>
        </div>
    `).join('');
}

function initProfileModal() {
    const profileIcons = document.querySelectorAll('.icon-link[title="Войти"], .icon-link[title]:not([title="Избранное"]):not([title="Сравнение"]):not([title="Корзина"])');
    const modal = document.getElementById('profileModal');
    if (!modal) return;

    // Ищем именно иконку профиля
    const profileIcon = document.querySelector('.icon-link[title="Войти"]') || document.querySelector('.header__icons .icon-link:last-child');

    if (profileIcon) {
        profileIcon.addEventListener('click', (e) => {
            e.preventDefault();
            updateProfileModal();
            openModal('profileModal');
        });
        // Убираем стандартный title для поиска в будущем
    }

    modal.querySelector('.modal__close')?.addEventListener('click', () => closeModal('profileModal'));
    modal.querySelector('.modal__overlay')?.addEventListener('click', () => closeModal('profileModal'));
}

// ========== СЛАЙДЕР ==========
function initSlider() {
    const slider = document.getElementById('heroSlider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = slider.querySelector('.slider__arrow--prev');
    const nextBtn = slider.querySelector('.slider__arrow--next');
    let currentSlide = 0;
    let autoPlayInterval;

    slides.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function startAutoPlay() { autoPlayInterval = setInterval(() => goToSlide((currentSlide + 1) % slides.length), 5000); }
    function stopAutoPlay() { clearInterval(autoPlayInterval); }

    prevBtn?.addEventListener('click', () => { goToSlide((currentSlide - 1 + slides.length) % slides.length); stopAutoPlay(); startAutoPlay(); });
    nextBtn?.addEventListener('click', () => { goToSlide((currentSlide + 1) % slides.length); stopAutoPlay(); startAutoPlay(); });
    slider.addEventListener('mouseenter', stopAutoPlay);
    slider.addEventListener('mouseleave', startAutoPlay);
    startAutoPlay();
}

// ========== ОТОБРАЖЕНИЕ ТОВАРОВ ==========
function createProductCard(product) {
    const isFav = favorites.includes(product.id);
    return `
        <div class="product-card" data-cat="${product.cat}" data-brand="${product.brand}" onclick="goToProduct(${product.id})" style="cursor:pointer;">
            ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
            <div class="product-card__img">${product.img}</div>
            <div class="product-card__title">${product.name}</div>
            <div class="product-card__rating">⭐ ${product.rating}</div>
            <div class="product-card__stock stock--${product.stock === 'В наличии' ? 'available' : product.stock === 'Мало' ? 'low' : 'order'}">${product.stock}</div>
            <div class="product-card__price">
                ${product.oldPrice ? `<span class="price--old">${product.oldPrice.toLocaleString()} ₽</span>` : ''}
                <span class="price--current">${product.price.toLocaleString()} ₽</span>
            </div>
            <div class="product-card__actions">
                <button class="btn btn--primary add-to-cart" data-id="${product.id}" onclick="event.stopPropagation(); addToCart(${product.id})">🛒</button>
                <button class="btn btn--icon-only fav-btn ${isFav ? 'fav-btn--active' : ''}" data-fav-id="${product.id}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">${isFav ? '❤️' : '🤍'}</button>
                <button class="btn btn--icon-only" onclick="event.stopPropagation(); toggleCompare(${product.id})">⚖️</button>
            </div>
        </div>
    `;
}

function renderProducts(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (productList.length === 0) {
        container.innerHTML = '<p style="text-align:center;grid-column:1/-1;padding:40px;color:var(--gray-500);">Товары не найдены</p>';
        return;
    }
    container.innerHTML = productList.map(p => createProductCard(p)).join('');
}

// ========== ЗАГРУЗКА КАРТОЧКИ ТОВАРА ==========
function loadProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    if (!productId) return;

    const product = products.find(p => p.id === productId);
    if (!product) {
        document.querySelector('.product').innerHTML = '<div class="container"><h2>Товар не найден</h2><a href="catalog.html">← Вернуться в каталог</a></div>';
        return;
    }

    const titleEl = document.querySelector('.product__title');
    const skuEl = document.querySelector('.product__sku');
    const priceCurrentEl = document.querySelector('.price--current');
    const priceOldEl = document.querySelector('.price--old');
    const priceDiscountEl = document.querySelector('.price--discount');
    const ratingEl = document.querySelector('.product__rating');
    const stockEl = document.querySelector('.product__stock');
    const mainImgEl = document.querySelector('.gallery__main');
    const tabDescEl = document.getElementById('tab-desc');
    const tabSpecsEl = document.getElementById('tab-specs');
    const breadcrumbSpan = document.querySelector('.breadcrumbs span');
    const favBtn = document.querySelector('.product__actions .btn--icon-only:first-of-type');
    const compareBtn = document.querySelector('.product__actions .btn--icon-only:last-of-type');

    if (titleEl) titleEl.textContent = product.name;
    if (skuEl) skuEl.textContent = 'Арт: ' + product.brand.substring(0, 3).toUpperCase() + '-' + product.id;
    if (priceCurrentEl) priceCurrentEl.textContent = product.price.toLocaleString() + ' ₽';
    if (priceOldEl) {
        if (product.oldPrice) {
            priceOldEl.textContent = product.oldPrice.toLocaleString() + ' ₽';
            priceOldEl.style.display = 'inline';
            if (priceDiscountEl) {
                priceDiscountEl.textContent = '-' + Math.round((1 - product.price / product.oldPrice) * 100) + '%';
                priceDiscountEl.style.display = 'inline';
            }
        } else {
            priceOldEl.style.display = 'none';
            if (priceDiscountEl) priceDiscountEl.style.display = 'none';
        }
    }
    if (ratingEl) ratingEl.innerHTML = '⭐ ' + product.rating + ' <a href="#reviews">(342 отзыва)</a>';
    if (stockEl) {
        stockEl.textContent = product.stock === 'В наличии' ? '✅ ' + product.stock : product.stock === 'Мало' ? '⚠️ ' + product.stock : '📦 ' + product.stock;
        stockEl.className = 'product__stock stock--' + (product.stock === 'В наличии' ? 'available' : product.stock === 'Мало' ? 'low' : 'order');
    }
    if (mainImgEl) mainImgEl.textContent = product.img;
    if (breadcrumbSpan) breadcrumbSpan.textContent = product.name;
    if (tabDescEl) tabDescEl.innerHTML = '<p>' + product.desc + '</p><p>💡 Нужна помощь с выбором? Нажми на кнопку чата справа внизу — Саня всё расскажет!</p>';

    if (favBtn) {
        const isFav = favorites.includes(product.id);
        favBtn.textContent = isFav ? '❤️' : '🤍';
        favBtn.classList.toggle('fav-btn--active', isFav);
        favBtn.onclick = () => toggleFavorite(product.id);
    }
    if (compareBtn) compareBtn.onclick = () => toggleCompare(product.id);

    if (tabSpecsEl) {
        let specsHTML = '<table class="specs-table">';
        const specs = { 'Бренд': product.brand, 'Цвет': product.color, 'Экран': product.screen, 'Процессор': product.cpu, 'Память': product.memory, 'Камера': product.camera, 'Аккумулятор': product.battery, 'Вес': product.weight };
        for (const [key, value] of Object.entries(specs)) { if (value) specsHTML += `<tr><td>${key}</td><td>${value}</td></tr>`; }
        if (product.resolution) specsHTML += `<tr><td>Разрешение</td><td>${product.resolution}</td></tr>`;
        if (product.smart) specsHTML += `<tr><td>Smart TV</td><td>${product.smart}</td></tr>`;
        if (product.hdmi) specsHTML += `<tr><td>HDMI</td><td>${product.hdmi}</td></tr>`;
        if (product.feature && !product.cpu) specsHTML += `<tr><td>Особенность</td><td>${product.feature}</td></tr>`;
        if (product.type) specsHTML += `<tr><td>Тип</td><td>${product.type}</td></tr>`;
        if (product.power) specsHTML += `<tr><td>Мощность</td><td>${product.power}</td></tr>`;
        if (product.compatibility) specsHTML += `<tr><td>Совместимость</td><td>${product.compatibility}</td></tr>`;
        if (product.storage) specsHTML += `<tr><td>Накопитель</td><td>${product.storage}</td></tr>`;
        if (product.container) specsHTML += `<tr><td>Контейнер</td><td>${product.container}</td></tr>`;
        if (product.runtime) specsHTML += `<tr><td>Время работы</td><td>${product.runtime}</td></tr>`;
        specsHTML += '</table>';
        tabSpecsEl.innerHTML = specsHTML;
    }

    document.querySelector('.product__actions .btn--primary')?.addEventListener('click', () => addToCart(product.id));
    document.title = product.name + ' — Boar&Sanя';
}

// ========== ФИЛЬТРЫ, ВКЛАДКИ, СОРТИРОВКА, ГАЛЕРЕЯ, БУРГЕР, БЛОГ, ПРОМОКОД ==========
function initCatalogFilters() {
    const filterBtn = document.querySelector('.filter-block + .btn--primary');
    const resetBtn = document.querySelector('.filter-block + .btn--primary + .btn--text');
    if (!filterBtn) return;
    filterBtn.addEventListener('click', () => {
        const checkedBrands = [...document.querySelectorAll('.filter-block:nth-child(2) input[type="checkbox"]:checked')].map(cb => cb.parentElement.textContent.trim());
        const checkedCat = document.querySelector('.filter-block:nth-child(3) input[type="radio"]:checked');
        const catFilter = checkedCat ? checkedCat.parentElement.textContent.trim() : 'Все товары';
        let filtered = products;
        if (catFilter !== 'Все товары') {
            const catMap = { 'Смартфоны': 'smartphones', 'Ноутбуки': 'laptops', 'Бытовая техника': 'home', 'Аксессуары': 'accessories' };
            filtered = filtered.filter(p => p.cat === catMap[catFilter]);
        }
        if (checkedBrands.length > 0) filtered = filtered.filter(p => checkedBrands.includes(p.brand));
        const toolbarCount = document.querySelector('.toolbar__count strong');
        if (toolbarCount) toolbarCount.textContent = filtered.length + ' товаров';
        renderProducts('catalogProducts', filtered);
    });
    resetBtn?.addEventListener('click', () => {
        document.querySelectorAll('.filter-block input[type="checkbox"]').forEach(cb => cb.checked = true);
        document.querySelector('.filter-block:nth-child(3) input[type="radio"]')?.setAttribute('checked', true);
        renderProducts('catalogProducts', products);
    });
}

function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.tab;
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === 'tab-' + target) pane.classList.add('active');
            });
        });
    });
}

function initViewToggle() {
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const grid = document.querySelector('.products__grid--catalog');
            if (btn.dataset.view === 'list') grid?.classList.add('products__grid--list');
            else grid?.classList.remove('products__grid--list');
        });
    });
}

function initSorting() {
    const sortSelect = document.querySelector('.toolbar__sort select');
    sortSelect?.addEventListener('change', () => {
        const value = sortSelect.value;
        const catalogGrid = document.getElementById('catalogProducts');
        if (!catalogGrid) return;
        const cards = [...catalogGrid.querySelectorAll('.product-card')];
        cards.sort((a, b) => {
            const idA = parseInt(a.querySelector('.add-to-cart')?.dataset.id || 0);
            const idB = parseInt(b.querySelector('.add-to-cart')?.dataset.id || 0);
            const pA = products.find(p => p.id === idA);
            const pB = products.find(p => p.id === idB);
            if (!pA || !pB) return 0;
            switch (value) {
                case 'Цена ↑': return pA.price - pB.price;
                case 'Цена ↓': return pB.price - pA.price;
                case 'По названию': return pA.name.localeCompare(pB.name);
                case 'Новинки': return pB.id - pA.id;
                default: return 0;
            }
        });
        catalogGrid.innerHTML = '';
        cards.forEach(card => catalogGrid.appendChild(card));
    });
}

function initGallery() {
    document.querySelectorAll('.gallery__thumbs .thumb').forEach(thumb => {
        thumb.addEventListener('click', () => {
            document.querySelectorAll('.gallery__thumbs .thumb').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
            document.querySelector('.gallery__main').textContent = thumb.textContent;
        });
    });
}

function initBlogCategories() {
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.blog-cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.textContent.trim();
            document.querySelectorAll('.blog-card--full').forEach(card => {
                card.style.display = (filter === 'Все статьи' || card.querySelector('.blog-card__cat')?.textContent.trim() === filter) ? 'flex' : 'none';
            });
        });
    });
}

function initBurgerMenu() {
    document.getElementById('burgerBtn')?.addEventListener('click', () => document.getElementById('mainNav')?.classList.toggle('nav--open'));
    document.querySelectorAll('#mainNav a').forEach(link => link.addEventListener('click', () => { if (window.innerWidth <= 767) document.getElementById('mainNav')?.classList.remove('nav--open'); }));
}

function initPromocode() {
    document.querySelector('.promocode-block__code .btn')?.addEventListener('click', () => {
        navigator.clipboard.writeText('BOAR500').then(() => {
            const btn = document.querySelector('.promocode-block__code .btn');
            btn.textContent = '✅ Скопировано!';
            setTimeout(() => btn.textContent = 'Скопировать', 2000);
        });
    });
}

// ========== ГЛАВНАЯ ИНИЦИАЛИЗАЦИЯ ==========
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    loadCurrentUser();
    loadFavorites();
    loadCompare();
    loadCart();
    updateCartUI();
    updateFavoritesUI();
    updateCompareUI();
    updateProfileUI();
    initCartModal();
    initCompareModal();
    initFavoritesModal();
    initProfileModal();
    initChat();
    initSlider();
    initTabs();
    initViewToggle();
    initBurgerMenu();
    initCatalogFilters();
    initSorting();
    initGallery();
    initBlogCategories();
    initPromocode();
    loadProductPage();

    renderProducts('hitProducts', [...products].sort((a, b) => b.rating - a.rating).slice(0, 8));
    renderProducts('catalogProducts', products);
    renderProducts('promoProducts', products.filter(p => p.oldPrice).length ? products.filter(p => p.oldPrice) : products.slice(0, 8));
    renderProducts('relatedProducts', products.filter(p => p.cat === 'smartphones').slice(0, 4));
    renderProducts('accessoriesProducts', products.filter(p => p.cat === 'accessories').slice(0, 4));

    const toolbarCount = document.querySelector('.toolbar__count strong');
    if (toolbarCount) toolbarCount.textContent = products.length + ' товара';
});
// Форма обратной связи на support.html
const supportForm = document.querySelector('.support-form form');
if (supportForm) {
    supportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = supportForm.querySelector('#userName').value.trim();
        const email = supportForm.querySelector('#userEmail').value.trim();
        showNotification('✅ Спасибо, ' + name + '! Саня ответит на ' + email + ' в течение часа.');
        supportForm.reset();
    });
}