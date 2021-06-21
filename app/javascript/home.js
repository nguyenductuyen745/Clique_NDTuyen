
let numberSection = 1;
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const dataUser = JSON.parse(localStorage.getItem('user-infor'));
const accessToken = dataUser['access_token'];

let dataPosts = [
    {
        "id": 1,
        "contentType": 'News',
        "date": '',
        "score": '',
        "title": 'MBAPPE',
        "externalImageUrl": '../build/assets/images/Image\ 88.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        "reaction": true,
        "statusCheck": 'inline-block'
    },
    {
        "id": 2,
        "contentType": 'Schedule',
        "date": '',
        "score": '1-2',
        "title": 'STATE OF ORGIIN',
        "externalImageUrl": '../build/assets/images/Image\ 80.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Origin series and women's game in November",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 3,
        "contentType": 'Media',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 4,
        "contentType": 'Result',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 77.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Former Raven Chris Wormley realizing 'dream' with Steelers",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 5,
        "contentType": 'Social',
        "date": '',
        "title": 'EPL',
        "score": '1-2',
        "externalImageUrl": '../build/assets/images/Image\ 81.png',
        "createdDate": '16 days ago',
        "totalEmotion": 167,
        "totalComment": 42,
        "description": "Controversy mars EPL",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 6,
        "contentType": 'Music',
        "date": '',
        "title": 'LEWIS HAMILTOn',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 86.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 7,
        "contentType": 'Schedule',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 83.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 8,
        "contentType": 'Polls',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 78.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 9,
        "contentType": 'Result',
        "date": '',
        "title": 'QUEEN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 84.png',
        "createdDate": '16 days ago',
        "totalEmotion": 98,
        "totalComment": 31,
        "description": "10 incredible facts we learnt about Queen from the music special",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 10,
        "contentType": 'Social',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'DIALLO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 87.jpg',
        "createdDate": '2 months ago',
        "totalEmotion": 112,
        "totalComment": 18,
        "description": 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 11,
        "contentType": 'Polls',
        "date": '',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 12,
        "contentType": 'Status',
        "date": '',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 13,
        "contentType": 'Music',
        "date": '5 Feb 2020 19:00 city center',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 14,
        "contentType": 'Polls',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RECIPE CAKE',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 91.jpg',
        "createdDate": '5 months ago',
        "totalEmotion": 214,
        "totalComment": 31,
        "description": "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 15,
        "contentType": 'Schedule',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 16,
        "contentType": 'Music',
        "date": '',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 17,
        "contentType": 'Polls',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 18,
        "contentType": 'Media',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Haaland',
        "score": '',
        "externalImageUrl": '../build/assets/images/haaland-thImage\ 89.jpg',
        "createdDate": '4 Months ago',
        "totalEmotion": 156,
        "totalComment": 76,
        "description": "Haaland thanks Mbappe for providing Champions League 'motivation'",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 19,
        "contentType": 'Event',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'ELTON JOHN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 70.png',
        "createdDate": '4 Months ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Elton John tops rock earnings list",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 20,
        "contentType": 'Status',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 21,
        "contentType": 'Media',
        "date": '',
        "score": '',
        "title": 'MBAPPE',
        "externalImageUrl": '../build/assets/images/Image\ 88.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        "reaction": true,
        "statusCheck": 'inline-block'
    },
    {
        "id": 22,
        "contentType": 'Polls',
        "date": '',
        "score": '1-2',
        "title": 'STATE OF ORGIIN',
        "externalImageUrl": '../build/assets/images/Image\ 80.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Origin series and women's game in November",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 23,
        "contentType": 'Schedule',
        "date": '1 August 2020 10:00 Center Pool',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 24,
        "contentType": 'Status',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 77.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Former Raven Chris Wormley realizing 'dream' with Steelers",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 25,
        "contentType": 'News',
        "date": '',
        "title": 'EPL',
        "score": '1-2',
        "externalImageUrl": '../build/assets/images/Image\ 81.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Controversy mars EPL",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 26,
        "contentType": 'Music',
        "date": '',
        "title": 'LEWIS HAMILTOn',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 86.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 27,
        "contentType": 'News',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 83.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 28,
        "contentType": 'Polls',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 78.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 29,
        "contentType": 'Music',
        "date": '',
        "title": 'QUEEN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 84.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "10 incredible facts we learnt about Queen from the music special",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 30,
        "contentType": 'Polls',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 31,
        "contentType": 'Result',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 32,
        "contentType": 'Schedule',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 33,
        "contentType": 'Event',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 34,
        "contentType": 'Polls',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RECIPE CAKE',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 91.jpg',
        "createdDate": '5 months ago',
        "totalEmotion": 214,
        "totalComment": 31,
        "description": "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 35,
        "contentType": 'Status',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'DIALLO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 87.jpg',
        "createdDate": '2 months ago',
        "totalEmotion": 112,
        "totalComment": 18,
        "description": 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 36,
        "contentType": 'Media',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 37,
        "contentType": 'Media',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 38,
        "contentType": 'Schedule',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Haaland',
        "score": '',
        "externalImageUrl": '../build/assets/images/haaland-thImage\ 89.jpg',
        "createdDate": '4 Months ago',
        "totalEmotion": 156,
        "totalComment": 76,
        "description": "Haaland thanks Mbappe for providing Champions League 'motivation'",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 39,
        "contentType": 'Social',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'ELTON JOHN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 70.png',
        "createdDate": '4 Months ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Elton John tops rock earnings list",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 40,
        "contentType": 'Polls',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 41,
        "contentType": 'Social',
        "date": '',
        "score": '',
        "title": 'MBAPPE',
        "externalImageUrl": '../build/assets/images/Image\ 88.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 142,
        "totalComment": 61,
        "description": 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        "reaction": false,
        "statusCheck": 'inline-block'
    },
    {
        "id": 42,
        "contentType": 'Result',
        "date": '',
        "score": '1-2',
        "title": 'STATE OF ORGIIN',
        "externalImageUrl": '../build/assets/images/Image\ 80.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Origin series and women's game in November",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 43,
        "contentType": 'Schedule',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 44,
        "contentType": 'Event',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 77.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Former Raven Chris Wormley realizing 'dream' with Steelers",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 45,
        "contentType": 'Social',
        "date": '',
        "title": 'EPL',
        "score": '1-2',
        "externalImageUrl": '../build/assets/images/Image\ 81.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Controversy mars EPL",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 46,
        "contentType": 'Media',
        "date": '',
        "title": 'LEWIS HAMILTOn',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 86.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 50,
        "totalComment": 21,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 47,
        "contentType": 'Schedule',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 83.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 48,
        "contentType": 'Status',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 78.png',
        "createdDate": '16 days ago',
        "totalEmotion": 99,
        "totalComment": 11,
        "description": "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 49,
        "contentType": 'Music',
        "date": '',
        "title": 'QUEEN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 84.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "10 incredible facts we learnt about Queen from the music special",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 50,
        "contentType": 'Schedule',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 51,
        "contentType": 'Event',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 52,
        "contentType": 'Social',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 53,
        "contentType": 'Status',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 54,
        "contentType": 'Social',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RECIPE CAKE',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 91.jpg',
        "createdDate": '5 months ago',
        "totalEmotion": 214,
        "totalComment": 31,
        "description": "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 55,
        "contentType": 'Media',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'DIALLO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 87.jpg',
        "createdDate": '2 months ago',
        "totalEmotion": 112,
        "totalComment": 18,
        "description": 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 56,
        "contentType": 'Event',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 57,
        "contentType": 'Event',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 58,
        "contentType": 'Music',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Haaland',
        "score": '',
        "externalImageUrl": '../build/assets/images/haaland-thImage\ 89.jpg',
        "createdDate": '4 Months ago',
        "totalEmotion": 156,
        "totalComment": 76,
        "description": "Haaland thanks Mbappe for providing Champions League 'motivation'",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 59,
        "contentType": 'Social',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'ELTON JOHN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 70.png',
        "createdDate": '4 Months ago',
        "totalEmotion": 210,
        "totalComment": 34,
        "description": "Elton John tops rock earnings list",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 60,
        "contentType": 'Polls',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 61,
        "contentType": 'Music',
        "date": '',
        "score": '',
        "title": 'MBAPPE',
        "externalImageUrl": '../build/assets/images/Image\ 88.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        "reaction": false,
        "statusCheck": 'inline-block'
    },
    {
        "id": 62,
        "contentType": 'Result',
        "date": '',
        "score": '1-2',
        "title": 'STATE OF ORGIIN',
        "externalImageUrl": '../build/assets/images/Image\ 80.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Origin series and women's game in November",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 63,
        "contentType": 'News',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 64,
        "contentType": 'Event',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 77.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Former Raven Chris Wormley realizing 'dream' with Steelers",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 65,
        "contentType": 'Media',
        "date": '',
        "title": 'EPL',
        "score": '1-2',
        "externalImageUrl": '../build/assets/images/Image\ 81.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Controversy mars EPL",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 66,
        "contentType": 'News',
        "date": '',
        "title": 'LEWIS HAMILTOn',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 86.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 98,
        "totalComment": 16,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 67,
        "contentType": 'Schedule',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 83.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Injuries, red cards and a $640k-a-week problem: How Arsenal got even worse after lockdown",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 68,
        "contentType": 'Polls',
        "date": '',
        "title": 'EPL',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 78.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Eric Garcia taken off on a stretcher after sickening collision in Manchester City’s win over Arsenal",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 69,
        "contentType": 'News',
        "date": '',
        "title": 'QUEEN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 84.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "10 incredible facts we learnt about Queen from the music special",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 70,
        "contentType": 'Social',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 71,
        "contentType": 'Status',
        "date": '',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 72,
        "contentType": 'Status',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 73,
        "contentType": 'Music',
        "date": '5 Feb 2020 19:00 city center',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 74,
        "contentType": 'News',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RECIPE CAKE',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 91.jpg',
        "createdDate": '5 months ago',
        "totalEmotion": 214,
        "totalComment": 31,
        "description": "Disney + Will July Debut ‘Black Is King’, Beyoncé’s New Visual Album – Deadline",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 75,
        "contentType": 'Schedule',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'DIALLO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 87.jpg',
        "createdDate": '2 months ago',
        "totalEmotion": 112,
        "totalComment": 18,
        "description": 'Tân binh MU 1160 tỷ đồng: "Đứa con thần gió" Amad Diallo tài năng ra sao?',
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 76,
        "contentType": 'Result',
        "date": '',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 77,
        "contentType": 'Status',
        "date": '',
        "title": 'PITTSBURGH STEELERS',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 79.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Steelers to Close Facility in Observance of Juneteenth",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 78,
        "contentType": 'Event',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Haaland',
        "score": '',
        "externalImageUrl": '../build/assets/images/haaland-thImage\ 89.jpg',
        "createdDate": '4 Months ago',
        "totalEmotion": 156,
        "totalComment": 76,
        "description": "Haaland thanks Mbappe for providing Champions League 'motivation'",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 79,
        "contentType": 'Music',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'ELTON JOHN',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 70.png',
        "createdDate": '4 Months ago',
        "totalEmotion": 209,
        "totalComment": 43,
        "description": "Elton John tops rock earnings list",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 80,
        "contentType": 'Result',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'Pittsburgh Steelers',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 85.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Josh Harris and David Blitzer are minority owners",
        "reaction": false,
        "statusCheck": 'none'
    },
    {
        "id": 81,
        "contentType": 'Schedule',
        "date": '',
        "score": '',
        "title": 'MBAPPE',
        "externalImageUrl": '../build/assets/images/Image\ 88.jpg',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": 'Mbappe joins exclusive 10-man club with hat-trick at Barca',
        "reaction": false,
        "statusCheck": 'inline-block'
    },
    {
        "id": 82,
        "contentType": 'Result',
        "date": '',
        "score": '1-2',
        "title": 'STATE OF ORGIIN',
        "externalImageUrl": '../build/assets/images/Image\ 80.png',
        "createdDate": '16 days ago',
        "totalEmotion": 100,
        "totalComment": 21,
        "description": "Origin series and women's game in November",
        "reaction": true,
        "statusCheck": 'none'
    },
    {
        "id": 83,
        "contentType": 'Media',
        "date": '2 Jun 2020 9:00 Center Park',
        "title": 'RONALDO',
        "score": '',
        "externalImageUrl": '../build/assets/images/Image\ 90.jpg',
        "createdDate": '3 months ago',
        "totalEmotion": 462,
        "totalComment": 238,
        "description": "Football: Ronaldo marks 600th league game with landmark goal as Juve beat Spezia.",
        "reaction": false,
        "statusCheck": 'none'
    }
];

