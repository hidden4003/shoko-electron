import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './AnidbLink.global.css';

class AnidbLink extends PureComponent {
  static defaultProps = {
    character: false,
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    character: PropTypes.bool,
  };

  render() {
    const { text, url, character } = this.props;

    return (
      <span className="anidb-link" title={url}>{character === true ? <i className="icon icon-character" /> : null} {text}</span>
    );
  }
}

export default AnidbLink;
