import React from 'react';
import PropTypes from 'prop-types';
import Settings from '@folio/stripes-components/lib/Settings';
import GeneralSettings from './general-settings';
import SomeFeatureSettings from './some-feature-settings';

export default class AuthoritySettings extends React.Component {
  static propTypes = {
    stripes: PropTypes.object.isRequired,
  }


  pages = [
    {
      route: 'general',
      label: this.props.stripes.intl.formatMessage({ id: 'ui-authority.settings.general' }),
      component: GeneralSettings,
    },
    {
      route: 'somefeature',
      label: this.props.stripes.intl.formatMessage({ id: 'ui-authority.settings.some-feature' }),
      component: SomeFeatureSettings,
    },
  ];

  render() {
    return (
      <Settings {...this.props} pages={this.pages} paneTitle="Authority" />
    );
  }
}
