import React from 'react'
import PropTypes from 'prop-types'

const isValidIndex = n => Number.isInteger(n)

class Tabbed extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    defaultIndex: PropTypes.number,
    index: PropTypes.number,
    render: PropTypes.func,
    children: PropTypes.func,
  }

  static defaultProps = {
    onChange: () => {},
    defaultIndex: 0,
  }

  state = {
    index: isValidIndex(this.props.index) ? this.props.index : this.props.defaultIndex,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.props.index) {
      this.setState({
        index: nextProps.index,
      })
    }
  }

  getTabProps = (props) => {
    return {
      onClick: (e) => {
        e.preventDefault()
        this.props.onChange(e, props.index)
        props.onClick && props.onClick(e);

        if (!isValidIndex(this.props.index)) {
          this.setState({
            index: props.index,
          })
        }
      }
    }
  }

  setActiveTab = (index) => {
    this.setState({
      index,
    })
  }

  isActiveTab = (index) => {
    return index === this.state.index
  }

  render() {
    const render = this.props.render || this.props.children;
    return render({
      getTabProps: this.getTabProps,
      isActiveTab: this.isActiveTab,
      setActiveTab: this.setActiveTab,
    })
  }
}

export default Tabbed