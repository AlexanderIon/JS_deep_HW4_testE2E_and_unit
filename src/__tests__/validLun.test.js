import isValidLun from '../js/ValidLun.js';

test('The count of numbers is LESS the the needs ', () => {
  const result = isValidLun(23);
  expect(result.err).toBe(true);
});

test.each(
  [12, 14555, 6786867, 12123, 213123123, 856026811757088787],
)(
  ('The TEST is with the numbers that are less and more than need  '),
  (valie) => {
    const res = isValidLun(valie);
    expect(res.err).toBe(true);
  },

);

test.each(
  [
    ['4929792318904671', {
      err: false, nameCard: 4, checkSum: 1, resSum: 1,
    }],
    ['4539260531469452', {
      err: false, nameCard: 4, checkSum: 2, resSum: 2,
    }],
    ['4860546836338593', {
      err: false, nameCard: 4, checkSum: 3, resSum: 3,
    }],
    ['4024007103783527', {
      err: false, nameCard: 4, checkSum: 7, resSum: 7,
    }],
    ['4024007188606692', {
      err: false, nameCard: 4, checkSum: 2, resSum: 2,
    }],
  ],
)(
  ('The test is valued  card for %s valie with '),
  (valie, expected) => {
    const res = isValidLun(valie);
    expect(res).toEqual(expected);
  },
);

test('One card  ', () => {
  const res = isValidLun('4929792318904671');
  const answer = {
    err: false, nameCard: 4, checkSum: 1, resSum: 1,
  };
  expect(res).toEqual(answer);
});

test.each(
  [
    ['4329792318904671', {
      err: true, nameCard: 4, checkSum: 1, resSum: 7,
    }],
    ['4339260531469452', {
      err: true, nameCard: 4, checkSum: 2, resSum: 4,
    }],
    ['4460546836338593', {
      err: true, nameCard: 4, checkSum: 3, resSum: 7,
    }],
    ['4124007103783527', {
      err: true, nameCard: 4, checkSum: 7, resSum: 6,
    }],
    ['4324007188606692', {
      err: true, nameCard: 4, checkSum: 2, resSum: 9,
    }],
  ],
)(
  ('The test is NOT valued card for %s '),
  (valued, expected) => {
    const res = isValidLun(valued);
    expect(res).toEqual(expected);
  },

);
