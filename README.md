# Material Icons Plugin for Docsify

This plugin allows you to easily add Material Icons to your Docsify-powered documentation.

> Syntax inspired by  https://github.com/erickjx/docsify-material-icons/

## Features

- Easily insert Material Icons into your Markdown files
- Support for basic, outlined, and other icon types
- Color customization using named colors, hex codes, or RGB values
- Inline CSS application for colors
- Error handling for invalid color inputs
- Lightweight and efficient

## Installation

1. Add the following script tag to your `index.html` file, after the Docsify script:

   ```html
   <script src="https://cdn.jsdelivr.net/gh/nicoveraz/material-icons-docsify@main/material-icons-docsify.js"></script>
   ```

2. Include the Material Icons font in your `index.html`:

   ```html
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   ```

That's it! You don't need to download or host the plugin file yourself.

## Usage

You can use either inline syntax or comment-based syntax to add Material Icons to your Markdown files.

### Inline Syntax

Use the following syntax directly in your Markdown:

```
:mi icon_name:
:mi-outlined icon_name:
:mi color_name icon_name:
:mi #hex_color icon_name:
:mi rgb(r,g,b) icon_name:
:mi-outlined color_name icon_name:
```

#### Examples (Inline Syntax)

1. Basic icon: `:mi home:`
2. Outlined icon: `:mi-outlined home:`
3. Colored icon (named color): `:mi blue home:`
4. Colored icon (hex color): `:mi #FF5733 favorite:`
5. Colored icon (RGB): `:mi rgb(255,87,51) star:`
6. Full syntax with color: `:mi-outlined red account_circle:`

## Color Support

The plugin supports the following color formats:

- Named colors (e.g., `red`, `blue`, `green`)
- Hexadecimal color codes (e.g., `#FF5733`)
- RGB values (e.g., `rgb(255,87,51)`)

If an invalid color is provided, the plugin will use the default color and log a warning to the console.

## Error Handling

The plugin includes error handling for invalid color inputs. If an invalid color is specified, the icon will still be rendered using the default color, and a warning will be logged to the console.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
