//Declear Variable
let input = document.querySelector(".search_input");
let button = document.querySelector(".serach_btn");
//Get the serach value
button.addEventListener("click", () => {
  getSearchValue();
});
// Import API
function getSearchValue() {
  let inputValue = input.value;

  if (input.value == "") {
    alert("please wirte book name");
  }
  input.value = "";
  const url = `https://openlibrary.org/search.json?q=${inputValue}`;

  fetch(url)
    .then((res) => res.json())

    .then((data) => dsiplayBook(data));
}
//Display Items Books
const dsiplayBook = (books) => {
  let totalResult = document.querySelector(".total_result");
  totalResult.textContent = " ";
  let h2 = document.createElement("h2");
  h2.innerHTML = `Total Result: ${books.numFound}`;
  totalResult.appendChild(h2);

  let bookDiv = document.querySelector(".book_items_area");
  bookDiv.textContent = " ";
  books.docs.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("col-md-4");

    div.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="img not found">
  <div class="card-body">
    <h5 class="card-title">${book.title}</h5>
    <p>Publish Date: ${book.publish_date} </p>

    <p>Frist Publish Year: ${book.first_publish_year} </p>
    <p>Author Name: ${book.author_name} </p>

  </div>
</div>
        `;
    bookDiv.appendChild(div);
  });
};
