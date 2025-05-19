const menu = [
  // Nasi
  { kategori: "Nasi", nama: "Nasi Ayam Bakar", harga: 12000, gambar: "images/ayam_bakar.jpg" },
  { kategori: "Nasi", nama: "Nasi Ayam Goreng", harga: 12000, gambar: "images/ayam_goreng.jpg" },
  { kategori: "Nasi", nama: "Nasi Ayam Gulai", harga: 12000, gambar: "images/ayam_gulai.jpg" },
  { kategori: "Nasi", nama: "Nasi Ayam Kecap", harga: 12000, gambar: "images/ayam_kecap.jpg" },
  { kategori: "Nasi", nama: "Nasi Ayam Saus", harga: 12000, gambar: "images/ayam_saus.jpg" },
  { kategori: "Nasi", nama: "Nasi Ayam Cabe Hijau", harga: 12000, gambar: "images/ayam_cabe.jpg" },
  { kategori: "Nasi", nama: "Nasi Telor Dadar", harga: 10000, gambar: "images/telor_dadar.jpg" },
  { kategori: "Nasi", nama: "Nasi Telor Bulat", harga: 10000, gambar: "images/telor_bulat.jpg" },
  { kategori: "Nasi", nama: "Nasi Hati Ayam", harga: 10000, gambar: "images/hati_ayam.jpg" },
  { kategori: "Nasi", nama: "Nasi Ikan Bakar", harga: 12000, gambar: "images/ikan_bakar.jpg" },
  { kategori: "Nasi", nama: "Nasi Ikan Gulai", harga: 12000, gambar: "images/ikan_gulai.jpg" },
  { kategori: "Nasi", nama: "Nasi Ikan Goreng", harga: 12000, gambar: "images/ikan_goreng.jpg" },
  { kategori: "Nasi", nama: "Nasi Ikan Sambal", harga: 12000, gambar: "images/ikan_sambal.jpg" },
  { kategori: "Nasi", nama: "Nasi Rendang", harga: 12000, gambar: "images/rendang.jpg" },
  { kategori: "Nasi", nama: "Nasi Dendeng", harga: 12000, gambar: "images/dendeng.jpg" },
  { kategori: "Nasi", nama: "Nasi Putih", harga: 2000, gambar: "images/tok.jpg" },

  // Sambal
  { kategori: "Sambal", nama: "Ayam Goreng", harga: 8000, gambar: "images/ayam_goreng.jpg" },
  { kategori: "Sambal", nama: "Ayam Bakar", harga: 8000, gambar: "images/ayam_bakar.jpg" },
  { kategori: "Sambal", nama: "Ayam Gulai", harga: 8000, gambar: "images/ayam_gulai.jpg" },
  { kategori: "Sambal", nama: "Ayam Kecap", harga: 8000, gambar: "images/ayam_kecap.jpg" },
  { kategori: "Sambal", nama: "Ayam Saus", harga: 8000, gambar: "images/ayam_saus.jpg" },
  { kategori: "Sambal", nama: "Ayam Cabe", harga: 8000, gambar: "images/ayam_cabe.jpg" },
  { kategori: "Sambal", nama: "Hati Ayam / Rampelo", harga: 5000, gambar: "images/hati_ayam.jpg" },
  { kategori: "Sambal", nama: "Telor", harga: 5000, gambar: "images/telor.jpg" },
  { kategori: "Sambal", nama: "Ikan Goreng", harga: 8000, gambar: "images/ikan_goreng.jpg" },
  { kategori: "Sambal", nama: "Ikan Bakar", harga: 8000, gambar: "images/ikan_bakar.jpg" },
  { kategori: "Sambal", nama: "Ikan Gulai", harga: 8000, gambar: "images/ikan_gulai.jpg" },
  { kategori: "Sambal", nama: "Kepala Ikan", harga: 8000, gambar: "images/kepala_ikan.jpg" },
  { kategori: "Sambal", nama: "Rendang", harga: 8000, gambar: "images/rendang.jpg" },
  { kategori: "Sambal", nama: "Dendeng", harga: 8000, gambar: "images/dendeng.jpg" },

  // Minuman
  { kategori: "Minuman", nama: "Teh Es", harga: 5000, gambar: "images/teh_es.jpg" },
  { kategori: "Minuman", nama: "Kopi", harga: 5000, gambar: "images/kopi.jpg" },
  { kategori: "Minuman", nama: "Es Kosong", harga: 5000, gambar: "images/es_kosong.jpg" },

  // Lainnya
  { kategori: "Lainnya", nama: "Jengkol", harga: 1000, gambar: "images/jengkol.jpg" },
  { kategori: "Lainnya", nama: "Pergedel", harga: 2000, gambar: "images/pergedel.jpg" },
  { kategori: "Lainnya", nama: "Gorengan", harga: 1000, gambar: "images/gorengan.jpg" },
  { kategori: "Lainnya", nama: "Kuah", harga: 5000, gambar: "images/kuah.jpg" },
  { kategori: "Lainnya", nama: "Sayur", harga: 5000, gambar: "images/sayur.jpg" },
  { kategori: "Lainnya", nama: "Cabe", harga: 5000, gambar: "images/cabe.jpg" },
];

let pesananId = 0;

const kategoriContainer = document.getElementById("kategori-kiri");
const menuContainer = document.getElementById("menu");
const pesananContainer = document.getElementById("pesanan");
const totalEl = document.getElementById("total-harga");
const formPesanan = document.getElementById("form-pesanan");
const tambahBarangBtn = document.getElementById("tambah-barang");

