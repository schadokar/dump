const fs = require("fs");
const path = require("path");

const renamePost = postDir => {
  try {
    fs.readdir(path.join(__dirname, postDir), (err, posts) => {
      if (err) {
        throw new Error(err);
      } else {
        posts.forEach(post => {
          console.log(post);
          if (post.indexOf("_") !== -1) {
            const temp = post.split("_")[1];

            const newName = temp.slice(0, temp.lastIndexOf("-")) + ".md";
            console.log(newName);
            fs.renameSync(
              path.join(__dirname, postDir, post),
              path.join(__dirname, postDir, newName)
            );
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};

renamePost(process.env.POSTDIR);
module.exports = renamePost;
