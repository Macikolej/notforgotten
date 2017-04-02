function showPassword(status) {
  if (status.checked) {
    document.getElementById('password').type = "text"
  }
  else {
    document.getElementById('password').type = "password"
  }
}
