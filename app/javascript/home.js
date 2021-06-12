
let numberSection = 1;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const dataPosts = [
    {
        id: 1,
        type: 'News',
        date: '',
        score: '',
        title: 'MBAPPE',
        imageUrl: '../build/assets/images/Image\ 88.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        favourite: true,
        statusCheck: 'inline-block'
    },
    {
        id: 2,
        type: 'Schedule',
        date: '',
        score: '1-2',
        title: 'STATE OF ORGIIN',
        imageUrl: '../build/assets/images/Image\ 80.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Origin series and women's game in November",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 3,
        type: 'Media',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 4,
        type: 'Results',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 77.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Former Raven Chris Wormley realizing 'dream' with Steelers",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 5,
        type: 'Social',
        date: '',
        title: 'EPL',
        score: '1-2',
        imageUrl: '../build/assets/images/Image\ 81.png',
        eventTime: '16 days ago',
        totalHeart: 167,
        totalComment: 42,
        description: "Controversy mars EPL",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 6,
        type: 'Music',
        date: '',
        title: 'LEWIS HAMILTOn',
        score: '',
        imageUrl: '../build/assets/images/Image\ 86.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 7,
        type: 'Schedule',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 83.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 8,
        type: 'Polls',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 78.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 9,
        type: 'Results',
        date: '',
        title: 'QUEEN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 84.png',
        eventTime: '16 days ago',
        totalHeart: 98,
        totalComment: 31,
        description: "10 incredible facts we learnt about Queen from the music special",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 10,
        type: 'Social',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'DIALLO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 87.jpg',
        eventTime: '2 months ago',
        totalHeart: 112,
        totalComment: 18,
        description: 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 11,
        type: 'Polls',
        date: '',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 12,
        type: 'Forums',
        date: '',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 13,
        type: 'Music',
        date: '5 Feb 2020 19:00 city center',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 14,
        type: 'Polls',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RECIPE CAKE',
        score: '',
        imageUrl: '../build/assets/images/Image\ 91.jpg',
        eventTime: '5 months ago',
        totalHeart: 214,
        totalComment: 31,
        description: "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 15,
        type: 'Schedule',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 16,
        type: 'Music',
        date: '',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 17,
        type: 'Polls',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 18,
        type: 'Media',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Haaland',
        score: '',
        imageUrl: '../build/assets/images/haaland-thImage\ 89.jpg',
        eventTime: '4 Months ago',
        totalHeart: 156,
        totalComment: 76,
        description: "Haaland thanks Mbappe for providing Champions League 'motivation'",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 19,
        type: 'Shop',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'ELTON JOHN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 70.png',
        eventTime: '4 Months ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Elton John tops rock earnings list",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 20,
        type: 'Forums',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 21,
        type: 'Media',
        date: '',
        score: '',
        title: 'MBAPPE',
        imageUrl: '../build/assets/images/Image\ 88.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        favourite: true,
        statusCheck: 'inline-block'
    },
    {
        id: 22,
        type: 'Polls',
        date: '',
        score: '1-2',
        title: 'STATE OF ORGIIN',
        imageUrl: '../build/assets/images/Image\ 80.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Origin series and women's game in November",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 23,
        type: 'Schedule',
        date: '1 August 2020 10:00 Center Pool',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 24,
        type: 'News',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 77.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Former Raven Chris Wormley realizing 'dream' with Steelers",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 25,
        type: 'News',
        date: '',
        title: 'EPL',
        score: '1-2',
        imageUrl: '../build/assets/images/Image\ 81.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Controversy mars EPL",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 26,
        type: 'Music',
        date: '',
        title: 'LEWIS HAMILTOn',
        score: '',
        imageUrl: '../build/assets/images/Image\ 86.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 27,
        type: 'News',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 83.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 28,
        type: 'Polls',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 78.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 29,
        type: 'Music',
        date: '',
        title: 'QUEEN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 84.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "10 incredible facts we learnt about Queen from the music special",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 30,
        type: 'Polls',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 31,
        type: 'Results',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 32,
        type: 'Schedule',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 33,
        type: 'Shop',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 34,
        type: 'Polls',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RECIPE CAKE',
        score: '',
        imageUrl: '../build/assets/images/Image\ 91.jpg',
        eventTime: '5 months ago',
        totalHeart: 214,
        totalComment: 31,
        description: "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 35,
        type: 'News',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'DIALLO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 87.jpg',
        eventTime: '2 months ago',
        totalHeart: 112,
        totalComment: 18,
        description: 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 36,
        type: 'Media',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 37,
        type: 'Shop',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 38,
        type: 'Schedule',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Haaland',
        score: '',
        imageUrl: '../build/assets/images/haaland-thImage\ 89.jpg',
        eventTime: '4 Months ago',
        totalHeart: 156,
        totalComment: 76,
        description: "Haaland thanks Mbappe for providing Champions League 'motivation'",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 39,
        type: 'Social',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'ELTON JOHN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 70.png',
        eventTime: '4 Months ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Elton John tops rock earnings list",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 40,
        type: 'Polls',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 41,
        type: 'Social',
        date: '',
        score: '',
        title: 'MBAPPE',
        imageUrl: '../build/assets/images/Image\ 88.jpg',
        eventTime: '16 days ago',
        totalHeart: 142,
        totalComment: 61,
        description: 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        favourite: false,
        statusCheck: 'inline-block'
    },
    {
        id: 42,
        type: 'Results',
        date: '',
        score: '1-2',
        title: 'STATE OF ORGIIN',
        imageUrl: '../build/assets/images/Image\ 80.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Origin series and women's game in November",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 43,
        type: 'Schedule',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 44,
        type: 'Shop',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 77.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Former Raven Chris Wormley realizing 'dream' with Steelers",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 45,
        type: 'Social',
        date: '',
        title: 'EPL',
        score: '1-2',
        imageUrl: '../build/assets/images/Image\ 81.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Controversy mars EPL",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 46,
        type: 'Media',
        date: '',
        title: 'LEWIS HAMILTOn',
        score: '',
        imageUrl: '../build/assets/images/Image\ 86.jpg',
        eventTime: '16 days ago',
        totalHeart: 50,
        totalComment: 21,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 47,
        type: 'Schedule',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 83.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 48,
        type: 'Forums',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 78.png',
        eventTime: '16 days ago',
        totalHeart: 99,
        totalComment: 11,
        description: "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 49,
        type: 'Music',
        date: '',
        title: 'QUEEN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 84.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "10 incredible facts we learnt about Queen from the music special",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 50,
        type: 'Shop',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 51,
        type: 'Shop',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 52,
        type: 'Social',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 53,
        type: 'News',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 54,
        type: 'Social',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RECIPE CAKE',
        score: '',
        imageUrl: '../build/assets/images/Image\ 91.jpg',
        eventTime: '5 months ago',
        totalHeart: 214,
        totalComment: 31,
        description: "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 55,
        type: 'Media',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'DIALLO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 87.jpg',
        eventTime: '2 months ago',
        totalHeart: 112,
        totalComment: 18,
        description: 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 56,
        type: 'Shop',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 57,
        type: 'Shop',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 58,
        type: 'Music',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Haaland',
        score: '',
        imageUrl: '../build/assets/images/haaland-thImage\ 89.jpg',
        eventTime: '4 Months ago',
        totalHeart: 156,
        totalComment: 76,
        description: "Haaland thanks Mbappe for providing Champions League 'motivation'",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 59,
        type: 'Social',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'ELTON JOHN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 70.png',
        eventTime: '4 Months ago',
        totalHeart: 210,
        totalComment: 34,
        description: "Elton John tops rock earnings list",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 60,
        type: 'Polls',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 61,
        type: 'Music',
        date: '',
        score: '',
        title: 'MBAPPE',
        imageUrl: '../build/assets/images/Image\ 88.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        favourite: false,
        statusCheck: 'inline-block'
    },
    {
        id: 62,
        type: 'Results',
        date: '',
        score: '1-2',
        title: 'STATE OF ORGIIN',
        imageUrl: '../build/assets/images/Image\ 80.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Origin series and women's game in November",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 63,
        type: 'News',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 64,
        type: 'Shop',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 77.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Former Raven Chris Wormley realizing 'dream' with Steelers",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 65,
        type: 'Media',
        date: '',
        title: 'EPL',
        score: '1-2',
        imageUrl: '../build/assets/images/Image\ 81.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Controversy mars EPL",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 66,
        type: 'News',
        date: '',
        title: 'LEWIS HAMILTOn',
        score: '',
        imageUrl: '../build/assets/images/Image\ 86.jpg',
        eventTime: '16 days ago',
        totalHeart: 98,
        totalComment: 16,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 67,
        type: 'Schedule',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 83.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 68,
        type: 'Polls',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 78.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 69,
        type: 'News',
        date: '',
        title: 'QUEEN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 84.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "10 incredible facts we learnt about Queen from the music special",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 70,
        type: 'Social',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 71,
        type: 'Forums',
        date: '',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 72,
        type: 'Forums',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 73,
        type: 'Music',
        date: '5 Feb 2020 19:00 city center',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 74,
        type: 'News',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RECIPE CAKE',
        score: '',
        imageUrl: '../build/assets/images/Image\ 91.jpg',
        eventTime: '5 months ago',
        totalHeart: 214,
        totalComment: 31,
        description: "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 75,
        type: 'Schedule',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'DIALLO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 87.jpg',
        eventTime: '2 months ago',
        totalHeart: 112,
        totalComment: 18,
        description: 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 76,
        type: 'Results',
        date: '',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 77,
        type: 'News',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 78,
        type: 'Shop',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Haaland',
        score: '',
        imageUrl: '../build/assets/images/haaland-thImage\ 89.jpg',
        eventTime: '4 Months ago',
        totalHeart: 156,
        totalComment: 76,
        description: "Haaland thanks Mbappe for providing Champions League 'motivation'",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 79,
        type: 'Music',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'ELTON JOHN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 70.png',
        eventTime: '4 Months ago',
        totalHeart: 209,
        totalComment: 43,
        description: "Elton John tops rock earnings list",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 80,
        type: 'Results',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 81,
        type: 'Schedule',
        date: '',
        score: '',
        title: 'MBAPPE',
        imageUrl: '../build/assets/images/Image\ 88.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        favourite: false,
        statusCheck: 'inline-block'
    },
    {
        id: 82,
        type: 'Results',
        date: '',
        score: '1-2',
        title: 'STATE OF ORGIIN',
        imageUrl: '../build/assets/images/Image\ 80.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Origin series and women's game in November",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 83,
        type: 'Media',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 84,
        type: 'Forums',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 77.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Former Raven Chris Wormley realizing 'dream' with Steelers",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 85,
        type: 'Shop',
        date: '',
        title: 'EPL',
        score: '1-2',
        imageUrl: '../build/assets/images/Image\ 81.png',
        eventTime: '16 days ago',
        totalHeart: 111,
        totalComment: 24,
        description: "Controversy mars EPL",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 86,
        type: 'Media',
        date: '',
        title: 'LEWIS HAMILTOn',
        score: '',
        imageUrl: '../build/assets/images/Image\ 86.jpg',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 87,
        type: 'Forums',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 83.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 88,
        type: 'Results',
        date: '',
        title: 'EPL',
        score: '',
        imageUrl: '../build/assets/images/Image\ 78.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 89,
        type: 'News',
        date: '',
        title: 'QUEEN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 84.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "10 incredible facts we learnt about Queen from the music special",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 90,
        type: 'News',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 190,
        totalComment: 54,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 91,
        type: 'Pollss',
        date: '',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 92,
        type: 'Forums',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 93,
        type: 'Results',
        date: '5 Feb 2020 19:00 city center',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 94,
        type: 'Shop',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'RECIPE CAKE',
        score: '',
        imageUrl: '../build/assets/images/Image\ 91.jpg',
        eventTime: '5 months ago',
        totalHeart: 214,
        totalComment: 31,
        description: "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 95,
        type: 'Forums',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'DIALLO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 87.jpg',
        eventTime: '2 months ago',
        totalHeart: 112,
        totalComment: 18,
        description: 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 96,
        type: 'News',
        date: '',
        title: 'RONALDO',
        score: '',
        imageUrl: '../build/assets/images/Image\ 90.jpg',
        eventTime: '3 months ago',
        totalHeart: 462,
        totalComment: 238,
        description: "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 97,
        type: 'Schedule',
        date: '',
        title: 'PITTSBURGH STEELERS',
        score: '',
        imageUrl: '../build/assets/images/Image\ 79.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Steelers to Close Facility in Observance of Juneteenth",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 98,
        type: 'Media',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Haaland',
        score: '',
        imageUrl: '../build/assets/images/haaland-thImage\ 89.jpg',
        eventTime: '4 Months ago',
        totalHeart: 156,
        totalComment: 76,
        description: "Haaland thanks Mbappe for providing Champions League 'motivation'",
        favourite: true,
        statusCheck: 'none'
    },
    {
        id: 99,
        type: 'Results',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'ELTON JOHN',
        score: '',
        imageUrl: '../build/assets/images/Image\ 70.png',
        eventTime: '4 Months ago',
        totalHeart: 99,
        totalComment: 19,
        description: "Elton John tops rock earnings list",
        favourite: false,
        statusCheck: 'none'
    },
    {
        id: 100,
        type: 'Polls',
        date: '2 Jun 2020 9:00 Center Park',
        title: 'Pittsburgh Steelers',
        score: '',
        imageUrl: '../build/assets/images/Image\ 85.png',
        eventTime: '16 days ago',
        totalHeart: 100,
        totalComment: 21,
        description: "Josh Harris and David Blitzer are minority owners",
        favourite: false,
        statusCheck: 'none'
    }
];

