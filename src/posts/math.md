---
title: "最大公约数以及最小公倍数"
imgUrl: "/post-images/gcd.png"
# youtubeId: "80mWp6H4zEw"
publishedAt: "2024-08-08"
summary: "解决leetcode问题中最大公约数以及最小公倍数相关问题"
---

## 求最大公约数GCD（Greatest Common Divisor）

辗转相除法

```cpp
int gcd(int a, int b) return !b ? a : gcd(b , a % b); // 递归

int gcd(int a, int b) { // 迭代
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

## 求最小公倍数LCM（Least Common Multiple）

两个数的最小公倍数等于这 **两个数的乘积** 除以它们的 **最大公约数**

```cpp
int gcd(int a, int b) return !b ? a : gcd(b , a % b);

int lcm(int a, int b) return a / gcd(a, b) * b; // 先除再乘，防止溢出
```

### [1979. 找出数组的最大公约数](https://leetcode.cn/problems/find-greatest-common-divisor-of-array/)

```cpp
class Solution {
public:
    // 函数用于查找向量中的元素的最大公约数
    int findGCD(std::vector<int>& nums) {
        // 找到向量中的最小和最大元素
        auto [minElem, maxElem] = std::minmax_element(nums.begin(), nums.end());

        // 返回最小和最大元素的最大公约数
        return gcd(*minElem, *maxElem);
    }

    // 使用欧几里得算法计算两个数的最大公约数
    int gcd(int a, int b) {
        // 欧几里得算法的原理是两个数的最大公约数也能整除它们的差
        // 因此，GCD(a, b) = GCD(b, a % b)，直到 b 变为 0
        while (b != 0) {
            // 将当前的 b 值存储在临时变量中
            int temp = b;
            // 更新 b 为 a 除以 b 的余数
            b = a % b;
            // 更新 a 为之前的 b 的值
            a = temp;
        }
        // 当 b 变为 0 时，a 包含了原始 a 和 b 的最大公约数
        return a;
    }
};
```

### [878. 第 N 个神奇数字](https://leetcode.cn/problems/nth-magical-number/)

```cpp
class Solution {
public:
    // 计算第 n 个魔法数
    int nthMagicalNumber(int n, int a, int b) {
        // 计算 a 和 b 的最小公倍数（lcm）
        long long lcmNum = lcm(a, b);

        // 计算初始的二分查找范围
        long long left = min(a, b); // 最小的魔法数
        long long right = (long long) n * min(a, b); // 最大的魔法数，确保包含第 n 个魔法数

        // 取模数，防止结果过大
        long long mod = 1e9 + 7;

        // 使用二分查找找到第 n 个魔法数
        while (left <= right) {
            // 计算中间值
            long long mid = left + (right - left) / 2;

            // 计算 mid 之前有多少个魔法数
            // mid / a + mid / b - mid / lcmNum
            // 使用容斥原理来计算
            if (mid / a + mid / b - mid / lcmNum < n) {
                // 如果魔法数的数量少于 n，移动左边界
                left = mid + 1;
            } else {
                // 如果魔法数的数量大于等于 n，移动右边界
                right = mid - 1;
            }
        }

        // 返回结果对 1e9 + 7 取模后的值
        return left % mod;
    }

    // 计算最大公约数（gcd）
    int gcd(int a, int b) {
        return !b ? a : gcd(b, a % b);
    }

    // 计算最小公倍数（lcm）
    long long lcm(int a, int b) {
        // 使用公式：lcm(a, b) = (a / gcd(a, b)) * b
        // 防止溢出，先计算 a / gcd(a, b)，再乘以 b
        return (long long) a / gcd(a, b) * b;
    }
};
```

