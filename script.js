function showSection(id) {
  // Sembunyikan semua section
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));

  // Tampilkan section sesuai ID
  const selected = document.getElementById(id);
  selected.classList.add("active");

  // Scroll ke atas
  window.scrollTo({ top: 0, behavior: "smooth" });
}
