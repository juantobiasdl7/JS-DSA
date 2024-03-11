var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let queue = [];
    for (let i = 0; i < nums.length; i++) {
        // maintain monotonic decreasing.
        // all elements in the deque smaller than the current one
        // have no chance of being the maximum, so get rid of them
        console.log(`Valor de i: ${i}`);
        console.log(`Valor de nums[i]: ${nums[i]}`);
        console.log(`Valor de queue.length: ${queue.length}`);
        console.log(`Valor de queue.length - 1: ${queue.length - 1}`);
        console.log(`Valor de queue[queue.length - 1]: ${queue[queue.length - 1]}`);
        console.log(`Valor de nums[queue[queue.length - 1]]: ${nums[queue[queue.length - 1]]}`);
        console.log(`Condición: ${queue.length} && ${nums[i]} > ${nums[queue[queue.length - 1]]} --> ${queue.length && nums[i] > nums[queue[queue.length - 1]]}`);
        
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        
        queue.push(i);
        
        // queue[0] is the index of the maximum element.
        // if queue[0] + k == i, then it is outside the window
        console.log(`Valor de  queue[0]: ${queue[0]}`);
        console.log(`Valor de  queue[0]+k: ${queue[0]+k}`);
        console.log(`Condición: ${queue[0]} + ${k} == ${i} --> ${queue[0] + k == i}`);
        if (queue[0] + k == i) {
             queue.shift();
        }
        
        // only add to the answer once our window has reached size k
        console.log(`Valor de i: ${i}`);
        console.log(`Valor de k-1: ${k-1}`);
        console.log(`Condición: ${i} >= ${k-1} --> ${i >= k - 1}`);
        if (i >= k - 1) {
            console.log(`Valor de queue[0]: ${queue[0]}`);
            console.log(`Valor de nums[queue[0]]: ${nums[queue[0]]}`);
            ans.push(nums[queue[0]]);
        }
    }
    
    return ans;
};

maxSlidingWindow([1,3,-1,-3,-2,3,6,7], 3);