import { APP_CONFIG } from './config.js';
import { WhatsAppService, GalleryService } from './services/Services.js';
import { NavigationController } from './components/Navigation.js';

class MelloldTattooApp {
  constructor() {
    this.whatsappService = new WhatsAppService(APP_CONFIG.whatsappNumber);

    this.galleryService = new GalleryService(
      document.querySelectorAll('.gallery-item'),
      document.querySelectorAll('.filter-button')
    );

    this.navigationController = new NavigationController(
      document.querySelector('#mainMenu')
    );

    this.contactForm = document.querySelector('#contactForm');
  }

  start() {
    this.initializeGallery();
    this.initializeContactForm();
    this.navigationController.closeAfterClick();
  }

  initializeGallery() {
    document.querySelectorAll('.filter-button').forEach(button => {
      button.addEventListener('click', () => {
        this.galleryService.filter(button.dataset.filter);
      });
    });
  }

  initializeContactForm() {
    this.contactForm.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(this.contactForm);
      const data = {
        name: formData.get('name').trim(),
        style: formData.get('style'),
        message: formData.get('message').trim()
      };

      if (!data.name || !data.style || !data.message) {
        alert('Preencha todos os campos.');
        return;
      }

      this.whatsappService.sendAppointment(data);
      this.contactForm.reset();
    });
  }
}
const navbar = document.getElementById("mainNavbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const app = new MelloldTattooApp();
app.start();
