+(function (window, webduino) {
  'use strict';
  window.getuv = function(board, pin) {
    return new webduino.module.uv(board, board.getDigitalPin(pin));
  }
}(window, window.webduino));
