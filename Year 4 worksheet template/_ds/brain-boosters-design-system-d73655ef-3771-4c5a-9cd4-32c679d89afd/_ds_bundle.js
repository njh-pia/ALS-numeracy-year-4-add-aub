/* @ds-bundle: {"format":4,"namespace":"BrainBoostersDesignSystem_d73655","components":[{"name":"ActivityBox","sourcePath":"components/worksheet/ActivityBox.jsx"}],"sourceHashes":{"components/worksheet/ActivityBox.jsx":"beb9889ab51e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrainBoostersDesignSystem_d73655 = window.BrainBoostersDesignSystem_d73655 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/worksheet/ActivityBox.jsx
try { (() => {
function ActivityBox({
  number,
  label,
  placeholder,
  width,
  height,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: width || '9.37cm',
      height: height || '5.97cm',
      border: 'var(--box-border-w) solid var(--border-structural)',
      borderRadius: 'var(--box-radius)',
      boxSizing: 'border-box',
      padding: 'var(--box-pad-top) var(--box-pad-right) var(--box-pad-bottom) var(--box-pad-left)',
      background: 'var(--surface-paper)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 'var(--badge-offset-left)',
      top: 'var(--badge-offset-top)',
      width: 'var(--badge-size)',
      height: 'var(--badge-size)',
      borderRadius: '50%',
      border: 'var(--badge-border-w) solid var(--border-structural)',
      background: 'var(--surface-paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-label)',
      fontWeight: 'var(--weight-badge)',
      fontSize: 'var(--text-badge)',
      color: 'var(--text-primary)'
    }
  }, number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--line-height-body)',
      paddingLeft: '0.15cm'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-label)',
      marginBottom: '0.15cm'
    }
  }, label), placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-body)'
    }
  }, placeholder) : null));
}
Object.assign(__ds_scope, { ActivityBox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/worksheet/ActivityBox.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ActivityBox = __ds_scope.ActivityBox;

})();
