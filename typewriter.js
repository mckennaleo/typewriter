const typewriter = () => {
  const sentence = "Texas is a horrible place.";
  for (let i = 0; i< sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, (i + 1) * 50);
  }
};
typewriter();