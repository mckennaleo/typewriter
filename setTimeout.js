

const setTimeouted = () => {
  const str1 = "4311o";
  const str2 = "th3r3";
  const str3 = "w0r1d";

  setTimeout(() => {
    console.log(str1);
  }, 1000);
  setTimeout(() => {
    console.log(str2);
  }, 2000);
  setTimeout(() => {
    console.log(str3);
  }, 3000);
};
setTimeouted();