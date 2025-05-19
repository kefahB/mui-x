import { PickersLocaleText } from './utils/pickersLocaleTextApi';
import { getPickersLocalization } from './utils/getPickersLocalization';

const arPickers: PickersLocaleText = {
  // Calendar navigation
  previousMonth: 'الشهر السابق',
  nextMonth: 'الشهر التالي',

  // View navigation
  openPreviousView: 'افتح العرض السابق',
  openNextView: 'افتح العرض التالي',
  calendarViewSwitchingButtonAriaLabel: (view) =>
    view === 'year'
      ? 'عرض السنة مفتوح، التبديل إلى عرض التقويم'
      : 'عرض التقويم مفتوح، التبديل إلى عرض السنة',

  // DateRange labels
  start: 'البداية',
  end: 'النهاية',
  startDate: 'تاريخ البدء',
  startTime: 'وقت البدء',
  endDate: 'تاريخ الانتهاء',
  endTime: 'وقت الانتهاء',

  // Action bar
  cancelButtonLabel: 'إلغاء',
  clearButtonLabel: 'مسح',
  okButtonLabel: 'موافق',
  todayButtonLabel: 'اليوم',
  nextStepButtonLabel: 'التالي',

  // Toolbar titles
  datePickerToolbarTitle: 'اختر التاريخ',
  dateTimePickerToolbarTitle: 'اختر التاريخ والوقت',
  timePickerToolbarTitle: 'اختر الوقت',
  dateRangePickerToolbarTitle: 'اختر نطاق التواريخ',
  timeRangePickerToolbarTitle: 'اختر نطاق الوقت',

  // Clock labels
  clockLabelText: (view, formattedTime) =>
    `اختر ${view}. ${!formattedTime ? 'لم يتم اختيار وقت' : `الوقت المحدد هو ${formattedTime}`}`,
  hoursClockNumberText: (hours) => `${hours} ساعة`,
  minutesClockNumberText: (minutes) => `${minutes} دقيقة`,
  secondsClockNumberText: (seconds) => `${seconds} ثانية`,

  // Digital clock labels
  selectViewText: (view) => `اختر ${view}`,

  // Calendar labels
  calendarWeekNumberHeaderLabel: 'رقم الأسبوع',
  calendarWeekNumberHeaderText: 'رقم',
  calendarWeekNumberAriaLabelText: (weekNumber) => `الأسبوع ${weekNumber}`,
  calendarWeekNumberText: (weekNumber) => `${weekNumber}`,

  // Open Picker labels
  openDatePickerDialogue: (formattedDate) =>
    formattedDate ? `اختر التاريخ، التاريخ المحدد هو ${formattedDate}` : 'اختر التاريخ',
  openTimePickerDialogue: (formattedTime) =>
    formattedTime ? `اختر الوقت، الوقت المحدد هو ${formattedTime}` : 'اختر الوقت',
  openRangePickerDialogue: (formattedRange) =>
    formattedRange ? `اختر النطاق، النطاق المحدد هو ${formattedRange}` : 'اختر النطاق',
  fieldClearLabel: 'مسح',

  // Table labels
  timeTableLabel: 'اختر الوقت',
  dateTableLabel: 'اختر التاريخ',

  // Field section placeholders
  fieldYearPlaceholder: (params) => 'س'.repeat(params.digitAmount),
  fieldMonthPlaceholder: (params) => (params.contentType === 'letter' ? 'MMMM' : 'MM'),
  fieldDayPlaceholder: () => 'DD',
  fieldWeekDayPlaceholder: (params) => (params.contentType === 'letter' ? 'EEEE' : 'EE'),
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'ص/م',

  // View names
  year: 'السنة',
  month: 'الشهر',
  day: 'اليوم',
  weekDay: 'يوم الأسبوع',
  hours: 'ساعات',
  minutes: 'دقائق',
  seconds: 'ثواني',
  meridiem: 'صباحًا/مساءً',

  // Common
  empty: 'فارغ',
};

export const DEFAULT_LOCALE = arPickers;

export const ar = getPickersLocalization(arPickers);
