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
export const styles = StyleSheet.create(stryMutAct_9fa48("144") ? {} : (stryCov_9fa48("144"), {
  background: stryMutAct_9fa48("145") ? {} : (stryCov_9fa48("145"), {
    flex: 1,
    backgroundColor: stryMutAct_9fa48("146") ? "" : (stryCov_9fa48("146"), 'black'),
    paddingHorizontal: 20
  }),
  container: stryMutAct_9fa48("147") ? {} : (stryCov_9fa48("147"), {
    flex: 1,
    justifyContent: stryMutAct_9fa48("148") ? "" : (stryCov_9fa48("148"), 'flex-end')
  }),
  result: stryMutAct_9fa48("149") ? {} : (stryCov_9fa48("149"), {
    color: stryMutAct_9fa48("150") ? "" : (stryCov_9fa48("150"), 'white'),
    fontSize: 60,
    textAlign: stryMutAct_9fa48("151") ? "" : (stryCov_9fa48("151"), 'right')
  }),
  smallResult: stryMutAct_9fa48("152") ? {} : (stryCov_9fa48("152"), {
    color: stryMutAct_9fa48("153") ? "" : (stryCov_9fa48("153"), 'rgba(255,255,255, 0.5)'),
    fontSize: 30,
    textAlign: stryMutAct_9fa48("154") ? "" : (stryCov_9fa48("154"), 'right')
  }),
  row: stryMutAct_9fa48("155") ? {} : (stryCov_9fa48("155"), {
    flexDirection: stryMutAct_9fa48("156") ? "" : (stryCov_9fa48("156"), 'row'),
    justifyContent: stryMutAct_9fa48("157") ? "" : (stryCov_9fa48("157"), 'center'),
    marginBottom: 18,
    paddingHorizontal: 10,
    gap: 20
  }),
  button: stryMutAct_9fa48("158") ? {} : (stryCov_9fa48("158"), {
    width: 80,
    height: 80,
    backgroundColor: stryMutAct_9fa48("159") ? "" : (stryCov_9fa48("159"), '#2D2D2D'),
    borderRadius: 100,
    justifyContent: stryMutAct_9fa48("160") ? "" : (stryCov_9fa48("160"), 'center'),
    alignItems: stryMutAct_9fa48("161") ? "" : (stryCov_9fa48("161"), 'center')
  }),
  buttonText: stryMutAct_9fa48("162") ? {} : (stryCov_9fa48("162"), {
    textAlign: stryMutAct_9fa48("163") ? "" : (stryCov_9fa48("163"), 'center'),
    padding: 10,
    fontSize: 30,
    color: stryMutAct_9fa48("164") ? "" : (stryCov_9fa48("164"), 'white'),
    fontWeight: stryMutAct_9fa48("165") ? "" : (stryCov_9fa48("165"), '500')
  })
}));