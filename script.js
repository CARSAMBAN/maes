
fetch("fiyat.json")
  .then(response => response.json())
  .then(data => {
    let fiyatStr = data[0]; // Örn: "₺14.999 x3 ay"

    // ₺ işaretinden sonraki sayıyı bul
    let match = fiyatStr.match(/₺\s*([\d\.]+)/);
    if (match) {
      // 14.999 → 14999
      let fiyat = parseFloat(match[1].replace(".", ""));
      let iphone13taksit = fiyat * 3;

      // Her iki hücreye de doğru değerleri yaz
      document.getElementById("iphone13taksit").textContent = fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("iphone13puan").textContent = iphone13taksit.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺  ";
    }
  })
  .catch(error => console.error("Hata:", error));

// samsunga56...
fetch("samsunga56.json")
  .then(response => response.json())
  .then(data => {
    let fiyatStr = data[0]; // Örn: "₺14.999 x3 ay"

    // ₺ işaretinden sonraki sayıyı bul
    let match = fiyatStr.match(/₺\s*([\d\.]+)/);
    if (match) {
      // 14.999 → 14999
      let fiyat = parseFloat(match[1].replace(".", ""));
      let iphone13taksit = fiyat * 3;

      // Her iki hücreye de doğru değerleri yaz
      document.getElementById("iphone13taksit").textContent = fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("iphone13puan").textContent = iphone13taksit.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺  ";
    }
  })
  .catch(error => console.error("Hata:", error));

// 📱 Samsung A16 5G ----------------------------------------------------------------------------------------------------------

fetch("samsunga165g.json")
  .then(response => response.json())
  .then(data => {
    // sadece "x12 ay" içeren satırı bul
    let fiyatStr = data.find(item => item.includes("x12 ay"));
    if (!fiyatStr) return;

    // ₺ işaretinden sonraki sayıyı yakala
    let match = fiyatStr.match(/₺\s*([\d\.]+)/);
    if (match) {
      // "₺1.869" → 1869
      let fiyat = parseFloat(match[1].replace(".", ""));
      let toplam = fiyat * 12;

      // HTML'deki hücrelere yaz
      document.getElementById("samsunga165gtaksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga165gpuan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));
