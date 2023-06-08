import * as React from 'react';

import {
  AdjustmentsHorizontalIcon,
  HomeIcon,
  UserIcon,
} from 'react-native-heroicons/solid';

export const useBottomBarIcon = () => {
  return (screen: string, color: string) => {
    switch (screen) {
      case 'Feed':
        return <HomeIcon color={color} />;
      case 'Settings':
        return <AdjustmentsHorizontalIcon color={color} />;
      case 'Speakers':
        return <UserIcon color={color} />;
    }
  };
};
