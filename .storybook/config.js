import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'

addDecorator(story => (
  <div>{ story() }</div>
))

const req = require.context('..', true, /(?!node_modules)\/stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module)