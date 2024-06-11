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
      case 'MDUI-COLLAPSE':
      case 'MDUI-RADIO-GROUP':
      case 'MDUI-SLIDER':
      case 'MDUI-RANGE-SLIDER':
      case 'MDUI-TABS':
      case 'MDUI-MENU':
      case 'MDUI-LINEAR-PROGRESS':
      case 'MDUI-CIRCULAR-PROGRESS':
        return property === 'value'
      case 'MDUI-SWITCH':
      case 'MDUI-CHECKBOX':
        return property === 'checked'
      case 'MDUI-SNACKBAR':
      case 'MDUI-DROPDOWN':
        return property === "open"
      case 'MDUI-CHIP':
        return property === "selected"
      default:
        console.warn(`Not handled element event: ${el.tagName}`)
        return false
    }
  });

  // Connect Aurelia property observer to DOM events
  // Add the custom event when you get the following error: Trying to set value for property value in dirty checker
  const inputEvents = { events: ['input', 'change'] }
  //const changeEvent = { events: ['change'] }
  const viewStateEvents = { events: ['open', 'close'] }
  const nodeObserverLocator = container.get(NodeObserverLocator)
  nodeObserverLocator.useConfig({
    'MDUI-CHECKBOX': {
      checked: inputEvents
    },
    'MDUI-SWITCH': {
      checked: inputEvents
    },
    'MDUI-TEXT-FIELD': {
      value: inputEvents
    },
    'MDUI-MENU': {
      value: inputEvents
    },
    'MDUI-LINEAR-PROGRESS': {
      value: inputEvents
    },
    'MDUI-CIRCULAR-PROGRESS': {
      value: inputEvents
    },
    'MDUI-SEGMENTED-BUTTON-GROUP': {
      value: inputEvents
    },
    'MDUI-SELECT': {
      value: inputEvents
    },
    'MDUI-SNACKBAR': {
      open: viewStateEvents
    },
    'MDUI-DROPDOWN': {
      open: viewStateEvents
    },
    'MDUI-COLLAPSE': {
      value: inputEvents
    },
    'MDUI-CHIP': {
      selected: inputEvents
    },
    'MDUI-RADIO-GROUP': {
      value: inputEvents
    },
    'MDUI-SLIDER': {
      value: inputEvents
    },
    'MDUI-RANGE-SLIDER': {
      value: inputEvents
    },
    'MDUI-TABS': {
      value: inputEvents
    },
  })
})
