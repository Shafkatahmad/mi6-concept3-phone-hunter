const loadAllPhones = async() => {
  console.log("3 seconds gone");
  document.getElementById('loading-spinner').classList.add("hidden");

  const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  const data = await res.json();
  displayAllPhones(data.data);
}

const displayAllPhones = (phones) => {
  console.log(phones);
}


const handleSearch = () => {
  document.getElementById('loading-spinner').classList.remove("hidden");

  setTimeout(function () {
    loadAllPhones();
  }, 3000)
}


loadAllPhones();