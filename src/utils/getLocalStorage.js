export default function getLocalstorage() {
  let user = localStorage.getItem("user");

  if (user) {
    return JSON.parse(localStorage.getItem("user"));
  }
  return false;
}
