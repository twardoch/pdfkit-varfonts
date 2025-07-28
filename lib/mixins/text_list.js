/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * DS205: Consider reworking code to avoid use of IIFEs
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/main/docs/suggestions.md
 */
// lib/mixins/text_list.coffee

// this_file: lib/mixins/text_list.coffee

const LineWrapper = require('../line_wrapper');
const {number} = require('../object');

module.exports = {
  list(list, x, y, options, wrapper) {
    options = this.document._initOptions(x, y, options); // Access _initOptions from document context

    const midLine = Math.round(((this.document._font.ascender / 1000) * this.document._fontSize) / 2);
    const r = options.bulletRadius || Math.round(((this.document._font.ascender / 1000) * this.document._fontSize) / 3);
    const indent = options.textIndent || (r * 5);
    const itemIndent = options.bulletIndent || (r * 8);

    let level = 1;
    const items = [];
    const levels = [];

    var flatten = list => (() => {
      const result = [];
      for (let i = 0; i < list.length; i++) {
        var item = list[i];
        if (Array.isArray(item)) {
          level++;
          flatten(item);
          result.push(level--);
        } else {
          items.push(item);
          result.push(levels.push(level));
        }
      }
      return result;
    })();

    flatten(list);

    wrapper = new LineWrapper(this.document, options); // Pass document instance to LineWrapper
    wrapper.on('line', this.document._line.bind(this.document)); // Bind _line to document instance

    level = 1;
    let i = 0;
    wrapper.on('firstLine', () => {
      let l;
      if ((l = levels[i++]) !== level) {
        const diff = itemIndent * (l - level);
        this.document.x += diff;
        wrapper.lineWidth -= diff;
        level = l;
      }

      this.document.circle((this.document.x - indent) + r, this.document.y + midLine, r); // Access circle from document instance
      return this.document.fill();
    }); // Access fill from document instance

    wrapper.on('sectionStart', () => {
      const pos = indent + (itemIndent * (level - 1));
      this.document.x += pos;
      return wrapper.lineWidth -= pos;
    });

    wrapper.on('sectionEnd', () => {
      const pos = indent + (itemIndent * (level - 1));
      this.document.x -= pos;
      return wrapper.lineWidth += pos;
    });

    wrapper.wrap(items.join('\n'), options);

    return this.document;
  } // Return document instance for chaining
};
