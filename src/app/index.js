import $ from 'jquery'
import 'slider-pro'
import 'slider-pro/dist/css/slider-pro.min.css'
import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'

import '@kanety/jquery-simple-lightbox'
import '@kanety/jquery-simple-lightbox/src/simple-lightbox'

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import 'slider-x'
import 'slider-x/dist/slider-x.css'

(function () {
  'use strict'

  $('#main-banner').sliderPro({
    width: '100%',
    height: 500,
    arrows: true,
    buttons: false,
    waitForLayers: true,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
    thumbnailPointer: true,
    autoplay: false,
    autoScaleLayers: false
  })

  $('#gal').simpleLightbox({
    imageExt: /^(jpg|jpeg|png|gif|bmp|webp)$/
  })

  Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    type: 'error',
    confirmButtonText: 'Cool',
    timer: 3000
  })

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image

    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function titleSrc (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>'
      }
    }
  })
})() // Page Ready
