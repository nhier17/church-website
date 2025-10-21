interface EventData {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category: string;
    imageUrl: string;
    registrationUrl?: string;
    eventType?: string;
};

interface Ministry {
    id: string;
    name: string;
    description: string;
    ageGroup: string;
    meetingTime: string;
    location: string;
    imageUrl: string;
    contact: string;
    leader: string;
}
