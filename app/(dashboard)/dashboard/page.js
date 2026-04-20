import { getDashboardStats } from "@/actions/dashboardAction";
import Link from "next/link";
import { 
  Briefcase, 
  FileImage, 
  Folder, 
  Newspaper, 
  Users,
  TrendingUp,
  Eye,
  Plus,
  MousePointerClick
} from "lucide-react";

export default async function DashboardPage() {
  const stats = await getDashboardStats();

  const cards = [
    {
      title: "Total Visitors",
      value: stats.visitors,
      icon: Users,
      href: "/dashboard/settings",
      color: "bg-cyan-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
    },
    {
      title: "Today's Visitors",
      value: stats.visitorsToday,
      icon: MousePointerClick,
      href: "/dashboard/settings",
      color: "bg-emerald-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    },
    {
      title: "This Week",
      value: stats.visitorsWeek,
      icon: TrendingUp,
      href: "/dashboard/settings",
      color: "bg-violet-500",
      bgColor: "bg-violet-50 dark:bg-violet-900/20",
    },
    {
      title: "Services",
      value: stats.services,
      icon: Briefcase,
      href: "/dashboard/services/view-services",
      color: "bg-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      title: "Projects",
      value: stats.projects,
      icon: Folder,
      href: "/dashboard/projects",
      color: "bg-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      title: "Blogs",
      value: stats.blogs,
      icon: Newspaper,
      href: "/dashboard/blogs/view-blogs",
      color: "bg-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
    },
    {
      title: "Images",
      value: stats.images,
      icon: FileImage,
      href: "/dashboard/upload-files",
      color: "bg-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
    },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Welcome back! Here is your overview.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {card.title}
                </p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
                  {card.value}
                </p>
              </div>
              <div className={`p-3 rounded-lg ${card.bgColor}`}>
                <card.icon className={`w-6 h-6 ${card.color} text-white`} />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Actions
            </h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/dashboard/services/add-service"
              className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
            >
              <Briefcase className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Add Service
              </span>
            </Link>
            <Link
              href="/dashboard/blogs/create-blog"
              className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
            >
              <Newspaper className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Create Blog
              </span>
            </Link>
            <Link
              href="/dashboard/upload-files"
              className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors"
            >
              <FileImage className="w-5 h-5 text-orange-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Upload Files
              </span>
            </Link>
            <Link
              href="/dashboard/projects"
              className="flex items-center gap-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors"
            >
              <Folder className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Manage Projects
              </span>
            </Link>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Recent Activity
            </h2>
            <Eye className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {stats.services} Services
                </p>
                <p className="text-xs text-gray-500">Total services offered</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                <Folder className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {stats.projects} Projects
                </p>
                <p className="text-xs text-gray-500">Portfolio projects</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                <Newspaper className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {stats.blogs} Blog Posts
                </p>
                <p className="text-xs text-gray-500">Total published articles</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-6 text-white">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold">Ready to grow your business?</h2>
            <p className="text-white/80 mt-1">
              Add more services, projects, and content to attract clients.
            </p>
          </div>
          <Link
            href="/dashboard/services/add-service"
            className="flex items-center gap-2 px-4 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-medium"
          >
            <Plus className="w-4 h-4" />
            Add New Content
          </Link>
        </div>
      </div>
    </div>
  );
}