(function setUserInfor() {
    let userNameElements = $$('.header-functional__user-name');
    let userAvatarElements = $('.functional-user-img');

    // set user's name
    for(let item of userNameElements) {
        let userName = dataUser.ekoUser.displayName;
        if(userName) {
            item.innerText = userName;
        }
    }

    // set user's avatar
    if(dataUser.ekoUser.avatar) {
        userAvatarElements.src = dataUser.ekoUser.avatar.url;
    }

})();

(function handleEventLogout() {
    let logoutElements = $$('.functional-user-logout');

    for(let element of logoutElements) {
        element.addEventListener('click', (event) => {
            localStorage.removeItem('user-infor');
            window.location.href = "./Login.html";
        });
    }
})();

(function CallApiDataPost() {
    fetch(`https://test.cliquefan.com/api/portal/fan/home?status=1&pageSize=50&pageIndex=0`, {
        method: "GET",
        headers: {
            "Content-Type": "Application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((dataPostApi) => {
        let arrDataPostApi = dataPostApi?.responseData?.fanFeedResponses;
        dataPosts = [...arrDataPostApi, ...dataPosts];
        // Khi loaded trang thì t cần phải load default ra 20 posts đầu tiên.
        render(numberSection);
        // Gọi hàm appendPosts để bắt sự kiện scroll và tính ra bottom of page
        appendPosts();
    })

})();

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
            if(dataPosts[i].contentType === itemToFilter || itemToFilter === false) {
                let autoHeight = false;
                let totalEmotion = dataPosts[i].totalEmotion;
                let totalLove = typeof totalEmotion == 'object' ? totalEmotion.totalLove : totalEmotion;
                let timeAgo = typeof dataPosts[i].createdDate === 'number' ? timeSince(dataPosts[i].createdDate) : dataPosts[i].createdDate;

                wrapPostElements.insertAdjacentHTML('beforeend', `<div class="home-content-post" data-id="${dataPosts[i].id}">
                    <div class="home-post-img" style="background-image: url('${dataPosts[i].externalImageUrl ? dataPosts[i].externalImageUrl : autoHeight = true}'); ${autoHeight && 'height: auto'}">
                    </div>
                    <div class="home-post-content">
                        <div class="home-post-content__header">
                            <span class="post-content-title">${dataPosts[i].title || 'RONALDO'}</span>
                            <svg aria-hidden="true" style="display: ${dataPosts[i].statusCheck || 'none'};" focusable="false" data-prefix="fas" data-icon="check-circle" class="post-content-check svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="post-content-option svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path></svg>
                        </div>
                        <span class="home-post-content__score">${dataPosts[i].score || ''}</span>
                        <span class="home-post-content__name">${dataPosts[i].description}</span>
                        <span class="home-post-content__date">${dataPosts[i].date || ''}</span>
                        <span class="home-post-content__status">${dataPosts[i].contentType}</span>
                    </div>
                    <div class="home-post-footer">
                        <span class="home-post-footer__time">${timeAgo}</span>
                        <div class="home-post-footer__comment">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16.434" height="14" viewBox="0 0 16.434 14">
                                <path id="Path_8" data-name="Path 8" d="M2.393,44.548H1.228l.823-.8a2.662,2.662,0,0,0,.8-1.594A5.646,5.646,0,0,1,0,37.368c0-3.382,3.213-6.82,8.245-6.82,5.331,0,8.189,3.163,8.189,6.523,0,3.383-2.889,6.543-8.189,6.543a11.459,11.459,0,0,1-2.762-.34,4.387,4.387,0,0,1-3.09,1.273Z" transform="translate(0 -30.548)" fill="#c0c9d5"/>
                            </svg>                                          
                            <span class="post-comment-number">${dataPosts[i].totalComment}</span>
                        </div>
                        <div class="home-post-footer__heart">
                            <svg onClick="heartStatusToggle(this)" xmlns="http://www.w3.org/2000/svg" width="15.259" height="14" viewBox="0 0 15.259 14">
                                <path id="ic_favorite_24px" d="M9.629,17,8.523,15.993C4.594,12.43,2,10.08,2,7.2A4.155,4.155,0,0,1,6.2,3,4.569,4.569,0,0,1,9.629,4.595,4.569,4.569,0,0,1,13.063,3a4.155,4.155,0,0,1,4.2,4.2c0,2.884-2.594,5.234-6.523,8.8Z" transform="translate(-2 -3)" fill="${dataPosts[i].reaction ? 'red' : '#c0c9d5'}"/>
                            </svg>                                      
                            <span class="post-heart-number">${totalLove}</span>
                        </div>
                    </div>
                </div>`);
                }
            }
    }
}

