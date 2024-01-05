import sharp from "sharp";

export const getBase64 = async (src: string, size: number) => {
  const { info, data } = await sharp('public'+src)
    .resize(size)
    .blur()
    .toBuffer({ resolveWithObject: true });

  return `data:image/${info};base64,${data.toString('base64')}`;
};