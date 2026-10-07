const PI = 3.14;
let radius = "5a";

if (typeof radius === "number") {
  let area = PI * radius * radius;
  let circumference = 2 * PI * radius;

  console.log(`The radius of your circle is ${radius}`);
  console.log(`The area of the circle is: ${area}`);
  console.log(`The circumference of the circle is: ${circumference}\n`);
} else {
  console.log("Please enter a valid number for radius");
}
