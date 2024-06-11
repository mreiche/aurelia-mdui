# Aurelia MDUI bridge

## Installation

```shell
npm install aurelia-mdui
```

## Usage
In you `main.ts`
```typescript
import {MduiWebTask} from "./aurelia-mdui"

Aurelia
    .register(MduiWebTask)
    .app(MyApp)
    .start()
```

and use your components as usable

```html
<mdui-text-field variant="filled" value.bind="message" label="Label text"></mdui-text-field>
```

## Implementation status

The library is developed and tested here: https://github.com/mreiche/mdc-web-aurelia2

## References
- https://www.tsmean.com/articles/how-to-write-a-typescript-library/
