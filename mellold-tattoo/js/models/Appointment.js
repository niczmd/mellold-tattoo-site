export class Appointment {
  constructor(name, style, message) {
    this.name = name;
    this.style = style;
    this.message = message;
    this.createdAt = new Date();
  }

  toWhatsAppText() {
    return [
      'Olá! Vim pelo site Mellold Tattoo. Gostária de agendar um horário, aqui minhas informações sobre a tatuagem que quero fazer:',
      `Meu nome: ${this.name}`,
      `Estilo: ${this.style}`,
      `Ideia: ${this.message}`
    ].join('\n');
  }
}
