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
import { useRef, useState } from 'react';
enum Operator {
  sum,
  minus,
  multiply,
  divide,
}
function useCalculator() {
  if (stryMutAct_9fa48("15")) {
    {}
  } else {
    stryCov_9fa48("15");
    const [number, setNumber] = useState(stryMutAct_9fa48("16") ? "" : (stryCov_9fa48("16"), '0'));
    const [previousNumber, setPreviousNumber] = useState(stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), '0'));
    const lastOperation = useRef<Operator>();
    const clear = () => {
      if (stryMutAct_9fa48("18")) {
        {}
      } else {
        stryCov_9fa48("18");
        setNumber(stryMutAct_9fa48("19") ? "" : (stryCov_9fa48("19"), '0'));
        setPreviousNumber(stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), '0'));
      }
    };
    const buildNumber = (value: string) => {
      if (stryMutAct_9fa48("21")) {
        {}
      } else {
        stryCov_9fa48("21");
        // Not allow multiple dot
        if (stryMutAct_9fa48("24") ? number.includes('.') || value === '.' : stryMutAct_9fa48("23") ? false : stryMutAct_9fa48("22") ? true : (stryCov_9fa48("22", "23", "24"), number.includes(stryMutAct_9fa48("25") ? "" : (stryCov_9fa48("25"), '.')) && (stryMutAct_9fa48("27") ? value !== '.' : stryMutAct_9fa48("26") ? true : (stryCov_9fa48("26", "27"), value === (stryMutAct_9fa48("28") ? "" : (stryCov_9fa48("28"), '.')))))) {
          if (stryMutAct_9fa48("29")) {
            {}
          } else {
            stryCov_9fa48("29");
            return;
          }
        }
        if (stryMutAct_9fa48("32") ? number.startsWith('0') && number.startsWith('-0') : stryMutAct_9fa48("31") ? false : stryMutAct_9fa48("30") ? true : (stryCov_9fa48("30", "31", "32"), (stryMutAct_9fa48("33") ? number.endsWith('0') : (stryCov_9fa48("33"), number.startsWith(stryMutAct_9fa48("34") ? "" : (stryCov_9fa48("34"), '0')))) || (stryMutAct_9fa48("35") ? number.endsWith('-0') : (stryCov_9fa48("35"), number.startsWith(stryMutAct_9fa48("36") ? "" : (stryCov_9fa48("36"), '-0')))))) {
          if (stryMutAct_9fa48("37")) {
            {}
          } else {
            stryCov_9fa48("37");
            if (stryMutAct_9fa48("40") ? value !== '.' : stryMutAct_9fa48("39") ? false : stryMutAct_9fa48("38") ? true : (stryCov_9fa48("38", "39", "40"), value === (stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), '.')))) {
              if (stryMutAct_9fa48("42")) {
                {}
              } else {
                stryCov_9fa48("42");
                setNumber(stryMutAct_9fa48("43") ? number - value : (stryCov_9fa48("43"), number + value));
              }
            } else if (stryMutAct_9fa48("46") ? number.includes('.') || value === '0' : stryMutAct_9fa48("45") ? false : stryMutAct_9fa48("44") ? true : (stryCov_9fa48("44", "45", "46"), number.includes(stryMutAct_9fa48("47") ? "" : (stryCov_9fa48("47"), '.')) && (stryMutAct_9fa48("49") ? value !== '0' : stryMutAct_9fa48("48") ? true : (stryCov_9fa48("48", "49"), value === (stryMutAct_9fa48("50") ? "" : (stryCov_9fa48("50"), '0')))))) {
              if (stryMutAct_9fa48("51")) {
                {}
              } else {
                stryCov_9fa48("51");
                setNumber(stryMutAct_9fa48("52") ? number - value : (stryCov_9fa48("52"), number + value));
              }
            } else if (stryMutAct_9fa48("55") ? !number.includes('.') || value !== '0' : stryMutAct_9fa48("54") ? false : stryMutAct_9fa48("53") ? true : (stryCov_9fa48("53", "54", "55"), (stryMutAct_9fa48("56") ? number.includes('.') : (stryCov_9fa48("56"), !number.includes(stryMutAct_9fa48("57") ? "" : (stryCov_9fa48("57"), '.')))) && (stryMutAct_9fa48("59") ? value === '0' : stryMutAct_9fa48("58") ? true : (stryCov_9fa48("58", "59"), value !== (stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), '0')))))) {
              if (stryMutAct_9fa48("61")) {
                {}
              } else {
                stryCov_9fa48("61");
                setNumber(value);
              }
            } else if (stryMutAct_9fa48("64") ? !number.includes('.') || value === '0' : stryMutAct_9fa48("63") ? false : stryMutAct_9fa48("62") ? true : (stryCov_9fa48("62", "63", "64"), (stryMutAct_9fa48("65") ? number.includes('.') : (stryCov_9fa48("65"), !number.includes(stryMutAct_9fa48("66") ? "" : (stryCov_9fa48("66"), '.')))) && (stryMutAct_9fa48("68") ? value !== '0' : stryMutAct_9fa48("67") ? true : (stryCov_9fa48("67", "68"), value === (stryMutAct_9fa48("69") ? "" : (stryCov_9fa48("69"), '0')))))) {
              if (stryMutAct_9fa48("70")) {
                {}
              } else {
                stryCov_9fa48("70");
                setNumber(number);
              }
            } else {
              if (stryMutAct_9fa48("71")) {
                {}
              } else {
                stryCov_9fa48("71");
                setNumber(stryMutAct_9fa48("72") ? number - value : (stryCov_9fa48("72"), number + value));
              }
            }
          }
        } else {
          if (stryMutAct_9fa48("73")) {
            {}
          } else {
            stryCov_9fa48("73");
            setNumber(stryMutAct_9fa48("74") ? number - value : (stryCov_9fa48("74"), number + value));
          }
        }
      }
    };
    const positiveNegative = () => {
      if (stryMutAct_9fa48("75")) {
        {}
      } else {
        stryCov_9fa48("75");
        if (stryMutAct_9fa48("77") ? false : stryMutAct_9fa48("76") ? true : (stryCov_9fa48("76", "77"), number.includes(stryMutAct_9fa48("78") ? "" : (stryCov_9fa48("78"), '-')))) {
          if (stryMutAct_9fa48("79")) {
            {}
          } else {
            stryCov_9fa48("79");
            setNumber(number.replace(stryMutAct_9fa48("80") ? "" : (stryCov_9fa48("80"), '-'), stryMutAct_9fa48("81") ? "Stryker was here!" : (stryCov_9fa48("81"), '')));
          }
        } else {
          if (stryMutAct_9fa48("82")) {
            {}
          } else {
            stryCov_9fa48("82");
            setNumber((stryMutAct_9fa48("83") ? "" : (stryCov_9fa48("83"), '-')) + number);
          }
        }
      }
    };
    const changeNumberByPrevious = () => {
      if (stryMutAct_9fa48("84")) {
        {}
      } else {
        stryCov_9fa48("84");
        if (stryMutAct_9fa48("87") ? number.startsWith('.') : stryMutAct_9fa48("86") ? false : stryMutAct_9fa48("85") ? true : (stryCov_9fa48("85", "86", "87"), number.endsWith(stryMutAct_9fa48("88") ? "" : (stryCov_9fa48("88"), '.')))) {
          if (stryMutAct_9fa48("89")) {
            {}
          } else {
            stryCov_9fa48("89");
            setPreviousNumber(stryMutAct_9fa48("90") ? number : (stryCov_9fa48("90"), number.slice(0, stryMutAct_9fa48("91") ? +1 : (stryCov_9fa48("91"), -1))));
          }
        } else {
          if (stryMutAct_9fa48("92")) {
            {}
          } else {
            stryCov_9fa48("92");
            setPreviousNumber(number);
          }
        }
        setNumber(stryMutAct_9fa48("93") ? "" : (stryCov_9fa48("93"), '0'));
      }
    };
    const del = () => {
      if (stryMutAct_9fa48("94")) {
        {}
      } else {
        stryCov_9fa48("94");
        let negative = stryMutAct_9fa48("95") ? "Stryker was here!" : (stryCov_9fa48("95"), '');
        let numberTemp = number;
        if (stryMutAct_9fa48("97") ? false : stryMutAct_9fa48("96") ? true : (stryCov_9fa48("96", "97"), number.includes(stryMutAct_9fa48("98") ? "" : (stryCov_9fa48("98"), '-')))) {
          if (stryMutAct_9fa48("99")) {
            {}
          } else {
            stryCov_9fa48("99");
            negative = stryMutAct_9fa48("100") ? "" : (stryCov_9fa48("100"), '-');
            numberTemp = stryMutAct_9fa48("101") ? number : (stryCov_9fa48("101"), number.substring(1));
          }
        }
        if (stryMutAct_9fa48("105") ? numberTemp.length <= 1 : stryMutAct_9fa48("104") ? numberTemp.length >= 1 : stryMutAct_9fa48("103") ? false : stryMutAct_9fa48("102") ? true : (stryCov_9fa48("102", "103", "104", "105"), numberTemp.length > 1)) {
          if (stryMutAct_9fa48("106")) {
            {}
          } else {
            stryCov_9fa48("106");
            setNumber(stryMutAct_9fa48("107") ? negative - numberTemp.slice(0, -1) : (stryCov_9fa48("107"), negative + (stryMutAct_9fa48("108") ? numberTemp : (stryCov_9fa48("108"), numberTemp.slice(0, stryMutAct_9fa48("109") ? +1 : (stryCov_9fa48("109"), -1))))));
          }
        } else {
          if (stryMutAct_9fa48("110")) {
            {}
          } else {
            stryCov_9fa48("110");
            setNumber(stryMutAct_9fa48("111") ? "" : (stryCov_9fa48("111"), '0'));
          }
        }
      }
    };
    const btnDivide = () => {
      if (stryMutAct_9fa48("112")) {
        {}
      } else {
        stryCov_9fa48("112");
        changeNumberByPrevious();
        lastOperation.current = Operator.divide;
      }
    };
    const btnMultiply = () => {
      if (stryMutAct_9fa48("113")) {
        {}
      } else {
        stryCov_9fa48("113");
        changeNumberByPrevious();
        lastOperation.current = Operator.multiply;
      }
    };
    const btnMinus = () => {
      if (stryMutAct_9fa48("114")) {
        {}
      } else {
        stryCov_9fa48("114");
        changeNumberByPrevious();
        lastOperation.current = Operator.minus;
      }
    };
    const btnSum = () => {
      if (stryMutAct_9fa48("115")) {
        {}
      } else {
        stryCov_9fa48("115");
        changeNumberByPrevious();
        lastOperation.current = Operator.sum;
      }
    };
    const calculate = () => {
      if (stryMutAct_9fa48("116")) {
        {}
      } else {
        stryCov_9fa48("116");
        const operator1 = Number(number);
        const operator2 = Number(previousNumber);
        switch (lastOperation.current) {
          case Operator.sum:
            if (stryMutAct_9fa48("117")) {} else {
              stryCov_9fa48("117");
              setNumber(stryMutAct_9fa48("118") ? `` : (stryCov_9fa48("118"), `${stryMutAct_9fa48("119") ? operator1 - operator2 : (stryCov_9fa48("119"), operator1 + operator2)}`));
              break;
            }
          case Operator.minus:
            if (stryMutAct_9fa48("120")) {} else {
              stryCov_9fa48("120");
              setNumber(stryMutAct_9fa48("121") ? `` : (stryCov_9fa48("121"), `${stryMutAct_9fa48("122") ? operator2 + operator1 : (stryCov_9fa48("122"), operator2 - operator1)}`));
              break;
            }
          case Operator.multiply:
            if (stryMutAct_9fa48("123")) {} else {
              stryCov_9fa48("123");
              setNumber(stryMutAct_9fa48("124") ? `` : (stryCov_9fa48("124"), `${stryMutAct_9fa48("125") ? operator1 / operator2 : (stryCov_9fa48("125"), operator1 * operator2)}`));
              break;
            }
          case Operator.divide:
            if (stryMutAct_9fa48("126")) {} else {
              stryCov_9fa48("126");
              setNumber(stryMutAct_9fa48("127") ? `` : (stryCov_9fa48("127"), `${(stryMutAct_9fa48("130") ? operator1 === 0 : stryMutAct_9fa48("129") ? false : stryMutAct_9fa48("128") ? true : (stryCov_9fa48("128", "129", "130"), operator1 !== 0)) ? stryMutAct_9fa48("131") ? operator2 * operator1 : (stryCov_9fa48("131"), operator2 / operator1) : stryMutAct_9fa48("132") ? "" : (stryCov_9fa48("132"), 'Error')}`));
              break;
            }
        }
        setPreviousNumber(stryMutAct_9fa48("133") ? "" : (stryCov_9fa48("133"), '0'));
      }
    };
    return stryMutAct_9fa48("134") ? {} : (stryCov_9fa48("134"), {
      values: stryMutAct_9fa48("135") ? {} : (stryCov_9fa48("135"), {
        number,
        previousNumber
      }),
      actions: stryMutAct_9fa48("136") ? {} : (stryCov_9fa48("136"), {
        clear,
        buildNumber,
        positiveNegative,
        changeNumberByPrevious,
        del,
        btnDivide,
        btnMultiply,
        btnMinus,
        btnSum,
        calculate
      })
    });
  }
}
export default useCalculator;