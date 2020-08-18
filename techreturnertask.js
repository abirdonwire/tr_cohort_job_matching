
//This function is designed to take 2 arrays as parameters, compare them for them for matches
// The first parameter contains the job characteristics, the second contains the individual characteristics
function jobMatch(job, person){
	//the next job is to compare the 2 arrays for similarities.
	// there are a lot of different ways to achieve this and I ran out of time to put it all
	//together properly but I would do the following:
	
	//First implement a function to compare the 2 arrays.
	
	let result = [];// An empty array needs to be initialise to store the result
	
	job.forEach((el1) => person.forEach((el2) => 
	//the forEach Array method executes a function on all elements of the array.
              {if (el1 === el2){
				  //in this case it compares each element in the first array for a match in the second.
                result.push(el1)
              }}))
  return result;
	
	//But it's not as simple as that, we are using strings of varying length, some of which will contain the same words
	//I would use an algorithm such Levenschtein's distance for string conversion.
	// Given a source string and a target string, the Levenshtein's distance between them is the number of operations required to convert the source to target.
	//This is the algorithm:
	
	function levenshteinDistance (s, t) {
    if (!s.length) return t.length;
    if (!t.length) return s.length;

    return Math.min(
        levenshteinDistance(s.substr(1), t) + 1,
        levenshteinDistance(t.substr(1), s) + 1,
        levenshteinDistance(s.substr(1), t.substr(1)) + (s[0] !== t[0] ? 1 : 0)
    ) + 1;
}
	
	//Following the number of matches, we then need to convert the matches to
	//numbers that add up to 100. 
	//Time was a factor but implementing a function which counts the number of similarities delivered
	// and converts them into a percentage to provide the score out of 100.
}

console.log(jobMatch(['remote', 'flexible working hours'], ['looking for remote work', 'react experience', 'looking for front end']));