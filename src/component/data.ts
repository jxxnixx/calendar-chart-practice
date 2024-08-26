import { PushAlert } from './type';

export const staticData: PushAlert[] = [
  // 한 달짜리 3개
  {
    id: 1,
    title: 'New Year Campaign',
    frequency: 'Monthly',
    status: 'In Progress',
    startDate: '2025.01.01 09:00am', // 2025년, 오전 9시
    endDate: '2025.01.31 09:00am',
    OS: ['iOS'],
    sent: 1500,
    openRatio: 0.42,
  },
  {
    id: 2,
    title: 'Spring Collection',
    frequency: 'Monthly',
    status: 'In Progress',
    startDate: '2025.03.01 08:00am', // 2025년, 오전 8시
    endDate: '2025.03.31 08:00am',
    OS: ['iOS'],
    sent: 1300,
    openRatio: 0.4,
  },
  {
    id: 3,
    title: 'Summer Concert',
    frequency: 'Monthly',
    status: 'In Progress',
    startDate: '2024.06.01 07:00am', // 2024년, 오전 7시
    endDate: '2024.06.30 07:00am',
    OS: ['iOS'],
    sent: 1600,
    openRatio: 0.45,
  },

  // 2주짜리 4개
  {
    id: 4,
    title: 'Autumn Launch',
    frequency: 'Biweekly',
    status: 'Completed',
    startDate: '2025.09.01 10:00am', // 2025년, 오전 10시
    endDate: '2025.09.15 10:00am',
    OS: ['Android'],
    sent: 1300,
    openRatio: 0.38,
  },
  {
    id: 5,
    title: 'Holiday Countdown',
    frequency: 'Biweekly',
    status: 'Scheduled',
    startDate: '2025.11.01 05:00pm', // 2025년, 오후 5시
    endDate: '2025.11.15 05:00pm',
    OS: ['Android'],
    sent: 1600,
    openRatio: 0.55,
  },
  {
    id: 6,
    title: 'Spring Savings',
    frequency: 'Biweekly',
    status: 'Scheduled',
    startDate: '2024.03.01 06:00am', // 2024년, 오전 6시
    endDate: '2024.03.15 06:00am',
    OS: ['iOS', 'Android'],
    sent: 1500,
    openRatio: 0.49,
  },
  {
    id: 7,
    title: 'Winter Sale',
    frequency: 'Biweekly',
    status: 'Completed',
    startDate: '2024.01.01 07:00pm', // 2024년, 오후 7시
    endDate: '2024.01.15 07:00pm',
    OS: ['iOS'],
    sent: 1500,
    openRatio: 0.42,
  },

  // 1주짜리 5개
  {
    id: 8,
    title: 'Summer Specials',
    frequency: 'Weekly',
    status: 'Completed',
    startDate: '2024.06.01 10:00am', // 2024년, 오전 10시
    endDate: '2024.06.07 10:00am',
    OS: ['Android'],
    sent: 1100,
    openRatio: 0.32,
  },
  {
    id: 9,
    title: 'Fall Focus',
    frequency: 'Weekly',
    status: 'In Progress',
    startDate: '2025.09.01 03:00pm', // 2025년, 오후 3시
    endDate: '2025.09.07 03:00pm',
    OS: ['iOS'],
    sent: 1400,
    openRatio: 0.43,
  },
  {
    id: 10,
    title: 'Winter Fitness',
    frequency: 'Weekly',
    status: 'Draft',
    startDate: '2025.01.01 12:00pm', // 2025년, 정오
    endDate: '2025.01.07 12:00pm',
    OS: ['Web'],
    sent: 900,
    openRatio: 0.42,
  },
  {
    id: 11,
    title: 'Spring Event',
    frequency: 'Weekly',
    status: 'Completed',
    startDate: '2024.03.01 02:00am', // 2024년, 새벽 2시
    endDate: '2024.03.07 02:00am',
    OS: ['Android'],
    sent: 1200,
    openRatio: 0.39,
  },
  {
    id: 12,
    title: 'Holiday Preview',
    frequency: 'Weekly',
    status: 'Scheduled',
    startDate: '2025.12.01 04:00pm', // 2025년, 오후 4시
    endDate: '2025.12.07 04:00pm',
    OS: ['iOS'],
    sent: 1600,
    openRatio: 0.47,
  },

  // 3일짜리 6개
  {
    id: 13,
    title: 'Holiday Offers',
    frequency: '3 days',
    status: 'In Progress',
    startDate: '2024.12.01 12:00pm', // 2024년, 정오
    endDate: '2024.12.03 12:00pm',
    OS: ['iOS'],
    sent: 1600,
    openRatio: 0.5,
  },
  {
    id: 14,
    title: 'Tech Conference',
    frequency: '3 days',
    status: 'Scheduled',
    startDate: '2025.04.01 09:00am', // 2025년, 오전 9시
    endDate: '2025.04.03 09:00am',
    OS: ['Web', 'iOS'],
    sent: 900,
    openRatio: 0.5,
  },
  {
    id: 15,
    title: 'Fall Specials',
    frequency: '3 days',
    status: 'In Progress',
    startDate: '2025.10.01 03:00pm', // 2025년, 오후 3시
    endDate: '2025.10.03 03:00pm',
    OS: ['iOS', 'Web'],
    sent: 1400,
    openRatio: 0.4,
  },
  {
    id: 16,
    title: 'Holiday Gift Guide',
    frequency: '3 days',
    status: 'In Progress',
    startDate: '2024.11.01 06:00pm', // 2024년, 오후 6시
    endDate: '2024.11.03 06:00pm',
    OS: ['Web'],
    sent: 1300,
    openRatio: 0.48,
  },
  {
    id: 17,
    title: 'Winter Wonderland',
    frequency: '3 days',
    status: 'In Progress',
    startDate: '2025.12.01 11:00am', // 2025년, 오전 11시
    endDate: '2025.12.03 11:00am',
    OS: ['Web'],
    sent: 1200,
    openRatio: 0.46,
  },
  {
    id: 18,
    title: 'Tech Expo',
    frequency: '3 days',
    status: 'Draft',
    startDate: '2024.04.01 04:00pm', // 2024년, 오후 4시
    endDate: '2024.04.03 04:00pm',
    OS: ['Web', 'iOS'],
    sent: 1500,
    openRatio: 0.52,
  },

  // 2일짜리 7개
  {
    id: 19,
    title: 'Spring Sale',
    frequency: '2 days',
    status: 'In Progress',
    startDate: '2025.04.01 12:00pm', // 2025년, 정오
    endDate: '2025.04.02 12:00pm',
    OS: ['Android'],
    sent: 1400,
    openRatio: 0.47,
  },
  {
    id: 20,
    title: 'Back to School',
    frequency: '2 days',
    status: 'Completed',
    startDate: '2024.08.15 05:00pm', // 2024년, 오후 5시
    endDate: '2024.08.16 05:00pm',
    OS: ['Android'],
    sent: 1250,
    openRatio: 0.38,
  },
  {
    id: 21,
    title: 'Winter Warmers',
    frequency: '2 days',
    status: 'Completed',
    startDate: '2024.01.15 07:00am', // 2024년, 오전 7시
    endDate: '2024.01.16 07:00am',
    OS: ['Web'],
    sent: 1200,
    openRatio: 0.41,
  },
  {
    id: 22,
    title: 'Summer Fun',
    frequency: '2 days',
    status: 'Scheduled',
    startDate: '2025.07.01 02:00pm', // 2025년, 오후 2시
    endDate: '2025.07.02 02:00pm',
    OS: ['Android'],
    sent: 1300,
    openRatio: 0.39,
  },
  {
    id: 23,
    title: 'Holiday Season',
    frequency: '2 days',
    status: 'Completed',
    startDate: '2024.12.15 09:00am', // 2024년, 오전 9시
    endDate: '2024.12.16 09:00am',
    OS: ['iOS', 'Android'],
    sent: 1500,
    openRatio: 0.5,
  },
  {
    id: 24,
    title: 'Early Bird Special',
    frequency: '2 days',
    status: 'Scheduled',
    startDate: '2025.05.01 10:00am', // 2025년, 오전 10시
    endDate: '2025.05.02 10:00am',
    OS: ['Android'],
    sent: 1100,
    openRatio: 0.37,
  },
  {
    id: 25,
    title: 'Holiday Preview',
    frequency: '2 days',
    status: 'Scheduled',
    startDate: '2025.12.01 08:00am', // 2025년, 오전 8시
    endDate: '2025.12.02 08:00am',
    OS: ['iOS'],
    sent: 1600,
    openRatio: 0.47,
  },

  // 1일짜리 10개
  {
    id: 26,
    title: 'Product Launch',
    frequency: 'One-time',
    status: 'In Progress',
    startDate: '2025.02.01 12:00pm', // 2025년, 정오
    endDate: '2025.02.01 12:00pm',
    OS: ['Web'],
    sent: 1800,
    openRatio: 0.55,
  },
  {
    id: 27,
    title: 'Tech Conference',
    frequency: 'One-time',
    status: 'Scheduled',
    startDate: '2024.04.10 05:00pm', // 2024년, 오후 5시
    endDate: '2024.04.10 05:00pm',
    OS: ['Web', 'iOS'],
    sent: 900,
    openRatio: 0.5,
  },
  {
    id: 28,
    title: 'End of Year Review',
    frequency: 'One-time',
    status: 'Completed',
    startDate: '2024.12.15 07:00am', // 2024년, 오전 7시
    endDate: '2024.12.15 07:00am',
    OS: ['iOS'],
    sent: 2000,
    openRatio: 0.53,
  },
  {
    id: 29,
    title: 'New Product Alert',
    frequency: 'One-time',
    status: 'Draft',
    startDate: '2025.05.01 09:00am', // 2025년, 오전 9시
    endDate: '2025.05.01 09:00am',
    OS: ['iOS', 'Web'],
    sent: 1700,
    openRatio: 0.48,
  },
  {
    id: 30,
    title: 'Spring Awakening',
    frequency: 'One-time',
    status: 'Scheduled',
    startDate: '2024.03.01 11:00am', // 2024년, 오전 11시
    endDate: '2024.03.01 11:00am',
    OS: ['iOS', 'Web'],
    sent: 1500,
    openRatio: 0.49,
  },
  {
    id: 31,
    title: 'Holiday Gift Guide',
    frequency: 'One-time',
    status: 'In Progress',
    startDate: '2024.11.15 06:00pm', // 2024년, 오후 6시
    endDate: '2024.11.15 06:00pm',
    OS: ['Web'],
    sent: 1300,
    openRatio: 0.48,
  },
  {
    id: 32,
    title: 'Summer Launch',
    frequency: 'One-time',
    status: 'In Progress',
    startDate: '2025.06.15 08:00am', // 2025년, 오전 8시
    endDate: '2025.06.15 08:00am',
    OS: ['Web'],
    sent: 1600,
    openRatio: 0.53,
  },
  {
    id: 33,
    title: 'Winter Launch',
    frequency: 'One-time',
    status: 'Draft',
    startDate: '2025.01.01 09:00am', // 2025년, 오전 9시
    endDate: '2025.01.01 09:00am',
    OS: ['Android'],
    sent: 1400,
    openRatio: 0.46,
  },
  {
    id: 34,
    title: 'Holiday Deals',
    frequency: 'One-time',
    status: 'Completed',
    startDate: '2024.12.15 12:00pm', // 2024년, 정오
    endDate: '2024.12.15 12:00pm',
    OS: ['iOS', 'Android'],
    sent: 1500,
    openRatio: 0.5,
  },
  {
    id: 35,
    title: 'Summer Surge',
    frequency: 'One-time',
    status: 'Draft',
    startDate: '2024.06.15 11:00am', // 2024년, 오전 11시
    endDate: '2024.06.15 11:00am',
    OS: ['Android'],
    sent: 1600,
    openRatio: 0.51,
  },

  // 몇 시간짜리 15개
  {
    id: 36,
    title: 'Winter Fitness Blast',
    frequency: 'Hourly',
    status: 'Draft',
    startDate: '2024.01.01 12:00pm', // 2024년, 정오
    endDate: '2024.01.01 03:00pm',
    OS: ['Web'],
    sent: 900,
    openRatio: 0.42,
  },
  {
    id: 37,
    title: 'Tech Expo Demo',
    frequency: 'Hourly',
    status: 'Draft',
    startDate: '2025.04.20 01:00pm', // 2025년, 오후 1시
    endDate: '2025.04.20 05:00pm',
    OS: ['Web', 'iOS'],
    sent: 1500,
    openRatio: 0.52,
  },
  {
    id: 38,
    title: 'Winter Innovations Showcase',
    frequency: 'Hourly',
    status: 'Draft',
    startDate: '2025.01.01 11:00am', // 2025년, 오전 11시
    endDate: '2025.01.01 04:00pm',
    OS: ['iOS', 'Web'],
    sent: 1300,
    openRatio: 0.44,
  },
  {
    id: 39,
    title: 'Spring Forward Preview',
    frequency: 'Hourly',
    status: 'Scheduled',
    startDate: '2024.03.01 12:00pm', // 2024년, 정오
    endDate: '2024.03.01 02:00pm',
    OS: ['iOS', 'Web'],
    sent: 1300,
    openRatio: 0.4,
  },
  {
    id: 40,
    title: 'Holiday Countdown Demo',
    frequency: 'Hourly',
    status: 'Scheduled',
    startDate: '2024.12.01 05:00pm', // 2024년, 오후 5시
    endDate: '2024.12.01 09:00pm',
    OS: ['Web'],
    sent: 1200,
    openRatio: 0.46,
  },
  {
    id: 41,
    title: 'Fall Festival Preview',
    frequency: 'Hourly',
    status: 'Scheduled',
    startDate: '2025.10.01 02:00pm', // 2025년, 오후 2시
    endDate: '2025.10.01 05:00pm',
    OS: ['Android', 'Web'],
    sent: 1400,
    openRatio: 0.41,
  },
  {
    id: 42,
    title: 'Spring Technology Insights',
    frequency: 'Hourly',
    status: 'Completed',
    startDate: '2024.03.01 07:00am', // 2024년, 오전 7시
    endDate: '2024.03.01 11:00am',
    OS: ['iOS'],
    sent: 1400,
    openRatio: 0.45,
  },
  {
    id: 43,
    title: 'Tech Trends',
    frequency: 'Hourly',
    status: 'In Progress',
    startDate: '2025.02.01 01:00pm', // 2025년, 오후 1시
    endDate: '2025.02.01 04:00pm',
    OS: ['Web'],
    sent: 1000,
    openRatio: 0.5,
  },
  {
    id: 44,
    title: 'Summer Fun Preview',
    frequency: 'Hourly',
    status: 'Scheduled',
    startDate: '2025.07.01 09:00am', // 2025년, 오전 9시
    endDate: '2025.07.01 01:00pm',
    OS: ['Android'],
    sent: 1300,
    openRatio: 0.39,
  },
  {
    id: 45,
    title: 'Spring Forward Event',
    frequency: 'Hourly',
    status: 'Scheduled',
    startDate: '2025.03.01 12:00pm', // 2025년, 정오
    endDate: '2025.03.01 06:00pm',
    OS: ['iOS', 'Web'],
    sent: 1500,
    openRatio: 0.49,
  },
  {
    id: 46,
    title: 'Autumn Launch Insights',
    frequency: 'Hourly',
    status: 'Scheduled',
    startDate: '2024.09.01 11:00am', // 2024년, 오전 11시
    endDate: '2024.09.01 04:00pm',
    OS: ['Web'],
    sent: 1100,
    openRatio: 0.38,
  },
  {
    id: 47,
    title: 'Holiday Season Kickoff',
    frequency: 'Hourly',
    status: 'Completed',
    startDate: '2024.12.15 01:00pm', // 2024년, 오후 1시
    endDate: '2024.12.15 06:00pm',
    OS: ['iOS', 'Android'],
    sent: 1500,
    openRatio: 0.5,
  },
  {
    id: 48,
    title: 'Holiday Deals Showcase',
    frequency: 'Hourly',
    status: 'Completed',
    startDate: '2025.12.15 07:00am', // 2025년, 오전 7시
    endDate: '2025.12.15 12:00pm',
    OS: ['iOS', 'Android'],
    sent: 1500,
    openRatio: 0.5,
  },
  {
    id: 49,
    title: 'Summer Kickoff Preview',
    frequency: 'Hourly',
    status: 'Completed',
    startDate: '2024.06.01 08:00am', // 2024년, 오전 8시
    endDate: '2024.06.01 12:00pm',
    OS: ['Web'],
    sent: 1500,
    openRatio: 0.45,
  },
  {
    id: 50,
    title: 'Fall Highlights Event',
    frequency: 'Hourly',
    status: 'In Progress',
    startDate: '2025.09.01 10:00am', // 2025년, 오전 10시
    endDate: '2025.09.01 02:00pm',
    OS: ['iOS', 'Android'],
    sent: 1600,
    openRatio: 0.48,
  },
];
