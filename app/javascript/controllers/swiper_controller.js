import { Controller } from "@hotwired/stimulus"
import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
// Connects to data-controller="swiper"
export default class extends Controller {
  connect() {
    console.log("hello form first stimulus controller")
  }
}
const swiper = new Swiper('.swiper', {
  direction: "vertical",
        pagination: {
          el: ".swiper-pagination",
        },
  // modules: [Navigation, Pagination],
  // slidesPerView: 1.2
});
