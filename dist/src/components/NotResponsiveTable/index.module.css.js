
const digest = '280fdddde751f0d6d6fcfca31e8dd74ac066efa5ecffb315dc2ac80712f4d7c1';
const css = `._NotResponsiveTable_1nwue_1 {
  overflow: auto;
}

._NotResponsiveTable_1nwue_1:not(:first-child) {
  margin-top: 1.5em
}

._NotResponsiveTable_1nwue_1 > table {
  min-width: 1160px
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
    
export default {"NotResponsiveTable":"_NotResponsiveTable_1nwue_1","notResponsiveTable":"_NotResponsiveTable_1nwue_1"};
export { css, digest };
  