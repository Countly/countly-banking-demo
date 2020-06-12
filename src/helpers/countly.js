import Countly from 'countly-sdk-web';


class CountlyHelper {
  constructor() {

    Countly.app_key = '57a1a2d37c68b0f0238076f5f144ed8fee5a3a04';
    Countly.url = 'https://demo.count.ly';
    Countly.init({
      debug: true,
      require_consent: true,
      app_key: '57a1a2d37c68b0f0238076f5f144ed8fee5a3a04',
      url: 'https://demo.count.ly',
      interval: 100,
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
