import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import $ from "jquery";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

$(document).ready(function() {
  $(document).on('mousemove', function(e) {
    $('#circularcursor').css({
      left: e.pageX,
      top: e.pageY
    });
  });

  $('.cursor-blink').on({
    mouseenter: function () {
      $('#circularcursor').css({
        background: 'rgba(255, 255, 255, .6)'
      });
    },
    mouseleave: function () {
      $('#circularcursor').css({
        background: 'rgba(255, 255, 255, .2)'
      });
    }
  });
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <div id="circularcursor"></div>
    </BrowserRouter>
  </React.StrictMode>
);