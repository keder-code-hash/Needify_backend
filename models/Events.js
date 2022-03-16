const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({ 
    eventname : {type: String, required : true},
    venue : {type: String, required: true},
    eventDetails : {type: String},
    evenetDate :{type:Date}
})

const EventsModule = mongoose.model('EventsModel',EventsSchema);
module.exports = EventsModule