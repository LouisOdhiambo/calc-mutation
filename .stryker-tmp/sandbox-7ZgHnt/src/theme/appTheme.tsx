// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create(stryMutAct_9fa48("22") ? {} : (stryCov_9fa48("22"), {
  background: stryMutAct_9fa48("23") ? {} : (stryCov_9fa48("23"), {
    flex: 1,
    backgroundColor: stryMutAct_9fa48("24") ? "" : (stryCov_9fa48("24"), 'black'),
    paddingHorizontal: 20
  }),
  container: stryMutAct_9fa48("25") ? {} : (stryCov_9fa48("25"), {
    flex: 1,
    justifyContent: stryMutAct_9fa48("26") ? "" : (stryCov_9fa48("26"), 'flex-end')
  }),
  result: stryMutAct_9fa48("27") ? {} : (stryCov_9fa48("27"), {
    color: stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), 'white'),
    fontSize: 60,
    textAlign: stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), 'right')
  }),
  smallResult: stryMutAct_9fa48("30") ? {} : (stryCov_9fa48("30"), {
    color: stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), 'rgba(255,255,255, 0.5)'),
    fontSize: 30,
    textAlign: stryMutAct_9fa48("32") ? "" : (stryCov_9fa48("32"), 'right')
  }),
  row: stryMutAct_9fa48("33") ? {} : (stryCov_9fa48("33"), {
    flexDirection: stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), 'row'),
    justifyContent: stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), 'center'),
    marginBottom: 18,
    paddingHorizontal: 10,
    gap: 20
  }),
  button: stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
    width: 80,
    height: 80,
    backgroundColor: stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), '#2D2D2D'),
    borderRadius: 100,
    justifyContent: stryMutAct_9fa48("38") ? "" : (stryCov_9fa48("38"), 'center'),
    alignItems: stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), 'center')
  }),
  buttonText: stryMutAct_9fa48("40") ? {} : (stryCov_9fa48("40"), {
    textAlign: stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), 'center'),
    padding: 10,
    fontSize: 30,
    color: stryMutAct_9fa48("42") ? "" : (stryCov_9fa48("42"), 'white'),
    fontWeight: stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), '500')
  })
}));