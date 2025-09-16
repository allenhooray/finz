import { HomeIcon, WrenchIcon, CircleDollarSignIcon, BitcoinIcon, CuboidIcon } from "lucide-vue-next"
import type { NavItem } from "@/components/the-sidebar/nav/type"

enum DefaultPagePathEnum {
  home = '/',
  currency = '/tools/currency',
  gold = '/tools/gold',
  crypto = '/tools/crypto',
}

/**
 * 默认侧边导航列表
 */
export const DEFAULT_SIDE_NAV_LIST: NavItem[] = [
  {
    path: '/',
    title: 'sideBar.home',
    icon: HomeIcon,
  },
  {
    title: 'sideBar.tools',
    icon: WrenchIcon,
    path: DefaultPagePathEnum.currency,
    isActive: true,
    items: [
      {
        path: DefaultPagePathEnum.currency,
        title: 'sideBar.currency',
        icon: CircleDollarSignIcon,
      },
      {
        path: DefaultPagePathEnum.gold,
        title: 'sideBar.gold',
        icon: CuboidIcon,
      },
      {
        path: DefaultPagePathEnum.crypto,
        title: 'sideBar.crypto',
        icon: BitcoinIcon,
      }
    ]
  },
]

