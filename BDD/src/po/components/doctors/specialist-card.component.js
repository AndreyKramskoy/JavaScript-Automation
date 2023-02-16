const BaseComponent = require('../common/base.component');

class SpecialistCardComponent extends BaseComponent {
  constructor(id) {
    super(`#Specialist_${id}`);
  }

  get name() {
    return this.rootEl.$('.name');
  }

  get education() {
    return this.rootEl.$('.education');
  }

  get phone() {
    return this.rootEl.$('.phone');
  }

  get email() {
    return this.rootEl.$('.email');
  }
}

module.exports = SpecialistCardComponent;
