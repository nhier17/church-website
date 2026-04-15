import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, BookOpen, Heart, Users, Globe, Gift, Church, Target } from 'lucide-react';

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
    { title: '0711 483 287/ 0722 955 570', icon: Phone },
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
        details: '0711 483 287/ 0722 955 570'
    },
    {
        icon: '/icons/mail.svg',
        title: 'Email',
        details: 'info.noonkopirbbc@gmail.com'
    }
];

export const events: EventData[] = [
      {
        id: 1,
        title: 'Leaders Forum',
        date: '2026-04-17 - 2026-04-19',
        time: '7:00 AM',
        location: 'Maseno Baptist Church',
        description:
          'An inspiring forum designed to equip and empower youth leaders through biblical teaching, mentorship, and interactive discussions.',
        category: 'Youth',
        imageUrl: '/images/forum.jpeg',
        registrationUrl: '/contact',
      },
      {
        id: 2,
        title: 'Youth Camp',
        date: '2026-04-20 - 2026-04-25',
        time: '9:00 AM',
        location: 'Ruiru Bible Baptist Church',
        description:
          'A transformative youth camp focused on spiritual growth, fellowship, worship, and engaging outdoor activities.',
        category: 'Youth',
        imageUrl: '/images/youthcamp.jpeg',
        registrationUrl: '/contact',
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
      }
];  

