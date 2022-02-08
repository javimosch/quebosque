(async () => {
  const ImageClassifier = require("image-classifier");
  let classifier;

  const path = require("path");
  const sander = require("sander");

  if (await sander.exists(path.join(process.cwd(), "carset.json"))) {
    classifier = await ImageClassifier.load(
      path.join(process.cwd(), "carset.json")
    );
  } else {
    classifier = await ImageClassifier.create();
  }

  classifier = await ImageClassifier.create();

  await classifier.addExample("Pine", "./pines.jpg");
  await classifier.addExample("Pine", "./pines1.jpg");
  await classifier.addExample("Pine", "./pines2.jpg");
  await classifier.addExample("NoPine", "./nopines1.jpg");
  await classifier.addExample("NoPine", "./nopines2.jpg");

  const prediction1 = await classifier.predict("./pines3.jpg");

  await classifier.save("./carset.json");

  console.log(prediction1);
})();
