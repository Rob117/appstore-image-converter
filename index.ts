// test that image magick works and can remove an Alpha from a single image

// get file from inputs
// put into in outputs with 1242x2688 + no alpha

// Ask for desired output resolution
// take each image in input folder
// image -> transform to correct size png w/ no alpha channel
// put in folder at requested output resolution

import { convert } from 'imagemagick';
import { readdirSync } from 'fs';

type Resolution = '1242x2208!' | '1242x2688!' | '2048x2732!';

const resolutions: {[key: string]: Resolution} = {
  ios5: '1242x2208!',
  ios6: '1242x2688!',
  ipad: '2048x2732!',
};

const convertImages = (dirName: string, resolution: string) => {
  const sourceImages = readdirSync(`inputs/${dirName}`);

  sourceImages.forEach((err, index) => {
    const imageName = sourceImages[index];
    convert(
        [
          `inputs/${dirName}/${imageName}`,
          '-resize',
          resolution,
          '-alpha',
          'off',
          `outputs/${dirName}/${imageName}`
        ],
        () => {}
    )
  })
};

const main = () => {
  for (const [screenType, resolution] of Object.entries(resolutions)) {
    convertImages(screenType, resolution);
  };  
}

main();
