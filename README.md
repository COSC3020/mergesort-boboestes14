[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12393327&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## My Runtime Analysis

To analyze the runtime for its worst-case runtime, we need to look at all the for loops involved. To start off we will analyze the outermost for loop. This one is relatively easy because it gives the answer right to you as $\log_2{n}$, and we can turn this into $\log{n}$. 

Now we can analyze the next for loop and solve that. This one is more complicated than the first one, but after analyzing it you can turn it into $\sum_{i=1}^{\log_2{n}} \frac{n}{2^i}$. You get this by realizing that there can only be $\log_2{n}$ different things to sum. The n in the summation is just stated in the initial for loop, the $2^i$ is found by understanding that you need half of the n, half of that, and so on. This summation can just be turned into n by understanding that all the sums have an n in the numerator which can be taken out of the equation. Because of this, we can ignore the rest of the summation because it is just a constant.

Now we can start analyzing the third for loop in the program. This one is also a summation. This is because the for loop constantly changes size as the program runs on. The summation looks like $\sum_{i=1}^{\log_2{n}} 2^i -1$. The reason it is similar is because they both have the same amount of things to sum. You get the equation by understanding the amount of comparisons that need to happen at each level. Since the inside is just constants we don't have to care about this for loop since it is just a number, meaning it is just constant.

Now we have one last loop to search through in order to get $\theta$ for the worst-case runtime. This loop is the most interesting because the equation to solve it is $x_{\log_2 n}=2x_{{(\log_2 n)}-1}+\frac{n}{2} $, and $x_1 = 1$. You get these equations by understanding the amount of changes that need to happen in the worst-case scenario taking twice the previous answer plus the n divided by two. We get the second equation by understanding that when there are only two digits they can at most have one change. Using this we can turn this equation into $2^ix_{(\log_2 n)-i}+\frac{in}{2}$. We can set i to ${(\log_2 n)}-1$ which simplifies into the equation $\frac{n\log_2 n}{2}$, which is the amount of times this for loop runs. Now we can get rid of the constants in the equation and turn it into $n\log n$.

With all the for loops analyzed and simplified without any constants, we get the final equation for the worst-case $\theta$ run time which would be ${(n\log n)}^2$.

