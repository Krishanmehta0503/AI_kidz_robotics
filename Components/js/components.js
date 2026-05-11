// function loadNavbar(page) {

//     let showRegister = page !== "product";

//     document.getElementById("headers").innerHTML = `
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//         <div class="container">

//             <a class="navbar-brand fw-bold">Kidz Robotics</a>

//             <ul class="navbar-nav mx-auto">
//                 <li class="nav-item"><a class="nav-link" href="../Home/index.html">Home</a></li>
//                 <li class="nav-item"><a class="nav-link" href="#">About</a></li>
//                 <li class="nav-item"><a class="nav-link" href="../Product/Product.html">Products</a></li>
//                 <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
//             </ul>

//             <div class="d-flex align-items-center gap-3">

//                 <div class="cart-icon" onclick="toggleCart()">
//                     🛒 <span id="cartCount">0</span>
//                 </div>

//                 ${showRegister ? `<button class="btn btn-primary">Register Now</button>` : ""}

//             </div>

//         </div>
//     </nav>
//     `;
// }

// function loadFooter() {
//     document.getElementById("footer").innerHTML = `
// <footer class="footer-section">
//   <div class="container">
//     <div class="row">

//       <!-- BRAND -->
//       <div class="col-lg-4 col-md-6 mb-4">
//         <h2 class="footer-logo">🚀 Kidz Robotics</h2>
//         <p class="footer-text">
//           Inspiring young minds through robotics, coding, and innovation.
//           Building the engineers of tomorrow.
//         </p>

//         <div class="social-icons">
//           <i class="bi bi-facebook"></i>
//           <i class="bi bi-instagram"></i>
//           <i class="bi bi-linkedin"></i>
//           <i class="bi bi-youtube"></i>
//         </div>
//       </div>

//       <!-- LINKS -->
//       <div class="col-lg-2 col-md-6 mb-4">
//         <h5>Quick Links</h5>
//         <ul class="footer-links">
//           <li><a href="index.html">Home</a></li>
//           <li><a href="#">Programs</a></li>
//           <li><a href="#">Courses</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </div>

//       <!-- CONTACT -->
//       <div class="col-lg-3 col-md-6 mb-4">
//         <h5>Contact</h5>
//         <p>📧 info@kidzrobotics.com</p>
//         <p>📞 +91 9876543210</p>
//         <p>📍 India</p>
//       </div>

//       <!-- NEWSLETTER -->
//       <div class="col-lg-3 col-md-6 mb-4">
//         <h5>Stay Updated</h5>
//         <p>Subscribe for latest updates</p>

//         <div class="newsletter">
//           <input type="email" placeholder="Enter email">
//           <button>Send</button>
//         </div>
//       </div>

//     </div>

//     <!-- BOTTOM -->
//     <div class="footer-bottom text-center">
//       <p>© 2026 Kidz Robotics Academy | All Rights Reserved</p>
//     </div>
//   </div>
// </footer>
//     `;
// }
// document.addEventListener("DOMContentLoaded", () => {
//     loadComponent("headers", "../Components/headers.html");
//     loadComponent("footer", "../Components/footer.html");
// });

// Footers

document.addEventListener("DOMContentLoaded", function () {

    // Load Header
    fetch("../Components/headers.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });

    // Load Footer
    fetch("../Components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});