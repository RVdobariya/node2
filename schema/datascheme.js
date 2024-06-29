var personSchema = new Schema({
    title: { type: String, default: 'anonymous' },
});

var personModel = mongoose.model('Person', personSchema);
var comment1 = new personModel({
    title: 'Witkor',
});