const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const re = [];
		let start = 0;
	for(let i=0;i<arr.length;i++){
		const sr = arr.slice(i,i+1)
		const sum = sr.reduce((a,e) => {
			return a+e
		},0)
		if(sum <= 5){
			re.push(arr.slice(start, i))
			start = i+1;
		}else if(sum > 5){
			re.push(arr.slice(start, i-1))
			start = i;
		}
	}
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
