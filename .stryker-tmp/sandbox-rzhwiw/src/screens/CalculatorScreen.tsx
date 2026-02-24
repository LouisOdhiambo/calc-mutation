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
import React from 'react';
import { Text, View } from 'react-native';
import Button from '../components/Button';
import { styles } from '../theme/appTheme';
import useCalculator from '../hooks/useCalculator';
const CalculatorScreen = () => {
  if (stryMutAct_9fa48("137")) {
    {}
  } else {
    stryCov_9fa48("137");
    const {
      values,
      actions
    } = useCalculator();
    return <View style={styles.container}>
      {stryMutAct_9fa48("140") ? values.previousNumber !== '0' || <Text style={styles.smallResult}>{values.previousNumber}</Text> : stryMutAct_9fa48("139") ? false : stryMutAct_9fa48("138") ? true : (stryCov_9fa48("138", "139", "140"), (stryMutAct_9fa48("142") ? values.previousNumber === '0' : stryMutAct_9fa48("141") ? true : (stryCov_9fa48("141", "142"), values.previousNumber !== (stryMutAct_9fa48("143") ? "" : (stryCov_9fa48("143"), '0')))) && <Text style={styles.smallResult}>{values.previousNumber}</Text>)}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {values.number}
      </Text>

      <View style={styles.row}>
        <Button text="C" color="#9B9B9B" onPress={actions.clear} />
        <Button text="+/-" color="#9B9B9B" onPress={actions.positiveNegative} />
        <Button text="del" color="#9B9B9B" onPress={actions.del} />
        <Button text="/" color="#FF9427" onPress={actions.btnDivide} />
      </View>

      <View style={styles.row}>
        <Button text="7" onPress={actions.buildNumber} />
        <Button text="8" onPress={actions.buildNumber} />
        <Button text="9" onPress={actions.buildNumber} />
        <Button text="x" color="#FF9427" onPress={actions.btnMultiply} />
      </View>

      <View style={styles.row}>
        <Button text="4" onPress={actions.buildNumber} />
        <Button text="5" onPress={actions.buildNumber} />
        <Button text="6" onPress={actions.buildNumber} />
        <Button text="-" color="#FF9427" onPress={actions.btnMinus} />
      </View>

      <View style={styles.row}>
        <Button text="1" onPress={actions.buildNumber} />
        <Button text="2" onPress={actions.buildNumber} />
        <Button text="3" onPress={actions.buildNumber} />
        <Button text="+" color="#FF9427" onPress={actions.btnSum} />
      </View>

      <View style={styles.row}>
        <Button text="0" expanded onPress={actions.buildNumber} />
        <Button text="." onPress={actions.buildNumber} />
        <Button text="=" color="#FF9427" onPress={actions.calculate} />
      </View>
    </View>;
  }
};
export default CalculatorScreen;