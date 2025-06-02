import {
  LucideIcon,
  Zap,
  TrendingDown,
  Sparkles,
  Play,
  Shield,
  Clock,
  Users,
  Tv,
  Music,
  Palette,
  FileText,
  Bot,
  Check,
  ArrowRight,
  DollarSign,
  Headphones,
  RefreshCw,
  Gift,
  Star,
  Award,
  MessageCircle,
  Send,
  Mail,
  CircleAlert,
} from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Zap,
  TrendingDown,
  Sparkles,
  Play,
  Shield,
  Clock,
  Users,
  Tv,
  Music,
  Palette,
  FileText,
  Bot,
  Check,
  ArrowRight,
  DollarSign,
  Headphones,
  RefreshCw,
  Gift,
  Star,
  Award,
  MessageCircle,
  Send,
  Mail,
  CircleAlert,
};

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent = iconMap[name] || iconMap[fallback];

  return <IconComponent size={size} className={className} />;
};

export default Icon;
