// test that image magick works and can remove an Alpha from a single image

// get file from inputs
// put into in outputs with 1242x2688 + no alpha

// Ask for desired output resolution
// take each image in input folder
// image -> transform to correct size png w/ no alpha channel
// put in folder at requested output resolution

import {convert} from 'imagemagick';
import { readdirSync } from 'fs';

const INPUT_DIR = 'inputs';
const sourceImages = readdirSync(INPUT_DIR);

sourceImages.forEach((err, index) => {
    const imageName = sourceImages[index];
    convert(
        [`${INPUT_DIR}/${imageName}`, '-resize', '1242x2688!', '-alpha', 'off', `outputs/${imageName}`],
        () => {}
    )
  })
