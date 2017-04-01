


var rejestracja = function() {
  $('.start-formularz').html('<div class="pojemnik-na-formularz-rejestracyjny"> <form>  <div class="form-group"> <div class="pojemnik-na-label"><label for="example-text-input">Username</label> </div> <input type="text" class="form-control" id="example-text-input" aria-describedby="textHelp" placeholder="Enter your username"> </div> <div class="form-group"> <div class="pojemnik-na-label"><label for="example-password-input">Password</label> </div> <input type="password" id="hasło" class="form-control" id="example-password-input" aria-describedby="passwordHelp" placeholder="Enter your password"> </div> <div class="form-check"><label class="form-check-label"><input onchange="showPassword(this)" type="checkbox" class="form-check-input">Pokaż hasło</label> </div></form> </div>  <div class=pojemnik-na-przycisk3> <button  type="button" class="btn btn-danger btn-lg button-register">Stwórz konto!</button> </div>')
  $('.start-formularz').css({"background-image":"url(http://ri.pinger.pl/pgr318/7f5864b90022d1ad531cda3f/7HVLC.jpg)"})
}

var logowanie = function() {
  $('.start-formularz').html('<div class="pojemnik-na-formularz-rejestracyjny"> <form>  <div class="form-group"> <div class="pojemnik-na-label"><label for="example-text-input">Username</label> </div> <input type="text" class="form-control" id="example-text-input" aria-describedby="textHelp" placeholder="Enter your username"> </div> <div class="form-group"> <div class="pojemnik-na-label"><label for="example-password-input">Password</label> </div> <input type="password" id="hasło" class="form-control" id="example-password-input" aria-describedby="passwordHelp" placeholder="Enter your password"> </div> <div class="form-check"><label class="form-check-label"><input onchange="showPassword(this)" type="checkbox" class="form-check-input">Pokaż hasło</label> </div></form> </div>  <div class=pojemnik-na-przycisk3> <button  type="button" class="btn btn-danger btn-lg button-register">Zaloguj się!</button> </div>')
  $('.start-formularz').css({"background-image":"url(http://www.la-estel.nl/style/bg.jpg)"})

}

function showPassword(status) {
  if (status.checked) {
    document.getElementById('hasło').type = "text"
  }
  else {
    document.getElementById('hasło').type = "password"
  }
}