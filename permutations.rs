// original problem - https://leetcode.com/problems/permutations/description/
// tested by leetcode

impl Solution {
    pub fn permute(nums: Vec<i32>) -> Vec<Vec<i32>> {
        fn backtrack(
            nums: &mut Vec<i32>,
            start: usize,
            result: &mut Vec<Vec<i32>>,
        ) {
            if start == nums.len() {
                result.push(nums.clone());
                return;
            }
            
            for i in start..nums.len() {
                nums.swap(start, i);
                backtrack(nums, start + 1, result);
                nums.swap(start, i);
            }
        }
        
        let mut results = Vec::new();
        let mut nums = nums;
        backtrack(&mut nums, 0, &mut results);
        results
    }
}
