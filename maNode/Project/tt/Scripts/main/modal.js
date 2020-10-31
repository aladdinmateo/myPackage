import $ from 'jquery';
class Modal {
  constructor() {
    this.openModalB = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalB = $(".modal_close");
    this.events();
  }

  events() {
    //click the get in touch
    this.openModalB.click(this.openModal.bind(this));
    //clicl the x
    this.closeModalB.click(this.closeModal.bind(this));
    //push the Esc
    $(document).keyup(this.keyPressing.bind(this));
  }

  keyPressing(Esc) {
    if (Esc.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal-is-visible");
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal-is-visible");
  }
}

export default Modal;
