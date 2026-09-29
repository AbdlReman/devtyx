import sanitizeHtml from "sanitize-html";

const allowedTags = [
  "p", "br", "hr",
  "strong", "b", "em", "i", "u", "s", "span",
  "a", "ul", "ol", "li",
  "blockquote", "code", "pre",
  "img",
  "h1", "h2", "h3", "h4", "h5", "h6",
  "table", "thead", "tbody", "tfoot", "tr", "th", "td", "caption", "colgroup", "col",
];

const allowedAttributes = {
  a: ["href", "target", "rel"],
  img: ["src", "alt", "width", "height"],
  th: ["colspan", "rowspan", "scope", "align"],
  td: ["colspan", "rowspan", "align"],
  col: ["span"],
};

/** Sanitizes rich-text HTML authored via the admin editor before rendering it publicly. */
export function sanitizeRichHtml(html: string): string {
  return sanitizeHtml(html, { allowedTags, allowedAttributes });
}
