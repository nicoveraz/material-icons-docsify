(function () {
  "use strict";

  function install(hook) {
    const miRegExp = /:mi(-[\w-]+)?(?:\s+([\w-]+|#[0-9A-Fa-f]{3,6}|rgb\([^)]+\)))?(?:\s+([\w-]+))?:/g;

    function isValidColor(color) {
      if (!color) return false;
      const s = new Option().style;
      s.color = color;
      return s.color !== '';
    }

    function replaceIconSyntax(content) {
      return content.replace(miRegExp, (match, iconType, param1, param2) => {
        let className = 'material-icons';
        let iconName = '';
        let colorStyle = '';

        if (iconType) className += iconType;

        if (param1 && param2) {
          if (isValidColor(param1)) {
            colorStyle = `color: ${param1};`;
            iconName = param2;
          } else {
            iconName = param2;
            console.warn(`Invalid color "${param1}" in "${match}". Using default color.`);
          }
        } else if (param1) {
          if (isValidColor(param1)) {
            colorStyle = `color: ${param1};`;
          } else {
            iconName = param1;
          }
        }

        if (!iconName) {
          iconName = param2 || param1 || '';
        }

        const styleAttribute = colorStyle ? `style="${colorStyle}"` : '';
        return `<i class="${className}" ${styleAttribute}>${iconName}</i>`;
      });
    }

    hook.beforeEach(content => replaceIconSyntax(content));
    hook.afterEach((html, next) => next(replaceIconSyntax(html)));
  }

  // Set up as a Docsify plugin
  if (window.$docsify) {
    $docsify.plugins = [].concat(install, $docsify.plugins || []);
  } else {
    console.error("Docsify instance not found. Make sure Docsify is loaded before this plugin.");
  }
})();
