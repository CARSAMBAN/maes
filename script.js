// 📱✅ Samsung A07 ----------------------------------------------------------------------------------------------------------

fetch("samsunga07.json")
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
      document.getElementById("samsunga07taksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga07puan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));

  // 📱 Samsung A15 ----------------------------------------------------------------------------------------------------------

fetch("samsunga15.json")
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
      document.getElementById("samsunga15taksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga15puan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));

  // 📱 Samsung A16 ----------------------------------------------------------------------------------------------------------

fetch("samsunga16.json")
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
      document.getElementById("samsunga16taksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga16puan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));

// 📱✅ Samsung A16 5G ----------------------------------------------------------------------------------------------------------

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

  // 📱 Samsung A17 ----------------------------------------------------------------------------------------------------------

fetch("samsunga36.json")
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
      document.getElementById("samsunga07taksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga07puan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));

  // 📱 Samsung A175G ----------------------------------------------------------------------------------------------------------

fetch("samsunga07.json")
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
      document.getElementById("samsunga07taksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga07puan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));

  // 📱 Samsung A365g ----------------------------------------------------------------------------------------------------------

fetch("samsunga365g.json")
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
      document.getElementById("samsunga365gtaksit").textContent =
        fiyat.toLocaleString("tr-TR") + " ₺";
      document.getElementById("samsunga365gpuan").textContent =
        toplam.toLocaleString("tr-TR", { minimumFractionDigits: 2 }) + " ₺";
    }
  })
  .catch(error => console.error("A16 5G Hatası:", error));
