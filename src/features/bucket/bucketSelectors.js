
export const inBucketSelector =  (id) => (store) => store.bucket.inBucket.findIndex((item) => item.id === id) !== -1


export const amountInBucketSelector =  (id) => (store) => store.bucket.inBucket.find((item) => item.id === id)?.amount || 0