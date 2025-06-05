
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Star, Users, Clock } from 'lucide-react';

const Mentorship = () => {
  const [selectedExpertise, setSelectedExpertise] = useState('all');

  const expertiseAreas = [
    { id: 'all', label: 'All Expertise' },
    { id: 'space', label: 'Space Systems' },
    { id: 'defense', label: 'Defense Tech' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'ai', label: 'AI & Simulation' }
  ];

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      title: "Mars Mission Architect",
      organization: "NASA JPL",
      expertise: ["space", "ai"],
      rating: 4.9,
      sessions: 147,
      experience: "15+ years",
      specialties: ["Mars Systems", "Atmospheric Modeling", "Mission Planning"],
      bio: "Led the atmospheric entry systems for three successful Mars missions. Expert in planetary protection protocols and surface operations.",
      availability: "Available",
      nextSlot: "Today 3:00 PM",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Col. Michael Rodriguez",
      title: "Defense Systems Engineer",
      organization: "DARPA",
      expertise: ["defense", "cybersecurity"],
      rating: 4.8,
      sessions: 203,
      experience: "20+ years",
      specialties: ["Laser Systems", "Countermeasures", "Electronic Warfare"],
      bio: "Former F-35 test pilot turned defense systems architect. Specialized in next-generation countermeasure technologies.",
      availability: "Busy",
      nextSlot: "Tomorrow 10:00 AM",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Dr. Elena Volkov",
      title: "Magnetosphere Physicist",
      organization: "ESA",
      expertise: ["space", "defense"],
      rating: 4.9,
      sessions: 89,
      experience: "12+ years",
      specialties: ["Magnetic Fields", "Plasma Physics", "Space Weather"],
      bio: "Leading researcher in artificial magnetosphere development for planetary defense and space habitat protection.",
      availability: "Available",
      nextSlot: "Today 5:30 PM",
      avatar: "/placeholder.svg"
    },
    {
      id: 4,
      name: "James Kim",
      title: "Senior Cybersecurity Architect",
      organization: "NSA",
      expertise: ["cybersecurity", "ai"],
      rating: 4.7,
      sessions: 312,
      experience: "18+ years",
      specialties: ["Quantum Cryptography", "Threat Intelligence", "Zero Trust"],
      bio: "Architect of national cybersecurity frameworks. Expert in quantum-resistant encryption and advanced persistent threat detection.",
      availability: "Available",
      nextSlot: "Today 7:00 PM",
      avatar: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Dr. Raj Patel",
      title: "AI Research Scientist",
      organization: "SpaceX",
      expertise: ["ai", "space"],
      rating: 4.8,
      sessions: 167,
      experience: "10+ years",
      specialties: ["Machine Learning", "Autonomous Systems", "Optimization"],
      bio: "Lead AI scientist for Starship autonomous landing systems. Pioneered reinforcement learning applications in space exploration.",
      availability: "Available",
      nextSlot: "Tomorrow 2:00 PM",
      avatar: "/placeholder.svg"
    },
    {
      id: 6,
      name: "Dr. Amanda Foster",
      title: "Hypersonics Engineer",
      organization: "Lockheed Martin",
      expertise: ["defense", "space"],
      rating: 4.9,
      sessions: 134,
      experience: "14+ years",
      specialties: ["Hypersonic Flight", "Thermal Management", "Propulsion"],
      bio: "Chief engineer on multiple hypersonic vehicle programs. Expert in thermal protection systems and scramjet propulsion.",
      availability: "Busy",
      nextSlot: "Monday 11:00 AM",
      avatar: "/placeholder.svg"
    }
  ];

  const filteredMentors = selectedExpertise === 'all' 
    ? mentors 
    : mentors.filter(mentor => mentor.expertise.includes(selectedExpertise));

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'bg-magnet-green';
      case 'Busy': return 'bg-yellow-500';
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
              Expert Mentorship Network
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with industry leaders from NASA, ESA, DARPA, and top defense contractors. 
              Get personalized guidance for your career in aerospace and defense.
            </p>
          </div>

          {/* Expertise Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {expertiseAreas.map((area) => (
              <Button
                key={area.id}
                variant={selectedExpertise === area.id ? "default" : "outline"}
                className={`${
                  selectedExpertise === area.id
                    ? "bg-plasma-coral hover:bg-plasma-coral/90 text-white"
                    : "border-gray-600 text-gray-300 hover:bg-plasma-coral hover:text-white"
                }`}
                onClick={() => setSelectedExpertise(area.id)}
              >
                {area.label}
              </Button>
            ))}
          </div>

          {/* Mentors Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={mentor.avatar} alt={mentor.name} />
                      <AvatarFallback className="bg-plasma-coral text-white text-lg">
                        {mentor.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-white text-lg">
                            {mentor.name}
                          </CardTitle>
                          <p className="text-plasma-coral text-sm font-medium">
                            {mentor.title}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {mentor.organization}
                          </p>
                        </div>
                        <Badge className={getAvailabilityColor(mentor.availability)}>
                          {mentor.availability}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm">
                      {mentor.bio}
                    </p>

                    <div className="flex justify-between text-sm text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-400" />
                        {mentor.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {mentor.sessions} sessions
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {mentor.experience}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-300 font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-1">
                        {mentor.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <div className="flex items-center text-sm text-gray-300">
                        <Calendar className="w-4 h-4 mr-2 text-magnet-green" />
                        Next available: {mentor.nextSlot}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-plasma-coral hover:bg-plasma-coral/90 text-white"
                        disabled={mentor.availability === 'Busy'}
                      >
                        {mentor.availability === 'Busy' ? 'Schedule Later' : 'Book Session'}
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mentorship Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-800/30 rounded-lg p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-coral mb-2">50+</div>
              <div className="text-gray-300 text-sm">Expert Mentors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magnet-green mb-2">5K+</div>
              <div className="text-gray-300 text-sm">Sessions Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-coral mb-2">4.8</div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magnet-green mb-2">95%</div>
              <div className="text-gray-300 text-sm">Career Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mentorship;
