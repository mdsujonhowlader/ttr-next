export const metadata = {
  title: "Digital Marketing - The Tech Resolver",
  description: "Boost your online presence with our comprehensive digital marketing services including SEO, social media, and PPC.",
};

import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  BarChart3, 
  MessageCircle, 
  Target, 
  TrendingUp, 
  Users,
  Mail, 
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  Star
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Improve your visibility on search engines and drive organic traffic to your website.",
    features: ["On-page SEO", "Off-page SEO", "Technical SEO", "Keyword Research"]
  },
  {
    icon: MessageCircle,
    title: "Social Media Marketing",
    description: "Build brand awareness and engage with your audience across all social platforms.",
    features: ["Content Strategy", "Community Management", "Influencer Marketing", "Analytics"]
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Targeted paid campaigns that deliver immediate results and maximize ROI.",
    features: ["Google Ads", "Facebook Ads", "Retargeting", "A/B Testing"]
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your target audience.",
    features: ["Blog Posts", "Infographics", "Video Content", "E-books"]
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email campaigns.",
    features: ["Newsletter Design", "Automation", "Segmentation", "Analytics"]
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights to optimize your marketing strategy and measure success.",
    features: ["Performance KPIs", "Monthly Reports", "ROI Tracking", "Competitor Analysis"]
  }
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "10M+", label: " impressions Generated" },
  { value: "200%", label: "Average ROI Increase" },
  { value: "98%", label: "Client Satisfaction" }
];

const process = [
  { step: 1, title: "Discovery", description: "We analyze your business, audience, and goals to create a tailored strategy." },
  { step: 2, title: "Strategy", description: "We develop a comprehensive marketing plan aligned with your objectives." },
  { step: 3, title: "Implementation", description: "Our team executes the strategy with precision and creativity." },
  { step: 4, title: "Optimization", description: "We continuously monitor, analyze, and improve for maximum results." }
];

export default function DigitalMarketing() {
  return (
    <div className="min-h-screen bg-white dark:bg-transparent">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                <Star className="w-4 h-4" />
                Award-Winning Digital Agency
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Grow Your Business With{' '}
                <span className="text-primary">Strategic</span>{' '}
                Digital Marketing
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
                We help businesses of all sizes increase their online visibility, 
                generate quality leads, and achieve measurable growth through 
                data-driven marketing strategies.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
              
              <div className="mt-10 flex items-center gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70 rounded-3xl rotate-6" />
                <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/digitalmarketing.jpg"
                    alt="Digital Marketing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <div className="text-3xl font-bold">+200%</div>
                        <div className="text-sm opacity-80">ROI Growth</div>
                      </div>
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Our Digital Marketing Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to meet your unique business needs and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
              Our Approach
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A proven methodology that delivers results every time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-xl font-bold text-primary mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {p.description}
                  </p>
                </div>
                {p.step < 4 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Why Choose The Tech Resolver?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                We combine creativity with data-driven strategies to deliver 
                exceptional results for your business.
              </p>
              
              <div className="mt-8 space-y-4">
                {[
                  "Transparent reporting and regular updates",
                  "Dedicated account manager",
                  "Customized strategies for your business",
                  "Proven track record of success",
                  "Cutting-edge tools and technologies"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-primary rounded-2xl text-center">
                <Globe className="w-10 h-10 text-black dark:text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">150+</div>
                <div className="text-sm text-gray-900 dark:text-white">Websites Launched</div>
              </div>
              <div className="p-6 bg-primary rounded-2xl text-center">
                <Users className="w-10 h-10 text-black dark:text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-900 dark:text-white">Team Members</div>
              </div>
              <div className="p-6 bg-primary rounded-2xl text-center">
                <Smartphone className="w-10 h-10 text-black dark:text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                <div className="text-sm text-gray-900 dark:text-white">Client Satisfaction</div>
              </div>
              <div className="p-6 bg-primary rounded-2xl text-center">
                <BarChart3 className="w-10 h-10 text-black dark:text-white mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                <div className="text-sm text-gray-900 dark:text-white">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative bg-primary rounded-3xl p-12 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
            <div className="relative">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                Let&apos;s discuss how we can help you achieve your marketing goals 
                and grow your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}