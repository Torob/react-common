/* eslint no-underscore-dangle: 0 */
import amplitude from 'amplitude-js';

class Analytic {
  constructor(API_KEY) {
    this.amp = amplitude.getInstance();
    this.amp.init(API_KEY);
    if (process.env.NODE_ENV === 'development') {
      this.amp.setOptOut(true);
    } else {
      this.amp.setOptOut(false);
    }
  }

  static get instance() {
    if (!this._instance) {
      this._instance = new Analytic();
    }
    return this._instance;
  }

  setUser({ id, isStaff, email }) {
    this.amp.setUserId(id);
    const identify = new amplitude.Identify().set('is_staff', isStaff).set('email', email);
    this.amp.identify(identify);
  }

  unsetUser() {
    this.amp.clearUserProperties();
    this.amp.setUserId(null);
    var identify = new amplitude.Identify()
      .unset('instance_id')
      .unset('instance_type')
      .unset('is_staff')
      .unset('email');
    this.amp.identify(identify);
  }

  setInstance({ id, type }) {
    this.instance = { instance_id: id, instance_type: type };
    const identify = new amplitude.Identify().set('instance_id', id).set('instance_type', type);

    this.amp.identify(identify);
  }

  logEvent(name, data = {}) {
    this.amp.logEvent(name, { ...data, ...this.instance });
  }
}
export default Analytic;
