import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MessageSquare, Tags, PenTool, HelpCircle, Star, Lightbulb, MessageCircle, Check, Link, ChevronDown, Menu, X } from "lucide-react";

export function ResponsiveForum() {
  const [selectedLatest, setSelectedLatest] = useState('Latest');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('All Discussions');

  const latestOptions = [
    'Latest', 'Today', 'This Week', 'This Month', 'This Year',
    'Most Viewed', 'Most Commented', 'Most Liked', 'Trending'
  ];

  const sidebarItems = [
    { icon: MessageSquare, label: "All Discussions" },
    { icon: Tags, label: "Tags" },
    { icon: PenTool, label: "Create Post" },
    { icon: HelpCircle, label: "Support" },
    { icon: Star, label: "Lisu's Space" },
    { icon: Lightbulb, label: "Ideas" },
    { icon: MessageCircle, label: "Feedback" },
    { icon: Check, label: "Solved" },
    { icon: Link, label: "Integrations" },
    { icon: Star, label: "Following" }, // Added Following section
  ];

  const forumPosts = [
    { title: "Staff Diary: v2.0 Cycle", author: "meihuak", time: "3 hours ago", lisu: true, blog: true, comments: 220 },
    { title: "Flarum v1.8.0 Released", author: "IanM", time: "2 days ago", lisu: true, blog: true, comments: 76 },
    { title: "CU9 - Extension Manager, Friends of Flarum and more", author: "serdo", time: "10 Jun", lisu: true, blog: true, comments: 106 },
    { title: "The Future of Flarum in 2024: Balancing Open Source and Success", author: "Darkle", time: "4 days ago", lisu: true, blog: true, comments: 96 },
    { title: "Introducing New Moderation Tools", author: "AdminUser", time: "1 day ago", lisu: false, blog: false, comments: 45 },
    { title: "Community Spotlight: Best Plugins of the Month", author: "PluginEnthusiast", time: "5 days ago", lisu: false, blog: true, comments: 89 },
    { title: "Upcoming AMA with Core Developers", author: "EventCoordinator", time: "2 hours ago", lisu: true, blog: false, comments: 132 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out transform
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:w-64
      `}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between lg:justify-center">
             
              <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-500 hover:text-gray-700" aria-label="Close sidebar">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="p-4">
            <Button className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg py-3 transition-all duration-300">
              Start a Discussion
            </Button>
          </div>
          <ScrollArea className="flex-grow">
            <nav className="space-y-1 px-3">
              {sidebarItems.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  onClick={() => setActiveItem(label)}
                  className={`flex items-center w-full px-4 py-3 text-sm rounded-lg transition-colors duration-300
                    ${activeItem === label ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                  aria-pressed={activeItem === label}
                >
                  <Icon className={`w-5 h-5 mr-3 ${activeItem === label ? 'text-blue-700' : 'text-gray-400'}`} />
                  {label}
                </button>
              ))}
            </nav>
          </ScrollArea>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4 lg:p-8">
        {/* Mobile Sidebar Toggle */}
        <Button
  className="lg:hidden fixed top-16 left-10 transform -translate-x-1/2 z-40 bg-white hover:bg-gray-100 text-gray-800 rounded-full shadow-lg"
  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
  aria-label="Toggle sidebar"
>
  <Menu className="h-6 w-6" />
</Button>


        <div className="max-w-4xl mx-auto">
          <div className="flex justify-end mb-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-40 sm:w-48 bg-white border-gray-300 text-gray-700 rounded-full hover:bg-gray-100">
                  {selectedLatest} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40 sm:w-48 bg-white border-gray-200 rounded-lg shadow-lg">
                <ScrollArea className="h-60">
                  {latestOptions.map((option) => (
                    <DropdownMenuItem 
                      key={option}
                      onSelect={() => setSelectedLatest(option)}
                      className="focus:bg-gray-100 focus:text-blue-600 rounded-md m-1"
                    >
                      {option}
                    </DropdownMenuItem>
                  ))}
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ScrollArea className="h-[calc(100vh-8rem)]">
            {forumPosts.map((post, index) => (
              <div key={index} className="mb-4 p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">{post.title}</h2>
                  <div className="flex items-center space-x-2">
                    {post.lisu && <span className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full font-medium">Lisu</span>}
                    {post.blog && <span className="px-3 py-1 text-xs bg-green-100 text-green-800 rounded-full font-medium">Blog</span>}
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-medium">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.time}</span>
                  <span className="ml-auto flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </main>
    </div>
  );
}
