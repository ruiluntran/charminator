# Charminator

Welcome to Charminator, the one and only React component library that makes displaying a single character as
complicated and absurdly fun as possible!

Ever dreamed of turning your UI into a battleground of functional programming debates? Ever wanted to spend an entire
day manipulating a single character? Well, your dreams just came true!

Introducing &lt;Charminator /&gt;: a component so powerful, you’ll forget it only displays one character.

### Key Features:

- Character Rendering: Because why render an entire word when you can focus on a single char?
- Custom Styling: Change colors and sizes! Make your letter red, green, or neon purple! Why? Because you can!
- Case Manipulation: Feeling loud? Make it uppercase! Whispering? Go lowercase! Or just mix it up because life is too
  short for consistent casing.
- Over-Engineering at Its Finest: Want to display an ‘A’ in a way that would make your fellow developers weep? Here’s
  your chance!

### Charminator Properties

| Property      | Type      | Required | Description                                                              |
|---------------|-----------|----------|--------------------------------------------------------------------------|
| `value`       | `string`  | Yes      | The character to be displayed. Must be a single character.               |
| `toLowerCase` | `boolean` | No       | If true, transforms the character to lowercase.                          |
| `toUpperCase` | `boolean` | No       | If true, transforms the character to uppercase.                          |
| `className`   | `string`  | No       | Optional CSS class to apply custom styles.                               |
| `color`       | `string`  | No       | Sets the text color. Should be a valid hex color code (e.g., `#FF5733`). |
| `size`        | `string`  | No       | Specifies the font size (e.g., `12px`, `2em`).                           |

### Install

``` shell
npm i charminator
```

### Example

``` tsx
<Charminator
  value="a"
  color="#FF0000"
  size="28px"
  uppercase: {true};
/>
```

This will render the letter “A” in a size and shade of red that will make all other letters on the page feel inferior.

### Why Use Charminator?

- Because every other problem in React has already been solved.
- Because sometimes you just want to question your career choices.
- Because life’s too short not to laugh at how much we over-complicate things.

Install now, and join the fun of turning a single character into the most important element on your page. Let’s make
React development even more ridiculous
