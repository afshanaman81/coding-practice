{
//http://interactivepython.org/courselib/static/pythonds/Recursion/DynamicProgramming.html
	// minimum number of coins to make M money
	function minNumberOfCoins(arr, M){
		let result = M
		//base case
		if (M == 0) result = 1		
		else{						
			for (let i=0; i< arr.length; i++){
				if (arr[i] == M){
					return 1
				} else if(arr[i] < M){
					// recursive case
					let numCoins= 1 + minNumberOfCoins(arr, M-arr[i])
					// min of results
					result = Math.min(result, numCoins)					
				}							
			}
		}
		
		return result


	}

	// Input:
	let coinsArr = [1,4,5]	// Lets assume that each coin represents a dollar value 
	let M	= 13		// this is the 13 dollars we want in change
	console.log(minNumberOfCoins(coinsArr, M))

	
	M	 = 2	
	console.log(minNumberOfCoins(coinsArr, M))

	
	M	 = 5	
	console.log(minNumberOfCoins(coinsArr, M))


	M	 = 11	
	console.log(minNumberOfCoins(coinsArr, M))

}
