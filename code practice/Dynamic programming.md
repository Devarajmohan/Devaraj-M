                                DP     
                                
 LINKN:

 https://chatgpt.com/share/67287cbf-0b5c-800b-a807-b72ddfa6d41e                                        

Dynamic progrmamming:

=>Dynamic Programming (DP) is a powerful optimization technique used to solve problems by breaking them down into simpler subproblems. DP is especially useful for problems that exhibit overlapping subproblems and optimal substructure. There are two main approaches to implementing dynamic programming, as well as a few different problem-solving types within DP itself.


1. Memoization (Top-Down Approach):


=>Definition: In this approach, we start solving the problem from the top (original problem) and recursively solve smaller subproblems. As we solve each subproblem, we store its result (memoize it) so that when the same subproblem arises again, we can retrieve its result directly instead of recalculating it.

=>How It Works:

* The original problem is broken into subproblems.
* The results of subproblems are stored in a table (often an array or dictionary).
* If a subproblem has been solved previously, its result is used instead of solving it again.

///          Example code    ///

function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}
console.log(fib(10)); // Outputs: 55


//                        //


2. Tabulation (Bottom-Up Approach)
Definition: In the tabulation approach, we solve all the subproblems first, starting from the smallest ones, and store their results in a table. The larger problems are then solved using the solutions of the smaller subproblems.

How It Works:
* The smallest subproblems are solved first.
* The results are stored in a table, usually an array.
* Using these results, larger subproblems are built up until the final solution is reached.


///             Example code     ///

function fib(n) {
  let dp = [0, 1]; // Base cases
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]; // Use previous results
  }
  return dp[n];
}
console.log(fib(10)); // Outputs: 55


//                           //