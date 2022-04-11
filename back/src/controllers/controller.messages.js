let { db } = require('../db')

let writeMessages = async (req, res) => {
        await db.collection("Inbox").add({
            name: `${req.body.name}`,
            email: `${req.body.email}`,
            message: `${req.body.message}`
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        console.log(req.body)
        res.json('ok')
}

let readMessages = async (req, res) => {
    console.log('Desde readMessages')
    let messages = []
    await db.collection("Inbox").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
            messages.push(JSON.stringify(doc.data())) 
        });
    });
    res.json(messages)
}

module.exports = {
    writeMessages,
    readMessages
}