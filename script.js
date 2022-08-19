"use strick";

// Promise----------------------------/

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("done"), 5000);
//   setTimeout(() => reject(new Error("Find a bag")), 5000);
// });

// // then.catch.------------------------/
// console.log(promise);
// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => console.log("Promise was finished!"));

// // async.await.---------------------/
// const getResultPromise = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("Promise was finished!");
//   }
// };
// getResultPromise();
