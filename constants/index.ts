import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const navlinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Ministries', href: '/ministries' },
    { title: 'Missions', href: '/missions' },
    { title: 'Events', href: '/events' },
    { title: 'Giving', href: '/giving' },
    { title: 'Contact', href: '/contact' }
];

export const footerLinks = {
quickLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Ministries', href: '/ministries' },
    { title: 'Missions', href: '/missions' },
    { title: 'Events', href: '/events' },
    { title: 'Giving', href: '/giving' },
    { title: 'Contact', href: '/contact' }
],
socialLinks: [
    { icon: Facebook, href: 'https://facebook.com/' },
    { icon: Twitter, href: 'https://twitter.com/' },
    { icon: Instagram, href: 'https://instagram.com/' },
    { icon: Youtube, href: 'https://youtube.com/' },
],
contactLinks: [
    { title: 'Noonkopir, Kitengela', icon: MapPin},
    { title: '0797 123 456', icon: Phone },
    { title: 'info@nbbc.co.ke', icon: Mail },
]
};

export const upcomingEvents: EventData[] = [
    {
        id: 1,
        title: 'Kids Game Day',
        date: '2025-08-24',
        time: '7:00 PM',
        location: 'Church Grounds',
        description: 'A fun-filled weekend for kids to tour the giraffe center ',
        category: 'Teens',
        imageUrl: '/images/kids.jpg',
        registrationUrl: '/contact'
      },
      {
        id: 2,
        title: 'Choir Practice',
        date: '2025-03-08',
        time: 'After Service',
        location: 'Main Building',
        description: 'Choir practice for the upcoming worship service.',
        category: 'Worship',
        imageUrl: '/images/choir.JPG',
        registrationUrl: '/contact'
      },
      {
        id: 3,
        title: 'Smite Youth Camp',
        date: '2025-08-20',
        time: '9:00 AM - 3:00 PM',
        location: 'Heritage Baptist Church',
        description: 'A weekend for teenagers to grow in faith, build friendships.',
        category: 'Youth',
        imageUrl: 'https://i.pinimg.com/1200x/1b/62/3e/1b623ebde1130f3aafe8d92cc75841e5.jpg',
        registrationUrl: '/contact'
      }
];  

export const leaders = [
  {
    name: "Jerry Novak",
    position: "Pastor",
    image:
      "/images/leader.JPG",
    bio: "Jerry is passionate about community and spiritual growth. He has been serving for over 15 years.",
    email: "info@nbbchurch.com",
  },
  {
    name: "Pastor Andrew",
    position: "Pastor",
    image:
      "/images/leader1.JPG",
    bio: "Andrew supports outreach programs and youth development across the church.",
    email: "info@nbbchurch.com",
  },
];