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

## References
- https://docs.aurelia.io/developer-guides/building-plugins
