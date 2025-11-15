import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { getCategoryColor } from "@/lib/utils";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

interface EventCardProps {
    event: EventData;
}

const EventsCard = ({ event }: EventCardProps) => {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const categoryColor = getCategoryColor(event.category);

  return (
    <Card
      className={`overflow-hidden shadow-md transition-transform hover:scale-[1.02] hover:shadow-xl relative p-0`}
    >
      {event.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover"
          />
          
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className={`font-semibold ${categoryColor}`}>
            {event.category}
          </Badge>
          <Badge variant="default" className="flex items-center gap-1 bg-green-100">
            <Calendar className="h-3 w-3" />
            {formattedDate}
          </Badge>
        </div>

        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>

        <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {event.time}
          </span>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {event.location}
          </span>
        </div>

          <p className="text-muted-foreground text-sm line-clamp-3">
          {event.description}
        </p>
      </CardContent>

      {event.registrationUrl && (
        <CardFooter className="p-6 border-t">
          <Link
            href={event.registrationUrl}
            className="text-green-100 font-medium hover:underline"
          >
            Register →
          </Link>
        </CardFooter>
      )}
    </Card>
  );
};

export default EventsCard;