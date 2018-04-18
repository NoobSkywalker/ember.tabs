import Em from 'ember';
import WithConfigMixin from 'ember-idx-utils/mixin/with-config';
import StyleBindingsMixin from 'ember-idx-utils/mixin/style-bindings';

/**
 * `{{em-tab-content}}` component.
 *
 * Holds a list of `{{em-tab-panel}}` components.
 * *serves as a container for `{{em-tab-panel}` component.*
 * @class TabList
 */

export default Em.Component.extend(WithConfigMixin, StyleBindingsMixin, {

  tagName: 'div',
  classNameBindings: ['styleClasses'],
  styleClasses: Em.computed(function() {
    var _ref;
    return (_ref = this.get('config.tabs.tabContentClasses')) != null ? _ref.join(" ") : void 0;
  }),

});
