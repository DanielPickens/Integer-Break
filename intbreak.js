var integerBreak = function(n) {
 if(n==0){
            return 1;
        }

        let dp = [n+1];
        dp[1]= 1;
        let currMax = 0;
        let max = 0;
        for(let i = 2;i<=n;i++){
            if(i!=n){
                max = i;
            }else{
                max = 0;
            }
            for(let j = 1;j<=i/2;j++){
                currMax = dp[j]*dp[i-j];
                if(currMax > max){
                    max = currMax;
                }
            }
            dp[i]=max;
        }
        return dp[n];
    }


/*
Success
Details 
Runtime: 68 ms, faster than 92.39% of JavaScript online submissions for Integer Break.
Memory Usage: 39.1 MB, less than 33.70% of JavaScript online submissions for Integer Break.
*/
