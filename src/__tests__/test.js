import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Tabbed from '../'

const setup = () => {
  const wrapper = mount(
    <Tabbed
      render={
        ({ getTabProps, isActiveTab }) => {
          return (
            <div>
              <nav>
                <a className="tab-nav-1" href="#" { ...getTabProps({ index: 0}) }>tab 1</a>
                <a className="tab-nav-2" href="#" { ...getTabProps({ index: 1}) }>tab 2</a>
                <a className="tab-nav-3" href="#" { ...getTabProps({ index: 2}) }>tab 3</a>
              </nav>

              <div>
                { isActiveTab(0) && <div className="tab-panel-1" /> }
                { isActiveTab(1) && <div className="tab-panel-2" /> }
                { isActiveTab(2) && <div className="tab-panel-3" /> }
              </div>
            </div>
          )
        }
        }
    />
  )

  return {
    wrapper,
  }
}

describe('Tabbed', () => {
  const { wrapper } = setup()

  it('renders single panel.', () => {
    expect(wrapper.find('.tab-panel-1').length).toBe(1)
  })

  it('activate target tab by click event.', () => {
    wrapper.find('.tab-nav-2').simulate('click')
    expect(wrapper.find('.tab-panel-2').length).toBe(1)
  })
})