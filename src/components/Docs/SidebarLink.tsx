"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  FileText,
  Bell,
  Search,
  HelpCircle,
} from "lucide-react";

interface NavigationItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string;
}

interface SidebarProps {
  className?: string;
}

const navigationItems: NavigationItem[] = [
  { id: "dashboard", name: "Dashboard", icon: Home, href: "/dashboard" },
  { id: "analytics", name: "Analytics", icon: BarChart3, href: "/analytics" },
  {
    id: "documents",
    name: "Documents",
    icon: FileText,
    href: "/documents",
    badge: "3",
  },
  {
    id: "notifications",
    name: "Notifications",
    icon: Bell,
    href: "/notifications",
    badge: "12",
  },
  { id: "profile", name: "Profile", icon: User, href: "/profile" },
  { id: "settings", name: "Settings", icon: Settings, href: "/settings" },
  { id: "help", name: "Help & Support", icon: HelpCircle, href: "/help" },
];

export default function SidebarLink({ className = "" }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed right-6 top-6 z-50 rounded-lg border border-slate-100 bg-white p-3 shadow-md transition-all duration-200 hover:bg-slate-50 lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <X className="h-5 w-5 text-slate-600" />
        ) : (
          <Menu className="h-5 w-5 text-slate-600" />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed inset-y-0 right-0 left-auto z-40 flex h-full flex-col border-l border-slate-200 bg-white transition-all duration-300 ease-in-out lg:static lg:z-auto lg:translate-x-0 lg:border-l-0 lg:border-r ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ${isCollapsed ? "w-28" : "w-[312px]"} ${className}`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/60 p-5">
          {!isCollapsed && (
            <div className="flex items-center space-x-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
                <span className="text-base font-bold text-white">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold text-slate-800">Acme Corp</span>
                <span className="text-xs text-slate-500">Enterprise Dashboard</span>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 shadow-sm">
              <span className="text-base font-bold text-white">A</span>
            </div>
          )}

          <button
            onClick={toggleCollapse}
            className="hidden rounded-md p-1.5 transition-all duration-200 hover:bg-slate-100 lg:flex"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-slate-500" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-slate-500" />
            )}
          </button>
        </div>

        {!isCollapsed && (
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 transform text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm placeholder-slate-400 transition-all duration-200 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        <nav className="flex-1 overflow-y-auto px-3 py-2">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.id;

              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    onClick={() => handleItemClick(item.id)}
                    className={`group relative flex w-full items-center space-x-2.5 rounded-md px-3 py-2.5 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    } ${isCollapsed ? "justify-center px-2" : ""}`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <div className="flex min-w-[24px] items-center justify-center">
                      <Icon
                        className={`h-4 w-4 flex-shrink-0 ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-500 group-hover:text-slate-700"
                        }`}
                      />
                    </div>

                    {!isCollapsed && (
                      <div className="flex w-full items-center justify-between">
                        <span className={`text-sm ${isActive ? "font-medium" : "font-normal"}`}>
                          {item.name}
                        </span>
                        {item.badge && (
                          <span
                            className={`rounded-full px-1.5 py-0.5 text-xs font-medium ${
                              isActive
                                ? "bg-blue-100 text-blue-700"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}

                    {isCollapsed && item.badge && (
                      <div className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full border border-white bg-blue-100">
                        <span className="text-[10px] font-medium text-blue-700">
                          {parseInt(item.badge) > 9 ? "9+" : item.badge}
                        </span>
                      </div>
                    )}

                    {isCollapsed && (
                      <div className="invisible absolute left-full z-50 ml-2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                        {item.name}
                        {item.badge && (
                          <span className="ml-1.5 rounded-full bg-slate-700 px-1 py-0.5 text-[10px]">
                            {item.badge}
                          </span>
                        )}
                        <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1 -translate-y-1/2 rotate-45 transform bg-slate-800" />
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-auto border-t border-slate-200">
          <div className={`border-b border-slate-200 bg-slate-50/30 ${isCollapsed ? "px-2 py-3" : "p-3"}`}>
            {!isCollapsed ? (
              <div className="flex items-center rounded-md bg-white px-3 py-2 transition-colors duration-200 hover:bg-slate-50">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200">
                  <span className="text-sm font-medium text-slate-700">JD</span>
                </div>
                <div className="ml-2.5 min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-800">John Doe</p>
                  <p className="truncate text-xs text-slate-500">Senior Administrator</p>
                </div>
                <div className="ml-2 h-2 w-2 rounded-full bg-green-500" title="Online" />
              </div>
            ) : (
              <div className="flex justify-center">
                <div className="relative">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200">
                    <span className="text-sm font-medium text-slate-700">JD</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                </div>
              </div>
            )}
          </div>

          <div className="p-3">
            <button
              onClick={() => handleItemClick("logout")}
              className={`group relative flex w-full items-center rounded-md text-left text-red-600 transition-all duration-200 hover:bg-red-50 hover:text-red-700 ${
                isCollapsed ? "justify-center p-2.5" : "space-x-2.5 px-3 py-2.5"
              }`}
              title={isCollapsed ? "Logout" : undefined}
            >
              <div className="flex min-w-[24px] items-center justify-center">
                <LogOut className="h-4 w-4 flex-shrink-0 text-red-500 group-hover:text-red-600" />
              </div>

              {!isCollapsed && <span className="text-sm">Logout</span>}

              {isCollapsed && (
                <div className="invisible absolute left-full z-50 ml-2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-white opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  Logout
                  <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1 -translate-y-1/2 rotate-45 transform bg-slate-800" />
                </div>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
