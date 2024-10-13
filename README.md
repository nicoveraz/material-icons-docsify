# Material Icons Plugin for Docsify

This plugin allows you to easily add Material Icons to your Docsify-powered documentation using a simple and intuitive syntax.

> Syntax inspired by  https://github.com/erickjx/docsify-material-icons/

## Features

- Easily insert Material Icons into your Markdown files
- Support for basic, outlined, and other icon types
- Color customization using named colors, hex codes, or RGB values
- Inline CSS application for colors
- Error handling for invalid color inputs
- Lightweight and efficient

## Installation

1. Download the `material-icons-plugin.js` file and place it in your Docsify project directory.

2. Add the following script tag to your `index.html` file, after the Docsify script:

   ```html
   <script src="path/to/material-icons-plugin.js"></script>
   ```

   Replace `path/to/material-icons-plugin.js` with the actual path where you've saved the plugin file.

3. Include the Material Icons font in your `index.html`:

   ```html
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
   ```

## Usage

You can use the following syntax in your Markdown files to add Material Icons:

```
:mi icon_name:
:mi-outlined icon_name:
:mi color_name icon_name:
:mi #hex_color icon_name:
:mi rgb(r,g,b) icon_name:
:mi-outlined color_name icon_name:
```

### Examples

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
