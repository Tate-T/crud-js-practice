const e=()=>fetch("http://localhost:3000/plants").then(e=>e.json()),t=e=>e.map(e=>`<li id="${e.id}" class="plants__item">
        <h2 class="plants__title">${e.title}</h2>
        <img src="${e.image}" alt="${e.title}" class="plants__image" />
        <p class="plants__price">${e.price}</p>
        <label class="plants__label">
          Do you like this plant?
          <input type="checkbox" class="plants__checkbox" />
        </label>
        <button type='button' data-action="delete">Delete</button>
      </li>`).join(""),l=e=>fetch("http://localhost:3000/plants",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()),n=e=>fetch(`http://localhost:3000/plants/${e}`,{method:"DELETE"});e().then(e=>{document.querySelector(".plants__list").innerHTML=t(e)}),document.querySelector(".plants__btn").addEventListener("click",e=>document.querySelector(".backdrop").classList.remove("is-hidden")),document.querySelector(".form__close").addEventListener("click",e=>document.querySelector(".backdrop").classList.add("is-hidden")),document.querySelector("#list").addEventListener("click",l=>{"delete"===l.target.dataset.action&&(n(l.target.closest("li").id),e().then(e=>{document.querySelector(".plants__list").innerHTML=t(e)}))}),document.querySelector("#form").addEventListener("submit",n=>{n.preventDefault();let a=n.currentTarget.querySelector("#name").value,r={title:a,image:n.currentTarget.querySelector("#image").value,price:n.currentTarget.elements.price.value,isFavorite:!1};l(r),e().then(e=>{document.querySelector(".plants__list").innerHTML=t(e)}),console.log(r),n.currentTarget.querySelector("#name").value="",n.currentTarget.querySelector("#image").value="",n.currentTarget.elements.price.value=""});
//# sourceMappingURL=crud-js-practice.d6c7d051.js.map
