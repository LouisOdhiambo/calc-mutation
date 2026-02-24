/* eslint-disable react-native/no-inline-styles */
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
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
type Props = {
  text: string;
  color?: string;
  expanded?: boolean;
  onPress: (value: string) => void;
};
const Button = ({
  text,
  color = stryMutAct_9fa48("3") ? "" : (stryCov_9fa48("3"), '#2D2D2D'),
  expanded = stryMutAct_9fa48("4") ? true : (stryCov_9fa48("4"), false),
  onPress
}: Props) => {
  if (stryMutAct_9fa48("5")) {
    {}
  } else {
    stryCov_9fa48("5");
    return <TouchableOpacity onPress={stryMutAct_9fa48("6") ? () => undefined : (stryCov_9fa48("6"), () => onPress(text))}>
      <View style={stryMutAct_9fa48("7") ? {} : (stryCov_9fa48("7"), {
        ...styles.button,
        backgroundColor: color,
        width: expanded ? 180 : 80
      })}>
        <Text style={stryMutAct_9fa48("8") ? {} : (stryCov_9fa48("8"), {
          ...styles.buttonText,
          color: (stryMutAct_9fa48("11") ? color !== '#9B9B9B' : stryMutAct_9fa48("10") ? false : stryMutAct_9fa48("9") ? true : (stryCov_9fa48("9", "10", "11"), color === (stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), '#9B9B9B')))) ? stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), 'black') : stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), 'white')
        })}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>;
  }
};
export default Button;