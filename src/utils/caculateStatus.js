import * as R from "ramda";

export const calHP = value => {
  let hp = parseInt(value || 0);
  if (hp > 100) return 100;
  return hp;
};

export const calWEAK = value => {
  return R.isEmpty(value) || R.isNil(value) ? 0 : 100;
};

export const calSTR = value => {
  const cal = value || [];
  if (cal.length > 1) return 100;
  return R.isEmpty(cal) ? 0 : 50;
};

export const calDMG = value => {
  let cal = value || [];
  let num = 0;
  R.forEach(d => {
    const { damage } = d;
    const regex = /[^\w\s]/g;
    const str = damage[damage.search(regex)];
    if (str) {
      cal = damage.split(str)[0];
      num = num + parseInt(cal);
    } else if (!str && damage) {
      num = num + parseInt(damage);
    }
  }, cal);
  return num;
};
