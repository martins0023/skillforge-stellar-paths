
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Users, Star, Clock } from 'lucide-react';

const Community = () => {
  const [activeSection, setActiveSection] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: "Mars Atmospheric Entry - Best Practices",
      author: "Dr. Sarah Chen",
      avatar: "/placeholder.svg",
      category: "Space Systems",
      replies: 23,
      views: 156,
      lastActivity: "2 hours ago",
      tags: ["Mars", "Entry Systems", "Thermal Protection"],
      isHot: true
    },
    {
      id: 2,
      title: "Implementing Laser-Plasma Countermeasures",
      author: "Alex Rodriguez",
      avatar: "/placeholder.svg",
      category: "Defense Tech",
      replies: 15,
      views: 89,
      lastActivity: "4 hours ago",
      tags: ["Laser Physics", "Defense", "Countermeasures"],
      isHot: false
    },
    {
      id: 3,
      title: "Quantum Cryptography in Space Communications",
      author: "Elena Kim",
      avatar: "/placeholder.svg",
      category: "Cybersecurity",
      replies: 31,
      views: 234,
      lastActivity: "6 hours ago",
      tags: ["Quantum", "Cryptography", "Communications"],
      isHot: true
    },
    {
      id: 4,
      title: "AI-Driven Mission Planning Algorithms",
      author: "Raj Patel",
      avatar: "/placeholder.svg",
      category: "AI & Simulation",
      replies: 18,
      views: 127,
      lastActivity: "1 day ago",
      tags: ["AI", "Mission Planning", "Optimization"],
      isHot: false
    }
  ];

  const events = [
    {
      id: 1,
      title: "Mars Mission Architecture Workshop",
      date: "2024-06-10",
      time: "14:00 UTC",
      attendees: 89,
      maxAttendees: 120,
      organizer: "NASA JPL",
      type: "Workshop",
      description: "Deep dive into current Mars mission architectures and future exploration plans."
    },
    {
      id: 2,
      title: "Defense Innovation Challenge",
      date: "2024-06-15",
      time: "16:00 UTC",
      attendees: 156,
      maxAttendees: 200,
      organizer: "DARPA",
      type: "Competition",
      description: "48-hour hackathon focusing on next-generation defense technologies."
    },
    {
      id: 3,
      title: "Quantum Security Symposium",
      date: "2024-06-20",
      time: "10:00 UTC",
      attendees: 234,
      maxAttendees: 300,
      organizer: "Quantum Consortium",
      type: "Conference",
      description: "Latest developments in quantum-resistant cybersecurity systems."
    }
  ];

  const achievements = [
    {
      id: 1,
      name: "Sarah Chen",
      achievement: "Completed Mars Systems Engineering pathway",
      badgeType: "Pathway Master",
      date: "2 days ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      achievement: "Earned Expert Laser-Plasma Countermeasures credential",
      badgeType: "Defense Expert",
      date: "3 days ago",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Lisa Zhang",
      achievement: "Contributed to Magnetosphere Simulator development",
      badgeType: "Community Contributor",
      date: "1 week ago",
      avatar: "/placeholder.svg"
    }
  ];

  const formatDate = (dateString: string) => {
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
              SkillForge Community
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with fellow learners, share knowledge, and collaborate on cutting-edge projects 
              in aerospace, defense, and emerging technologies.
            </p>
          </div>

          {/* Section Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 rounded-lg p-1">
              <Button
                variant={activeSection === 'discussions' ? 'default' : 'ghost'}
                className={`${activeSection === 'discussions' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveSection('discussions')}
              >
                Discussions
              </Button>
              <Button
                variant={activeSection === 'events' ? 'default' : 'ghost'}
                className={`${activeSection === 'events' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveSection('events')}
              >
                Events
              </Button>
              <Button
                variant={activeSection === 'achievements' ? 'default' : 'ghost'}
                className={`${activeSection === 'achievements' ? 'bg-plasma-coral text-white' : 'text-gray-300'}`}
                onClick={() => setActiveSection('achievements')}
              >
                Achievements
              </Button>
            </div>
          </div>

          {/* Discussions Section */}
          {activeSection === 'discussions' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Active Discussions</h2>
                <Button className="bg-plasma-coral hover:bg-plasma-coral/90 text-white">
                  Start Discussion
                </Button>
              </div>
              
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={discussion.avatar} alt={discussion.author} />
                          <AvatarFallback className="bg-plasma-coral text-white">
                            {discussion.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center space-x-2 mb-1">
                                <h3 className="text-white font-semibold text-lg">
                                  {discussion.title}
                                </h3>
                                {discussion.isHot && (
                                  <Badge className="bg-plasma-coral text-white text-xs">
                                    Hot
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
                                <span>by {discussion.author}</span>
                                <span>•</span>
                                <span>{discussion.category}</span>
                                <span>•</span>
                                <span>{discussion.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-1 mb-3">
                            {discussion.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <div className="flex items-center">
                              <Users className="w-4 h-4 mr-1" />
                              {discussion.replies} replies
                            </div>
                            <div className="flex items-center">
                              <span>{discussion.views} views</span>
                            </div>
                            <Button variant="ghost" size="sm" className="text-plasma-coral hover:text-white">
                              Join Discussion
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Events Section */}
          {activeSection === 'events' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
                <Button className="bg-plasma-coral hover:bg-plasma-coral/90 text-white">
                  Create Event
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="bg-slate-800/50 border-gray-700 hover:border-plasma-coral/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className="bg-magnet-green">
                          {event.type}
                        </Badge>
                        <div className="text-right text-sm text-gray-400">
                          <div>{formatDate(event.date)}</div>
                          <div>{event.time}</div>
                        </div>
                      </div>
                      <CardTitle className="text-white text-xl">
                        {event.title}
                      </CardTitle>
                      <p className="text-plasma-coral text-sm font-medium">
                        Organized by {event.organizer}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {event.attendees}/{event.maxAttendees} attending
                        </div>
                      </div>
                      
                      <Button className="w-full bg-plasma-coral hover:bg-plasma-coral/90 text-white">
                        Register
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {activeSection === 'achievements' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white">Recent Achievements</h2>
              
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <Card key={achievement.id} className="bg-slate-800/50 border-gray-700">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={achievement.avatar} alt={achievement.name} />
                          <AvatarFallback className="bg-magnet-green text-white">
                            {achievement.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-white font-semibold">
                                {achievement.name}
                              </h3>
                              <p className="text-gray-300 text-sm">
                                {achievement.achievement}
                              </p>
                            </div>
                            <div className="text-right">
                              <Badge className="bg-plasma-coral mb-1">
                                {achievement.badgeType}
                              </Badge>
                              <div className="text-sm text-gray-400">
                                {achievement.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Community Stats */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 bg-slate-800/30 rounded-lg p-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-coral mb-2">12K+</div>
              <div className="text-gray-300 text-sm">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magnet-green mb-2">2.5K</div>
              <div className="text-gray-300 text-sm">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-plasma-coral mb-2">150+</div>
              <div className="text-gray-300 text-sm">Events Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-magnet-green mb-2">95%</div>
              <div className="text-gray-300 text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
