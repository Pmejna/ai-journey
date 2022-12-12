# Container component

The Container component is a wrapper component that can be used to restrict the maximum width of the content of specific
section or element.

## Usage

```jsx
import { Container } from "/components";

const Example = () => (
  <Container>
    <p>Content inside the container</p>
  </Container>
);
```

## Props

| Name     | Type        | Default | Description                  |
| -------- | ----------- | ------- | ---------------------------- |
| children | node        | null    | The content of the container |
| size     | Size        | "full"  | The size of the container    |
| tag      | ElementType | null    | The tag of the container     |
| centered | boolean     | false   | Center the content           |
| paddings | string      | null    | Paddings value               |
