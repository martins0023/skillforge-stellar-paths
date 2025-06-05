
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Code, Database, Star, Users, Settings } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI-Powered Skills Mapping",
      description: "Get personalized learning pathways based on your current skills and career goals in aerospace and defense."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Cloud-Hosted Labs",
      description: "Practice with Mars Innovation Labs and Magnetosphere Simulators in our cutting-edge cloud environment."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Connect with industry professionals from NASA, ESA, and leading defense research labs."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Web3 Credentials",
      description: "Earn blockchain-verified certifications that employers can trust and verify instantly."
    }
  ];

  const stats = [
    { number: "500+", label: "Industry Partners" },
    { number: "10K+", label: "Active Learners" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "24/7", label: "Cloud Lab Access" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stellar-navy via-slate-900 to-stellar-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-stellar-navy/50 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Train for Tomorrow's
                <span className="text-plasma-coral block">Frontier Careers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                AI-guided pathways to aerospace, defense, and beyond. Master cutting-edge skills through 
                interactive cloud labs and expert mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-plasma-coral hover:bg-plasma-coral/90 text-white px-8 py-4 text-lg"
                  asChild
                >
                  <Link to="/pathways">Start Your Journey</Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-plasma-coral text-plasma-coral hover:bg-plasma-coral hover:text-white px-8 py-4 text-lg"
                  asChild
                >
                  <Link to="/labs">Explore Labs</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-plasma-coral/20 to-magnet-green/20 rounded-2xl p-8 backdrop-blur-sm border border-plasma-coral/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-stellar-navy/50 rounded-lg p-4 text-center">
                    <div className="text-plasma-coral text-2xl font-bold">Mars</div>
                    <div className="text-gray-300 text-sm">Innovation Lab</div>
                  </div>
                  <div className="bg-stellar-navy/50 rounded-lg p-4 text-center">
                    <div className="text-magnet-green text-2xl font-bold">AI</div>
                    <div className="text-gray-300 text-sm">Skills Mapping</div>
                  </div>
                  <div className="bg-stellar-navy/50 rounded-lg p-4 text-center">
                    <div className="text-plasma-coral text-2xl font-bold">Web3</div>
                    <div className="text-gray-300 text-sm">Credentials</div>
                  </div>
                  <div className="bg-stellar-navy/50 rounded-lg p-4 text-center">
                    <div className="text-magnet-green text-2xl font-bold">24/7</div>
                    <div className="text-gray-300 text-sm">Mentorship</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-neutral-gray/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-plasma-coral mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Revolutionary Learning Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combining cutting-edge technology with expert guidance to prepare you for 
              careers in space systems engineering, defense, and advanced cybersecurity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="text-plasma-coral mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-plasma-coral/10 to-magnet-green/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals advancing their careers in aerospace, 
            defense, and emerging technologies.
          </p>
          <Button 
            size="lg"
            className="bg-plasma-coral hover:bg-plasma-coral/90 text-white px-12 py-4 text-lg"
            asChild
          >
            <Link to="/pathways">Begin Your Transformation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
