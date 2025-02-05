const {readdirSync, writeFileSync} = require('fs');

/**
 * It checks if the passed file name is is a SVG file or not.
 * @param {string} fileName is a name that you want to check if it is SVG.
 */
const isSVG = fileName => /.svg$/.test(fileName);
/**
 * It removes the extension from at the end of the file name.
 * @param {string} fileName
 */
const removeExtension = file => file.split('.')[0];
/**
 * It converts the passed string to the PascalCase format.
 * @param {*} string that you want to convert.
 */
const toPascalCase = string =>
  string
.match(/[a-z]+/gi)
.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
.join('');

// getting all the icons
const icons = readdirSync('src/assets/icons/')
  .filter(isSVG)
  .map(removeExtension);
const indexContent = [
  "import React from 'react';",
  icons
    .map(icon => `import ${toPascalCase(icon)} from '../../../assets/icons/${icon}';`)
    .join('\n'),
  '',
  icons
    .map(
      icon =>
        `export const ${toPascalCase(icon)}Icon = props => <${toPascalCase(
          icon,
        )} {...props} name="${icon}" />;`,
    )
    .join('\n'),
  '',
].join('\n');


writeFileSync('src/components/common/Icon/icons.js', indexContent);

console.log('Icon component file created! ✅');
