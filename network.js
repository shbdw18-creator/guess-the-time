let isOnline = navigator.onLine;

function updateOnlineStatus() {
  isOnline = navigator.onLine;
  
  if (isOnline) {
    console.log("الاتصال متوفر: جاري رفع البيانات...");
    syncOfflineData();
  } else {
    console.log("لا يوجد اتصال: الاعتماد على الحفظ المحلي فقط.");
  }
}

// الاستماع لتغير حالة الشبكة تلقائياً
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// مزامنة البيانات عند العودة للأونلاين
function syncOfflineData() {
  if (!player.isGuest) {
    // كود إرسال البيانات المخزنة محلياً إلى السيرفر (API Fetch)
    /*
    fetch('https://your-api.com/sync', {
      method: 'POST',
      body: JSON.stringify(player)
    });
    */
  }
}
