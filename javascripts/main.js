
/*global*/

"use strict";

let interval = null; //this is for the seconds and time it runs
let counter = 0;

const outputDiv = $("#output");
console.log("main", outputDiv);

//Create a plant function
//Plant should have a property of height

function Plant(){
  this.height = 0;

}

//create a tree function
//Tree should have a proprty of branches
function Tree(){
  this.branches = 0;
}

//plant should be the prototype of Tree

Tree.prototype = new Plant();

// the Plant prototype should have 2 methods on it: increase height and decrease height
// increaseHeight should increase the value of the height property by the amount passed in as an argument.
Plant.prototype.increaseHeight = function (growth){
  for(let i=0; i<growth; i++){
    this.height += 1;
    if(this.height%10 ===0){
      this.branches++;
    }
  }
};

// decreaseHeight should decrease the value of the height property by the amount passed in as an argument.
Plant.prototype.decreaseHeight = function (growth){
 this.height -= growth;
};


// There should be a function named grow on the prototype of Tree.
// There should be a function named trim on the prototype of Tree.

Tree.prototype.grow = function (amount){
  this.increaseHeight(amount);
};

// The trim method should accept an integer value as input.
// The trim method should decrease the height of the tree.
// When the trim method is called, the number of branches should decrease by one.
Tree.prototype.trim = function(amount){
  this.decreaseHeight(amount);
  this.branches -=1;
};

// Create a PearTree instance of Tree. var PearTree = new Tree();
let PearTree = new Tree();

// Create an OakTree instance of Tree.

let OakTree = new Tree();

console.log("PearTree", PearTree);

// Every second, increase the height the pear tree by some integer value and increase the height the oak tree by some integer value that is larger than what you used for the pear tree.
// Also output the current height of each tree and how many branches it has to the DOM.
interval = setInterval(function(){
  console.log("counter", counter);
  PearTree.grow(2);
  OakTree.grow(3);


// Stop growing the trees after they have grown 30 times.
// Pear tree is now 23cm tall and has 2 branches
// Oak tree is now 57cm tall and has 4 branches

let output = `<p>counter ${counter}</p>`;
output += `<p>Pear Tree is now ${PearTree.height} cm tall and has ${PearTree.branches} branches</p>`;
output += `<p>Oak Tree is now ${OakTree.height} cm tall and has ${OakTree.branches} branches</p>`;

  outputDiv.append(output);
  counter++; // counter always needs to be last!!

// Every tenth time the trees are grown, invoke the trim method. Pass one value to the method for the pear tree, and a larger value to the method on the oak tree.
  if(counter%10 ===0){
    PearTree.trim(3);
    OakTree.trim(5);
  }


  if(counter >= 10){
    clearInterval(interval);
    console.log("finished");
  }

}, 1000);


