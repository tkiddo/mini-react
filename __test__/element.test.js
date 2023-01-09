import { createReactElement } from '../lib/element'

test('createReactElement', () => {
  const element = createReactElement('div', { className: 'foo' }, 'bar')
  expect(element).toEqual({
    type: 'div',
    props: {
      className: 'foo',
      children: [
        {
          type: 'TEXT_ELEMENT',
          props: {
            nodeValue: 'bar',
            children: [],
          },
        },
      ],
    },
  })
})
