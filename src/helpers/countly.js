import Countly from 'countly-sdk-web';

class CountlyHelper {
  constructor() {
    this.countly = Countly;
    this.countly.init({
      debug: true,
      require_consent: true,
      app_key: '9e18c58f4514e632757be94b95d247cfdac34fbc',
      url: 'https://try.count.ly',
    });
    this.countly.track_sessions();
  }

  sharedInstance() {
    return this.countly;
  }
}

const CountlyInstance = new CountlyHelper();

export default CountlyInstance;
