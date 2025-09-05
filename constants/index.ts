import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, BookOpen, Heart, Users, Globe, Gift, Church } from 'lucide-react';

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
    { title: '0711 483 287/ 0722 955 571', icon: Phone },
    { title: 'info.noonkopirbbc@gmail.com', icon: Mail },
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
        details: '0711 483 287/ 0722 955 571'
    },
    {
        icon: '/icons/mail.svg',
        title: 'Email',
        details: 'info.noonkopirbbc@gmail.com'
    }
];

export const upcomingEvents: EventData[] = [
    {
        id: 1,
        title: 'Kids Retreat',
        date: '2025-08-22',
        time: '7:00 PM',
        location: 'Church Grounds',
        description: 'A fun-filled weekend for kids to tour the giraffe center ',
        category: 'Teens',
        imageUrl: '/images/kids.jpg',
        registrationUrl: '/contact',
        eventType: 'Passed',
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
        registrationUrl: '/contact', 
        eventType: 'Active',
      },
      {
        id: 3,
        title: 'Youth Retreat',
        date: '2025-08-23',
        time: '1:00 PM - 3:00 PM',
        location: 'Main Building',
        description: 'A weekend for the youth to build faith and grow in Christ.',
        category: 'Youth',
        imageUrl: 'https://i.pinimg.com/1200x/1b/62/3e/1b623ebde1130f3aafe8d92cc75841e5.jpg',
        registrationUrl: '/contact', 
        eventType: 'Active',
      },
      {
        id: 4,
        title: 'Smite Youth Camp',
        date: '2025-11-30',
        time: '9:00 AM - 3:00 PM',
        location: 'Heritage Baptist Church',
        description: 'A weekend for teenagers to grow in faith, build friendships.',
        category: 'Youth',
        imageUrl: '/images/smite.jpg',
        registrationUrl: '/contact',
        eventType: 'Upcoming',
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

export const ourStory = [
  {
    title: 'Our Story',
    description: 'We are a family of believers dedicated to knowing Christ, growing in faith, and sharing His love with the world.',
    image: '/images/leader.JPG',
  },
  {
    title: 'Growing Community',
    description: 'Fostering genuine fellowship where everyone feels loved and valued.',
    image: '/images/hero.JPG',
  },
  {
    title: 'Serving Others',
    description: 'Reaching out to meet spiritual and practical needs in our neighborhood.',
    image: '/images/food.JPG',
  },
  {
    title: 'Worship & Fellowship',
    description: 'Gathering to praise God and encourage one another in faith.',
    image: '/images/choir.JPG',
  },
  {
    title: 'Evangelism & Baptism',
    description: 'Sharing the Gospel and celebrating new life in Christ through baptism.',
    image: '/images/baptism.jpg',
  },
  {
    title: 'Christmas Plays',
    description: 'Telling the story of Christ’s birth through joyful performances.',
    image: '/images/christmas.JPG',
  },
  {
    title: 'SS Children',
    description: 'Nurturing young hearts with God’s Word in a fun, loving environment.',
    image: '/images/child.JPG',
  },
];

export const howTo = [
  {
    id: 1,
    title: "All people are sinners",
    description: "First of all you need to understand that you were born a sinner because of Adam's Sin.",
    verse: "Romans 3:23  For all have sinned, and come short of the glory of God;  <br />\n    Romans 5:12 Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:"
  },
  {
    id: 2,
    title: "Spiritual Death",
    description: "The Punishment of being a Sinner is Death",
    verse: "Romans 6:23a  For the wages of sin is death; <br />\n    Revelation 20:14 And death and hell were cast into the lake of fire. This is the second death."
  },
  {
    id: 3,
    title: "Knowing Christ",
    description: "If you do not know Christ you should be afraid to die and go to Hell",
    verse: "Matthew 10:28  And fear not them which kill the body, but are not able to kill the soul: but rather fear him which is able to destroy both soul and body in hell."
  },
  {
    id: 4,
    title: "God's Salvation",
    description: "God’s Salvation is a Free Gift to anyone who wants to get saved, you cannot do Good works for Salvation. Baptism is not part of salvation.",
    verse: "Ephesians 2:8 For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:  9 Not of works, lest any man should boast. <br />\n Romans 6:23b but the gift of God is eternal life through Jesus Christ our Lord."
  },
];

export const salvationSteps = {
  title: "5. If you know that you are a Sinner and want to be Saved then look below:",
  steps: [
    {
      id: 'A',
      text: "Tell God you are sorry for being a sinner and ask Him to forgive you.",
      verse: "Luke 13:3 Except ye repent, ye shall all likewise perish."
    },
    {
      id: 'B',
      text: "Say with your mouth that Jesus is God:",
      verse: "Romans 10:9a That if thou shalt confess with thy mouth the Lord Jesus"
    },
    {
      id: 'C',
      text: "Believe in your Heart that God raised Jesus from the Dead:",
      verse: "Romans 10:9b and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved."
    },
    {
      id: 'D',
      text: "You cannot be saved if you are ashamed of Jesus Christ:",
      verse: "Romans 10:11 For the scripture saith, Whosoever believeth on him shall not be ashamed."
    }
  ]
};

export const ministries = [
  {
    id: '1',
    name: 'SS Kids Ministry',
    description: 'A fun and safe environment where children learn about Jesus through engaging activities, Bible stories, crafts, and games that are tailored to their age group.',
    targetAudience: 'Ages 0-12',
    meetingTime: 'Sundays 10:00 AM',
    location: 'Classroom',
    imageUrl: '/images/ssclass.jpeg'
  },
  {
    id: '2',
    name: 'SS Adults Ministry',
    description: 'Bible-centered classes designed for adults to deepen their knowledge of Scripture, strengthen their faith, and grow in fellowship with one another.',
    targetAudience: 'Adults 18+',
    meetingTime: 'Sundays 10:00 AM',
    location: 'Classroom',
    imageUrl: '/images/adults.JPG'
  },
  {
    id: '3',
    name: 'Missions & Evangelism Ministry',
    description: 'Carrying the message of Christ beyond the church walls through local outreach, evangelism, and international missions.',
    targetAudience: 'All ages',
    meetingTime: 'Various times',
    location: 'Tanzania, South Sudan',
    imageUrl: '/images/missions.jpg'
  },
  {
    id: '4',
    name: 'Worship Ministry',
    description: 'Leading the congregation in heartfelt worship through music, instruments, and media, creating an atmosphere where people can encounter God’s presence.',
    targetAudience: 'All ages',
    meetingTime: 'Every Sunday',
    location: 'Main Building',
    imageUrl: '/images/choir.JPG'
  },
  {
    id: '5',
    name: 'Choir Ministry',
    description: 'A dedicated team of singers who lift their voices in harmony to glorify God and inspire the congregation through special music and worship services.',
    targetAudience: 'All ages',
    meetingTime: 'Every Sunday after service',
    location: 'Main Building',
    imageUrl: '/images/choir1.JPG'
  }
];

export const givingCategories = [
  { id: 'tithe', name: 'Tithe & Offerings', description: 'Regular church support' },
  { id: 'missions', name: 'Missions', description: 'Global outreach support' },
  { id: 'youth', name: 'Youth Ministry', description: 'Youth programs and activities' },
  { id: 'community', name: 'Community Outreach', description: 'Local community support' },
  { id: 'other', name: 'Other', description: 'Special projects and needs' }
];

export const ageGroups = [
  {
    id: 1,
    title: "Primary SS",
    description: "Nursery, preschool, and elementary programs",
    icon: Users,
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    id: 2,
    title: "Junior SS",
    description: "Teen programs, camps, and discipleship",
    icon: Heart,
    bgColor: "bg-green-50",
    iconColor: "text-green-100",
  },
  {
    id: 3,
    title: "Teens SS",
    description: "Bible studies, small groups, and classes",
    icon: BookOpen,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    id: 4,
    title: "Adults SS",
    description: "Fellowship, Bible study, and service opportunities",
    icon: Heart,
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
  },
];

export const whyWeGive = [
  {
    icon: Heart,
    title: 'Act of Worship',
    description: 'Giving expresses our gratitude and trust in God\'s provision.'
  },
  {
    icon: Church,
    title: 'Support Ministry',
    description: 'Enables us to serve our community and spread the Gospel.'
  },
  {
    icon: Users,
    title: 'Help Others',
    description: 'Supports those in need in our community and around the world.'
  },
  {
    icon: Globe,
    title: 'Advance Kingdom',
    description: 'Helps fulfill the Great Commission locally and globally.'
  }
];
