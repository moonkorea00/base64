import Image from 'next/image';
import { getBase64 } from './base64';

async function getImgSource(src: string, size: number) {
  return await getBase64(src, size);
}

export default async function Home() {
  const src = '/img.png';
  const a = await getImgSource(src, 10);
  const b = await getImgSource(src, 25);
  const c = await getImgSource(src, 50);
  const d = await getImgSource(src, 75);
  const e = await getImgSource(src, 100);
  return (
    <main style={{ display: 'flex' }}>
      <Image src={a} width={200} height={300} alt="" />
      <Image src={b} width={200} height={300} alt="" />
      <Image src={c} width={200} height={300} alt="" />
      <Image src={d} width={200} height={300} alt="" />
      <Image src={e} width={200} height={300} alt="" />
    </main>
  );
}
