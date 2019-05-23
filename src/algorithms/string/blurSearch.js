// 'cmm' with 'chen mengmeng'

function match(query, data) {
  if (!query || !data) return false

  let qlen = query.length,
    i = 0
  for (let j = 0; i < qlen && j < data.length; j++) {
    if (query[i] == data[j]) i++
  }

  return i == qlen
}

console.log(match('cmm', 'chen mne'))
