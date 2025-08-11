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

export const faqs = [
    {
        question: 'What time are the church services?',
        answer: 'Our main worship service is held every Sunday at 11:00 AM. We also have Sunday school at 10:00 AM.'
    },
    {
        question: 'Do I need to be a member to attend services?',
        answer: 'No. Everyone is welcome to attend our services and events regardless of membership.'
    },
    {
        question: 'Do you have children’s ministry?',
        answer: 'Yes! We have Sunday School for children of all ages during the main service, as well as special youth programs throughout the week.'
    },
    {
        question: 'Do you offer counseling or prayer support?',
        answer: 'Yes, we offer counseling and prayer support to our members and community.'
    },
    {
        question: 'How can I get Involved?',
        answer: 'There are many opportunities to serve — children’s ministry, community service. Speak to one of our leaders after service to learn more.'
    },
    {
      question: 'Do you livestream services?',
      answer: 'Not at the moment, we plan to livestream our services on our YouTube channel.'
    },
    {
      question: 'Is there parking available?',
      answer: 'Yes, we have parking available for our members and visitors.'
    }
];

export const addressInfo = [
    {
        icon: '/icons/map.svg',
        title: 'Church Location',
        details: 'Noonkopir, Kitengela'
    },
    {
        icon: '/icons/phone.svg',
        title: 'Phone',
        details: '0797 123 456'
    },
    {
        icon: '/icons/mail.svg',
        title: 'Email',
        details: 'info@nbbc.co.ke'
    }
];

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
        date: '2025-08-24',
        time: '1:00 PM - 3:00 PM',
        location: 'Main Building',
        description: 'Choir practice for the upcoming worship service.',
        category: 'Worship',
        imageUrl: '/images/choir.JPG',
        registrationUrl: '/contact'
      },
      {
        id: 3,
        title: 'Smite Youth Camp',
        date: '2025-11-30',
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