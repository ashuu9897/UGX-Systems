import React, { useState } from "react";
import {
  LayoutDashboard,
  Layout,
  Mail,
  Calendar,
  Layers,
  FileText,
  File,
  Table,
  BarChart2,
  Map,
  User,
  Plus,
} from "lucide-react";

interface MenuItem {
  icon: React.ElementType;
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  {
    icon: Layout,
    label: "Layouts",
    children: [
      { label: "Grid Layout", href: "/layouts/grid" },
      { label: "Stacked Layout", href: "/layouts/stacked" },
    ],
  },
  {
    icon: Mail,
    label: "Mailbox",
    children: [
      { label: "Inbox", href: "/mail/inbox" },
      { label: "Sent", href: "/mail/sent" },
      { label: "Drafts", href: "/mail/drafts" },
    ],
  },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  {
    icon: Layers,
    label: "UI Elements",
    children: [
      { label: "Buttons", href: "/ui/buttons" },
      { label: "Cards", href: "/ui/cards" },
      { label: "Typography", href: "/ui/typography" },
    ],
  },
  { icon: FileText, label: "Forms", href: "/forms" },
  {
    icon: File,
    label: "Pages",
    children: [
      { label: "Login", href: "/pages/login" },
      { label: "Register", href: "/pages/register" },
      { label: "404", href: "/pages/404" },
    ],
  },
  { icon: Table, label: "Tables", href: "/tables" },
  { icon: BarChart2, label: "Charts", href: "/charts" },
  {
    icon: Map,
    label: "Maps",
    children: [
      { label: "Google Maps", href: "/maps/google" },
      { label: "Vector Maps", href: "/maps/vector" },
    ],
  },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function Sidebar() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (label: string) => {
    setOpenItems((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleItem(item.label)}
                    className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    <span className="flex items-center">
                      <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                      {item.label}
                    </span>
                    <Plus
                      className={`w-4 h-4 transition-transform ${
                        openItems.includes(item.label) ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  {openItems.includes(item.label) && (
                    <ul className="mt-2 ml-6 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                >
                  <item.icon className="w-5 h-5 mr-3 text-gray-400" />
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
