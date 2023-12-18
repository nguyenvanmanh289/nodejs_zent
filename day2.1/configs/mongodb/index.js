const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://vanmanh2003:Manh.1000@cluster0.xcziya3.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log('Database - Connect successfully !!!');
    } catch (error) {
        console.log('Database - Connect failure!!!');
    }
}

module.exports = connect;