const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) => {
        //inserir dados

        proffyValue = {
            name: "osvaldo",
            avatar: "https://www.instagram.com/p/B6wtjimhMd7/",
            whatsapp: "990011233",
            bio:"instrutor de sexo"
        }

        classValue = {
            subject: 1,
            cost: "20",
            //proffy id vira pelo banco de dados    
        }

        classScheduleValues = [
            //class_id vira pelo banco de dados apos cadastrar a aula
            {
                weekday: 1,
                time_from: 720,
                time_to: 1220
            },
            {
                weekday: 0,
                time_from: 520,
                time_to: 1220
            }
        ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

        //consultar os dados 

       const selectedProffys = await db.all("SELECT * FROM proffys")
       // console.log(selectedProffys)



        const selectClassesAndProffys = await db.all(`
            SELECT classes.*, proffys.*
            FROM proffys
            JOIN classes ON (classes.proffy_id = proffys.id)
            WHERE classes.proffy_id = 1;
        `)





        const selectClassSchedules = await db.all(`
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = "1"
            AND class_schedule.weekday = "0"
            AND class_schedule.time_from <= "520"
            AND class_schedule.time_to > "1300"
            `)
            console.log(selectClassSchedules)
       
})