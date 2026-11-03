// JSON e icon naam diye icon ber kora hoy. Notun icon lagle ekhane ekta line add korun.
import { FiUser, FiLayout, FiShoppingBag, FiTarget, FiPenTool, FiCode, FiSend, FiZap, FiStar, FiSmartphone, FiSearch, FiMessageCircle } from "react-icons/fi";
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiShopify, SiWoocommerce } from "react-icons/si";

export const ICONS = {
  user: FiUser, layout: FiLayout, bag: FiShoppingBag, target: FiTarget, pen: FiPenTool, code: FiCode, send: FiSend, zap: FiZap, star: FiStar,
  mobile: FiSmartphone, search: FiSearch, message: FiMessageCircle,
  html: FaHtml5, css: FaCss3Alt, react: FaReact, git: FaGitAlt,
  js: SiJavascript, tailwind: SiTailwindcss, next: SiNextdotjs, shopify: SiShopify, woo: SiWoocommerce,
};
export const iconFor = (name) => ICONS[name] || FiStar;
