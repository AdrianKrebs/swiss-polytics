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
        path: 'politician',
        data: {
          menu: {
            title: 'Profil',
            pathMatch: 'prefix',
            icon: 'ion-ios-people',
            selected: false,
            expanded: false,
            hidden: true,
            order: 0
          }
        }
      },
      {
        path: 'party',
        data: {
          menu: {
            title: 'Parteien',
            icon: 'ion-ios-person',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'SVP',
            data: {
              menu: {
                title: 'SVP',
              }
            }
          },
          {
            path: 'SP',
            data: {
              menu: {
                title: 'SP',
              }
            }
          },
          {
            path: 'FDP',
            data: {
              menu: {
                title: 'FDP',
              }
            }
          },
          {
            path: 'CVP',
            data: {
              menu: {
                title: 'CVP',
              }
            }
          },
          {
            path: 'BDP',
            data: {
              menu: {
                title: 'BDP',
              }
            }
          },
          {
            path: 'GLP',
            data: {
              menu: {
                title: 'GLP',
              }
            }
          },
          {
            path: 'GPS',
            data: {
              menu: {
                title: 'GPS',
              }
            }
          }
        ]
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
