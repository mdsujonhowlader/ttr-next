"use server";
import connectMongo from "@/lib/mongoose";
import serviceModel from "@/model/service";
import projectModel from "@/model/project";
import blogModel from "@/model/blogs";
import imageModel from "@/model/image";
import Visitor from "@/model/visitor";

export async function getDashboardStats() {
  try {
    await connectMongo();

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);

    const [servicesCount, projectsCount, blogsCount, imagesCount, totalVisitors, todayVisitors, weekVisitors] = await Promise.all([
      serviceModel.countDocuments(),
      projectModel.countDocuments(),
      blogModel.countDocuments(),
      imageModel.countDocuments(),
      Visitor.countDocuments(),
      Visitor.countDocuments({ visitedAt: { $gte: today } }),
      Visitor.countDocuments({ visitedAt: { $gte: weekAgo } }),
    ]);

    return {
      services: servicesCount,
      projects: projectsCount,
      blogs: blogsCount,
      images: imagesCount,
      visitors: totalVisitors,
      visitorsToday: todayVisitors,
      visitorsWeek: weekVisitors,
    };
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return { services: 0, projects: 0, blogs: 0, images: 0, visitors: 0, visitorsToday: 0, visitorsWeek: 0 };
  }
}