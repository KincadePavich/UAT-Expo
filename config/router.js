import { TabNavigator, StackNavigator } from 'react-navigation';
import Bars from '../screens/Bars';
import BarsMap from '../screens/BarsMap';
import Food from '../screens/Food';
import FoodMap from '../screens/FoodMap';
import Shops from '../screens/Shops';
import ShopsMap from '../screens/ShopsMap';
import Coffee from '../screens/Coffee';
import CoffeeMap from '../screens/CoffeeMap';
import Personal from '../screens/Personal';
import PersonalMap from '../screens/PersonalMap';
import Specialty from '../screens/Specialty';
import SpecialtyMap from '../screens/SpecialtyMap';
import Details from '../screens/Details';

export const FoodStack = StackNavigator({
  Food: {
    screen: Food,
    navigationOptions: {
      header: null
    },
  },
  FoodMap: {
    screen: FoodMap,
    navigationOptions: {
      header: null
    },
  },
  FoodDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Food Deals',
      headerStyle: {
        marginTop: -20,
      }
    }
  }
});
export const BarsStack = StackNavigator({
  Bars: {
    screen: Bars,
    navigationOptions: {
      header: null
    },
  },
  BarsMap: {
    screen: BarsMap,
    navigationOptions: {
      header: null
    },
  },
  BarDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Bar Deals',
      headerStyle: {
        marginTop: -20,
      }
    }
  }
});
export const ShopStack = StackNavigator({
  Shops: {
    screen: Shops,
    navigationOptions: {
      header: null
    },
  },
  ShopsMap: {
    screen: ShopsMap,
    navigationOptions: {
      header: null
    },
  },
  ShopDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Shopping Deals',
      headerStyle: {
        marginTop: -20,
      }
    }
  }
});
export const CoffeeStack = StackNavigator({
  Coffee: {
    screen: Coffee,
    navigationOptions: {
      header: null
    },
  },
  CoffeeMap: {
    screen: CoffeeMap,
    navigationOptions: {
      header: null
    },
  },
  CoffeeDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Coffee Deals',
      headerStyle: {
        marginTop: -20,
      }
    }
  }
});
export const PersonalStack = StackNavigator({
  Personal: {
    screen: Personal,
    navigationOptions: {
      header: null
    },
  },
  PersonalMap: {
    screen: PersonalMap,
    navigationOptions: {
      header: null
    },
  },
  PersonalDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Personal Care Deals',
      headerStyle: {
        marginTop: -20,
      }
    }
  }
});
export const SpecialtyStack = StackNavigator({
  Specialty: {
    screen: Specialty,
    navigationOptions: {
      header: null
    },
  },
  SpecialtyMap: {
    screen: SpecialtyMap,
    navigationOptions: {
      header: null
    },
  },
  SpecialtyDetails: {
    screen: Details,
    navigationOptions: {
      title: 'Back to Speciality Deals',
      headerStyle: {
        marginTop: -20,
      }
    }
  }
});

export const Tabs = TabNavigator({
  Food: {
    screen: FoodStack,
    navigationOptions: {
      tabBarLabel: 'Food',
    },
  },
  Bars: {
    screen: BarsStack,
    navigationOptions: {
      tabBarLabel: 'Bars',
    },
  },
  Shops: {
    screen: ShopStack,
    navigationOptions: {
      tabBarLabel: 'Shops',
    },
  },
  Coffee: {
    screen: CoffeeStack,
    navigationOptions: {
      tabBarLabel: 'Coffee',
    },
  },
  PersonalCare: {
    screen: PersonalStack,
    navigationOptions: {
      tabBarLabel: 'Personal Care',
    },
  },
  Speciality: {
    screen: SpecialtyStack,
    navigationOptions: {
      tabBarLabel: 'Speciality',
    },
  }
}, {
  ...TabNavigator.Presets.AndroidTopTabs,
  navigationOptions: {
    swipeEnabled: true
  },
  tabBarPosition: 'top',
  swipeEnabled: true,
  tabBarOptions: {
    scrollEnabled: true,
    tabStyle: {
      width: 140,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'row',
    },
    labelStyle: {
      fontSize: 13,
      textAlign: 'center',
    },
    indicatorStyle: {
      backgroundColor: '#002469',
    },
    activeTintColor: '#fff',
    inactiveTintColor: '#6ec5e9',
    style: {
      backgroundColor: '#002469',
    },
  }
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
});
