import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

export default class ClickableText extends Component {
  static get propTypes() {
    return {
      innerText: PropTypes.string,
      onCtrlClick: PropTypes.func,
      onShiftClick: PropTypes.func,
      onSimpleClick: PropTypes.func,
      onSelection: PropTypes.func,
      disableTextSelection: PropTypes.bool,
    };
  }

  static get defaultProps() {
    return {
      innerText: '',
      onCtrlClick: function () {
        return undefined;
      },
      onShiftClick: function () {
        return undefined;
      },
      onSimpleClick: function () {
        return undefined;
      },
      onSelection: function () {
        return undefined;
      },
      disableTextSelection: false,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedWord: '',
    };
    this.handleOnSelectionChange = this.handleOnSelectionChange.bind(this);
    this.getSelectedWord = this.getSelectedWord.bind(this);
  }

  componentDidMount() {
    document.addEventListener('selectionchange', this.handleOnSelectionChange);
  }
  componenetWillUnmount() {
    document.removeEventListener('selectionchange', this.handleOnSelectionChange);
  }

  addSpansToText() {
    const { innerText } = this.props;
    if (innerText) {
      return innerText.split(/[ -]+/).map((item, index) =>
        item === '\n' ? (
          <br key={index} />
        ) : (
          <span key={index} onClick={(e) => this.handleClickOnWord(e)}>
            {item}{' '}
          </span>
        )
      );
    }
  }

  handleClickOnWord(event) {
    const e = { ...event };
    const { onCtrlClick, onShiftClick, onSimpleClick, callbackFunction } = this.props;
    if (event.ctrlKey && onCtrlClick) {
      onCtrlClick(e.currentTarget.innerText);
    } else if (e.shiftKey && onShiftClick) {
      onShiftClick(e.currentTarget.innerText);
    } else if (onSimpleClick) {
      if (!(this.state && this.state.selectedWord)) {
        onSimpleClick(e.currentTarget.innerText);
      }
    }
    if (callbackFunction) {
      callbackFunction();
    }
  }

  getSelectedWord(e) {
    const { onSelection, callbackFunction } = this.props;
    var text = '';
    if (window.getSelection) {
      text = window.getSelection();
    } else if (document.getSelection) {
      text = document.getSelection();
    } else if (document.selection) {
      text = document.selection.createRange().text;
    }
    this.setState({ selectedWord: text.toString() });
    onSelection(text.toString());

    if (callbackFunction) {
      callbackFunction();
    }
  }

  handleOnSelectionChange(e) {
    if (!this.nv) {
      return false;
    }
    this.nv.onmouseup = this.getSelectedWord;
    if (!document.all) {
      document.captureEvents(Event.MOUSEUP);
    }
  }

  render() {
    const { disableTextSelection } = this.props;
    const disabledTextStyle = {
      webkitTouchCallout: 'none',
      webkitUserSelect: 'none',
      khtmlUserSelect: 'none',
      mozUserSelect: 'none',
      msUserSelect: 'none',
      userSelect: 'none',
    };

    return (
      <div
        className={css(styles.highlightHint)}
        ref={(elem) => (this.nv = elem)}
        style={disableTextSelection ? disabledTextStyle : undefined}
        id={'clickable-inner-text'}
      >
        {this.addSpansToText()}
      </div>
    );
  }
}

const styles = StyleSheet.create({
  highlightHint: {
    direction: 'rtl',
  },
});
