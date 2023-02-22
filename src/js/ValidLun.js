// const number = '4485602681175708 4556143691211260 340057177723243 375987654321001'
export default function isValidLun(value) {
  // console.log(`длина  ${value.length}`)
  const reg = /^\d{15,16}$/;
  if (reg.test(value)) {
    let realSum = 0;
    const cardArrNum = Array.from(value).map(Number);
    const checkSun = cardArrNum[cardArrNum.length - 1];
    // if (value.length == 15){
    //     console.log(`${cardArrNum}`)
    // }
    const nameCard = cardArrNum[0];
    cardArrNum.pop();
    // if (value.length == 15){
    //     console.log(`${cardArrNum}`)
    // }
    // console.log(`сумма на карте ${checkSun }`)
    cardArrNum.forEach((el, index) => {
      if (index % 2 === 0) {
        el *= 2;
        if (el > 9) {
          const elDigits = Array.from(String(el)).map(Number);
          el = elDigits[0] + elDigits[1];
          realSum += el;
        } else {
          realSum += el;
        }
      } else {
        realSum += el;
      }
    });

    realSum *= 9;
    const res = Array.from(String(realSum)).map(Number)[2];
    if (res === checkSun) {
      return {
        err: false, nameCard, checkSum: checkSun, resSum: res,
      };
    }

    return {
      err: true, nameCard, checkSum: checkSun, resSum: res,
    };
  }

  return {
    err: true, nameCard: false, checkSum: false, resSum: false,
  };
}
