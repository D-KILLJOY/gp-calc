const unitLoad = document.querySelectorAll(".unit-load");
const grade = document.querySelectorAll(".grade");

const totalUnit = document.querySelector(".total-unit");
const totalGrade = document.querySelector(".total-grade");

const calcBtn = document.querySelector(".calc-btn");

const gpC = document.querySelector(".gp");

const loadArray = [];
let loadArraySum = 0;

const gradeArray = [];
let gradeArraySum = 0;

const multiplied = [];
let multipliedSum = 0;

function multiply() {
	for (let i = 0; i < loadArray.length; i++) {
		multiplied[i] = loadArray[i] * gradeArray[i];
	}

	getTotalGrade();
}

function getTotalGrade() {
	for (let i = 0; i < multiplied.length; i++) {
		multipliedSum += multiplied[i];
	}
	totalGrade.value = multipliedSum;
	gp();
}

function addLoadArray() {
	for (let i = 0; i < loadArray.length; i++) {
		loadArraySum += loadArray[i];
	}

	totalUnit.value = loadArraySum;
}

function addGradeArray() {
	for (let i = 0; i < gradeArray.length; i++) {
		gradeArraySum += gradeArray[i];
	}
}

unitLoad.forEach((i) => {
	i.addEventListener("keyup", (e) => {
		if (e.key === "1") {
			i.setAttribute("disabled", "true");

			loadArray.push(parseInt(i.value));

			loadArraySum = 0;
			addLoadArray();

			console.log(loadArray);
		} else if (e.key === "2") {
			loadArray.push(parseInt(i.value));

			console.log(loadArray);

			loadArraySum = 0;
			addLoadArray();

			i.setAttribute("disabled", "true");
		} else if (e.key === "3") {
			loadArray.push(parseInt(i.value));

			console.log(loadArray);

			loadArraySum = 0;
			addLoadArray();

			i.setAttribute("disabled", "true");
		} else if (e.key === "4") {
			loadArray.push(parseInt(i.value));

			console.log(loadArray);

			loadArraySum = 0;
			addLoadArray();

			i.setAttribute("disabled", "true");
		} else if (e.key === "5") {
			loadArray.push(parseInt(i.value));

			console.log(loadArray);

			loadArraySum = 0;
			addLoadArray();

			i.setAttribute("disabled", "true");
		} else if (e.key === "6") {
			loadArray.push(parseInt(i.value));

			console.log(loadArray);

			loadArraySum = 0;
			addLoadArray();

			i.setAttribute("disabled", "true");
		}
	});
});

grade.forEach((i) => {
	i.addEventListener("input", () => {
		// if (e.key === "Enter") {
		if (i.value === "a" || i.value === "A") {
			if (gradeArray.length < loadArray.length && loadArray.length > 0) {
				i.value = 5;
				gradeArray.push(parseInt(i.value));
				i.setAttribute("disabled", "true");
				gradeArraySum = 0;
				addGradeArray();
			} else {
				alert("input unit load");
				i.value = "";
			}
		} else if (i.value === "b" || i.value === "B") {
			if (gradeArray.length < loadArray.length && loadArray.length > 0) {
				i.value = 4;
				gradeArray.push(parseInt(i.value));
				i.setAttribute("disabled", "true");
				gradeArraySum = 0;

				addGradeArray();
			} else {
				alert("input unit load");
				i.value = "";
			}
		} else if (i.value === "c" || i.value === "C") {
			if (gradeArray.length < loadArray.length && loadArray.length > 0) {
				i.value = 3;
				gradeArray.push(parseInt(i.value));
				i.setAttribute("disabled", "true");
				gradeArraySum = 0;

				addGradeArray();
			} else {
				alert("input unit load");
				i.value = "";
			}
		} else if (i.value === "d" || i.value === "D") {
			if (gradeArray.length < loadArray.length && loadArray.length > 0) {
				i.value = 2;
				gradeArray.push(parseInt(i.value));
				i.setAttribute("disabled", "true");
				gradeArraySum = 0;

				addGradeArray();
			} else {
				alert("input unit load");
				i.value = "";
			}
		} else if (i.value === "e" || i.value === "E") {
			if (gradeArray.length < loadArray.length && loadArray.length > 0) {
				i.value = 1;
				gradeArray.push(parseInt(i.value));
				i.setAttribute("disabled", "true");
				gradeArraySum = 0;

				addGradeArray();
			} else {
				alert("input unit load");
				i.value = "";
			}
		} else if (i.value === "f" || i.value === "F") {
			if (gradeArray.length < loadArray.length && loadArray.length > 0) {
				i.value = 0;
				gradeArray.push(parseInt(i.value));
				i.setAttribute("disabled", "true");
				gradeArraySum = 0;

				addGradeArray();
			} else {
				alert("input unit load");
				i.value = "";
			}
		}
		// }
	});
});

function gp() {
	let ans = totalGrade.value / totalUnit.value;

	gpC.textContent = ans;
}

calcBtn.addEventListener("click", multiply);
