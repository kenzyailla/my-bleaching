// الحصول على العناصر
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search");
const formulaCards = document.querySelectorAll(".formula-card");

// دالة البحث
function searchFormulas() {
  let query = searchInput.value.toLowerCase().trim();

  formulaCards.forEach(card => {
    // النصوص داخل البطاقة (العنوان + المحتوى)
    let text = card.innerText.toLowerCase();

    if (text.includes(query) || query === "") {
      card.style.display = "block"; // إظهار البطاقة
    } else {
      card.style.display = "none"; // إخفاء البطاقة
    }
  });
}

// البحث عند الضغط على زر "search"
searchButton.addEventListener("click", searchFormulas);

// البحث مباشرة عند الكتابة
searchInput.addEventListener("keyup", searchFormulas);
