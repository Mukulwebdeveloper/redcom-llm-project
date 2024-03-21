const mongoose = require("mongoose")
const userSchema1 =  mongoose.Schema({

   query:{
        type: String
    },
    
    referencedDocument:{
        type: String
    },
    feedback1:{
        type: String
    },
    relaventAnswer:{
        type: String
    },
   feedback2:{
        type: String
    },
});

// create userfeedback Model
const Userfeedback = mongoose.model('userFeedback', userSchema1 );
module.exports = Userfeedback;