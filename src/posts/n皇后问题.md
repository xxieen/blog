---
title: "n皇后问题的解法"
imgUrl: "/post-images/nQueue.webp"
# youtubeId: "CF1tMjvHDRA"
publishedAt: "2024-8-31"
summary: "n皇后问题的位运算解决方法"
---

### [52. N 皇后 II](https://leetcode.cn/problems/n-queens-ii/)

```cpp
class Solution {
public:
    // 计算n皇后问题的解的总数
    int totalNQueens(int n) {
        vector<int> path(n, 0); // 用于存储每一行皇后的位置，path[i] 表示第i行皇后放置在第path[i]列
        return backtracking(n, 0, path); // 从第0行开始回溯
    }

    // 回溯函数，i表示当前要处理的行
    int backtracking(int n, int i, vector<int>& path) {
        if (i == n) {
            return 1; // 如果所有行都处理完了，说明找到一个有效方案
        }

        int ans = 0; // 记录当前情况下的有效解的数量
        for (int j = 0; j < n; ++j) { // 遍历第i行的每一列
            if (check(i, j, path)) { // 判断在第i行第j列放置皇后是否有效
                path[i] = j; // 将皇后放在第i行第j列
                ans += backtracking(n, i + 1, path); // 递归处理下一行
            }
        }

        return ans; // 返回当前行的有效解的数量
    }

    // 检查在第i行第j列放置皇后是否与之前放置的皇后冲突
    bool check(int i, int j, const vector<int>& path) {
        // 遍历之前所有的行，检查冲突
        for (int k = 0; k < i; ++k) {
            // 检查是否与第k行的皇后在同一列或对角线
            if (j == path[k] || abs(i - k) == abs(path[k] - j)) return false;
        }
        return true; // 没有冲突，可以安全放置
    }
};
```

**_位运算版本_** 重要‼️

```cpp
class Solution {
public:
    // 主函数：计算 n 皇后问题的总解数
    int totalNQueens(int n) {
        int limit = (1 << n) - 1; // 生成位掩码的限制，例如 n=4 时 limit = 01111
        return backtracking(limit, 0, 0, 0); // 调用回溯函数
    }

    // 回溯函数：计算当前状态下的可行解数
    // col,left,right 中为1的位表示该列不能放置皇后
    int backtracking(int limit, int col, int left, int right) {
        // 如果所有列都已经被占用，说明找到了一种解法
        if (col == limit) return 1;

        int ans = 0;                      // 初始化解数
        int blocked = col | left | right; // 计算当前被阻塞的位置
        // ~blocked：取反，得到可以放置皇后的位置，然后与 limit
        // 进行与操作，保证不会超出 n 列的范围
        int availablePositions = ~blocked & limit;
        int position = 0;

        // 遍历所有可以放置皇后的位置
        while (availablePositions) {
            position = availablePositions & -availablePositions; // 获取最低位的 1，例如 0010
            availablePositions ^= position; // 清除已经处理过的位置，例如 1110 ^= 0010 -> 1100

            // 递归调用：等于进入下一行
            // col | position：更新当前列的状态
            // (left | position) << 1：更新左对角线的状态，左移一位
            // (right | position) >> 1：更新右对角线的状态，右移一位
            ans += backtracking(limit, col | position, (left | position) << 1,
                                (right | position) >> 1);
        }

        return ans; // 返回总解数
    }
};
```

### [51. N 皇后](https://leetcode.cn/problems/n-queens/)

```cpp
class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> results;          // 用于存储所有解法
        vector<string> board(n, string(n, '.')); // 初始化棋盘，全部置为 '.'
        int limit = (1 << n) - 1; // 生成位掩码的限制，例如 n=4 时 limit = 01111
        backtracking(limit, 0, 0, 0, 0, board, results);
        return results;
    }

    // 回溯函数：计算当前状态下的可行解数
    // col,left,right 中为1的位表示该列不能放置皇后
    // row 记录递归的层数，即当前第几行
    void backtracking(int limit, int row, int col, int left, int right,
                      vector<string>& board, vector<vector<string>>& results) {
        // 如果所有列都已经被占用，说明找到了一种解法
        if (col == limit) results.push_back(board);

        int blocked = col | left | right; // 计算当前被阻塞的位置
        // ~blocked：取反，得到可以放置皇后的位置，然后与 limit
        // 进行与操作，保证不会超出 n 列的范围
        int availablePositions = ~blocked & limit;
        int position = 0;

        // 遍历所有可以放置皇后的位置
        while (availablePositions) {
            position = availablePositions & -availablePositions; // 获取最低位的 1，例如 0010
            availablePositions ^= position; // 清除已经处理过的位置，例如 1110 ^= 0010 -> 1100

            // 计算当前列的位置
            // 获取最右侧有几个0 用于计算尾部0的个数，即最低位的1的位置。
            // int colIndex = __builtin_ctz(position);
            int colIndex = findLowestBitPosition(position);
            board[row][colIndex] = 'Q'; // 放置皇后
            // 递归调用：等于进入下一行 row + 1
            // col | position：更新当前列的状态
            // (left | position) << 1：更新左对角线的状态，左移一位
            // (right | position) >> 1：更新右对角线的状态，右移一位
            backtracking(limit, row + 1, col | position, (left | position) << 1,
                         (right | position) >> 1, board, results);
            // 回溯 撤销放置皇后
            board[row][colIndex] = '.';
        }
    }

    int findLowestBitPosition(int num) {
        int position = 0;
        while (num >>= 1) position++;
        return position;
    }
};
```
