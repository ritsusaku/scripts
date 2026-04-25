// ==UserScript==
// @name         fix xhs sample
// @namespace    http://tampermonkey.net
// @author       ritsusaku
// @version      922.2
// @description  redirect to xhscdn not rednote
// @match        *://*.rednotecdn.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

  /*
  cdns
  https://sns-img-hw.xhscdn.com/
  https://sns-img-al.xhscdn.com/
  https://ci.xiaohongshu.com/
  */

  (function () {
  'use strict';
  const xhscdn = 'https://sns-img-hw.xhscdn.com/';
  const prepost = location.href.match(/notes_pre_post\/([^!?&\s]+)/);
  const simple = location.href.match(/\/([^/!?&\s]+)!/)
  const osssg = location.href.match(/oss-sg\/notes\/([^!?&\s]+)/);
  const spctrum = location.href.match(/spectrum\/([^!?&\s]+)/);
  if (prepost) location.replace(xhscdn + 'notes_pre_post/' + prepost[1]);
  else if (osssg) location.replace(xhscdn + 'oss-sg/notes/' + osssg[1]);
  else if (spctrum) location.replace(xhscdn + 'spectrum/' + spctrum[1]);
      else if (simple) location.replace(xhscdn + simple[1]);
})();
