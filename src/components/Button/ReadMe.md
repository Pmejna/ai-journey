# Button component

The Button component is a default HTML button implementation. Currently supports two button styles:

- primary
- secondary

## Props

| Name     | Type          | Default  | Description               |
| -------- | ------------- | -------- | ------------------------- |
| children | node          | null     | The content of the button |
| size     | ButtonSize    | "medium" | The size of the button    |
| tag      | ElementType   | null     | The tag of the button     |
| variant  | ButtonVariant | null     | HTML tag of a Button      |

## Usage

```jsx
import { Button } from "/components";

const Example = () => (
  <Button>
    <p>button text</p>
  </Button>
);
```
