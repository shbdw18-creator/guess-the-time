// تعريف العناصر والتحقق من عملها
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const closeSettings = document.getElementById('close-settings');

const leaderboardBtn = document.getElementById('leaderboard-btn');
const leaderboardModal = document.getElementById('leaderboard-modal');
const closeLeaderboard = document.getElementById('close-leaderboard');

const endRoundSim = document.getElementById('end-round-sim');
const resultsModal = document.getElementById('results-modal');
const nextRoundBtn = document.getElementById('next-round-btn');

const logoutBtn = document.getElementById('logout-btn');

// فتح وإغلاق الإعدادات (ترس)
settingsBtn.addEventListener('click', () => {
    settingsModal.classList.add('active');
});

closeSettings.addEventListener('click', () => {
    settingsModal.classList.remove('active');
});

// فتح وإغلاق لوحة التصنيف
leaderboardBtn.addEventListener('click', () => {
    leaderboardModal.classList.add('active');
});

closeLeaderboard.addEventListener('click', () => {
    leaderboardModal.classList.remove('active');
});

// محاكاة نهاية الجولة (إظهار النتيجة والرتبة الحالية والقادمة)
endRoundSim.addEventListener('click', () => {
    resultsModal.classList.add('active');
});

nextRoundBtn.addEventListener('click', () => {
    resultsModal.classList.remove('active');
});

// زر تسجيل الخروج داخل الإعدادات
logoutBtn.addEventListener('click', () => {
    alert('تم تسجيل الخروج بنجاح!');
    settingsModal.classList.remove('active');
    // يمكنك إضافة كود توجيه صفحة تسجيل الدخول هنا
});

// إغلاق أي نافذة عند الضغط خارج محتواها
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
    }
});
