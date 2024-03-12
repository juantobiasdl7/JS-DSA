var longestSubarray = function(nums, limit) {
    let increasing = [];
    let decreasing = [];
    let left = 0, ans = 0;
    
    for (let right = 0; right < nums.length; right++) {
        console.log(`i: ${right}`);
        console.log(`right: ${right}`);
        console.log(`left: ${left}`);
        console.log(`Monotonic deques before. Increasing: ${increasing} -- Decresing: ${decreasing}`);
        
        // maintain the monotonic deques
        console.log(`Increasing length: ${increasing.length} && increasing[increasing.length - 1] > nums[right]: ${increasing[increasing.length - 1]} > ${nums[right]} --> ${increasing[increasing.length - 1] > nums[right]}`);
        while (increasing.length && increasing[increasing.length - 1] > nums[right]) {
            increasing.pop();
        }
        console.log(`Decreasing length: ${decreasing.length} && decreasing[decreasing.length - 1] < nums[right]: ${decreasing[decreasing.length - 1]} < ${nums[right]} --> ${decreasing[decreasing.length - 1] < nums[right]}`);
        while (decreasing.length && decreasing[decreasing.length - 1] < nums[right]) {
            decreasing.pop();
        }
        
        increasing.push(nums[right]);
        decreasing.push(nums[right]);
        console.log(`Monotonic deques After. Increasing: ${increasing} -- Decresing: ${decreasing}`);
        // maintain window property
        console.log(`Condition: Decreasing[0] ${decreasing[0]} - Increasing[0]= ${increasing} > limit ${limit} ---> Result:  ${decreasing[0] - increasing[0] > limit}`);
        while (decreasing[0] - increasing[0] > limit) {
            if (nums[left] == decreasing[0]) {
                decreasing.shift();
            }
            if (nums[left] == increasing[0]) {
                increasing.shift();
            }
            left++;
            console.log(`Executed left++. Left = ${left}`)
        }
        
        console.log(`right ${right} - left ${left} + 1 = ${right - left + 1}`);
        
        ans = Math.max(ans, right - left + 1);
    }
    
    return ans;
};

longestSubarray([10, 1, 2, 4, 7, 2], 5);