// original problem - https://leetcode.com/problems/search-in-rotated-sorted-array/description/
// tested by leetcode

impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {

        if nums.len() == 0 {
            return -1;
        }

        let mut left_bound = 0;
        let mut right_bound = nums.len() - 1;
        let mut i = (left_bound + right_bound) / 2;

        while right_bound >= left_bound {
            if target == nums[i] {
                return i as i32;
            }
            if nums[left_bound] < nums[right_bound] {
                return binary_search(&nums, target, left_bound, right_bound);
            }
            if nums[right_bound] > nums[i] {
                if target > nums[i] {
                    if target <= nums[right_bound] {
                        return binary_search(&nums, target, i, right_bound);
                    }
                }
                right_bound = i - 1;
                i = (left_bound + right_bound) / 2;
                continue;
            } else if nums[right_bound] < nums[i] {
                if target < nums[i] {
                    if target >= nums[left_bound] {
                        return binary_search(&nums, target, left_bound, i);
                    }
                }
                left_bound = i + 1;
                i = (left_bound + right_bound) / 2;
                continue;
            } else if nums[right_bound] == nums[i] {
                if nums[i] == target {
                    return i as i32;
                }
                return -1;
            }
        }
        return -1;
    }
}

pub fn binary_search(arr: &Vec<i32>, target: i32, l: usize, h: usize) -> i32 {
    let mut low = l;
    let mut high = h;

    while low <= high {
        let mid = (low + high) / 2;
        if arr[mid] == target {
            return mid as i32;
        } else if arr[mid] < target {
            low = mid + 1;
        } else {
            if mid > 0 {
                high = mid - 1;
            } else {
                return -1;
            }
        }
    }

    return -1;
}

