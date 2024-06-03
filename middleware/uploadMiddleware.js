const multer = require('multer');
const sharp = require('sharp');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const resizeImages = (req, res, next) => {
    if (!req.files) return next();

    req.files.forEach(async (file, index) => {
        const filename = `product-${Date.now()}-${index}.jpeg`;
        await sharp(file.buffer)
            .resize(500, 500)
            .toFormat('jpeg')
            .jpeg({ quality: 90 })
            .toFile(`public/images/products/${filename}`);
        req.body.images.push(filename);
    });
    next();
};

module.exports = { upload, resizeImages };
