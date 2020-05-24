console.log("Bot is starting");

var Twit = require('twit')
 
var T = new Twit({
  consumer_key:      'sZX39ObQ6dVWGBjz3IHI5sTXN', 
  consumer_secret:      'kOFMT72nljH7Ahcr9ZGX0XYigW2aUWYbANQ5jPF22llXr3Czuu',
  access_token:         '1209462081323458560-xZOYbUHx86TDem11ukHzyI3w856H5o',
  access_token_secret:  'd2XqZGeQFNRNz35l6FOsuQ6IG7iH9kt925Qs9cv7BYjLW'
})

var people = ["Stephen", "Robin", "Kirsty", "Stephen", "Neil", "Leo", "Wendy", "Graham", "Mark", "Nigel", "Dave", "Hywel", "Brenden", "Andrew", "Lee", "Damian", "Angela", "Rob", "Allan", "Victoria", "David", "Margaret", "Dan", "Stephanie", "Simon", "John", "Maria", "Brendan", "Wera", "Tracy", "Marsha", "Joy", "Bob", "Mohammad", "Gavin", "John", "Claire", "Paul", "Neil", "Anne-Marie", "John", "Rushanara", "Graham", "Huw", "David", "Mick", "Preet", "Jack", "Tahir", "Liam", "Shabana", "Gary", "Khalid", "Steve", "Jess", "Dehenna", "Kate", "Graham", "Paul", "Scott", "Nick", "Liz", "Ian", "Nick", "Mark", "Mark", "Yasmin", "Chris", "Peter", "Matt", "Luke", "Tobias", "Conor", "James", "Imran", "Judith", "Naseem", "James", "Fay"];

var places = ["Bedfordshire", "Berkshire", "Bristol", "Buckinghamshire", "Cambridgeshire", "Cheshire", "Cornwall", "County Durham", "Cumberland", "Derbyshire", "Devon", "Dorset", "Essex", "Gloucestershire", "Hampshire", "Herefordshire", "Hertfordshire", "Huntingdonshire", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Middlesex", "Norfolk", "Northamptonshire", "Northumberland", "Nottinghamshire","Oxfordshire", "Rutland", "Shropshire", "Somerset", "Staffordshire", "Suffolk", "Surrey", "Sussex", "Warwickshire", "Westmorland", "Wiltshire", "Worcestershire", "Yorkshire", "Anglesey", "Brecknockshire/Brecon", "Cardiganshire", "Caernarfonshire", "Carmarthenshire", "Denbighshire","Flintshire", "Glamorganshire", "Merionethshire", "Monmouthshire", "Montgomeryshire", "Pembrokeshire", "Radnorshire"];

m = Math.floor(Math.random() * (people.length + 1)); 

n = Math.floor(Math.random() * (places.length + 1)); 


tweet = people[m] + " went to " + places[n] + " all on a summer day."; 

console.log(tweet);

T.post('statuses/update', { status: tweet }, function(err, data, response) {
  console.log('Tweet tweeted')
})