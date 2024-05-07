import "./navbar.css";


 function Navbar (){
    return(
    <div>
        <nav>
      <div class="nav-center">
     
        <div class="nav-header">
          Ercan CAN
        </div>
       
        <ul class="links">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
     
        <ul class="social-icons">
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fab fa-sketch"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
)}

export default Navbar;