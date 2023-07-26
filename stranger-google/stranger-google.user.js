// ==UserScript==
// @name        Stranger Google
// @version     0.1
// @namespace   http://krayon.me/
// @description Google now always starts with Stranger Things
// @license     MIT
// @author      Krayon
// @match       *://google.com.au/*
// @match       *://www.google.com.au/*
// @match       *://google.com/*
// @match       *://www.google.com/*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_log
// @updateURL   https://raw.githubusercontent.com/krayon/userscripts/stranger-google/stranger-google.user.js
// @downloadURL https://raw.githubusercontent.com/krayon/userscripts/stranger-google/stranger-google.user.js
// @supportURL  https://github.com/krayon/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    GM_log("Userscript: Stranger Google 2");

    const fontcss = document.createElement("link");
    fontcss.type='text/css';
    fontcss.rel='stylesheet';
    fontcss.href='//fast.fonts.net/cssapi/05893941-af1d-4c96-a1d0-0e0cb5b76cc2.css';
    document.getElementsByTagName("head")[0].appendChild(fontcss);


    GM_addStyle ( `

.MjjYud {
    background: #ffffffa0 !important;
}
.Ww4FFb {
    background: #00000000 !important;
}


  .lJ9FBc input[type="submit"], .gbqfba
  {
    background: #ed2b12a0 !important;
    border: 1px solid #63010073 !important;
    border: 2px solid #ed2b1273 !important;
    border-radius: 30px !important;
    color: #000000 !important;
  }

  .lJ9FBc input[type="submit"]:hover, .gbqfba
  {
    background: #000000a0 !important;
    border: 1px solid #63010073 !important;
    border: 2px solid #ed2b1273 !important;
    border-radius: 30px !important;
    color: #ff0000 !important;
  }

  .RNNXgb, .RNNXgb:hover, .RNNXgb:focus, .RNNXgb:required, .RNNXgb:optional, .RNNXgb:invalid, .RNNXgb:disabled
  {
    background: #ed2b1273 !important;
    border: 1px solid #63010073 !important;
    border: 2px solid #ed2b1273 !important;
    border-radius: 30px !important;
    color: #000000 !important;
  }

  .k1zIA {
    margin-top: 0px !important;
  }

  .rSk4se {
    max-height: 0px !important;
  }

  .om7nvf {
    padding-top: 60px !important;
  }

  .appbar {
    background: #00000000;
  }




body {
  background: #000 url('https://occ-0-325-56.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXdoFBGXx_gQywX64x9I5gEetMlsMB-wM_vZC4VBpdoqOxNZQxTi-foCgZ_kGXllVTLiZeTPpHuD9UkvR9frMUdFRHKxVrAYUMuS.jpg?r=b45');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: 100%;
}

.st {
  width: 625px;
  margin: 0 auto 3rem auto;
  text-align: center;
  text-transform: uppercase;
  font-size: 8rem;
  font-family: 'ITC Benguiat W01';
  font-weight: 800;
  color: #1c0502;
  text-shadow: -0.05rem -0.05rem 1px #ed2b12,
    0.05rem -0.05rem 1px #ed2b12,
    -0.05rem 0.05rem 1px #ed2b12,
    0.05rem 0.05rem 1px #ed2b12,
    0 0 15px #630100,
    0 0 20px #450100;
  letter-spacing: -2px;
}

.st p {
  display: inline-block;
  margin: 0;
}

.st-bound {
  box-shadow: -0.05rem -0.05rem 2px #ed2b12,
    0.05rem -0.05rem 2px #ed2b12,
    -0.05rem 0.05rem 2px #ed2b12,
    0.05rem 0.05rem 2px #ed2b12;
  height: 5px;
}

.st-bound-full {
  width: 100%;
  margin: auto;
  margin-bottom: -1.2rem;
  max-width: 612px;
  margin-left: 5px;
}

.st-bound-mini {
  margin-top: 0.5rem;
}

.st-bound-left {
  float: left;
  width: 99px;
  position: relative;
  left: 5px;
}

.st-bound-right {
  float: right;
  width: 103px;
  left: 0.3rem;
  position: relative;
}

.st-bottom {
  clear: both;
  top: -3.75rem;
  position: relative;
  left: .6rem;
  letter-spacing: 2px;
}

.st-drop {
  line-height: 0;
  position: relative;
  top: 1.55rem;
}

.st-stranger-s {
  font-size: 10.5rem;
  letter-spacing: -8px;
}

.st-stranger-t {
  letter-spacing: 0;
}

.st-stranger-n {
  letter-spacing: -5px;
}

.st-stranger-g {
  letter-spacing: 0;
}

.st-stranger-r-2 {
  font-size: 10.5rem;
  right: 0.2rem;
}

.st-things-t {
  font-size: 104%;
  letter-spacing: 2px;
}

.st-things-n {
  letter-spacing: -5px;
}

.st-things-g {
  letter-spacing: -3px;
}










` );


    const strangertext = document.createElement("div");
    strangertext.className = "st";
    strangertext.innerHTML = `

  <div class="st-top">
    <div class="st-bound st-bound-full"></div>
    <p><span class="st-drop st-stranger-s">F</span><span class="st-stranger-t">i</span><span class="st-stranger-r">n</span><span class="st-stranger-a">d</span><span class="st-stranger-n">s</span><span class="st-stranger-g">o</span><span class="st-stranger-e">m</span><span class="st-drop st-stranger-r-2">e</span>
    </p>
    <div class="st-bound st-bound-mini st-bound-left"></div>
    <div class="st-bound st-bound-mini st-bound-right"></div>
  </div>

  <div class="st-bottom">
    <p><span class="st-things-t">T</span><span class="st-things-h">h</span><span class="st-things-i">i</span><span class="st-things-n">n</span><span class="st-things-g">g</span><span class="st-things-s">s</span></p>
  </div>

`;

    var el = document.getElementsByClassName("lnXdpd");
    el[0].parentElement.appendChild(strangertext);
    el[0].parentElement.removeChild(el[0]);

    //for(var i = 0; i < el.length; i++) {
    //    console.log(typeof el[i]);
    //    if (el[i].src) {
    //        el[i].src='data:image/png;base64,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';
    //    }
    //}



    //href = as[i].href
    //if(href.split('/').length >= 4 && href.split('/')[3].substr(0,3) == 'url') {
    //    //as[i].href = decodeURIComponent(href.replace(/.*url=([^&]*).*$/, '$1'));
    //    as[i].href = unescape(href.replace(/.*url=([^&]*).*$/, '$1'));
    //    console.log("Replaced: " + unescape(href.replace(/.*url=([^&]*).*$/, '$1')));
 	//}



})();