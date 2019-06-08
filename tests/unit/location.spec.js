import { shallowMount } from '@vue/test-utils'
import Location from '../../src/components/Location'

let wrapper = null

beforeEach(() => {
  wrapper = shallowMount(Location, {
    propsData: {
      currentLocation: 'Perth'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('Location', () => {
    test('renders a location', () => {
        const location = wrapper.findAll('[data-test-id="location"]')
        expect(location.exists()).toBe(true)
    })
})
