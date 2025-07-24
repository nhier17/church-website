import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export const navlinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Visit', href: '/visit' },
    { title: 'Sermons', href: '/sermons' },
    { title: 'Events', href: '/events' },
    { title: 'Ministries', href: '/ministries' },
    { title: 'Giving', href: '/giving' },
    { title: 'Contact', href: '/contact' }
];

export const footerLinks = {
quickLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Visit Us', href: '/visit' },
    { title: 'Sermons', href: '/sermons' },
    { title: 'Events', href: '/events' },
    { title: 'Ministries', href: '/ministries' },
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
        title: 'Kids Visit to Giraffe Center',
        date: '2024-12-24',
        time: '7:00 PM',
        location: 'Giraffe Center',
        description: 'A fun-filled weekend for kids to tour the giraffe center ',
        category: 'Worship',
        imageUrl: 'https://i.pinimg.com/736x/42/cf/03/42cf03aa83b34e40a8f0c91430638d72.jpg',
        registrationUrl: '/contact'
      },
      {
        id: 2,
        title: 'Choir Practice',
        date: '2025-01-15',
        time: '6:00 PM - 8:00 PM',
        location: 'Youth Center',
        description: 'Choir practice for the upcoming worship service.',
        category: 'Youth',
        imageUrl: 'https://i.pinimg.com/736x/d9/88/ba/d988ba26a7def19746f5635cf7c2a686.jpg',
        registrationUrl: '/contact'
      },
      {
        id: 3,
        title: 'Youth Camping',
        date: '2025-01-20',
        time: '9:00 AM - 3:00 PM',
        location: 'Church Parking Lot',
        description: 'A fun-filled weekend for teenagers to grow in faith, build friendships.',
        category: 'Outreach',
        imageUrl: 'https://i.pinimg.com/1200x/1b/62/3e/1b623ebde1130f3aafe8d92cc75841e5.jpg',
        registrationUrl: '/contact'
      }
];  
