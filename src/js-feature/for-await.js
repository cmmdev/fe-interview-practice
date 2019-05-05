function* test() {
  yield 'a';
  yield 'b';
  yield 'c';
  yield 'd';
}

function waitMs(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
}

async function* test() {
  await waitMs(1000);
  yield 'aa';
  await waitMs(1000);
  yield 'bb';
  await waitMs(500);
  yield 'cc';
}

// 异步迭代器
(async function() {
 
  for await( xx of  test()) {
    console.log(xx);
  }
})()
