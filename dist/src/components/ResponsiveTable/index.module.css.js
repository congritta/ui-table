
const digest = 'ccaaf4bd6d544d94773a7f6a90f3ac4dc8386881f5b2136bf93c377b44faaed1';
const css = `._ResponsiveTable_tgl53_1 {
  
}

._ResponsiveTable_tgl53_1:not(:first-child) {
  margin-top: 1.5em
}

._mobileCells_tgl53_17 {
  
}

._mobileCell_tgl53_17 {
  background: var(--cui-black-color-50);
}

@media(hover:hover) {
  ._mobileCell_tgl53_17[class*="_isHoverable"]:hover {
    cursor: pointer;
    background: var(--cui-black-color-100);
  }
}

@media(prefers-color-scheme: dark) {
  ._mobileCell_tgl53_17 {
    background: var(--cui-black-color-900);
    color: #fff;
  }
}

@media(prefers-color-scheme: dark) and (hover: hover) {
  ._mobileCell_tgl53_17[class*="_isHoverable"]:hover {
    background: var(--cui-black-color-800);
  }
}

._mobileCell_tgl53_17:not(:first-child) {
  margin-top: 1.5em
}

._mobileCell_tgl53_17 > [class="data-rows"] > [class="row"] {
  padding: 10px 15px
}

._mobileCell_tgl53_17 > [class="data-rows"] > [class="row"]:last-child {
  border-bottom: none
}
`;

(function() {
  if (typeof document === 'undefined') {
    return;
  }
  if (!document.getElementById(digest)) {
    var el = document.createElement('style');
    el.id = digest;
    el.textContent = css;
    document.head.appendChild(el);
  }
})();
    
export default {"ResponsiveTable":"_ResponsiveTable_tgl53_1","responsiveTable":"_ResponsiveTable_tgl53_1","mobileCells":"_mobileCells_tgl53_17","mobileCell":"_mobileCell_tgl53_17"};
export { css, digest };
  