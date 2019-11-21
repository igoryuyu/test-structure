function rotate(nums, k) {
  if (!nums || nums.length < 2 || !k) return nums
  let l = nums.length
  k %= l

  reverse(nums, 0, l - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, l - 1)

  function reverse(nums, start, end) {
    while (start < end) {
      let tem = nums[start]
      nums[start] = nums[end]
      nums[end] = tem
      start++
      end--
    }
  }
}

rotate([], 2)
rotate([1], 2)
rotate([1,2], 3)
rotate(nums, 0) 
// 1
rotate(nums, 1) 
// 3
rotate(nums, 3) 
// 1
rotate(nums, 8) 
// 5
rotate(nums, 12)