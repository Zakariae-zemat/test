import { 
  BarChart3, 
  Database, 
  Users, 
  TrendingUp, 
  Activity, 
  Key, 
  Shield, 
  Settings,
  Brain,
  Home
} from "lucide-react";
import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", icon: Home, id: "overview" },
  { title: "Models", icon: Brain, id: "models" },
  { title: "Users", icon: Users, id: "users" },
  { title: "Analytics", icon: BarChart3, id: "analytics" },
  { title: "Performance", icon: Activity, id: "performance" },
  { title: "API Keys", icon: Key, id: "api-keys" },
  { title: "Compliance", icon: Shield, id: "compliance" },
  { title: "Settings", icon: Settings, id: "settings" },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const [activeSection, setActiveSection] = useState("overview");
  const isCollapsed = state === "collapsed";

  return (
    <Sidebar className={isCollapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="w-4 h-4 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-sidebar-foreground">AI Gateway</h2>
              <p className="text-xs text-sidebar-foreground/60">Morocco Sovereign</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto">
            <Brain className="w-4 h-4 text-primary-foreground" />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setActiveSection(item.id)}
                    className={`${
                      activeSection === item.id 
                        ? "bg-sidebar-accent text-sidebar-primary font-medium" 
                        : "hover:bg-sidebar-accent/50"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}