// app.js ka kaam  hai? ->server ko start karne ke liye use hota hai
const  app = express()





app.use(express.json()) // ye middleware hai jo json data ko parse karta hai
const notes = []

// api banani hai jisme hum notes ko add karenge server p data bhejna ho tbh use krte hai 
app.post('/notes',(req,res) => {
    //req m jo data aaya hoga wo raw format m aaya hoga isliye usko json format m convert karne ke liye express.json() middleware ka use karte hai
    notes.push(req.body)

    res.status(201).json({
        message: 'Note added successfully'
    })
})

// is api s data server s bakend s frontend m bheja jayega
app.get('/notes',(req,res) => {
    res.status(200).json({
        message: 'Notes fetched successfully',
        notes: notes
    })
})

// here /notes/ is static and :index is dynamic and it is accessed thorugh params and it is used to delete a note from the notes array
app.delete('/notes/:index',(req,res) => {
    const index = req.params.index 
    delete notes[index] // delete keyword se hum array m se element ko delete kar sakte hai lekin ye element ko undefined kar deta hai isliye splice method ka use karte hai
    res.status(200).json({
        message: 'Note deleted successfully'
    })

})
//Here through patch method we can update the note and it is accessed through params and it is used to update a note from the notes array
app.patch('/notes/:index',(req,res) => {
    const index = req.params.index 

    const description = req.body.description
    notes[index].description = description
    res.status(200).json({
        message: 'Note updated successfully'
    })

})


module.exports = app

