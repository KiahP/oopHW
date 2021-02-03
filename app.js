// Create a Basic JavaScript Object

let SC = {
    state : 'Michigan',
    day : 9,
    month : 'October'
};

// Use Dot Notation to Access the Properties of an Object

console.log(SC.month)

// Create a Method on an Object

let Elijah = {
    age : 1,
    walk : false,
    words : ["no", "c'mon"],
    activities : function(){
        return "Can Elijah walk? " + Elijah.walk + ".";}
    };

Elijah.activities();

// Make Code More Reusable with the this Keyword
let Elijah = {
    age : 1,
    walk : false,
    words : ["no", "c'mon"],
    activities : function(){
        return "Can Elijah walk? " + this.walk + ".";}
    };

    // Define a Constructor Function

    function Avatar() {
     this.air = "aang";
     this.water = 'katara';
     this.fire = 'zuko';
     this.earth = 'roku';
    }

    // Use a Constructor to Create Objects

    let aangAvatar = new Avavtar();

    // Extend Constructors to Receive Arguments

    function University(name, mascot){
        this.name = name;
        this.mascot = mascot;
        this.state = "Ohio";
    }

    let OSU = new University('Ohio State University', 'Brutus Buckeye')
    let UC = new University('University of Cincinnati', 'Bearcat')

    // Verify an Object's Constructor with instanceof

    OSU instanceof University;

    // Understand Own Properties

    let ownProps = [];

    for(let property in UC){
        if(UC.hasOwnProperty(property)){
            ownProps.push(property);
        }
    }

    console.log(ownProps);

    // Use Prototype Properties to Reduce Duplicate Code

    University.prototype.state = 'Ohio';

    console.log(UC.state);