//                                 150 problems     ////
//https://leetcode.com/studyplan/top-interview-150/


// 1.https://chatgpt.com/share/672e0b66-bedc-800b-b46a-bdc66be349e0

//2.https://chatgpt.com/share/6731f01a-51e0-800b-ac70-d037f6e77d00

//3.https://chatgpt.com/share/67321893-e4f0-800b-b7ee-741453bc97c2

//4.https://chatgpt.com/share/673488b1-8864-800b-89ea-345ea8809991

//5.https://chatgpt.com/share/6737329d-3468-800b-9a25-1ffec4eeb024

//6.https://chatgpt.com/share/6738c09c-fbd0-800b-abd5-66203121196b

//7.https://chatgpt.com/share/6738c09c-fbd0-800b-abd5-66203121196b

//8.https://chatgpt.com/share/67436029-fb4c-800b-83d2-12361468190a

//9.https://chatgpt.com/share/6743603f-1e58-800b-ad65-24c8dc6dece5


// 1.merge sort array
//
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Pointers for nums1, nums2, and the last position in merged array
    let p1 = m - 1; // Pointer to the last element in nums1 (ignoring zeros)
    let p2 = n - 1; // Pointer to the last element in nums2
    let p = m + n - 1; // Pointer to the last position in nums1 array
    
    // While there are elements to compare in both arrays
    while (p1 >= 0 && p2 >= 0) {
        // Compare elements from the end and place the larger one at the end of nums1
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    
    // If nums2 still has remaining elements, copy them over
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
}; //

// 2.Remove Duplicates from Sorted Array:

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Initialize a pointer for placing elements that are not equal to val
    let i = 0;
    
    // Traverse the array
    for (let j = 0; j < nums.length; j++) {
        // If the current element is not equal to val, we place it at index i and increment i
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    
    // Return the new length of the array (which is the value of i)
    return i;
};



// 3.