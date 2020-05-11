export default {
  title: 'Alert'
};

import alert from './alert.twig';
import drupalAttribute from 'drupal-attribute';
import './alert.scss';

export const default_alert = () => (
  alert({
    attributes: new drupalAttribute(),
    title_attributes: new drupalAttribute(),
    plugin_id: "Some plugin",
    title_prefix: "",
    title_suffix: "",
    label: "I'm a block!",
    content: "Lorem ipsum dolor sit amet.",
    configuration: {
      provider: "Some module"
    }
  })
);
