// // script.js

// // Handle registration
// document.getElementById("registerForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const username = document.getElementById("regUsername").value;
//     const password = document.getElementById("regPassword").value;

//     // Save to localStorage
//     if (localStorage.getItem(username)) {
//         alert("Username already exists!");
//     } else {
//         localStorage.setItem(username, password);
//         alert("Registration successful!");
//         // Redirect to login page
//         window.location.href = "login.html";
//     }
// });

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     fetch('/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//     })
//     .then(response => {
//         if (response.ok) {
//             // Jika login berhasil, redirect ke index.html
//             window.location.href = 'index.html';
//         } else {
//             // Jika login gagal, tampilkan pesan kesalahan
//             alert('Login gagal. Silakan coba lagi.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });



$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });