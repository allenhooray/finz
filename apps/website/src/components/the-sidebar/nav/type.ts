import type { LucideIcon } from "lucide-vue-next"

export interface SubNavItem {
  title: string
  path: string
  icon?: LucideIcon
}

export interface NavItem {
  title: string
  path: string
  icon?: LucideIcon
  isActive?: boolean
  items?: SubNavItem[]
}