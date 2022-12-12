# Typography component

The Typography component is a base component used to display text.

## Props

| Name       | Type                       | Default   | Description                   | Required |
| ---------- | -------------------------- | --------- | ----------------------------- | -------- |
| `children` | `node`                     | `null`    | The content of the component. | `true`   |
| `variant`  | `key of Theme[typography]` | `body1`   | The variant to use.           | `false`  |
| `color`    | `string`                   | `inherit` | The color of the component.   | `false`  |
| `tag`      | `string`                   | `p`       | The HTML tag to use.          | `false`  |

## Usage

```jsx
import { Typography } from "components";

const Example = () => <Typography variant="h1">Hello World</Typography>;
```
