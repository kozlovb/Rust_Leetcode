// problem description - https://leetcode.com/problems/sort-colors/description/
// tested by leetcode

mpl Solution {
    pub fn sort_colors(nums: &mut Vec<i32>) {
        let find_first_not_from = |element: i32, from: usize, nums: &Vec<i32>| -> i32 {
            for i in from..nums.len() {
                if nums[i] != element {
                    return i as i32;
                }
            }
            return -1;
        };

        let sort_one_el = |element: i32, start: usize, nums: &mut Vec<i32>| {
            let mut current_place_for = start;
            for i in start..nums.len() {
                if nums[i] == element {
                    nums.swap(i, current_place_for);
                    current_place_for += 1;
                }
            }
            return current_place_for;
        };

        let start_0 = find_first_not_from(0, 0, nums);
        if start_0 == -1 {
            return;
        }

        let current_place_for = sort_one_el(0, start_0 as usize, nums);
        sort_one_el(1, current_place_for as usize, nums);
    }
}
