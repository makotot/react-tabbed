import React from 'react'
import PropTypes from 'prop-types'

class Tabbed extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    defaultIndex: PropTypes.number,
  }

  static defaultProps = {
    onChange: () => {},
    defaultIndex: 0,
  }

  state = {
    activeIndex: this.props.defaultIndex,
  }

  getTabProps = (index) => {
    return {
      onClick: (e) => {
        e.preventDefault()
        this.props.onChange(e, index)
        this.setState({
          activeIndex: index,
        })
      }
    }
  }

  setActiveTab = (index) => {
    this.setState({
      activeIndex: index,
    })
  }

  isActiveTab = (index) => {
    return index === this.state.activeIndex
  }

  render() {
    return this.props.children({
      getTabProps: this.getTabProps,
      isActiveTab: this.isActiveTab,
      setActiveTab: this.setActiveTab,
    })
  }
}

export default Tabbed