function render(numberSection, itemToFilter = false) {
    const wrapPostElements = $('.home-content__post-container');
    let startIndex; let endIndex;

    if(itemToFilter) {
        startIndex = 0;
        endIndex = 99;
    } else {
        startIndex = (numberSection - 1) * 20;
        endIndex = (numberSection * 20) - 1;
    }
    
    for(let i=startIndex; i <= endIndex; ++i) {
        if(dataPosts[i]) {
            if(dataPosts[i].type === itemToFilter || itemToFilter === false) {
                wrapPostElements.insertAdjacentHTML('beforeend', `<div class="home-content-post" data-id="${dataPosts[i].id}">
                    <div class="home-post-img" style="background-image: url('${dataPosts[i].imageUrl}');">
                    </div>
                    <div class="home-post-content">
                        <div class="home-post-content__header">
                            <span class="post-content-title">${dataPosts[i].title}</span>
                            <svg aria-hidden="true" style="display: ${dataPosts[i].statusCheck};" focusable="false" data-prefix="fas" data-icon="check-circle" class="post-content-check svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="post-content-option svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                        </div>
                        <span class="home-post-content__score">${dataPosts[i].score}</span>
                        <span class="home-post-content__name">${dataPosts[i].description}</span>
                        <span class="home-post-content__date">${dataPosts[i].date}</span>
                        <span class="home-post-content__status">${dataPosts[i].type}</span>
                    </div>
                    <div class="home-post-footer">
                        <span class="home-post-footer__time">${dataPosts[i].eventTime}</span>
                        <div class="home-post-footer__comment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.434" height="14" viewBox="0 0 16.434 14">
                                <path id="Path_8" data-name="Path 8" d="M2.393,44.548H1.228l.823-.8a2.662,2.662,0,0,0,.8-1.594A5.646,5.646,0,0,1,0,37.368c0-3.382,3.213-6.82,8.245-6.82,5.331,0,8.189,3.163,8.189,6.523,0,3.383-2.889,6.543-8.189,6.543a11.459,11.459,0,0,1-2.762-.34,4.387,4.387,0,0,1-3.09,1.273Z" transform="translate(0 -30.548)" fill="#c0c9d5"/>
                            </svg>                                          
                            <span class="post-comment-number">${dataPosts[i].totalComment}</span>
                        </div>
                        <div class="home-post-footer__heart">
                            <svg onClick="heartStatusToggle(this)" xmlns="http://www.w3.org/2000/svg" width="15.259" height="14" viewBox="0 0 15.259 14">
                                <path id="ic_favorite_24px" d="M9.629,17,8.523,15.993C4.594,12.43,2,10.08,2,7.2A4.155,4.155,0,0,1,6.2,3,4.569,4.569,0,0,1,9.629,4.595,4.569,4.569,0,0,1,13.063,3a4.155,4.155,0,0,1,4.2,4.2c0,2.884-2.594,5.234-6.523,8.8Z" transform="translate(-2 -3)" fill="${dataPosts[i].favourite ? 'red' : '#c0c9d5'}"/>
                            </svg>                                      
                            <span class="post-heart-number">${dataPosts[i].totalHeart}</span>
                        </div>
                    </div>
                </div>`);
                }
            }
    }
}
// Khi loaded trang thì t cần phải load default ra 20 posts đầu tiên.
render(numberSection);

