// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Zachary Baumgarten" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

let grandTotal = document.querySelector('#qty-total')

let gbTotal = document.querySelector('#qty-gb')


gbPlusBtn.addEventListener('click', function () {
	gb++
	console.log('Plus button has been clicked')
	console.log(gb)
	gbTotal.textContent = `${gb}`
    grandTotal.textContent = gb + cc + sugar
})

gbMinusBtn.addEventListener('click', function () {
	console.log('Minus Button has been clicked')
	if (gb <= 0) { gb = 0 } else {
		gb--
		console.log(gb)
		gbTotal.textContent = `${gb}`
        grandTotal.textContent = gb + cc + sugar
}
})

let ccTotal = document.querySelector('#qty-cc')


ccPlusBtn.addEventListener('click', function () {
	cc++
	console.log('Plus button has been clicked')
	console.log(cc)
	ccTotal.textContent = `${cc}`
    grandTotal.textContent = gb + cc + sugar
})

ccMinusBtn.addEventListener('click', function () {
	console.log('Minus Button has been clicked')
	if (cc <= 0) { cc = 0 } else {
		cc--
		console.log(cc)
		ccTotal.textContent = `${cc}`
        grandTotal.textContent = gb + cc + sugar
}
})

let sugarTotal = document.querySelector('#qty-sugar')


sugarPlusBtn.addEventListener('click', function () {
	sugar++
	console.log('Plus button has been clicked')
	console.log(sugar)
	sugarTotal.textContent = `${sugar}`
    grandTotal.textContent = gb + cc + sugar
})

sugarMinusBtn.addEventListener('click', function () {
	console.log('Minus Button has been clicked')
	if (sugar <= 0) { sugar = 0 } else {
		sugar--
		console.log(sugar)
		sugarTotal.textContent = `${sugar}`
        grandTotal.textContent = gb + cc + sugar
}
})




// TODO: Hook up event listeners for the rest of the buttons