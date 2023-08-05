// original problem - https://leetcode.com/problems/merge-intervals/description/
impl Solution {
    pub fn merge(intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        if intervals.is_empty() {
            return vec![];
        }
        
        let mut intervals_tmp = intervals.clone();
        intervals_tmp.sort_by(|a, b| a[0].cmp(&b[0]));
        
        let mut result: Vec<Vec<i32>>;
        result = Vec::new();
        let mut current_interval = intervals_tmp[0].clone();
        
        for i in 1..intervals_tmp.len() {
            let interval = &intervals_tmp[i];
            if interval[0] <= current_interval[1] {
                current_interval[1] = std::cmp::max(current_interval[1], interval[1]);
            } else {
                result.push(current_interval.clone());
                current_interval = interval.clone();
            }
        }
        
        result.push(current_interval);
        
        return result;
    }
}
