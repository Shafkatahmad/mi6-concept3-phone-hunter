const loadAllPhones = async(status, searchText) => {
  console.log(searchText);
  document.getElementById('loading-spinner').classList.add("hidden");

  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText?searchText:"iphone"}`)
  const data = await res.json();
  console.log(data)

  if(status) {
    displayAllPhones(data.data);
  }
  else {
    displayAllPhones(data.data.slice(0, 6));
  }


  console.log(status)
}

const displayAllPhones = (phones) => {
  const phonesContainer = document.getElementById('phones-container');

  phones.forEach(phone => {
    const {brand, phone_name, slug, image} = phone;
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card bg-base-100 w-96 mb-2 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      
      <button onclick="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
    `

    phonesContainer.appendChild(div)
  })
}


const handleSearch = () => {
  document.getElementById('loading-spinner').classList.remove("hidden");

  const searchText = document.getElementById('search-box').value;

  setTimeout(function () {
    loadAllPhones(false, searchText);
  }, 3000)
}

const handleShowAll = () => {
  loadAllPhones(true)
}


const phoneDetails = async(slugs) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`)
  const data = await res.json();
  console.log(data.data)

  const {brand, image, slug} = data.data

  const modalContainer = document.getElementById('modal-container');

  modalContainer.innerHTML = `
  <dialog id="my_modal_1" class="modal">
        <div class="modal-box flex flex-col items-center">
          <h3 class="text-lg font-bold">${brand}</h3>
          <img src='${image}'/>
          <p class="py-4">Press ESC key or click the button below to close</p>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
  `
  my_modal_1.showModal();
}


loadAllPhones(false, "iphone");