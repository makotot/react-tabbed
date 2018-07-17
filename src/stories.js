import React from 'react'
import { storiesOf } from '@storybook/react'
import Tabbed from './'

storiesOf('Tabbed', module)
  .add('tabbed', () => {
    class App extends React.Component {
      render() {
        return (
          <Tabbed
            defaultIndex={ 0 }
            onChange={ (e, index) => { console.log(index) } }
          >
            {
              ({ getTabProps, isActiveTab, setActiveTab }) => {
                return (
                  <div>
                    <nav>
                      <a href="#" { ...getTabProps(0) } style={{ color: isActiveTab(0) ? '#f00' : '#000' }}>tab 1</a>
                      <a href="#" { ...getTabProps(1) } style={{ color: isActiveTab(1) ? '#f00' : '#000' }}>tab 2</a>
                      <a href="#" { ...getTabProps(2) } style={{ color: isActiveTab(2) ? '#f00' : '#000' }}>tab 3</a>
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
        )
      }
    }
    return <App />
  })