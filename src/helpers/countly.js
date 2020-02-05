import Countly from 'countly-sdk-web';

class CountlyHelper {
  constructor() {
    Countly.init({
      debug: false,
      app_key: '9e18c58f4514e632757be94b95d247cfdac34fbc',
      url: 'https://try.count.ly',
    });
    Countly.track_sessions();
    Countly.track_clicks();
    Countly.track_scrolls();
    Countly.track_forms();
    Countly.track_errors();

  }
}

const CountlyInstance = new CountlyHelper();

export default CountlyInstance;
