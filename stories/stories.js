import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabbed from '../'

storiesOf('Tabbed', module)
  .add('uncontrolled', () => {
    class App extends React.Component {
      state = {
        index: 0,
      }

      resetTab = () => {
        this.setState({
          index: 0,
        });
      }

      onChange = (index) => {
        this.setState({
          index,
        });
      }

      render() {
        return (
          <div>
            <button type="button" onClick={ this.resetTab }>Reset</button>
            <Tabbed
              index={ this.state.index }
              onChange={ (e, index) => this.onChange(index) }
            >
              {
                ({ getTabProps, isActiveTab, setActiveTab }) => {
                  return (
                    <div>
                      <nav>
                        <a href="#" { ...getTabProps({ index: 0 }) } style={{ color: isActiveTab(0) ? '#f00' : '#000' }}>tab 1</a>
                        <a href="#" { ...getTabProps({ index: 1 }) } style={{ color: isActiveTab(1) ? '#f00' : '#000' }}>tab 2</a>
                        <a href="#" { ...getTabProps({ index: 2 }) } style={{ color: isActiveTab(2) ? '#f00' : '#000' }}>tab 3</a>
                      </nav>
                      <div>
                        { isActiveTab(0) && <div>1</div> }
                        { isActiveTab(1) && <div>2</div> }
                        { isActiveTab(2) && <div>3</div> }
                      </div>
                    </div>
                  )
                }
              }
            </Tabbed>
          </div>
        )
      }
    }
    return <App />
  })
  .add('controlled', () => {
    class App extends React.Component {
      render() {
        return (
          <div>
            <Tabbed
              render={
                ({ getTabProps, isActiveTab, setActiveTab }) => {
                  return (
                    <div>
                      <nav>
                        <a
                          href="#"
                          {
                            ...getTabProps({
                              index: 0,
                              onClick: (e) => { e.preventDefault(); console.log(this) },
                            })
                          }
                          style={{ color: isActiveTab(0) ? '#f00' : '#000' }}
                        >tab 1</a>
                        <a href="#" { ...getTabProps({ index: 1 }) } style={{ color: isActiveTab(1) ? '#f00' : '#000' }}>tab 2</a>
                        <a href="#" { ...getTabProps({ index: 2 }) } style={{ color: isActiveTab(2) ? '#f00' : '#000' }}>tab 3</a>
                      </nav>
                      <div>
                        { isActiveTab(0) && <div>1</div> }
                        { isActiveTab(1) && <div>2</div> }
                        { isActiveTab(2) && <div>3</div> }
                      </div>
                    </div>
                  )
                }
              }
            />
          </div>
        )
      }
    }
    return <App />
  })