// إنشاء حساب ضيف في حال لم يسجل الدخول
let player = JSON.parse(localStorage.getItem('player_data')) || {
  isGuest: true,
  name: "Guest_" + Math.floor(Math.random() * 1000),
  score: 0
};

function saveLocalProgress(newScore) {
  player.score = newScore;
  localStorage.setItem('player_data', JSON.stringify(player));
}

// دالة تُستدعى عندما يقرر اللاعب تسجيل الدخول من الإعدادات
function promoteGuestToAccount(userData) {
  player.isGuest = false;
  player.name = userData.name;
  player.id = userData.id;
  
  // حفظ البيانات الجديدة محلياً ومزامنتها مع الخادم
  localStorage.setItem('player_data', JSON.stringify(player));
  syncWithServer(player);
}
