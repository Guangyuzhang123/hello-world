// 最小可运行的 Node 脚本，用来验证环境是否正常。
const who = process.argv[2] ?? 'world';
const now = new Date().toLocaleString('zh-CN', { hour12: false });
console.log(`Hello, ${who}!`);
console.log(`Node ${process.version} · ${now}`);