function heartStatusToggle(svgElement) {
    let requestPutError = false;
    let pathElement = svgElement.querySelector('path');
    let newStatusPath = pathElement.getAttribute('fill') == 'red' ? '#c0c9d5' : 'red';
    let totalHeartElement = svgElement.parentElement.querySelector('.post-heart-number');
    let newTotalHeart = Number(totalHeartElement.innerText);

    // Lấy ra id của cái post mà user vừa click vào icon heart của post đó
    let postId = getParentElement(svgElement, '.home-content-post').dataset['id'];
    let statusFavorite = newStatusPath == 'red' ? 'reaction' : 'unreaction';
    
    if(postId.search(/[a-z]/g) != -1) {

        // Tiến hành update favorite trên CSDL
        let url = `https://test.cliquefan.com/api/portal/news/${statusFavorite}/love/${postId}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then((response) => response.json())
        .then((statusResponse) => {
            let notifyElement = $('.notify-not-updated');

            // Nếu request error thì show notify nên cho user biết.
            if(statusResponse['error']) {
                requestPutError = true;
                notifyElement.style.display = 'flex';

                setTimeout(() => {
                    notifyElement.style.display = 'none';
                }, 2400);
            }
        })
    }

    setTimeout(() => {
        if(!requestPutError) {
            // Thay đổi color cho icon heart
            pathElement.setAttribute('fill', newStatusPath);
            // Thay đổi total heart
            newStatusPath == 'red' ? newTotalHeart++ : newTotalHeart--;
            totalHeartElement.innerText = newTotalHeart;
        }
    }, 100);
}

function appendPosts() {
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
};

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

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

function getParentElement(childElement, parentElement) {
    do {
        childElement = childElement.parentElement;
    } while(!childElement.matches(parentElement) && childElement.nodeName != 'BODY')

    return childElement;
}

