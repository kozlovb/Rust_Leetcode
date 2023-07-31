// original problem - https://leetcode.com/problems/combination-sum/description/
// tested by leetcode

impl Solution {
    pub fn recursion(
        history: Vec<i32>,
        current_sum: i32,
        index: usize,
        target: i32,
        candidates: &Vec<i32>,
        result: &mut Vec<Vec<i32>>,
    ) {
        let new_sum = current_sum + candidates[index];
        let mut new_history = history.clone();
        new_history.push(candidates[index]);
        if (new_sum < target) {
            for i in index..candidates.len() {
                Solution::recursion(new_history.clone(), new_sum, i, target, candidates, result);
            }
        }
        if (new_sum == target) {
            result.push(new_history);
        }
    }

    pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut result: Vec<Vec<i32>> = Vec::new();
        let mut sorted_candidates = candidates.clone();
        sorted_candidates.sort_by(|a, b| b.cmp(a));
        for i in 0..candidates.len() {
            Solution::recursion(vec![], 0, i, target, &candidates, &mut result);
        }
        return result;
    }
}
