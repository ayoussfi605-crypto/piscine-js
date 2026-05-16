function retry(count, callback) {
    return async function (...arg) {
        for (let i = 0; i <= count; i++) {
            try {
                return await callback(...arg)
            } catch (err) {
                if (i === count) {
                    throw err
                }
            }
        }
    }
}

function timeout(delay, callback) {
  return async function (...args) {
    const timer = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), delay)
    );
    return Promise.race([callback(...args), timer]);
  };
}