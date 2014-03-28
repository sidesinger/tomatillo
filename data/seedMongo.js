conn = new Mongo();
db = conn.getDB("tomatillo");

db.fruits.insert([
    {
        _id: "toma",
        name:"Tomatillo",
        defaultRunTimeMins: 10,
        deafultBreakTimeMins: 2,
        defaultImageUrl: "images/toma.jpg",
        completedImageUrl:"images/toma.jpg",
        splatImageUrl:"images/tomaSplat.jpg"    
    },
    {
        _id: "pomo",
        name: "Pomodoro",
        defaultRunTimeMins: 25,
        deafultBreakTimeMins: 5,
        defaultImageUrl: "images/pomo.jpg",
        completedImageUrl:"images/pomo.jpg",
        splatImageUrl: "images/pomoSplat.jpg"    
    },
    {
        _id: "aub",
        name:"Aubergine",
        defaultRunTimeMins: 45,
        deafultBreakTimeMins: 15,
        defaultImageUrl: "images/aub.jpg",
        completedImageUrl:"images/aub.jpg",
        splatImageUrl:"images/aubSplat.jpg"    
    }
]);

db.sounds.insert([
    {
        "name":"3d 2",
        "url":"sounds/3d_Sound.mp3"
    },
    {
        "name":"3d",
        "url":"sounds/3d_Windows_7.mp3"
    },
    {
        "name":"3d X",
        "url":"sounds/3d_X_Sms.mp3"
    },
    {
        "name":"Alert 10",
        "url":"sounds/Alert 10.mp3"
    },
    {
        "name":"Alert 11",
        "url":"sounds/Alert 11.mp3"
    },
    {
        "name":"Alert 12",
        "url":"sounds/Alert 12.mp3"
    },
    {
        "name":"Alert 13",
        "url":"sounds/Alert 13.mp3"
    },
    {
        "name":"Alert 1",
        "url":"sounds/Alert 1.mp3"
    },
    {
        "name":"Alert 2",
        "url":"sounds/Alert 2.mp3"
    },
    {
        "name":"Alert 3",
        "url":"sounds/Alert 3.mp3"
    },
    {
        "name":"Alert 4",
        "url":"sounds/Alert 4.mp3"
    },
    {
        "name":"Alert 5",
        "url":"sounds/Alert 5.mp3"
    },
    {
        "name":"Alert 6",
        "url":"sounds/Alert 6.mp3"
    },
    {
        "name":"Alert 7",
        "url":"sounds/Alert 7.mp3"
    },
    {
        "name":"Alert 8",
        "url":"sounds/Alert 8.mp3"
    },
    {
        "name":"Alert 9",
        "url":"sounds/Alert 9.mp3"
    },
    {
        "name":"Alpha",
        "url":"sounds/Alpha.mp3"
    },
    {
        "name":"Ambience",
        "url":"sounds/Ambience.mp3"
    },
    {
        "name":"Aqua",
        "url":"sounds/Aqua.mp3"
    },
    {
        "name":"Army Alarm",
        "url":"sounds/Army_Alarm.mp3"
    },
    {
        "name":"Around",
        "url":"sounds/Around.mp3"
    },
    {
        "name":"Bell",
        "url":"sounds/Bell.mp3"
    },
    {
        "name":"Bells",
        "url":"sounds/Bells.mp3"
    },
    {
        "name":"Beta",
        "url":"sounds/Beta.mp3"
    },
    {
        "name":"Bubble",
        "url":"sounds/Bubble.mp3"
    },
    {
        "name":"Classic",
        "url":"sounds/Classic.mp3"
    },
    {
        "name":"PowerOn",
        "url":"sounds/PowerOn.mp3"
    }
]);

db.achievements.insert([
    {
        "_id":"salsaVerde",
        "name":"Salsa Verde",
        "imageUrl":"",
        "description":"You've earned 10 Tomatillos.  Mash 'em up. Get some chips and dig in.",
        "recipeUrl":"",
        "criteria":"10+ Tomatillos"
    },
    {
        "_id": "eggplantParm",
        "name":"Eggplant Parm",
        "imageUrl":"You've earned 20 Aubergines.  Time for an Itallian feast!",
        "description":"",
        "recipeUrl":"",
        "criteria":"20+ Aubergines"
    }
]);