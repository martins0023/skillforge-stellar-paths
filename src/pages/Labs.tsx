
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Users, Calendar, Settings } from 'lucide-react';

const Labs = () => {
  const [activeTab, setActiveTab] = useState('available');

  const labs = [
    {
      id: 1,
      title: "Mars Innovation Lab",
      category: "Space Systems",
      status: "available",
      duration: "2-4 hours",
      participants: 24,
      maxParticipants: 30,
      difficulty: "Advanced",
      description: "Virtual environment simulating Martian atmospheric conditions for testing laser-induced plasma countermeasures.",
      features: ["Real-time Physics Engine", "Multi-user Collaboration", "GPU-Accelerated Simulations"],
      nextSession: "2024-06-06T14:00:00Z",
      image: "photo-1485827404703-89b55fcc595e"
    },
    {
      id: 2,
      title: "Artificial Magnetosphere Simulator",
      category: "Defense Tech",
      status: "available",
      duration: "3-5 hours",
      participants: 18,
      maxParticipants: 25,
      difficulty: "Expert",
      description: "Cloud-based physics engine modeling scaled artificial magnetosphere around virtual urban grid.",
      features: ["CUDA-Accelerated Computing", "Real-time Parameter Tuning", "Solar Storm Simulation"],
      nextSession: "2024-06-06T16:00:00Z",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: 3,
      title: "Quantum Shield Laboratory",
      category: "Future Tech",
      status: "beta",
      duration: "4-6 hours",
      participants: 12,
      maxParticipants: 20,
      difficulty: "Expert",
      description: "Interactive simulation of quantum magnetospheres for next-generation defense research.",
      features: ["Quantum Field Modeling", "Advanced Visualization", "Collaborative Research Tools"],
      nextSession: "2024-06-07T10:00:00Z",
      image: "photo-1581090464777-f3220bbe1b8b"
    },
    {
      id: 4,
      title: "Autonomous Drone Swarm Lab",
      category: "AI Systems",
      status: "available",
      duration: "2-3 hours",
      participants: 35,
      maxParticipants: 40,
      difficulty: "Intermediate",
      description: "Cloud-based UAV swarm coordination under Mars-like atmospheric conditions.",
      features: ["Swarm Intelligence", "Atmospheric Modeling", "Mission Planning Tools"],
      nextSession: "2024-06-06T18:00:00Z",
      image: "photo-1485827404703-89b55fcc595e"
    },
    {
      id: 5,
      title: "Hypersonic Wind Tunnel",
      category: "Aerodynamics",
      status: "maintenance",
      duration: "3-4 hours",
      participants: 0,
      maxParticipants: 15,
      difficulty: "Expert",
      description: "Virtual wind tunnel for testing hypersonic vehicle designs with real-time CFD analysis.",
      features: ["CFD Integration", "Material Testing", "Performance Analytics"],
      nextSession: "2024-06-08T14:00:00Z",
      image: "photo-1518770660439-4636190af475"
    },
    {
      id: 6,
      title: "Cybersecurity War Room",
      category: "Cybersecurity",
      status: "available",
      duration: "4-8 hours",
      participants: 28,
      maxParticipants: 50,
      difficulty: "Advanced",
      description: "Simulate and defend against advanced persistent threats in critical infrastructure.",
      features: ["Real-time Threat Simulation", "Team Coordination", "Incident Response Training"],
      nextSession: "2024-06-06T20:00:00Z",
      image: "photo-1498050108023-c5249f4df085"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-magnet-green';
      case 'beta': return 'bg-yellow-500';
      case 'maintenance': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredLabs = labs.filter(lab => {
    if (activeTab === 'available') return lab.status === 'available';
    if (activeTab === 'beta') return lab.status === 'beta';
    if (activeTab === 'all') return true;
    return true;
  });

  const formatNextSession = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-stellar-navy via-slate-900 to-stellar-navy">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Cloud-Hosted Interactive Labs
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience cutting-edge simulations and experiments in our GPU-accelerated cloud environment.
              Practice with real-world scenarios from Mars missions to defense systems.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 rounded-lg p-1">
              <Button
                variant={activeTab === 'available' ? 'default' : 'ghost'}
                className={`${activeTab === 'available' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveTab('available')}
              >
                Available Labs
              </Button>
              <Button
                variant={activeTab === 'beta' ? 'default' : 'ghost'}
                className={`${activeTab === 'beta' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveTab('beta')}
              >
                Beta Labs
              </Button>
              <Button
                variant={activeTab === 'all' ? 'default' : 'ghost'}
                className={`${activeTab === 'all' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveTab('all')}
              >
                All Labs
              </Button>
            </div>
          </div>

          {/* Labs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLabs.map((lab) => (
              <Card key={lab.id} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(lab.status)}>
                      {lab.status.charAt(0).toUpperCase() + lab.status.slice(1)}
                    </Badge>
                    <Badge className={getDifficultyColor(lab.difficulty)}>
                      {lab.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl mb-2">
                    {lab.title}
                  </CardTitle>
                  <Badge variant="outline" className="text-plasma-coral border-plasma-coral mb-2 w-fit">
                    {lab.category}
                  </Badge>
                  <p className="text-gray-300 text-sm">
                    {lab.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {lab.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {lab.participants}/{lab.maxParticipants}
                      </div>
                    </div>

                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      Next: {formatNextSession(lab.nextSession)}
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-300 font-medium">Key Features:</p>
                      <div className="flex flex-wrap gap-1">
                        {lab.features.map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-plasma-coral hover:bg-plasma-coral/90 text-white"
                        disabled={lab.status === 'maintenance'}
                      >
                        {lab.status === 'maintenance' ? 'Unavailable' : 'Join Lab'}
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-800/30 rounded-lg p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-coral mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Lab Access</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magnet-green mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-coral mb-2">GPU</div>
              <div className="text-gray-300 text-sm">Accelerated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magnet-green mb-2">Multi</div>
              <div className="text-gray-300 text-sm">User Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Labs;
