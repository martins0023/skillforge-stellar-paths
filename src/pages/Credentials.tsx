
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Star, Users, Settings, Link as LinkIcon } from 'lucide-react';

const Credentials = () => {
  const [activeTab, setActiveTab] = useState('earned');

  const credentials = [
    {
      id: 1,
      title: "Mars Systems Engineering Specialist",
      issuer: "SkillForge Academy",
      dateEarned: "2024-05-15",
      status: "verified",
      blockchainId: "0x7a4f...8c9d",
      level: "Advanced",
      skills: ["Atmospheric Modeling", "Mission Planning", "Systems Integration"],
      verificationUrl: "https://polygon.skillforge.io/verify/0x7a4f...8c9d",
      image: "photo-1485827404703-89b55fcc595e"
    },
    {
      id: 2,
      title: "Laser-Plasma Countermeasures Expert",
      issuer: "Defense Innovation Institute",
      dateEarned: "2024-04-22",
      status: "verified",
      blockchainId: "0x3b2e...5f1a",
      level: "Expert",
      skills: ["Laser Physics", "Plasma Dynamics", "Defense Systems"],
      verificationUrl: "https://polygon.skillforge.io/verify/0x3b2e...5f1a",
      image: "photo-1526374965328-7f61d4dc18c5"
    },
    {
      id: 3,
      title: "Artificial Magnetosphere Designer",
      issuer: "Space Defense Consortium",
      dateEarned: "2024-03-10",
      status: "verified",
      blockchainId: "0x9d8c...2e4f",
      level: "Advanced",
      skills: ["Electromagnetic Theory", "Field Modeling", "Superconductors"],
      verificationUrl: "https://polygon.skillforge.io/verify/0x9d8c...2e4f",
      image: "photo-1581090464777-f3220bbe1b8b"
    }
  ];

  const availableCredentials = [
    {
      id: 4,
      title: "Quantum Cybersecurity Architect",
      requirements: ["Complete 8 modules", "Pass capstone project", "Peer review"],
      estimatedTime: "12 weeks",
      level: "Expert",
      participants: 234,
      description: "Master quantum-resistant encryption and advanced threat detection systems."
    },
    {
      id: 5,
      title: "Hypersonic Vehicle Designer",
      requirements: ["Complete 10 modules", "CFD simulation project", "Technical presentation"],
      estimatedTime: "16 weeks",
      level: "Expert",
      participants: 156,
      description: "Design and analyze hypersonic vehicles for defense and space applications."
    },
    {
      id: 6,
      title: "AI Mission Planning Specialist",
      requirements: ["Complete 6 modules", "Build autonomous system", "Algorithm optimization"],
      estimatedTime: "8 weeks",
      level: "Intermediate",
      participants: 567,
      description: "Develop AI-driven systems for autonomous space mission planning."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'bg-magnet-green';
      case 'pending': return 'bg-yellow-500';
      case 'expired': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500';
      case 'Intermediate': return 'bg-yellow-500';
      case 'Advanced': return 'bg-orange-500';
      case 'Expert': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
              Web3 Verified Credentials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Earn blockchain-verified certifications that employers can trust. 
              Your achievements are permanently recorded on Polygon for instant verification.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 rounded-lg p-1">
              <Button
                variant={activeTab === 'earned' ? 'default' : 'ghost'}
                className={`${activeTab === 'earned' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveTab('earned')}
              >
                My Credentials
              </Button>
              <Button
                variant={activeTab === 'available' ? 'default' : 'ghost'}
                className={`${activeTab === 'available' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveTab('available')}
              >
                Available Credentials
              </Button>
            </div>
          </div>

          {/* Earned Credentials */}
          {activeTab === 'earned' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {credentials.map((credential) => (
                  <Card key={credential.id} className="bg-slate-800/50 border-gray-700 hover:border-magnet-green/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={getStatusColor(credential.status)}>
                          {credential.status.charAt(0).toUpperCase() + credential.status.slice(1)}
                        </Badge>
                        <Badge className={getLevelColor(credential.level)}>
                          {credential.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-white text-xl mb-2">
                        {credential.title}
                      </CardTitle>
                      <p className="text-plasma-coral text-sm font-medium">
                        {credential.issuer}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="text-sm text-gray-400">
                          <div className="flex items-center mb-2">
                            <Calendar className="w-4 h-4 mr-2" />
                            Earned: {formatDate(credential.dateEarned)}
                          </div>
                          <div className="bg-slate-700/50 rounded p-2">
                            <p className="text-xs text-gray-400 mb-1">Blockchain ID:</p>
                            <code className="text-magnet-green text-xs">{credential.blockchainId}</code>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-gray-300 font-medium">Skills Validated:</p>
                          <div className="flex flex-wrap gap-1">
                            {credential.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1 bg-magnet-green hover:bg-magnet-green/90 text-white"
                            onClick={() => window.open(credential.verificationUrl, '_blank')}
                          >
                            <LinkIcon className="w-4 h-4 mr-2" />
                            Verify
                          </Button>
                          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                            Share
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Credential Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-800/30 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-magnet-green mb-2">{credentials.length}</div>
                  <div className="text-gray-300 text-sm">Credentials Earned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-plasma-coral mb-2">100%</div>
                  <div className="text-gray-300 text-sm">Verification Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-magnet-green mb-2">Polygon</div>
                  <div className="text-gray-300 text-sm">Blockchain Network</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-plasma-coral mb-2">NFT</div>
                  <div className="text-gray-300 text-sm">Soulbound Tokens</div>
                </div>
              </div>
            </div>
          )}

          {/* Available Credentials */}
          {activeTab === 'available' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableCredentials.map((credential) => (
                <Card key={credential.id} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className={getLevelColor(credential.level)}>
                        {credential.level}
                      </Badge>
                      <div className="flex items-center text-gray-400">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{credential.participants}</span>
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">
                      {credential.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm">
                      {credential.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="text-sm text-gray-400">
                        <div className="flex items-center mb-2">
                          <Calendar className="w-4 h-4 mr-2" />
                          Estimated time: {credential.estimatedTime}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm text-gray-300 font-medium">Requirements:</p>
                        <ul className="text-sm text-gray-400 space-y-1">
                          {credential.requirements.map((req, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-plasma-coral rounded-full mr-2"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="w-full bg-plasma-coral hover:bg-plasma-coral/90 text-white">
                        Start Credential Path
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Credentials;
