export const mockData = [
  {
    "inapplicable": [
      {
        "description": "Ensures every accesskey attribute value is unique",
        "help": "accesskey attribute value must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/accesskeys?application=webdriverjs",
        "id": "accesskeys",
        "impact": null,
        "nodes": [],
        "tags": [
          "best-practice",
          "cat.keyboard"
        ]
      },
      {
        "description": "Ensures <area> elements of image maps have alternate text",
        "help": "Active <area> elements must have alternate text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/area-alt?application=webdriverjs",
        "id": "area-alt",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensures ARIA attributes are allowed for an element's role",
        "help": "Elements must only use allowed ARIA attributes",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-allowed-attr?application=webdriverjs",
        "id": "aria-allowed-attr",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
      {
        "description": "Ensures role attribute has an appropriate value for the element",
        "help": "ARIA role must be appropriate for the element",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-allowed-role?application=webdriverjs",
        "id": "aria-allowed-role",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "best-practice"
        ]
      },
      {
        "description": "Ensures unsupported DPUB roles are only used on elements with implicit fallback roles",
        "help": "Unsupported DPUB ARIA roles should be used on elements with implicit fallback roles",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-dpub-role-fallback?application=webdriverjs",
        "id": "aria-dpub-role-fallback",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures elements with ARIA roles have all required ARIA attributes",
        "help": "Required ARIA attributes must be provided",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-required-attr?application=webdriverjs",
        "id": "aria-required-attr",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
      {
        "description": "Ensures elements with an ARIA role that require child roles contain them",
        "help": "Certain ARIA roles must contain particular children",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-required-children?application=webdriverjs",
        "id": "aria-required-children",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures elements with an ARIA role that require parent roles are contained by them",
        "help": "Certain ARIA roles must be contained by particular parents",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-required-parent?application=webdriverjs",
        "id": "aria-required-parent",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures all elements with a role attribute use a valid value",
        "help": "ARIA roles used must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-roles?application=webdriverjs",
        "id": "aria-roles",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
      {
        "description": "Ensures all ARIA attributes have valid values",
        "help": "ARIA attributes must conform to valid values",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr-value?application=webdriverjs",
        "id": "aria-valid-attr-value",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
      {
        "description": "Ensures attributes that begin with aria- are valid ARIA attributes",
        "help": "ARIA attributes must conform to valid names",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-valid-attr?application=webdriverjs",
        "id": "aria-valid-attr",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
      {
        "description": "Ensure the autocomplete attribute is correct and suitable for the form field",
        "help": "autocomplete attribute must be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/autocomplete-valid?application=webdriverjs",
        "id": "autocomplete-valid",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.forms",
          "wcag21aa",
          "wcag135"
        ]
      },
      {
        "description": "Ensures <blink> elements are not used",
        "help": "<blink> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/blink?application=webdriverjs",
        "id": "blink",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.time-and-media",
          "wcag2a",
          "wcag222",
          "section508",
          "section508.22.j"
        ]
      },
      {
        "description": "Ensures buttons have discernible text",
        "help": "Buttons must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/button-name?application=webdriverjs",
        "id": "button-name",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensures each page has at least one mechanism for a user to bypass navigation and jump straight to the content",
        "help": "Page must have means to bypass repeated blocks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/bypass?application=webdriverjs",
        "id": "bypass",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.keyboard",
          "wcag2a",
          "wcag241",
          "section508",
          "section508.22.o"
        ]
      },
      {
        "description": "Ensures related <input type=\"checkbox\"> elements have a group and that the group designation is consistent",
        "help": "Checkbox inputs with the same name attribute value must be part of a group",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/checkboxgroup?application=webdriverjs",
        "id": "checkboxgroup",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.forms",
          "best-practice"
        ]
      },
      {
        "description": "Ensures the contrast between foreground and background colors meets WCAG 2 AA contrast ratio thresholds",
        "help": "Elements must have sufficient color contrast",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/color-contrast?application=webdriverjs",
        "id": "color-contrast",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.color",
          "wcag2aa",
          "wcag143"
        ]
      },
      {
        "description": "Ensures <dl> elements are structured correctly",
        "help": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/definition-list?application=webdriverjs",
        "id": "definition-list",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures <dt> and <dd> elements are contained by a <dl>",
        "help": "<dt> and <dd> elements must be contained by a <dl>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/dlitem?application=webdriverjs",
        "id": "dlitem",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures every id attribute value of active elements is unique",
        "help": "IDs of active elements must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/duplicate-id-active?application=webdriverjs",
        "id": "duplicate-id-active",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag411"
        ]
      },
      {
        "description": "Ensures every id attribute value used in ARIA and in labels is unique",
        "help": "IDs used in ARIA and labels must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/duplicate-id-aria?application=webdriverjs",
        "id": "duplicate-id-aria",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag411"
        ]
      },
      {
        "description": "Ensures every id attribute value is unique",
        "help": "id attribute value must be unique",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/duplicate-id?application=webdriverjs",
        "id": "duplicate-id",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag411"
        ]
      },
      {
        "description": "Ensures headings have discernible text",
        "help": "Headings must not be empty",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/empty-heading?application=webdriverjs",
        "id": "empty-heading",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.name-role-value",
          "best-practice"
        ]
      },
      {
        "description": "Ensures <iframe> and <frame> elements contain the axe-core script",
        "help": "Frames must be tested with axe-core",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/frame-tested?application=webdriverjs",
        "id": "frame-tested",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.structure",
          "review-item"
        ]
      },
      {
        "description": "Ensures <iframe> and <frame> elements contain a unique title attribute",
        "help": "Frames must have a unique title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/frame-title-unique?application=webdriverjs",
        "id": "frame-title-unique",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ]
      },
      {
        "description": "Ensures <iframe> and <frame> elements contain a non-empty title attribute",
        "help": "Frames must have title attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/frame-title?application=webdriverjs",
        "id": "frame-title",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag241",
          "wcag412",
          "section508",
          "section508.22.i"
        ]
      },
      {
        "description": "Ensures the order of headings is semantically correct",
        "help": "Heading levels should only increase by one",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/heading-order?application=webdriverjs",
        "id": "heading-order",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensures the lang attribute of the <html> element has a valid value",
        "help": "<html> element must have a valid value for the lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/html-lang-valid?application=webdriverjs",
        "id": "html-lang-valid",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311"
        ]
      },
      {
        "description": "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page",
        "help": "HTML elements with lang and xml:lang must have the same base language",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/html-xml-lang-mismatch?application=webdriverjs",
        "id": "html-xml-lang-mismatch",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311"
        ]
      },
      {
        "description": "Ensures <img> elements have alternate text or a role of none or presentation",
        "help": "Images must have alternate text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/image-alt?application=webdriverjs",
        "id": "image-alt",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensure button and link text is not repeated as image alternative",
        "help": "Text of buttons and links should not be repeated in the image alternative",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/image-redundant-alt?application=webdriverjs",
        "id": "image-redundant-alt",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "best-practice"
        ]
      },
      {
        "description": "Ensures <input type=\"image\"> elements have alternate text",
        "help": "Image buttons must have alternate text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/input-image-alt?application=webdriverjs",
        "id": "input-image-alt",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensures that every form element is not solely labeled using the title or aria-describedby attributes",
        "help": "Form elements should have a visible label",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/label-title-only?application=webdriverjs",
        "id": "label-title-only",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.forms",
          "best-practice"
        ]
      },
      {
        "description": "Ensures every form element has a label",
        "help": "Form elements must have labels",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/label?application=webdriverjs",
        "id": "label",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.forms",
          "wcag2a",
          "wcag332",
          "wcag131",
          "section508",
          "section508.22.n"
        ]
      },
      {
        "description": "Ensures the banner landmark is at top level",
        "help": "Banner landmark must not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/landmark-banner-is-top-level?application=webdriverjs",
        "id": "landmark-banner-is-top-level",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensures the contentinfo landmark is at top level",
        "help": "Contentinfo landmark must not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/landmark-contentinfo-is-top-level?application=webdriverjs",
        "id": "landmark-contentinfo-is-top-level",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensures the main landmark is at top level",
        "help": "Main landmark must not be contained in another landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/landmark-main-is-top-level?application=webdriverjs",
        "id": "landmark-main-is-top-level",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensures presentational <table> elements do not use <th>, <caption> elements or the summary attribute",
        "help": "Layout tables must not use data table elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/layout-table?application=webdriverjs",
        "id": "layout-table",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.semantics",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures links have discernible text",
        "help": "Links must have discernible text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/link-name?application=webdriverjs",
        "id": "link-name",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.name-role-value",
          "wcag2a",
          "wcag412",
          "wcag244",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensures that lists are structured correctly",
        "help": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/list?application=webdriverjs",
        "id": "list",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures <li> elements are used semantically",
        "help": "<li> elements must be contained in a <ul> or <ol>",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/listitem?application=webdriverjs",
        "id": "listitem",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.structure",
          "wcag2a",
          "wcag131"
        ]
      },
      {
        "description": "Ensures <marquee> elements are not used",
        "help": "<marquee> elements are deprecated and must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/marquee?application=webdriverjs",
        "id": "marquee",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.parsing",
          "wcag2a",
          "wcag222"
        ]
      },
      {
        "description": "Ensures <meta http-equiv=\"refresh\"> is not used",
        "help": "Timed refresh must not exist",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/meta-refresh?application=webdriverjs",
        "id": "meta-refresh",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.time",
          "wcag2a",
          "wcag2aaa",
          "wcag221",
          "wcag224",
          "wcag325"
        ]
      },
      {
        "description": "Ensures <meta name=\"viewport\"> can scale a significant amount",
        "help": "Users should be able to zoom and scale the text up to 500%",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/meta-viewport-large?application=webdriverjs",
        "id": "meta-viewport-large",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.sensory-and-visual-cues",
          "best-practice"
        ]
      },
      {
        "description": "Ensures <meta name=\"viewport\"> does not disable text scaling and zooming",
        "help": "Zooming and scaling must not be disabled",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/meta-viewport?application=webdriverjs",
        "id": "meta-viewport",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.sensory-and-visual-cues",
          "wcag2aa",
          "wcag144"
        ]
      },
      {
        "description": "Ensures <object> elements have alternate text",
        "help": "<object> elements must have alternate text",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/object-alt?application=webdriverjs",
        "id": "object-alt",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag111",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensures related <input type=\"radio\"> elements have a group and that the group designation is consistent",
        "help": "Radio inputs with the same name attribute value must be part of a group",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/radiogroup?application=webdriverjs",
        "id": "radiogroup",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.forms",
          "best-practice"
        ]
      },
      {
        "description": "Ensures the scope attribute is used correctly on tables",
        "help": "scope attribute should be used correctly",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/scope-attr-valid?application=webdriverjs",
        "id": "scope-attr-valid",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.tables",
          "best-practice"
        ]
      },
      {
        "description": "Ensures that server-side image maps are not used",
        "help": "Server-side image maps must not be used",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/server-side-image-map?application=webdriverjs",
        "id": "server-side-image-map",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag211",
          "section508",
          "section508.22.f"
        ]
      },
      {
        "description": "Ensure all skip links have a focusable target",
        "help": "The skip-link target should exist and be focusable",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/skip-link?application=webdriverjs",
        "id": "skip-link",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.keyboard",
          "best-practice"
        ]
      },
      {
        "description": "Ensures tabindex attribute values are not greater than 0",
        "help": "Elements should not have tabindex greater than zero",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/tabindex?application=webdriverjs",
        "id": "tabindex",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.keyboard",
          "best-practice"
        ]
      },
      {
        "description": "Ensure that tables do not have the same summary and caption",
        "help": "The <caption> element should not contain the same text as the summary attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/table-duplicate-name?application=webdriverjs",
        "id": "table-duplicate-name",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.tables",
          "best-practice"
        ]
      },
      {
        "description": "Ensure that each cell in a table using the headers refers to another cell in that table",
        "help": "All cells in a table element that use the headers attribute must only refer to other cells of that same table",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/td-headers-attr?application=webdriverjs",
        "id": "td-headers-attr",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g"
        ]
      },
      {
        "description": "Ensure that each table header in a data table refers to data cells",
        "help": "All th elements and elements with role=columnheader/rowheader must have data cells they describe",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/th-has-data-cells?application=webdriverjs",
        "id": "th-has-data-cells",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.tables",
          "wcag2a",
          "wcag131",
          "section508",
          "section508.22.g"
        ]
      },
      {
        "description": "Ensures lang attributes have valid values",
        "help": "lang attribute must have a valid value",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/valid-lang?application=webdriverjs",
        "id": "valid-lang",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.language",
          "wcag2aa",
          "wcag312"
        ]
      },
      {
        "description": "Ensures <video> elements have captions",
        "help": "<video> elements must have captions",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/video-caption?application=webdriverjs",
        "id": "video-caption",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag122",
          "section508",
          "section508.22.a"
        ]
      },
      {
        "description": "Ensures <video> elements have audio descriptions",
        "help": "<video> elements must have an audio description track",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/video-description?application=webdriverjs",
        "id": "video-description",
        "impact": null,
        "nodes": [],
        "tags": [
          "cat.text-alternatives",
          "wcag2aa",
          "wcag125",
          "section508",
          "section508.22.b"
        ]
      }
    ],
    "incomplete": [],
    "passes": [
      {
        "description": "Ensures aria-hidden='true' is not present on the document body.",
        "help": "aria-hidden='true' must not be present on the document body",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/aria-hidden-body?application=webdriverjs",
        "id": "aria-hidden-body",
        "impact": null,
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": null,
                "id": "aria-hidden-body",
                "impact": "critical",
                "message": "No aria-hidden attribute is present on document body",
                "relatedNodes": []
              }
            ],
            "html": "<body></body>",
            "impact": null,
            "none": [],
            "target": [
              "body"
            ]
          }
        ],
        "tags": [
          "cat.aria",
          "wcag2a",
          "wcag412"
        ]
      },
      {
        "description": "Ensures the page has at most one banner landmark",
        "help": "Page must not have more than one banner landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/landmark-no-duplicate-banner?application=webdriverjs",
        "id": "landmark-no-duplicate-banner",
        "impact": null,
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": null,
                "id": "page-no-duplicate-banner",
                "impact": "moderate",
                "message": "Document has no more than one banner landmark",
                "relatedNodes": []
              }
            ],
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": null,
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensures the page has at most one contentinfo landmark",
        "help": "Page must not have more than one contentinfo landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/landmark-no-duplicate-contentinfo?application=webdriverjs",
        "id": "landmark-no-duplicate-contentinfo",
        "impact": null,
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": null,
                "id": "page-no-duplicate-contentinfo",
                "impact": "moderate",
                "message": "Page does not have more than one contentinfo landmark",
                "relatedNodes": []
              }
            ],
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": null,
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensures all page content is contained by landmarks",
        "help": "All page content must be contained by landmarks",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/region?application=webdriverjs",
        "id": "region",
        "impact": null,
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": null,
                "id": "region",
                "impact": "moderate",
                "message": "All page content is contained by landmarks",
                "relatedNodes": []
              }
            ],
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": null,
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.keyboard",
          "best-practice"
        ]
      }
    ],
    "timestamp": "2019-03-18T21:17:11.340Z",
    "url": "chrome-error://chromewebdata/",
    "violations": [
      {
        "description": "Ensures each HTML document contains a non-empty <title> element",
        "help": "Documents must have <title> element to aid in navigation",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/document-title?application=webdriverjs",
        "id": "document-title",
        "impact": "serious",
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": null,
                "id": "doc-has-title",
                "impact": "serious",
                "message": "Document does not have a non-empty <title> element",
                "relatedNodes": []
              }
            ],
            "failureSummary": "Fix any of the following:\n  Document does not have a non-empty <title> element",
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": "serious",
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.text-alternatives",
          "wcag2a",
          "wcag242"
        ]
      },
      {
        "description": "Ensures every HTML document has a lang attribute",
        "help": "<html> element must have a lang attribute",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/html-has-lang?application=webdriverjs",
        "id": "html-has-lang",
        "impact": "serious",
        "nodes": [
          {
            "all": [],
            "any": [
              {
                "data": null,
                "id": "has-lang",
                "impact": "serious",
                "message": "The <html> element does not have a lang attribute",
                "relatedNodes": []
              }
            ],
            "failureSummary": "Fix any of the following:\n  The <html> element does not have a lang attribute",
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": "serious",
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.language",
          "wcag2a",
          "wcag311"
        ]
      },
      {
        "description": "Ensures the page has only one main landmark and each iframe in the page has at most one main landmark",
        "help": "Page must have one main landmark",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/landmark-one-main?application=webdriverjs",
        "id": "landmark-one-main",
        "impact": "moderate",
        "nodes": [
          {
            "all": [
              {
                "data": null,
                "id": "page-has-main",
                "impact": "moderate",
                "message": "Page does not have a main landmark",
                "relatedNodes": []
              }
            ],
            "any": [],
            "failureSummary": "Fix all of the following:\n  Page does not have a main landmark",
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": "moderate",
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      },
      {
        "description": "Ensure that the page, or at least one of its frames contains a level-one heading",
        "help": "Page must contain a level-one heading",
        "helpUrl": "https://dequeuniversity.com/rules/axe/3.1/page-has-heading-one?application=webdriverjs",
        "id": "page-has-heading-one",
        "impact": "moderate",
        "nodes": [
          {
            "all": [
              {
                "data": null,
                "id": "page-has-heading-one",
                "impact": "moderate",
                "message": "Page must have a level-one heading",
                "relatedNodes": []
              }
            ],
            "any": [],
            "failureSummary": "Fix all of the following:\n  Page must have a level-one heading",
            "html": "<html class=\"deque-axe-is-ready\"><head></head><body></body><script>document.documentElement.classList.add(\"deque-axe-is-ready\");</script></html>",
            "impact": "moderate",
            "none": [],
            "target": [
              "html"
            ]
          }
        ],
        "tags": [
          "cat.semantics",
          "best-practice"
        ]
      }
    ]
  }
]
