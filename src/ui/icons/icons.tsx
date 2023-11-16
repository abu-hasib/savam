import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  FileText,
  Grid,
  Image,
  List,
  Loader2,
  MoreVertical,
  Plus,
  Search,
  Settings,
  SunMedium,
  X,
  type XIcon as LucideIcon,
} from 'lucide-react';

export type Icon = typeof LucideIcon;

export const Icons = {
  close: X,
  spinner: Loader2,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  media: Image,
  settings: Settings,
  ellipsis: MoreVertical,
  add: Plus,
  arrowRight: ArrowRight,
  sun: SunMedium,
  grid: Grid,
  list: List,
  search: Search,
  post: FileText,
};
