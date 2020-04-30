import IMask from 'imask/esm/imask'
import 'imask/esm/masked/range'
import 'imask/esm/masked/enum'

export default {
  mask: Date,
  overwrite: true,
  lazy: false,
  blocks: {
    YY: {
      name: 'Short Year',
      mask: IMask.MaskedRange,
      from: 0,
      to: 99,
      autofix: true,
      placeholderChar: 'Y'
    },
    YYYY: {
      name: 'Long Year',
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2100,
      autofix: true,
      placeholderChar: 'Y'
    },
    MM: {
      name: 'Month Long',
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      autofix: true,
      placeholderChar: 'M'
    },
    MMM: {
      name: 'Month Alphabetic Short',
      mask: IMask.MaskedEnum,
      enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      autofix: true,
      placeholderChar: '_'
    },
    // TODO Create Custom Mask MaskedSelects
    // MMMM: {
    //   name: 'Month Alphabetic Long',
    //   mask: IMask.MaskedSelects,
    //   selects: [
    //     'January',
    //     'February',
    //     'March',
    //     'April',
    //     'May',
    //     'June',
    //     'July',
    //     'August',
    //     'September',
    //     'October',
    //     'November',
    //     'December'
    //   ],
    //   autofix: true,
    //   autoComplete: true,
    //   placeholderChar: '_'
    // },
    D: {
      name: 'Day of Month Short',
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      autofix: true,
      placeholderChar: 'D'
    },
    DD: {
      name: 'Day of Month Long',
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      autofix: true,
      placeholderChar: 'D'
    },
    d: {
      name: 'Day of Week Short',
      mask: IMask.MaskedRange,
      from: 0,
      to: 6,
      autofix: true,
      placeholderChar: 'd'
    },
    dd: {
      name: 'Day of Week Long',
      mask: IMask.MaskedRange,
      from: 0,
      to: 6,
      autofix: true,
      placeholderChar: 'd'
    },
    ddd: {
      name: 'Day of Week Alphabetic Short',
      mask: IMask.MaskedEnum,
      enum: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      autofix: true,
      placeholderChar: '_'
    },
    e: {
      name: 'Day of Week (Locale)',
      mask: IMask.MaskedRange,
      from: 0,
      to: 6,
      autofix: true,
      placeholderChar: 'e'
    },
    E: {
      name: 'Day of Week (ISO)',
      mask: IMask.MaskedRange,
      from: 1,
      to: 7,
      autofix: true,
      placeholderChar: 'E'
    },
    w: {
      name: 'Week of Year Short',
      mask: IMask.MaskedRange,
      from: 1,
      to: 53,
      autofix: true,
      placeholderChar: 'w'
    },
    ww: {
      name: 'Week of Year Long',
      mask: IMask.MaskedRange,
      from: 1,
      to: 53,
      autofix: true,
      placeholderChar: 'w'
    },
    W: {
      name: 'Week of Year (ISO) Short',
      mask: IMask.MaskedRange,
      from: 1,
      to: 53,
      autofix: true,
      placeholderChar: 'W'
    },
    WW: {
      name: 'Week of Year (ISO) Long',
      mask: IMask.MaskedRange,
      from: 1,
      to: 53,
      autofix: true,
      placeholderChar: 'W'
    },
    A: {
      name: 'AM/PM Upper',
      mask: IMask.MaskedEnum,
      enum: ['AM', 'PM'],
      autofix: true,
      placeholderChar: 'A'
    },
    a: {
      name: 'AM/PM Lower',
      mask: IMask.MaskedEnum,
      enum: ['am', 'pm'],
      autofix: true,
      placeholderChar: 'a'
    },
    H: {
      name: '24 Hour Short',
      mask: IMask.MaskedRange,
      from: 0,
      to: 23,
      autofix: true,
      placeholderChar: 'H'
    },
    HH: {
      name: '24 Hour Long',
      mask: IMask.MaskedRange,
      from: 0,
      to: 23,
      autofix: true,
      placeholderChar: 'H'
    },
    h: {
      name: '12 Hour Short',
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      autofix: true,
      placeholderChar: 'h'
    },
    hh: {
      name: '12 Hour Long',
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      autofix: true,
      placeholderChar: 'h'
    },
    k: {
      name: '24 Hour Short',
      mask: IMask.MaskedRange,
      from: 1,
      to: 24,
      autofix: true,
      placeholderChar: 'k'
    },
    kk: {
      name: '24 Hour Long',
      mask: IMask.MaskedRange,
      from: 1,
      to: 24,
      autofix: true,
      placeholderChar: 'k'
    },
    m: {
      name: 'Minutes Short',
      mask: IMask.MaskedRange,
      from: 0,
      to: 59,
      autofix: true,
      placeholderChar: 'm'
    },
    mm: {
      name: 'Minutes Long',
      mask: IMask.MaskedRange,
      from: 0,
      to: 59,
      autofix: true,
      placeholderChar: 'm'
    },
    s: {
      name: 'Seconds Short',
      mask: IMask.MaskedRange,
      from: 0,
      to: 59,
      autofix: true,
      placeholderChar: 's'
    },
    ss: {
      name: 'Seconds Long',
      mask: IMask.MaskedRange,
      from: 0,
      to: 59,
      autofix: true,
      placeholderChar: 's'
    },
    S: {
      name: 'Fractional Second',
      mask: IMask.MaskedRange,
      from: 0,
      to: 9,
      autofix: true,
      placeholderChar: 'S'
    },
    SS: {
      name: 'Fractional Second',
      mask: IMask.MaskedRange,
      from: 0,
      to: 99,
      autofix: true,
      placeholderChar: 'S'
    },
    SSS: {
      name: 'Fractional Second',
      mask: IMask.MaskedRange,
      from: 0,
      to: 999,
      autofix: true,
      placeholderChar: 'S'
    },
    Q: {
      name: 'Quarter Short',
      mask: IMask.MaskedRange,
      from: 1,
      to: 4,
      autofix: true,
      placeholderChar: 'Q'
    },
    QQ: {
      mask: IMask.MaskedEnum,
      enum: ['1st', '2nd', '3rd', '4th'],
      autofix: true,
      placeholderChar: '_'
    }
  }
}
