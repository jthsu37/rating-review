import React from 'react';
import {shallow} from './enzyme.setup';

import Index from '../client/src/index.jsx'
import Reviews from '../client/src/components/Reviews.jsx'

describe('<Index />', () => {
  const component = shallow(<Index />)
  it('should render reviews', () => {
    expect(component.find(Reviews)).toHaveLength(1)
  })
})