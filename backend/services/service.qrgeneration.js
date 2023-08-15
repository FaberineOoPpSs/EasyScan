var QRCode = require('qrcode');
var jimp = require('jimp');
var fs = require('fs');
const { createCanvas, loadImage } = require("canvas");

module.exports = {
    test: async(req, res) => {
        try{
            /*
            QRCode.toDataURL('https://www.google.com/', function (err, url) {
                const buffer = Buffer.from(url, "base64");
                //jimp.read(buffer, (err, res) => {
                    //if (err) throw new Error(err);
                    //res.quality(5).write("001.jpg");
                //});
                let base64Image = url.split(';base64,').pop();
                fs.writeFile('../qrCodes/sampleQR.png', base64Image, {encoding: 'base64'}, function(err) {
                    console.log('File created');
                });
                //console.log(url);
            });
            */
            
            
            const canvas = createCanvas(150, 150);
            QRCode.toCanvas(
                canvas,
                'https://www.google.com/',
                {
                    errorCorrectionLevel: "H",
                    margin: 1,
                    color:  {
                        dark: "#000000",
                        light: "#ffffff",
                    },
                }
            );

            const ctx = canvas.getContext("2d");
            const img = await loadImage('./public/images/icon1.png');
            const center = (100) / 2;
            ctx.drawImage(img, center, center, 50, 50);
            let base64string = canvas.toDataURL("image/png");
            let base64Image = base64string.split(';base64,').pop();
            fs.writeFile('../qrCodes/sampleQR2.png', base64Image, {encoding: 'base64'}, function(err) {
                console.log('File created');
            });
            
            res.status(201).send({
                success: "working"
            });


        } catch(err) {
            res.status(500).send({
                error: err
            })
        }
    },
    testOne: async(req, res) => {

    },
    generateQR: async(req, res) => {
        try{
            //Create link for item
            var link = 'http://localhost:3000';
            const shelfId = req.body.shelfid;
            const prodId = req.body.prodid;
            let genLink = link + '/' + shelfId + '/' + prodId;
            let filePath = '../qrCodes/' + shelfId + '_' + prodId + '.png';
            //console.log(filePath);

            //Generate base 64 qrcode image
            QRCode.toDataURL(genLink, function (err, url) {
                const buffer = Buffer.from(url, "base64");
                //convert to image and save in file 
                let base64Image = url.split(';base64,').pop();
                fs.writeFile(filePath, base64Image, {encoding: 'base64'}, function(err) {
                    console.log('File saved');
                });
                //console.log(url);
            });
            res.status(201).send({
                success: "working"
            })
        } catch(err) {
            console.log(err)
            res.status(500).send({
                error: err
            })
        }
    }
}