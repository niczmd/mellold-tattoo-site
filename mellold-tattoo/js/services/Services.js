import { Appointment } from '../models/Appointment.js';

export class WhatsAppService {
  constructor(phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  sendAppointment(appointmentData) {
    const appointment = new Appointment(
      appointmentData.name,
      appointmentData.style,
      appointmentData.message
    );

    const text = encodeURIComponent(appointment.toWhatsAppText());
    const url = `https://wa.me/${this.phoneNumber}?text=${text}`;
    window.open(url, '_blank', 'noopener');
  }
}

export class GalleryService {
  constructor(items, filterButtons) {
    this.items = [...items];
    this.filterButtons = [...filterButtons];
  }

  filter(category) {
    this.items.forEach(item => {
      const itemCategory = item.dataset.category;
      const shouldShow = category === 'todos' || itemCategory === category;
      item.classList.toggle('hidden', !shouldShow);
    });

    this.filterButtons.forEach(button => {
      const isActive = button.dataset.filter === category;
      button.classList.toggle('active', isActive);
      button.classList.toggle('btn-danger', isActive);
      button.classList.toggle('btn-outline-light', !isActive);
    });
  }
}
