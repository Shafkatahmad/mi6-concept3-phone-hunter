const loadAllPhones = () => {
  console.log("3 seconds gone");
  document.getElementById('loading-spinner').classList.add("hidden");
}

const handleSearch = () => {
  document.getElementById('loading-spinner').classList.remove("hidden");

  setTimeout(function () {
    loadAllPhones();
  }, 3000)
}