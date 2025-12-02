const fs = require("fs");
const { ObjectId, GridFSBucket } = require("mongodb");

async function storeImage(db, path, meta, embedding) {
  const bucket = new GridFSBucket(db);

  const upload = bucket.openUploadStream(meta.title, {
    contentType: "image/jpeg"
  });

  fs.createReadStream(path).pipe(upload);

  return new Promise((resolve) => {
    upload.on("finish", async (file) => {
      await db.collection("media_images").updateOne(
        { title: meta.title },
        {
          $set: {
            ...meta,
            image_embedding: embedding,
            image_file_id: file._id,
            created_at: new Date()
          }
        },
        { upsert: true }
      );
      resolve(file._id);
    });
  });
}

module.exports = { storeImage };
