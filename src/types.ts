export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface StatMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface FloatingBubble {
  id: string;
  iconName: "facebook" | "instagram" | "youtube" | "shopify" | "dollar" | "growth";
  color: string;
  delay: number;
  initialX: number;
  initialY: number;
  scale?: number;
}

export interface CalculatorState {
  monthlySpend: number;
  currentCPA: number;
  targetROAS: number;
}
