import 'nicepage.css';
import 'Report-Issues.css'
import { useState, useEffect } from "react";

var SERVER_URL = "http://127.0.0.1:5000"

function issues() {
  var name = document.getElementById("name-3b9a")
  var email = document.getElementById("email-3b9a")
  var message = document.getElementById("message-3b9a")
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setIssue] = useState("");

  function submit() {
    fetch(`${SERVER_URL}/submit`)
    .then(response => response.json())
    .then(data => {
      console.log('Issue submitted:', data);
    });
      setName("");
      setEmail("");
      setIssue("");
  }

  return (
    <div className="Report-Issues">
        <html style="font-size: 16px;">
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta charset="utf-8"/>
              <meta name="keywords" content="Report an Issue"/>
              <meta name="description" content=""/>
              <meta name="page_type" content="np-template-header-footer-from-plugin"/>
              <title>Report Issues</title>
              <link rel="stylesheet" href="../nicepage.css" media="screen"/>
          <link rel="stylesheet" href="Report-Issues.css" media="screen"/>
              <script class="u-script" type="text/javascript" src="../jquery.js" defer=""></script>
              <script class="u-script" type="text/javascript" src="../nicepage.js" defer=""></script>
              <meta name="generator" content="Nicepage 4.7.1, nicepage.com"/>
              <link id="u-theme-google-font" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"/>
              
              <meta name="theme-color" content="#478ac9"/>
              <meta property="og:title" content="Report Issues"/>
              <meta property="og:type" content="website"/>
            </head>
            <body class="u-body u-xl-mode"><header class="u-clearfix u-header u-header" id="sec-ef30"><nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                  <div class="menu-collapse" style="font-size: 1.5rem; letter-spacing: 0px; font-weight: 700;">
                    <a class="u-button-style u-custom-border-radius u-custom-color u-custom-hover-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-active-color u-custom-text-decoration u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base" href="#">
                      <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#menu-hamburger"></use></svg>
                      <svg class="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
          </g></svg>
                    </a>
                  </div>
                  <div class="u-custom-menu u-nav-container">
                    <ul class="u-nav u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-button-style u-hover-palette-5-dark-1 u-nav-link u-palette-5-light-1 u-text-active-palette-2-base" style="padding: 58px 36px; text-decoration: underline !important;">Store</a>
          </li><li class="u-nav-item"><a class="u-button-style u-hover-palette-5-dark-1 u-nav-link u-palette-5-light-1 u-text-active-palette-2-base" style="padding: 58px 36px; text-decoration: underline !important;">Teams</a>
          </li><li class="u-nav-item"><a class="u-button-style u-hover-palette-5-dark-1 u-nav-link u-palette-5-light-1 u-text-active-palette-2-base" style="padding: 58px 36px; text-decoration: underline !important;">Tickets</a>
          </li><li class="u-nav-item"><a class="u-button-style u-hover-palette-5-dark-1 u-nav-link u-palette-5-light-1 u-text-active-palette-2-base" style="padding: 58px 36px; text-decoration: underline !important;">Services</a>
          </li><li class="u-nav-item"><a class="u-button-style u-hover-palette-5-dark-1 u-nav-link u-palette-5-light-1 u-text-active-palette-2-base" style="padding: 58px 36px; text-decoration: underline !important;">Fans</a>
          </li><li class="u-nav-item"><a class="u-button-style u-hover-palette-5-dark-1 u-nav-link u-palette-5-light-1 u-text-active-palette-2-base" style="padding: 58px 36px; text-decoration: underline !important;">Account</a>
          </li></ul>
                  </div>
                  <div class="u-custom-menu u-nav-container-collapse">
                    <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                      <div class="u-inner-container-layout u-sidenav-overflow">
                        <div class="u-menu-close"></div>
                        <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link">Store</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Teams</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Tickets</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Services</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Fans</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Account</a>
          </li></ul>
                      </div>
                    </div>
                    <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                  </div>
                </nav><a href="https://nicepage.com" class="u-image u-logo u-image-1" data-image-width="677" data-image-height="623">
                  <img src="../images/logo.jpeg" class="u-logo-image u-logo-image-1"/>
                </a><div class="u-image u-image-circle u-preserve-proportions u-image-2" alt="" data-image-width="225" data-image-height="225"></div><a href="https://nicepage.com/c/counter-html-templates" class="u-border-2 u-border-black u-btn u-button-style u-hover-black u-none u-text-hover-white u-btn-1">Dark Mode</a></header>
              <section class="u-align-center u-clearfix u-grey-5 u-section-1" id="sec-38c7">
                <div class="u-clearfix u-sheet u-valign-middle u-sheet-1">
                  <h1 class="u-text u-text-default u-text-1">Report an Issue</h1>
                  <div class="u-form u-form-1">
                    <form action="#" method="POST" class="u-clearfix u-form-spacing-20 u-form-vertical u-inner-form" style="padding: 10px" source="email" name="form">
                      <div class="u-form-group u-form-name u-label-none">
                        <label for="name-3b9a" class="u-label">Name</label>
                        <input type="text" placeholder="Enter your Name" id="name-3b9a" name="name" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-1" required=""/>
                      </div>
                      <div class="u-form-email u-form-group u-label-none">
                        <label for="email-3b9a" class="u-label">Email</label>
                        <input type="email" placeholder="Enter a valid email address" id="email-3b9a" name="email" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-2" required=""/>
                      </div>
                      <div class="u-form-group u-form-message u-label-none">
                        <label for="message-3b9a" class="u-label">Message</label>
                        <textarea placeholder="Enter your message" rows="4" cols="50" id="message-3b9a" name="message" class="u-border-2 u-border-black u-border-no-left u-border-no-right u-border-no-top u-input u-input-rectangle u-input-3" required=""></textarea>
                      </div>
                      <div class="u-align-center u-form-group u-form-submit">
                        <a href="#" class="u-border-2 u-border-custom-color-1 u-border-hover-custom-color-2 u-btn u-btn-rectangle u-btn-submit u-button-style u-custom-color-1 u-hover-custom-color-2 u-btn-1">Submit</a>
                        <input type="submit" value="submit" class="u-form-control-hidden"/>
                      </div>
                      <div class="u-form-send-message u-form-send-success"> Thank you! Your message has been sent. </div>
                      <div class="u-form-send-error u-form-send-message"> Unable to send your message. Please fix errors then try again. </div>
                      <input type="hidden" value="" name="recaptchaResponse"/>
                    </form>
                  </div>
                </div>
              </section>
              
              
              <footer class="u-align-center u-clearfix u-footer u-grey-80 u-footer" id="sec-b518"><nav class="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                  <div class="menu-collapse" style="font-weight: 700; font-size: 1.25rem;">
                    <a class="u-button-style u-custom-color u-custom-hover-color u-custom-text-active-color u-custom-text-color u-nav-link" href="#">
                      <svg class="u-svg-link" viewBox="0 0 24 24"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#svg-f1ed"></use></svg>
                      <svg class="u-svg-content" version="1.1" id="svg-f1ed" viewBox="0 0 16 16" x="0px" y="0px" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><rect y="1" width="16" height="2"></rect><rect y="7" width="16" height="2"></rect><rect y="13" width="16" height="2"></rect>
          </g></svg>
                    </a>
                  </div>
                  <div class="u-custom-menu u-nav-container">
                    <ul class="u-nav u-unstyled u-nav-1"><li class="u-nav-item"><a class="u-button-style u-custom-color-1 u-hover-custom-color-2 u-nav-link u-text-white" style="padding: 52px 72px;">Terms and Conditions</a>
          </li><li class="u-nav-item"><a class="u-button-style u-custom-color-1 u-hover-custom-color-2 u-nav-link u-text-white" href="mailto:help@panthers.com" target="_blank" style="padding: 52px 72px;">Contact Us</a>
          </li><li class="u-nav-item"><a class="u-button-style u-custom-color-1 u-hover-custom-color-2 u-nav-link u-text-white" style="padding: 52px 72px;">Report Issues</a>
          </li><li class="u-nav-item"><a class="u-button-style u-custom-color-1 u-hover-custom-color-2 u-nav-link u-text-white" style="padding: 52px 72px;">Vision</a>
          </li><li class="u-nav-item"><a class="u-button-style u-custom-color-1 u-hover-custom-color-2 u-nav-link u-text-white" style="padding: 52px 72px;">About</a>
          </li></ul>
                  </div>
                  <div class="u-custom-menu u-nav-container-collapse">
                    <div class="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                      <div class="u-inner-container-layout u-sidenav-overflow">
                        <div class="u-menu-close"></div>
                        <ul class="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2"><li class="u-nav-item"><a class="u-button-style u-nav-link">Terms and Conditions</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link" href="mailto:help@panthers.com" target="_blank">Contact Us</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Report Issues</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">Vision</a>
          </li><li class="u-nav-item"><a class="u-button-style u-nav-link">About</a>
          </li></ul>
                      </div>
                    </div>
                    <div class="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                  </div>
                </nav></footer>
            </body>
          </html>
    </div>
  );
}

export default issues;