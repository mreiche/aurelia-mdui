import {AppTask, IAttrMapper, IContainer, NodeObserverLocator} from "aurelia"

/**
 * MdcWebTask to connect elements to Aurelia2
 * @see https://docs.aurelia.io/getting-to-know-aurelia/app-tasks
 */

export const MduiWebTask = AppTask.creating(IContainer, container => {
  const attrMapper = container.get(IAttrMapper)

  // Set default way for bound properties
  attrMapper.useTwoWay((el, property) => {
    switch (el.tagName) {
      case 'MDUI-TEXT-FIELD':
      case 'MDUI-SEGMENTED-BUTTON-GROUP':
      case 'MDUI-SELECT':
        return property === 'value'
      case 'MDUI-SWITCH':
      case 'MDUI-CHECKBOX':
        return property === 'checked'
      default:
        console.warn(`Not handled element event: ${el.tagName}`)
        return false
    }
  });

  // Connect Aurelia property observer to DOM events
  // Add the custom event when you get the following error: Trying to set value for property value in dirty checker
  const valuePropertyConfig = { events: ['input', 'change'] }
  const nodeObserverLocator = container.get(NodeObserverLocator)
  nodeObserverLocator.useConfig({
    'MDUI-CHECKBOX': {
      checked: valuePropertyConfig
    },
    'MDUI-SWITCH': {
      checked: valuePropertyConfig
    },
    'MDUI-TEXT-FIELD': {
      value: valuePropertyConfig
    },
    'MDUI-SEGMENTED-BUTTON-GROUP': {
      value: valuePropertyConfig
    },
    'MDUI-SELECT': {
      value: valuePropertyConfig
    }
  })
})
