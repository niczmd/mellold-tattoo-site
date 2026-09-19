export class NavigationController {
  constructor(navElement) {
    this.navElement = navElement;
  }

  closeAfterClick() {
    const links = this.navElement.querySelectorAll('a');

    links.forEach(link => {
      link.addEventListener('click', () => {
        const menu = bootstrap.Collapse.getInstance(this.navElement);

        if (menu) {
          menu.hide();
        }
      });
    });
  }
}
