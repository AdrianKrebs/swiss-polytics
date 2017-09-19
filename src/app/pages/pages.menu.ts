export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'parliament',
        data: {
          menu: {
            title: 'Parlament',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'about',
        data: {
          menu: {
            title: 'Über uns',
            icon: 'ion-information',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      }
    ]
  }
];
