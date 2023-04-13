import Countly from 'countly-sdk-web';


class CountlyHelper {
  constructor() {
    Countly.app_key = '49b500e501862aaabd078fdffccd097d8fcb3d86';
    Countly.url = 'https://demo-ui.count.ly';
    Countly.init({
      debug: false,
      require_consent: false,
      app_key: '49b500e501862aaabd078fdffccd097d8fcb3d86',
      url: 'https://demo-ui.count.ly',
      // interval: 100,
      remote_config: true,
    });
    Countly.track_sessions();
    Countly.track_clicks();
    Countly.track_scrolls();
    Countly.track_forms();
    Countly.track_errors();
    Countly.track_links();
    Countly.enable_feedback({ widgets: ['5e6a26d66199db32c86c253f'] });
  }
}

const CountlyInstance = new CountlyHelper();

export default CountlyInstance;
