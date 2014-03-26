
#### main page

`/` `get`
Bring down mark up, style, js

#### Passport Authentication

`/login/auth/google` 
`/auth/google/return`

#### rest api

`/api/settings/` using `get` `put`
get/put dto:

    {
        "settingName":"settingValue"
    }

`/api/stats/` using `get`
get dto:

    {
        "completedTomas":1,
        "completedPoms":2,
        "completedAubs":3,
        "failedTomas":4,
        "failedPoms":2,
        "failedAubs":0
    }

`/api/session` using `post`
post:

    {
        "id":1, // if absent- save else update
        "type": "toma",
        "action":"start",
        "workingTask":"TPS Reports, never ending TPS Reports",
        "rewardTask":"Jenga Time!",
    }
return:

    {
        "isSuccess":true,
        "message":"",
        "newAchievements":[{
            "name":"Salsa Verde",
            "imageUrl":"",
            "description":"You've earned 10 Tomatillos.  Mash 'em up. Get some chips and dig in.",
            "recipeUrl":"",
            "criteria":"10+ Tomatillos"
            }
        ]
    }

/end