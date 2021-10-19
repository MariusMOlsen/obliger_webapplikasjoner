const data = [
    {
        "title": "Hva er hovedstaden i Norge?",
        "answers": [
            {
                "answere": "Tønsberg"
            },
            {
                "answere": "Trondheim"
            },
            {
                "answere": "Molde"
            },
            {
                "answere": "Oslo",
                "correct": true
            }
        ],
        "helper": {
            "text": "Kongen bor der"
        }
    },
    {
        "title": "Hvilken ingrediens bruker man i kake?",
        "answers": [
            {
                "answere": "Bensin"
            },
            {
                "answere": "Purreløk"
            },
            {
                "answere": "Salami"
            },
            {
                "answere": "Sukker",
                "correct": true
            }
        ],
        "helper": {
            "text": "Det er søtt"
        }
    },
    {
        "title": "Hvor mange studiepoeng er en bachelorgrad?",
        "answers": [
            {
                "answere": "130 poeng"
            },
            {
                "answere": "165 pong"
            },
            {
                "answere": "200 poeng"
            },
            {
                "answere": "180 poeng",
                "correct": true
            }
        ],
        "helper": {
            "text": "TTallet er delelig på 3"
        }
    },
    {
        "title": "Hvor mange liv sies det at en katt har?",
        "answers": [
            {
                "answere": "3 liv"
            },
            {
                "answere": "7 liv"
            },
            {
                "answere": "11 liv"
            },
            {
                "answere": "9 liv",
                "correct": true
            }
        ],
        "helper": {
            "text": "Svaret er kvadratroten av 9 ganger 3."
        }
    }
]

const getData = (i) => {
    data.map((obj) => {
        it('should not fail if the correct answer is chosen', () => {
            console.log(obj.answers[i].correct)
            expect(obj.answers[3].correct).toBe(true)

        })
    })



}

getData(3);
