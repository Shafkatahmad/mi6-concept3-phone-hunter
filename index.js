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
  console.log(phones);
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

loadAllPhones(false, "iphone");