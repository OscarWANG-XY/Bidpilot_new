/**
* 应用侧边栏组件 (AppSidebar)
* 
* 功能描述:
* - 实现一个完整的应用程序侧边栏，包含团队切换、项目导航、主导航和用户信息
* - 支持图标模式的折叠功能
* - 提供顶部、内容区和底部三个分区
* 
* 组件结构:
* Sidebar                          // 侧边栏容器
*   ├── SidebarHeader             // 顶部区域
*   │    └── TeamSwitcher        // 团队切换组件
*   │
*   ├── SidebarContent           // 内容区域
*   │    ├── NavProjects        // 项目导航组件
*   │    └── NavMain           // 主导航组件
*   │
*   ├── SidebarFooter           // 底部区域
*   │    └── NavUser           // 用户信息组件
*   │
*   └── SidebarRail            // 侧边栏轨道(用于视觉分隔)
*
* 使用的组件:
* - 布局组件:
*   - Sidebar 相关组件(@/components/ui/sidebar)
*   - TeamSwitcher (@/components/layout/team-switcher)
*   - NavProjects (@/components/layout/nav-projects)
*   - NavMain (@/components/layout/nav-main)
*   - NavUser (@/components/layout/nav-user)
* 
* - Lucide 图标组件:
*   AudioWaveform, BookOpen, Bot, Command, Frame,
*   GalleryVerticalEnd, Map, PieChart, Settings2, SquareTerminal
* 
* 数据结构:
* - user: 用户信息 (姓名、邮箱、头像)
* - teams: 团队列表 (名称、logo、计划类型)
* - navMain: 主导航菜单配置 (标题、URL、图标、子菜单)
* - projects: 项目列表 (名称、URL、图标)
* 
* @param {...React.ComponentProps<typeof Sidebar>} props - 支持所有 Sidebar 组件的属性
*/

import * as React from "react"
import {
  GalleryVerticalEnd,
} from "lucide-react"

import { NavProjects } from "@/components/layout/nav-projects"
import { NavUser } from "@/components/layout/nav-user"
import { TeamSwitcher } from "@/components/layout/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "王晖",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "执智者",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  projects: [
    {
      name: "北京地铁春节粮油招标",
      url: "#",
      status: "完成",
      created: "2024-12-10",
      starred: true
    },
    {
      name: "江苏大学2025春节福利",
      url: "#",
      status: "暂定",
      created: "2025-01-01",
      starred: false
    },
      {
        name: "中国移动2025年度食堂招标 - 上海办公室徐汇区",
        url: "#",
        status: "进行中",
        created: "2025-01-11",
        starred: false
      },
      {
        name: "上海核工业食堂招标",
        url: "#",
        status: "进行中",
        created: "2025-01-11",
        starred: false
      },
      {
        name: "北京地铁-春节礼包",
        url: "#",
        status: "进行中",
        created: "2025-01-11",
        starred: false
      },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    // 侧边栏容器
    <Sidebar collapsible="icon" {...props}>
      {/* 顶部区域 */}
      <SidebarHeader>
        <TeamSwitcher/>
      </SidebarHeader>
      {/* 内容区域 */}
      <SidebarContent>
        <NavProjects projects={data.projects} />         

      </SidebarContent>
      {/* 底部区域 */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* 轨道 */}
      <SidebarRail />
    </Sidebar>
  )
}