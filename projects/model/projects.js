var mongoose = require('mongoose');  
var projectSchema = new mongoose.Schema({  
  naziv: String,
  opis: String,
  cijena: Number,
  obavljeni: Boolean,
  pocetak: { type: Date, default: Date.now },
  zavrsetak: { type: Date, default: Date.now }
});
mongoose.model('Project', projectSchema);