function getParentElement(childElement, parentElement) {
    do {
        childElement = childElement.parentElement;
    } while(!childElement.matches(parentElement) && childElement.nodeName != 'BODY')

    return childElement;
}

function heartStatusToggle(svgElement) {
    let pathElement = svgElement.querySelector('path');
    let newStatusPath = pathElement.getAttribute('fill') == 'red' ? '#c0c9d5' : 'red';
    let totalHeartElement = svgElement.parentElement.querySelector('.post-heart-number');
    let newTotalHeart = Number(totalHeartElement.innerText);
    
    // Thay đổi color cho icon heart
    pathElement.setAttribute('fill', newStatusPath);
    // Thay đổi total heart
    newStatusPath == 'red' ? newTotalHeart++ : newTotalHeart--;
    totalHeartElement.innerText = newTotalHeart;

    // Lấy ra id của cái post mà user vừa click vào icon heart của post đó
    // let postId = getParentElement(svgElement, '.home-content-post').dataset['id'];
}

(function appendPosts() {
    //Posts will apppend when user scroll to bottom Home's page
    let heightOfBody = document.body.scrollHeight;
    let unitBottomOfPage = heightOfBody - window.innerHeight;

    window.addEventListener('scroll', (event) => {
        if(window.scrollY == unitBottomOfPage) {
            // Khi khoảng scroll đến cuối page thì ta append thêm 20 posts
            ++numberSection;
            render(numberSection);

            // Sau khi append thì t cần phải update lại các thông số vì chiều cao của page đã thay đổi sau khi mik append thêm 20 posts.
            heightOfBody = document.body.scrollHeight;
            unitBottomOfPage = heightOfBody - window.innerHeight;
        }
    })
})();

(function postFilter() {
    let categoryItemElements = $$('.category-item');

    categoryItemElements.forEach((item) => {

        // Bắt sự kiện click cho từng category một
        item.addEventListener('click', (event) => {
            $('.category-list').querySelector('.category-item.active')?.classList.remove('active');
            event.target.classList.add('active');

            // Lấy ra tên mục mà user vừa clicked
            let keyword = event.target.innerText;

            // Sau khi user chọn 1 mục nào đó cần lọc thì việc đầu tiên là ta cần phải clear bỏ toàn bộ các bài post hiện tại đang có trong ở trong container posts để t có thể append lại từ đầu các post trùng với keyword user đã chọn.
            $('.home-content__post-container').textContent = '';
            // Tiếp đó là gọi đến làm render kèm theo keyword(mục người dùng đã chọn) để hàm render could lọc ra những post phù hợp
            render(numberSection, keyword);
        });
    })
})();

