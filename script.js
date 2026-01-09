Olga Volkova, [09.01.2026 12:10]
// ============================================
// КАЛЬКУЛЯТОР СТОИМОСТИ ОКЛЕЙКИ АВТОМОБИЛЯ
// ============================================

// Получаем элементы калькулятора
const carType = document.getElementById('car-type');
const filmType = document.getElementById('film-type');
const totalPrice = document.getElementById('total-price');

/**
 * Обновляет стоимость в калькуляторе
 */
function updatePrice() {
    // Получаем базовую цену выбранного типа авто
    let basePrice = parseInt(carType.value) || 0;
    
    // Получаем дополнительную стоимость пленки
    let filmPrice = parseInt(filmType.value) || 0;
    
    // Суммируем
    let total = basePrice + filmPrice;
    
    // Форматируем число с пробелами (50 000)
    totalPrice.textContent = total.toLocaleString('ru-RU');
    
    console.log('💰 Обновлена цена: ' + total + '₽');
}

// ============================================
// ФОРМА ОБРАТНОЙ СВЯЗИ
// ============================================

/**
 * Обработка отправки формы
 */
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Отменяем стандартную отправку
            
            // Получаем данные формы
            const name = this.querySelector('input[type="text"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            
            // Проверяем заполненность полей
            if (!name || !phone) {
                alert('⚠️ Пожалуйста, заполните обязательные поля: Имя и Телефон');
                return;
            }
            
            // Показываем сообщение об успехе
            alert('✅ Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
            
            // Очищаем форму
            this.reset();
            
            console.log('📨 Отправлена заявка от: ' + name + ', тел: ' + phone);
        });
    }
}

// ============================================
// СНЕЖИНКИ (НОВОГОДНЯЯ АНИМАЦИЯ)
// ============================================

/**
 * Создает анимированные снежинки
 */
function createSnowflakes() {
    const snowContainer = document.getElementById('snow-container');
    
    // Если контейнера нет, не создаем снежинки
    if (!snowContainer) {
        console.log('❄️ Контейнер для снежинок не найден');
        return;
    }
    
    // Символы снежинок
    const snowflakeSymbols = ['❄', '❅', '❆', '＊', '·'];
    
    // Количество снежинок (зависит от размера экрана)
    const isMobile = window.innerWidth < 768;
    const snowflakeCount = isMobile ? 30 : 50;
    
    console.log('❄️ Создаем ' + snowflakeCount + ' снежинок...');
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Случайный символ снежинки
        const randomSymbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
        snowflake.textContent = randomSymbol;
        
        // Случайная позиция по горизонтали
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // Случайный размер (от 10px до 30px)
        const size = Math.random() * 20 + 10;
        snowflake.style.fontSize = size + 'px';
        
        // Случайный цвет (от белого до голубоватого)
        const brightness = 70 + Math.random() * 30;
        snowflake.style.color = rgb(${brightness}, ${brightness}, 100);
        
        // Случайная скорость падения (от 5 до 10 секунд)
        const duration = Math.random() * 5 + 5;
        snowflake.style.animation = snowFall ${duration}s linear infinite;
        
        // Случайная задержка начала анимации
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        
        // Случайное мерцание
        if (Math.random() > 0.5) {
            snowflake.style.opacity = '0.7';
        }
        
        // Добавляем снежинку в контейнер
        snowContainer.appendChild(snowflake);
    }
    
    console.

Olga Volkova, [09.01.2026 12:10]
log('❄️ Снежинки созданы успешно!');
}

// ============================================
// ПЛАВНАЯ ПРОКРУТКА К ЯКОРЯМ
// ============================================

/**
 * Настраивает плавную прокрутку для якорных ссылок
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Пропускаем пустые ссылки
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Рассчитываем отступ с учетом фиксированного хедера
                const header = document.querySelector('header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                // Плавная прокрутка
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                console.log('🔗 Прокрутка к элементу: ' + targetId);
            }
        });
    });
}

// ============================================
// ГАЛЕРЕЯ ПОРТФОЛИО
// ============================================

/**
 * Настраивает взаимодействие с галереей работ
 */
function setupPortfolioGallery() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (portfolioItems.length === 0) {
        console.log('🖼️ Элементы портфолио не найдены');
        return;
    }
    
    // Добавляем обработчик клика на каждый элемент
    portfolioItems.forEach((item) => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const title = this.querySelector('h3')?.textContent || 'Работа';
            const description = this.querySelector('p')?.textContent || '';
            
            if (img) {
                // В реальном проекте можно открыть модальное окно
                console.log('🖼️ Открыто фото: ' + title + ' - ' + description);
                
                // Простая анимация при клике
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
}

// ============================================
// КНОПКА "НАВЕРХ"
// ============================================

/**
 * Создает кнопку для прокрутки наверх
 */
function createBackToTopButton() {
    // Проверяем, не создана ли уже кнопка
    if (document.getElementById('back-to-top')) return;
    
    // Создаем кнопку
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = 'Вернуться наверх';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        z-index: 9999;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    `;
    
    // Добавляем кнопку на страницу
    document.body.appendChild(backToTopBtn);
    
    // Показываем/скрываем кнопку при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });
    
    // Обработчик клика по кнопке
    backToTopBtn.

Olga Volkova, [09.01.2026 12:10]
addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================

/**
 * Основная функция инициализации
 */
function init() {
    console.log('🚗 Инициализация сайта Pull the car...');
    
    // 1. Инициализируем калькулятор
    if (carType && filmType && totalPrice) {
        updatePrice();
        carType.addEventListener('change', updatePrice);
        filmType.addEventListener('change', updatePrice);
    } else {
        console.log('⚠️ Элементы калькулятора не найдены');
    }
    
    // 2. Настраиваем форму обратной связи
    setupContactForm();
    
    // 3. Создаем снежинки (только с ноября по январь)
    const currentMonth = new Date().getMonth();
    if (currentMonth >= 10 || currentMonth <= 1) { // Ноябрь-Январь
        createSnowflakes();
    } else {
        console.log('❄️ Снежинки отключены (не зимний месяц)');
    }
    
    // 4. Настраиваем плавную прокрутку
    setupSmoothScrolling();
    
    // 5. Настраиваем галерею портфолио
    setupPortfolioGallery();
    
    // 6. Создаем кнопку "Наверх"
    createBackToTopButton();
    
    console.log('✅ Сайт успешно инициализирован!');
}

// ============================================
// ЗАПУСК ПРИ ПОЛНОЙ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================

// Ждем полной загрузки DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}