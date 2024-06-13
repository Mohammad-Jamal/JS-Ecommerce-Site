const footerHTML = `      <div class="footer-container container">
        <div class="content_1">
          <img src="./public/images/Logo.svg" alt="logo" />
          <p>
            Welcome to ShopKaro EcomStore, your ultimate destination for
            cutting-edge gadgets!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>SHOPPING</h4>
          <a href="#">Computer Store</a>
          <a href="#">Laptop Store</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discount</a>
        </div>
        <div class="content_3">
          <h4>Experience</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Payment Method</a>
          <a href="" target="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>NEWSLETTER</h4>
          <p>Be the first to know about new<br />arrivals, sales & promos!</p>
          <div class="f-mail">
            <input type="email" placeholder="Your Email" />
            <i class="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
      <div class="f-design">
        <div class="f-design-txt">
          <p>Design and Code by Mohammad Jamal</p>
        </div>
      </div>`;

const footerEle = document.querySelector(".section-footer");
footerEle.insertAdjacentHTML("afterbegin", footerHTML);

