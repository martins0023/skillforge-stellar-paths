
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Star, Users, Calendar } from 'lucide-react';

const Pathways = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Pathways' },
    { id: 'space', label: 'Space Systems' },
    { id: 'defense', label: 'Defense Tech' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'ai', label: 'AI & Simulation' }
  ];

  const pathways = [
    {
      id: 1,
      title: "Mars Mission Systems Engineering",
      category: "space",
      level: "Advanced",
      duration: "12 weeks",
      rating: 4.9,
      students: 1247,
      description: "Design and simulate Mars exploration systems including atmospheric modeling and landing technologies.",
      skills: ["Atmospheric Physics", "Orbital Mechanics", "Systems Engineering", "MATLAB/Simulink"],
      modules: 8,
      labs: 5,
      color: "plasma-coral"
    },
    {
      id: 2,
      title: "Laser-Induced Plasma Countermeasures",
      category: "defense",
      level: "Expert",
      duration: "16 weeks",
      rating: 4.8,
      students: 892,
      description: "Advanced defense systems using laser-induced plasma for infrared-homing missile countermeasures.",
      skills: ["Laser Physics", "Plasma Dynamics", "Defense Systems", "Python"],
      modules: 10,
      labs: 7,
      color: "magnet-green"
    },
    {
      id: 3,
      title: "Artificial Magnetosphere Design",
      category: "space",
      level: "Intermediate",
      duration: "10 weeks",
      rating: 4.7,
      students: 1563,
      description: "Create protective magnetic fields for space habitats and planetary defense systems.",
      skills: ["Electromagnetic Theory", "Superconductors", "Field Modeling", "CAD Design"],
      modules: 6,
      labs: 4,
      color: "plasma-coral"
    },
    {
      id: 4,
      title: "Quantum-Enhanced Cybersecurity",
      category: "cybersecurity",
      level: "Advanced",
      duration: "14 weeks",
      rating: 4.9,
      students: 756,
      description: "Next-generation cybersecurity using quantum cryptography and advanced threat detection.",
      skills: ["Quantum Computing", "Cryptography", "Network Security", "Machine Learning"],
      modules: 9,
      labs: 6,
      color: "magnet-green"
    },
    {
      id: 5,
      title: "AI-Driven Space Mission Planning",
      category: "ai",
      level: "Intermediate",
      duration: "8 weeks",
      rating: 4.6,
      students: 2134,
      description: "Use artificial intelligence for autonomous mission planning and resource optimization.",
      skills: ["Machine Learning", "Optimization", "Mission Planning", "TensorFlow"],
      modules: 5,
      labs: 3,
      color: "plasma-coral"
    },
    {
      id: 6,
      title: "Hypersonic Vehicle Aerodynamics",
      category: "defense",
      level: "Expert",
      duration: "18 weeks",
      rating: 4.8,
      students: 445,
      description: "Design and analysis of hypersonic vehicles for defense and space applications.",
      skills: ["Fluid Dynamics", "Heat Transfer", "CFD Analysis", "ANSYS Fluent"],
      modules: 12,
      labs: 8,
      color: "magnet-green"
    }
  ];

  const filteredPathways = selectedCategory === 'all' 
    ? pathways 
    : pathways.filter(pathway => pathway.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stellar-navy via-slate-900 to-stellar-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              AI-Guided Learning Pathways
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover personalized career tracks designed by experts from NASA, ESA, and leading defense organizations.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`${
                  selectedCategory === category.id
                    ? "bg-plasma-coral hover:bg-plasma-coral/90 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-plasma-coral hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Pathways Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPathways.map((pathway) => (
              <Card key={pathway.id} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getLevelColor(pathway.level)}>
                      {pathway.level}
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm text-gray-300">{pathway.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {pathway.title}
                  </CardTitle>
                  <p className="text-gray-300 text-sm">
                    {pathway.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {pathway.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pathway.students.toLocaleString()}
                      </div>
                    </div>

                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{pathway.modules} Modules</span>
                      <span>{pathway.labs} Labs</span>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {pathway.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {pathway.skills.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{pathway.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button className="w-full bg-plasma-coral hover:bg-plasma-coral/90 text-white">
                      Start Pathway
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pathways;
