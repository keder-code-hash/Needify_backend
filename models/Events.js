// Events schema
const mongoose = require('mongoose');

const EventsSchema = mongoose.Schema({
    evenet_id  : new mongoose.Types.ObjectId,
    eventname : {type: String, required : true},
    venue : {type: String, required: true},
    eventDetails : {type: String},
    evenetDate :{type:Date}
})

const EventsModule = mongoose.model(EventsSchema);
module.exports = {EventsModule, EventsSchema};