function isiKategoriSebagaiTombol() {
  const kategoriUnik = [...new Set(menu.map(item => item.kategori))];
  kategoriContainer.innerHTML = kategoriUnik.map(k =>
    `<button class="btn-kategori" onclick="tampilkanMenuByKategori('${k}', this)">${k}</button>`
  ).join('');
}
isiKategoriSebagaiTombol();

function tampilkanMenuByKategori(kategori, el) {
  document.querySelectorAll('.btn-kategori').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');

  menuContainer.innerHTML = "";
  const filteredMenu = menu.filter(item => item.kategori === kategori);
  filteredMenu.forEach(item => {
    const div = document.createElement("div");
    div.className = "menu-item";
    div.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}" />
      <h4>${item.nama}</h4>
      <p>Rp ${item.harga.toLocaleString()}</p>
    `;
    div.addEventListener("click", () => {
      tambahPesanan(item);
    });
    menuContainer.appendChild(div);
  });
}

function tambahPesanan(item = { nama: "", harga: 0 }) {
  pesananId++;
  const div = document.createElement("div");
  div.className = "pesanan-barang";
  div.dataset.id = pesananId;

  div.innerHTML = `
    <input type="text" class="deskripsi" value="${item.nama}" placeholder="Nama barang" />
    <input type="number" class="harga" value="${item.harga}" min="0" oninput="updateTotal()" />
    
    <select class="jumlah" onchange="cekJumlahLain(this, ${pesananId}); updateTotal();">
      ${Array.from({length:10}, (_, i) => `<option value="${i+1}">x${i+1}</option>`).join('')}
      <option value="other">Other</option>
    </select>
    <input type="number" id="other-jumlah-${pesananId}" class="jumlah-other" placeholder="Jumlah Lainnya" style="display:none;" min="1" oninput="updateTotal()" />
    
    <select class="termos" onchange="cekTermosLain(this, ${pesananId})">
      ${Array.from({length:10}, (_, i) => `<option value="Termos ${i+1}">Termos ${i+1}</option>`).join('')}
      <option value="other">Other</option>
    </select>
    <input type="text" id="other-termos-${pesananId}" class="termos-other" placeholder="Termos Lainnya" style="display:none;" />

    <button type="button" onclick="hapusPesanan(${pesananId})">Hapus</button>
  `;

  pesananContainer.appendChild(div);
  updateTotal();
}

function cekJumlahLain(select, id) {
  const input = document.getElementById(`other-jumlah-${id}`);
  input.style.display = select.value === "other" ? "inline-block" : "none";
  if (select.value !== "other") input.value = "";
}

function cekTermosLain(select, id) {
  const input = document.getElementById(`other-termos-${id}`);
  input.style.display = select.value === "other" ? "inline-block" : "none";
  if (select.value !== "other") input.value = "";
}

function hapusPesanan(id) {
  const el = document.querySelector(`.pesanan-barang[data-id="${id}"]`);
  if (el) {
    el.remove();
    updateTotal();
  }
}

function updateTotal() {
  let total = 0;
  const pesananEls = document.querySelectorAll(".pesanan-barang");
  pesananEls.forEach(el => {
    const harga = parseInt(el.querySelector(".harga").value) || 0;
    const jumlahSelect = el.querySelector(".jumlah");
    const jumlahOther = el.querySelector(".jumlah-other");
    const jumlah = jumlahSelect.value === "other"
      ? (parseInt(jumlahOther.value) || 0)
      : parseInt(jumlahSelect.value);
    total += harga * jumlah;
  });
  totalEl.textContent = `Rp ${total.toLocaleString()}`;
}

formPesanan.addEventListener("submit", (e) => {
  e.preventDefault();
  const transaksiLama = JSON.parse(localStorage.getItem("transaksi")) || [];
  const pesananEls = document.querySelectorAll(".pesanan-barang");

  pesananEls.forEach(el => {
    const deskripsi = el.querySelector(".deskripsi").value;
    const harga = parseInt(el.querySelector(".harga").value) || 0;
    const jumlahSelect = el.querySelector(".jumlah");
    const jumlahOther = el.querySelector(".jumlah-other");
    const jumlah = jumlahSelect.value === "other"
      ? (parseInt(jumlahOther.value) || 0)
      : parseInt(jumlahSelect.value);
    const termosSelect = el.querySelector(".termos");
    const termosOther = el.querySelector(".termos-other");
    const termos = termosSelect.value === "other"
      ? termosOther.value
      : termosSelect.value;

    if (deskripsi && harga && jumlah > 0) {
      transaksiLama.push({
        deskripsi,
        harga,
        jumlah,
        total: harga * jumlah,
        termos,
        waktu: new Date().toLocaleString("id-ID")
      });
    }
  });

  localStorage.setItem("transaksi", JSON.stringify(transaksiLama));
  alert("Transaksi berhasil disimpan!");
  location.reload();
});

tambahBarangBtn.addEventListener("click", () => tambahPesanan());

document.addEventListener("DOMContentLoaded", () => {
  isiKategoriSebagaiTombol();
  const pertama = kategoriContainer.querySelector("button");
  if (pertama) {
    pertama.classList.add("active");
    tampilkanMenuByKategori(pertama.textContent, pertama);
  }
});

function goToLoginDashboard() {
  window.location.href = 'dashboard/login.html';
}

// Ekspor fungsi ke global (agar inline handler tetap bekerja)
window.cekJumlahLain = cekJumlahLain;
window.cekTermosLain = cekTermosLain;
window.hapusPesanan = hapusPesanan;
window.updateTotal = updateTotal;
window.tampilkanMenuByKategori = tampilkanMenuByKategori;