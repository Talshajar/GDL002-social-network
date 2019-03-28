let homePage = 
` <section class="sectionLogIn"> 
<div name="logIn" id="logIn" class="LogIn">
<img src="Imges\Logo.png"><br>
<input id="e-mailLogIn" type="email" autofocus placeholder="E-mail"><br>
<a id="messageEmail" class="message"></a>
<input id="passwordLogIn" type="password" autofocus placeholder="Password"><br>
<button class="buttonRegister" id="buttonLogin">Ingresar</button>
<button id="loginGoogle">Inicia con Google</button><br>
<a href="#signUp" id="linkSignUp" class="links">No tienes una cuenta? <br> Registrate¡</a>
<!-- <div id="heart" class="heart"></div>
<div id="hearti"></div> -->
</div>
</section>`;


` <section name="signUp" id="signUp" >
<input id="nameSignUp" type="text" autofocus placeholder="First name"><br>
<input id="lastNameSignUp" type="text" autofocus placeholder="Last name"><br>
<input id="e-mailSignUp" type="email" autofocus placeholder="E-mail"><br>
<a id="messageEmailSU" class="message"></a>
<input id="passwortSignUp" type="password" autofocus placeholder="Passwrod"><br>
<button class="buttonRegister" id="buttonSignUp">Registrarme</button>
<div id="root"></div>
<a href="#logIn" id="linkLogIn" class="links">Ya tienes una cuenta?</a>
</section>`;


`  <section id="LogOut">
<!-- <button id="btnProfile">Perfil</button> -->
<div id="profile"></div>
<button id="buttonLogOut" class="hide">Cerrar sesión</button>
</section>`;


``;
``;
``;

const routes = {
    "": sectionLogIn,
    "#home": sectionLogIn,
    "#portafolio": portfolioPage,
    "#resume": resumePage,
    "#contact": contactPage,
};

let contentDiv = document.getElementById("content");

window.addEventListener("hashchange", () => {
    contentDiv.innerHTML = routes[window.location.hash];
});

contentDiv.innerHTML = routes[window.location.hash];