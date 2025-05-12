// ==UserScript==
// @name        GitHub Notifications Auto-Check
// @version     1.0.0
// @namespace   http://krayon.me/
// @description Automatically check items in your notification list that are closed, merged etc
// @license     MIT
// @author      Krayon
// @include     https://github.com/notifications*
// @run-at      document-end
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// @grant       GM_log
// @icon        https://github.githubassets.com/pinned-octocat.svg
// @updateURL   https://github.com/krayon/userscripts/raw/main/github-notifications-auto-check.user.js
// @downloadURL https://github.com/krayon/userscripts/raw/main/github-notifications-auto-check.user.js
// @supportURL  https://github.com/krayon/userscripts/issues
// ==/UserScript==

(() => {
  /* global moment $ $$ on */
  "use strict";

  GM_log("Userscript: GitHub Notifications Auto-Check");

  function markIssuesClosed() {
    [...document.querySelectorAll(
      '.notifications-list-item:has(.octicon-issue-closed)'
    )].forEach(
      el => el.querySelector('input').click()
    );
  }

  function markIssuesCancelled() {
    [...document.querySelectorAll(
      '.notifications-list-item:has(.octicon-skip)'
    )].forEach(
      el => el.querySelector('input').click()
    );
  }

  function markPRsMerged() {
    [...document.querySelectorAll(
      '.notifications-list-item:has(.octicon-git-merge)'
    )].forEach(
      el => el.querySelector('input').click()
    );
  }

  function markPRsClosed() {
    [...document.querySelectorAll(
      '.notifications-list-item:has(.octicon-git-pull-request-closed)'
    )].forEach(
      el => el.querySelector('input').click(
    ));
  }

  function init() {
    markIssuesClosed();
    markIssuesCancelled();
    markPRsMerged();
    markPRsClosed();
  }

  init();

})();