export const leaders = [
  {
    name: "Jerry Novak",
    position: "Pastor",
    image:
      "/images/leader.JPG",
    bio: "Jerry is passionate about community and spiritual growth. He has been serving for over 15 years.",
    email: "info.noonkopirbbc@gmail.com",
  },
  {
    name: "Andrew Tsuma",
    position: "Pastor",
    image:
      "/images/leader1.JPG",
    bio: "Andrew supports outreach programs and youth development across the church.",
    email: "info.noonkopirbbc@gmail.com",
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

export const whatWeBelieve = [
  {
    title: "Holy Scriptures",
    paragraphs: [
      "We believe that the Holy Bible, as originally written, was verbally inspired and the product of Spirit-controlled men, and therefore, is completely true, without error, in its content.",
      "We believe the Bible to be the foundation upon which to establish Christian relationships, and the Supreme standard by which our thoughts and actions are to be tested."
    ],
    verses: ["II Timothy 3:16-17", "II Peter 1:19-20"],
    gradient: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-500"
  },
  {
    title: "Godhead and the Trinity",
    paragraphs: [
      "We believe that there is only one living and true God, infinite in every excellence; that in the unity of the Godhead there are three (3) distinct personalities - God the Father, God the Son, and God the Holy Spirit - yet one in substance and equal in every divine perfection.",
      "We believe in the absolute Deity of the Son, the Lord Jesus Christ; that He was divine as no other man can be, being God the Son of God the Father, existing from all eternity, co-equal with the Father and the Holy Spirit; that He never ceased to be God for one instant and His humiliation did not consist in laying aside His Deity; that to walk on this earth as man, He was miraculously born of the Virgin Mary through the implantation of the Holy Spirit.",
      "We believe that the Holy Spirit is a Divine Person, equal with the Father and the Son. The Holy Spirit convicts us of sin and dwells within every believer who accepts God the Son as their Lord and Savior, to bear witness to the truth, teach, guide in life's directions, and comfort in times of need."
    ],
    verses: [
      "Exodus 20:2-3", "I Corinthians 8:6", "I John 5:7", "John 1:1-2",
      "I John 5:20", "Matthew 1:20", "Luke 1:26-38", 
      "II Corinthians 13:14", "John 14:16-17", "Romans 8:14-27"
    ],
    gradient: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-500"
  },
  {
    title: "Man",
    paragraphs: [
      "We believe that man, Adam, was created in innocence, without sin, by God.",
      "We further believe that Adam voluntarily, with the influence of Satan through the form of a serpent, fell from his sinless state by disobeying a direct command of God.",
      "In consequence, we believe that all mankind are now born in this 'prone to sin' state, which results in a sinful nature under condemnation from God without defense or excuse."
    ],
    verses: ["Genesis 3:1-6", "Romans 5:10-19", "Romans 1:13", "Romans 1:32"],
    gradient: "from-gray-500/10 to-gray-600/5",
    border: "border-gray-800"
  },
  {
    title: "Salvation, New Birth & Security",
    paragraphs: [
      "We believe that our acknowledgment of sin in our lives and acceptance of Jesus Christ as Savior based on His finished work on Calvary is the only condition of salvation from sin, and that this salvation is wholly by the Grace of God.",
      "We further believe that no works, no matter how good they may appear to be, makes our salvation any more secure.",
      "We believe that all who accept Christ as their personal Savior are instantly saved from the penalties of sin, and eternally secure in that salvation."
    ],
    verses: [
      "John 3:1-7", "Acts 16:31", "Ephesians 2:8-9", "Titus 3:5-7", 
      "Romans 10:9-13", "John 10:28-29", "Romans 8:35-39", "John 14:1-2"
    ],
    gradient: "from-red-500/10 to-red-600/5",
    border: "border-red-500"
  },
  {
    title: "Local Church",
    paragraphs: [
      "We believe that a local church is a congregation of baptized believers who profess and proclaim Jesus Christ as their personal Lord and Savior:"
    ],
    list: [
      "Observing the Ordinances set forth by our Lord and Savior Jesus Christ",
      "Governed by God's Word",
      "Exercising the rights and privileges afforded by the Word of God, and encouraging each other to utilize the gifts provided each of us by our Lord for the benefit of the Church"
    ],
    paragraphs2: [
      "We believe the true mission of the Church is the faithful witnessing of Christ to all people as we have the opportunity.",
      "We believe that the local church has the absolute right of self-government, free from the guidance of any outside hierarchy of individuals or organizations - regardless of how well intended that guidance may be. The local church will decide on matters of membership, of governing policy within the local church, of discipline, and giving. Only the Word of God will provide the guiding direction for this church.",
      "We believe it is scriptural for churches of like faith and belief to cooperate with each other in reaching out in the community and in the world to reach those that do not know Jesus Christ as Lord and Savior. Each local church will be their own judge relative to the measure and method of their cooperation."
    ],
    verses: [
      "Acts 2:41-42", "I Corinthians 11:2", "Ephesians 1:22-23", 
      "Ephesians 4:11", "Acts 20:27-28", "Colossians 1:18", 
      "I Timothy 3:1-15", "Ephesians 5:22-23", "Acts 15:13-18"
    ],
    gradient: "from-yellow-500/10 to-yellow-600/5",
    border: "border-yellow-500"
  },
  {
    title: "Last Things",
    subsections: [
      {
        subtitle: "Pre-tribulation / Pre-millennial Return of Christ",
        content:
          "We believe in the bodily, personal, pre-tribulation/pre-millennial return of Jesus Christ to the earth; that He will come before the seven year tribulation period to meet in the air all those who have accepted Him as their personal Lord and Savior - whether living or dead. Further, Christ will come with His church at the close of the tribulation period to judge all the nations then on earth and to set up His kingdom on earth.",
        verses: ["I Thessalonians 4:13-18", "Matthew 25:31-46", "Revelation 19:11-21"]
      },
      {
        subtitle: "Eternal Destiny",
        content:
          "We believe in a literal Heaven; a place being prepared by God; a place of true joy and bliss; a place for all who have accepted Christ as their personal Savior to look forward to spend their eternity with Him in Heaven. Further, we believe in a literal Hell, with real flames; a place prepared for the eternal punishment of Satan and his angels; a place of eternal torment and pain; a place where those who do not accept Jesus Christ as their personal Savior will be cast following Christ's Millennial reign and their ultimate verdict at the Great White Throne of Judgment.",
        verses: []
      }
    ],
    gradient: "from-teal-500/10 to-teal-600/5",
    border: "border-teal-500"
  }
];


export const ministries = [
  {
    id: "1",
    name: "Primary Sunday School",
    description:
      "The Primary Ministry provides a nurturing and fun environment for children to learn about God’s love through songs, stories, and engaging lessons. Our goal is to plant a strong biblical foundation in the hearts of young children.",
    leader: "Teacher Margaret.",
    meetingTime: "Every Sunday, 10:00 AM",
    location: "Children’s Classroom",
    contact: "info.noonkopirbbc@gmail.com",
    mission:
      "To guide children to know, love, and follow Jesus Christ through Bible-centered teaching, songs, and creative activities that make learning God’s Word enjoyable.",
    activities: [
      "Bible story sessions and scripture memorization",
      "Children’s praise and worship time",
      "Art, crafts, and interactive games",
      "Special Sunday presentations and recitations",
      "Parents and children joint devotion days",
    ],
    scripture:
      "“Train up a child in the way he should go, and when he is old he will not depart from it.” — Proverbs 22:6",
    ageGroup: "children",
    imageUrl: "/images/primaryss.JPG",
    gallery: [
      "/images/primary1.JPG",
      "/images/primary2.jpeg",
      "/images/primary3.jpg",
    ],
  },
  {
    id: "2",
    name: "Junior Sunday School",
    description:
      "Helping pre-teens grow in their understanding of the Bible and their relationship with Christ. The Junior Ministry bridges the transition from childhood to adolescence with interactive teaching and mentorship.",
    leader: "Teacher Jane",
    meetingTime: "Every Sunday, 10:00 AM",
    location: "Junior Class Room",
    contact: "info.noonkopirbbc@gmail.com",
    mission:
      "To disciple pre-teens by grounding them in biblical truth, helping them develop Christian character, and preparing them to serve God faithfully in their daily lives.",
    activities: [
      "Bible study discussions and Q&A",
      "Mentorship and leadership sessions",
      "Memory verse challenges",
      "Community projects and outreach",
      "Interactive games and Christian quizzes",
    ],
    scripture:
      "“How can a young person stay on the path of purity? By living according to your word.” — Psalm 119:9",
    ageGroup: "pre-teens",
    imageUrl: "/images/kids.jpg",
    gallery: [
      "/images/juniorss.JPG",
      "/images/junior1.JPG",
      "/images/kids.jpg",
    ],
  },
  {
    id: "3",
    name: "Teens Ministry",
    description:
      "The Teens Ministry exists to help teenagers build their identity in Christ and make wise, godly decisions. Through fellowship, mentorship, and Bible-based discussions, teens learn to apply God’s Word in their daily lives.",
    leader: "Brother Dominic",
    meetingTime: "Every Sunday, 10:00 AM",
    location: "Teen Room",
    contact: "info.noonkopirbbc@gmail.com",
    mission:
      "To encourage teenagers to grow spiritually, develop a biblical worldview, and be bold witnesses for Christ among their peers and community.",
    activities: [
      "Bible study and open discussions",
      "Music, poetry, and creative expression",
      "Youth camps and seminars",
      "Peer mentorship and life-skill sessions",
      "Community and school outreach programs",
    ],
    scripture:
      "“Let no one despise your youth, but be an example to the believers...” — 1 Timothy 4:12",
    ageGroup: "teens",
    imageUrl: "/images/teens.JPG",
    gallery: [
      "/images/teens1.JPG",
      "/images/teens2.JPG",
      "https://i.pinimg.com/1200x/a0/b9/88/a0b988fa8cac8ffd7b1e1c28d3b0c4c7.jpg",
    ],
  },
  {
    id: "4",
    name: "Youth Ministry",
    description:
      "The Youth Ministry provides a platform for young adults to connect, grow in faith, and serve together. They meet whenever planned, focusing on leadership, service, and equipping young people to live out their faith boldly.",
    leader: "Pastor Andrew",
    meetingTime: "Meetings as planned",
    location: "Church Building",
    contact: "info.noonkopirbbc@gmail.com",
    mission:
      "To empower young adults to grow spiritually, serve faithfully, and lead purposefully through fellowship, discipleship, and mission opportunities.",
    activities: [
      "Youth-led worship and Bible discussions",
      "Community service projects",
      "Outdoor retreats and bonding activities",
      "Leadership and discipleship training",
      "Music, drama, and event planning",
    ],
    scripture:
      "“Even youths shall faint and be weary... but those who wait on the Lord shall renew their strength.” — Isaiah 40:30-31",
    ageGroup: "youth",
    imageUrl: "https://i.pinimg.com/736x/20/00/6a/20006a8ce295e4430de4cff30dfdbeec.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/cb/3b/80/cb3b8092dd52bc706f547978dd818928.jpg",
      "https://i.pinimg.com/736x/8a/b8/90/8ab89026da05268402c8f70615b87cad.jpg",
      "https://i.pinimg.com/736x/68/67/a9/6867a903bc80bed440b18ec85e8f5c91.jpg",
    ],
  },
  {
    id: "5",
    name: "Missions & Evangelism Ministry",
    description:
      "Empowering believers to share the Gospel and nurture a passion for mission work. We teach, mentor, and guide young adults who feel called to local and global evangelism.",
    leader: "Pastor Jerry",
    meetingTime: "Every Sunday, 10AM",
    location: "Church Conference Hall",
    contact: "info.noonkopirbbc@gmail.com",
    mission:
      "To inspire and equip believers—especially young adults—to actively engage in evangelism and mission work, spreading the love and message of Christ both locally and beyond.",
    activities: [
      "Evangelism training and discipleship sessions",
      "Community outreach and door-to-door evangelism",
      "Missionary mentorship and prayer support",
      "Organizing local and regional mission trips",
      "Partnering with missionaries in the field",
    ],
    scripture: "“Go therefore and make disciples of all nations...” — Matthew 28:19",
    ageGroup: "all ages",
    imageUrl: "/images/ssadults.JPG",
    gallery: [
      "/images/ssadults-1.JPG",
      "/images/ssadults-2.JPG",
      "/images/ssadults-3.JPG",
    ],
  },
  {
    id: "6",
    name: "Church Sunday School",
    description:
      "The Church Sunday School is a time of learning and fellowship for both youths and adults. It provides structured Bible study, discussion, and prayer, helping believers grow deeper in their understanding of Scripture.",
    leader: "Pastor Andrew",
    meetingTime: "Every Sunday, 9:00 AM – 10:00 AM",
    location: "Main Auditorium",
    contact: "info.noonkopirbbc@gmail.com",
    mission:
      "To teach the Word of God systematically, equipping both young and mature believers to grow in knowledge, faith, and service.",
    activities: [
      "Systematic Bible study classes",
      "Interactive Q&A and group discussions",
      "Scripture memorization challenges",
      "Topical lessons on Christian living",
      "Prayer and fellowship sessions",
    ],
    scripture:
      "“Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom...” — Colossians 3:16",
    ageGroup: "All ages",
    imageUrl: "/images/adults.JPG",
    gallery: [
      "/images/church.JPG",
      "/images/church.JPG",
      "/images/church.JPG",
    ],
  },
   {
    id: "7",
    name: "Choir Ministry",
    description:
      "A dedicated team of singers who lift their voices in harmony to glorify God and inspire the congregation through special music and worship services.",
    mission:
      "To minister through song, touching lives and bringing souls closer to God through music.",
    activities: [
      "Rehearsals and vocal training",
      "Performances during services and events",
      "Recording of special songs",
      "Outreach music ministry visits",
    ],
    scripture: "Psalm 95:1 — O come, let us sing unto the LORD...",
    ageGroup: "All ages",
    meetingTime: "Sundays 10:00 AM",
    location: "Main Building",
    leader: "Andrew Tsuma",
    imageUrl: "/images/choir1.JPG",
    contact: "info.noonkopirbbc@gmail.com",
    gallery: [
      "/images/choir1.JPG", 
      "/images/choir.JPG", 
      "/images/choir1.JPG"
    ]
  }
];


export const givingCategories = [
  { id: 'tithe', name: 'Tithe', description: 'Regular church support' },
  { id: 'offering', name: 'Offering', description: 'Regular church support' },
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

export const currentMissions = [
  {
    id: '1',
    country: 'Tanzania',
    location: 'Bunju & Kiteto Manyara',
    leader: 'Pastor Peter Kasamba',
    status: 'Active',
    established: '2009',
    churches: 2,
    description: 'Thriving ministry with recent church plant in the interior regions. Strong local leadership development and community outreach.',
    highlights: [
      'Second church recently opened in interior region',
      'Growing congregation with local leadership',
      'Community outreach programs established',
      'Youth ministry development in progress'
    ],
    image: '/images/eva.jpg',
    needs: ['Bibles in Swahili', 'Transportation for outreach', 'Building materials']
  },
  {
    id: '2',
    country: 'South Sudan',
    location: 'Juba',
    leader: 'Saada Williams',
    status: 'Active',
    established: '2015',
    churches: 1,
    description: 'New mission field with focus on education, evangelism and community development in challenging circumstances.',
    highlights: [
      'Ministry to displaced families',
      'Basic education programs',
      'Medical outreach initiatives',
      'Leadership training in progress'
    ],
    image: '/images/edu.png',
    needs: ['Medical supplies', 'Educational materials', 'Food assistance']
  }
];

export const localMissions = [
  {
    title: 'Nairobi Street Ministry',
    description: 'Reaching the homeless and street families with the Gospel and practical support.',
    frequency: 'Weekly',
    volunteers: 15
  },
  {
    title: 'Prison Ministry',
    description: 'Sharing hope and rehabilitation programs in local correctional facilities.',
    frequency: 'Monthly',
    volunteers: 8
  },
  {
    title: 'School Outreach',
    description: 'Character building and spiritual guidance in local primary and secondary schools.',
    frequency: 'Bi-weekly',
    volunteers: 12
  }
];

export const missionStrategy = [
  {
    id: 1,
    title: 'Plant Churches',
    description: 'Establish self-sustaining local churches that can reach their own communities and plant additional churches.',
    icon: Target
  },
  {
    id: 2,
    title: 'Train Leaders',
    description: 'Develop indigenous leadership through biblical training, mentorship, and practical ministry experience.',
    icon: Users
  },
  {
    id: 3,
    title: 'Serve Communities',
    description: 'Meet physical and spiritual needs through holistic ministry that demonstrates Christ\'s love in practical ways.',
    icon: Heart
  },
];

export const joinMisssion = [
  {
    id: 1,
    title: 'Pray',
    description: 'Join our monthly prayer meetings and receive updates on our mission fields. Prayer is the foundation of all effective ministry.',
    icon: Heart
  },
{
  id: 2,
  title: 'Give',
  description: 'Support our missionaries and mission projects through financial partnership. Every gift makes an eternal difference.',
  icon: Globe
},
{
  id: 3,
  title: 'Go',
  description: 'Join short-term mission trips or consider long-term missionary service. Experience the joy of sharing Christ cross-culturally.',
  icon: Users
}
];

// gallery
export const gallery = [
  {
    id: 1,
    img: '/images/choir.JPG',
    alt: 'Choir',
    url: '/ministries/7'
  },
  {
    id: 2,
    img: '/images/adults.JPG',
    alt: 'Adults',
    url: '/ministries/6'
  },
  {
    id: 3,
    img: '/images/child.JPG',
    alt: 'Children',
    url: '/ministries/1'
  },
  {
    id: 4,
    img: '/images/bap.JPG',
    alt: 'Evangelism',
    url: '/about'
  },
  {
    id: 5,
    img: '/images/edu.png',
    alt: 'Teens',
    url: '/ministries/3'
  },
  {
    id: 6,
    img: '/images/eva.jpg',
    alt: 'Missions',
    url: '/missions'
  }
];


