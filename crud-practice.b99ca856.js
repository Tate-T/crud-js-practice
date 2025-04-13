const e=e=>e.map(e=>`<li class="plants__item">
        <h2 class="plants__title">${e.title}</h2>
        <img src="${e.image}" alt="${e.title}" class="plants__image" />
        <p class="plants__price">${e.price}</p>
        <label class="plants__label">
          Do you like this plant?
          <input type="checkbox" class="plants__checkbox" />
        </label>
      </li>`).join("");fetch("http://localhost:3000/plants").then(e=>e.json()).then(t=>{document.querySelector(".plants__list").innerHTML=e(t)}),document.querySelector(".plants__btn").addEventListener("click",document.querySelector(".backdrop").classList.remove("is-hidden")),document.querySelector(".form__close").addEventListener("click",document.querySelector(".backdrop").classList.add("is-hidden"));
//# sourceMappingURL=crud-practice.b99ca856.js.map
