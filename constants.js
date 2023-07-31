const STATE = {
  UNDEFINDED: 0, // 未定義
  READY: 1, // スタート前
  RUNNING: 2, // 走行中
  PASSING: 3, // LAP通過
  GOAL: 4, // ゴール
};

module.exports = {
  STATE: STATE,
};
