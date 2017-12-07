function button1() {
  document.getElementById('java1').innerHTML = Date()
}

function button() {
  document.getElementById('java2').innerHTML = "This is the text that changed the single paragraph tag"
}

function variable() {
  var x, y, z
  x = "FirstName"
  y = "LastName"
  z = x + " " + y
  document.getElementById('variable').innerHTML = z
}

function string() {
  var a, b, c
  a = 5 + 5
  b = "10" + 5
  c = "how is it going?" + " " + "i am pretty good"
  document.getElementById('string').innerHTML = a + "<br>" + b + "<br>" + c
}

function number() {
  var y, x
  y = 123e5
  x = 456e-5
  document.getElementById("number").innerHTML = y + "<br>" + x
}

function string2() {
  var person = {
    FirstName: "Ty",
    LastName: "Ary",
    age: 16,
    eyecolor: "blue"
  }
  document.getElementById('person').innerHTML = person.FirstName + " is " + person.age + " years old with " + person.eyecolor + " eyes";
}
