import EventsCard from '@/components/features/EventsCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Plus } from 'lucide-react';
import { events } from '@/constants';


const Events = () => {
    const currentDate = new Date();
    const upcomingEvents = events.filter(event => new Date(event.date) >= currentDate);
    const pastEvents = events.filter(event => new Date(event.date) < currentDate);
    const categories = [...new Set(events.map(event => event.category))];
    
  return (
    <div className="pt-20">
    <section className="section-padding bg-green-100 text-white">
      <div className="text-center container-custom">
        <h1 className="heading-2 mb-6">Upcoming Events</h1>
        <p className="text-large max-w-3xl mx-auto text-primary-foreground/90">
          Join us for exciting events, fellowship opportunities, and ways to grow 
          in community. There's always something happening at Grace Church!
        </p>
      </div>
    </section>

    <section className="py-8 bg-secondary">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="text-sm font-medium">Filter by category:</span>
            <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              All Events
            </Badge>
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground capitalize"
              >
                {category}
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Badge variant="default" className="bg-green-600">
              {upcomingEvents.length} Upcoming
            </Badge>
            <Badge variant="secondary">
              {pastEvents.length} Past Events
            </Badge>
          </div>
        </div>
    </section>

    <section className="section-padding">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        </div>
        
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <EventsCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4">No Upcoming Events Right Now</h3>
            <p className="text-muted-foreground mb-8">
              Check back soon for new events and opportunities to connect with our community.
            </p>
            <Button variant="outline">
              <Plus className="h-4 w-4 mr-2" />
              Suggest an Event
            </Button>
          </div>
        )}
    </section>

    {pastEvents.length > 0 && (
      <section className="section-padding bg-secondary">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Recent Events</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
          </div>
          
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="relative">
                <EventsCard event={event} />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-gray-500 text-white">
                    Past Event
                  </Badge>
                </div>
              </div>
            ))}
          </div>
      </section>
    )}

    <section className="section-padding">
      <div className="text-start md:text-center">
        <h2 className="heading-2 mb-4">Stay Updated</h2>
        <div className="w-24 h-1 mb-4 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full" />
        <p className="text-large text-muted-foreground max-w-2xl mx-auto mb-8">
          Add our events calendar to your phone or computer so you never miss 
          an opportunity to connect and grow with our church family.
        </p>
        
        <div className="max-w-md mx-auto">
          <Button variant="outline" size="lg">
            Email Notifications
          </Button>
        </div>
      </div>
    </section>

    <section className="section-padding">
        <div className="md:text-center text-start mb-12">
          <h2 className="heading-2 mb-4">Get Involved</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-green-400 mx-auto rounded-full mb-4" />
          <p className="text-large text-muted-foreground max-w-2xl mx-auto">
            Have an idea for an event or want to help organize something? 
            We'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <Button className="w-full bg-green-100 hover:bg-green-100/80" size="lg">
            Contact Event Team
          </Button>
        </div>
    </section>
  </div>
  )
}

export default Events