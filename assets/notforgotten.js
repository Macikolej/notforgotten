function showPassword(status) {
  if (status.checked) {
    document.getElementById('hasło').type = "text"
  }
  else {
    document.getElementById('hasło').type = "password"
  }
}
